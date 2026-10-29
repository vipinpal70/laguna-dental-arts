import { ObjectId, type Collection, type Document } from "mongodb";
import clientPromise from "@/lib/mongodb";
import type { InsightArticle } from "@/data/insights";

const DB_NAME = process.env.MONGODB_DB || "laguna_dental_labs";
const COLLECTION = "insights";

const CATEGORY_LABELS: Record<string, string> = {
  "digital-dentistry": "Digital Dentistry",
  materials: "Materials",
  clinical: "Clinical",
  industry: "Industry",
  "case-studies": "Case Study",
};

// Self-installs the indexes this module's queries rely on, once per
// long-lived process (this app runs via `next start`, not serverless, so
// "once per process" is cheap and correct — no migration script needed).
// Each createIndex runs independently via allSettled so one failure (e.g. a
// pre-existing duplicate slug blocking the unique index) can't block the
// others. On failure we reset so the next call retries rather than giving up
// permanently (e.g. Mongo unreachable at cold start).
let indexesReady: Promise<void> | null = null;

async function ensureIndexes(col: Collection<Document>): Promise<void> {
  if (!indexesReady) {
    indexesReady = Promise.allSettled([
      col.createIndex({ published: 1, createdAt: -1 }),
      col.createIndex({ createdAt: -1 }),
      col.createIndex({ slug: 1 }, { unique: true }),
    ]).then((results) => {
      let hadFailure = false;
      for (const r of results) {
        if (r.status === "rejected") {
          hadFailure = true;
          console.error("insights-db: failed to create index:", r.reason);
        }
      }
      if (hadFailure) indexesReady = null;
    });
  }
  return indexesReady;
}

async function getCollection(): Promise<Collection<Document>> {
  const client = await clientPromise;
  const col = client.db(DB_NAME).collection(COLLECTION);
  await ensureIndexes(col);
  return col;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function serialize(doc: Document | null): InsightArticle | null {
  if (!doc) return null;
  const { _id, createdAt, updatedAt, ...rest } = doc;
  return {
    _id: _id?.toString(),
    ...rest,
  } as InsightArticle;
}

type ArticleInput = Partial<InsightArticle> & { title?: string; description?: string };

/** Build the full document for a brand-new article (applies defaults). */
function buildNewDoc(data: ArticleInput) {
  const catKey = (data.category as string) || "clinical";
  const title = data.title || "Untitled";
  const desc = data.description || data.desc || "";
  return {
    slug: slugify(data.slug || title),
    title,
    desc,
    description: desc,
    date:
      data.date ||
      new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    readDuration: data.readDuration || "5 min read",
    writer: data.writer || "Laguna Technical Team",
    designation: data.designation || "Clinical Specialist",
    category: catKey,
    categoryLabel: CATEGORY_LABELS[catKey] || "Clinical",
    content: data.content || "",
    imageUrl: data.imageUrl || "",
    published: data.published !== undefined ? data.published : true,
    icon: data.icon || "layers",
  };
}

/** Build a partial `$set` for updates — only touches the fields provided. */
function buildUpdateSet(data: ArticleInput) {
  const set: Record<string, unknown> = { updatedAt: new Date() };

  if (data.title !== undefined) set.title = data.title;
  if (data.slug !== undefined || data.title !== undefined) {
    set.slug = slugify(data.slug || data.title || "");
  }
  if (data.description !== undefined || data.desc !== undefined) {
    const desc = data.description ?? data.desc ?? "";
    set.desc = desc;
    set.description = desc;
  }
  if (data.date !== undefined) set.date = data.date;
  if (data.readDuration !== undefined) set.readDuration = data.readDuration;
  if (data.writer !== undefined) set.writer = data.writer;
  if (data.designation !== undefined) set.designation = data.designation;
  if (data.category !== undefined) {
    set.category = data.category;
    set.categoryLabel = CATEGORY_LABELS[data.category as string] || "Clinical";
  }
  if (data.content !== undefined) set.content = data.content;
  if (data.imageUrl !== undefined) set.imageUrl = data.imageUrl;
  if (data.published !== undefined) set.published = data.published;
  if (data.icon !== undefined) set.icon = data.icon;

  return set;
}

/* ─── Public reads ─────────────────────────────────────────────── */

// Listing views (grid cards, related articles, admin table) never render the
// full article body — skip it so list queries don't drag the heaviest field
// across the wire for every article on every page load.
const LIST_PROJECTION = { content: 0 } as const;
const LIST_LIMIT = 200;

export async function getPublishedInsights(): Promise<InsightArticle[]> {
  const col = await getCollection();
  const docs = await col
    .find({ published: true }, { projection: LIST_PROJECTION })
    .sort({ createdAt: -1 })
    .limit(LIST_LIMIT)
    .toArray();
  return docs.map((d) => serialize(d)!);
}

export type PublishedInsightsPage = {
  articles: InsightArticle[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

// Paginated variant for the public /insights listing page — the sitemap and
// the "related articles" lookup on the article detail page both want the
// (small, capped) full published set rather than one page of it, so they
// keep using getPublishedInsights() above.
export async function getPublishedInsightsPage(
  page: number,
  pageSize: number
): Promise<PublishedInsightsPage> {
  const col = await getCollection();
  const safePage = Math.max(1, page);
  const filter = { published: true };
  const [docs, total] = await Promise.all([
    col
      .find(filter, { projection: LIST_PROJECTION })
      .sort({ createdAt: -1 })
      .skip((safePage - 1) * pageSize)
      .limit(pageSize)
      .toArray(),
    col.countDocuments(filter),
  ]);
  return {
    articles: docs.map((d) => serialize(d)!),
    page: safePage,
    pageSize,
    total,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
  };
}

export async function getInsightBySlugOrId(param: string): Promise<InsightArticle | null> {
  const col = await getCollection();
  let doc = await col.findOne({ slug: param });
  if (!doc && ObjectId.isValid(param)) {
    doc = await col.findOne({ _id: new ObjectId(param) });
  }
  return serialize(doc);
}

/* ─── Admin reads / writes ─────────────────────────────────────── */

// The admin table still needs `content` in each row — openEditModal() in
// app/admin/insights/page.tsx populates the editor straight from this list
// rather than re-fetching the single article, so it can't use LIST_PROJECTION.
export async function getAllInsights(): Promise<InsightArticle[]> {
  const col = await getCollection();
  const docs = await col.find({}).sort({ createdAt: -1 }).limit(LIST_LIMIT).toArray();
  return docs.map((d) => serialize(d)!);
}

export async function createInsight(data: ArticleInput): Promise<InsightArticle> {
  const col = await getCollection();
  const now = new Date();
  const doc = { ...buildNewDoc(data), createdAt: now, updatedAt: now };
  const result = await col.insertOne(doc);
  return serialize({ _id: result.insertedId, ...doc })!;
}

export async function updateInsight(id: string, data: ArticleInput): Promise<InsightArticle | null> {
  if (!ObjectId.isValid(id)) return null;
  const col = await getCollection();
  const _id = new ObjectId(id);
  await col.updateOne({ _id }, { $set: buildUpdateSet(data) });
  const updated = await col.findOne({ _id });
  return serialize(updated);
}

export async function deleteInsight(id: string): Promise<boolean> {
  if (!ObjectId.isValid(id)) return false;
  const col = await getCollection();
  const result = await col.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}

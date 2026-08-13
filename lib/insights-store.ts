import { InsightArticle } from "@/data/insights";

/**
 * Client-side helpers for the admin panel. These call the `/api/insights`
 * route handlers, which read/write the MongoDB `insights` collection.
 */

async function handle<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.json() as Promise<T>;
}

/** All articles including drafts — for the admin table. */
export async function getStoredArticles(): Promise<InsightArticle[]> {
  return handle<InsightArticle[]>(
    await fetch("/api/insights?scope=admin", { cache: "no-store" })
  );
}

/** Create (no _id) or update (with _id) an article. */
export async function saveArticle(
  data: Partial<InsightArticle> & { title: string; content: string; category?: string }
): Promise<InsightArticle> {
  const isEdit = Boolean(data._id);
  const res = await fetch(isEdit ? `/api/insights/${data._id}` : "/api/insights", {
    method: isEdit ? "PUT" : "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handle<InsightArticle>(res);
}

export async function deleteArticle(id: string): Promise<void> {
  await handle<{ success: boolean }>(
    await fetch(`/api/insights/${id}`, { method: "DELETE" })
  );
}

export async function togglePublishStatus(
  id: string,
  published: boolean
): Promise<InsightArticle> {
  const res = await fetch(`/api/insights/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ published }),
  });
  return handle<InsightArticle>(res);
}

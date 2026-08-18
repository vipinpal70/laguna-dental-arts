import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { CtaBand } from "@/components/ui/CtaBand";
import { InsightImage } from "@/components/ui/InsightImage";
import { getInsightBySlugOrId, getPublishedInsights } from "@/lib/insights-db";

export const dynamic = "force-dynamic";

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getInsightBySlugOrId(slug);

  if (!article) {
    return (
      <main className="section text-center py-24">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The requested insight article could not be found or has been unpublished.</p>
          <Link href="/insights" className="btn btn--send">
            Back to Newsroom
          </Link>
        </div>
      </main>
    );
  }

  const allPublished = await getPublishedInsights();
  const related = allPublished.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <main>
      {/* Header Hero */}
      <section className="phero phero--image phero--blog">
        <div className="container">
          <div className="phero__crumbs reveal">
            <Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / {article.categoryLabel}
          </div>
          <span className="eyebrow reveal" style={{ marginTop: 16 }}>
            {article.categoryLabel}
          </span>
          <h1 className="display reveal" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginTop: 12, lineHeight: 1.15 }}>
            {article.title}
          </h1>
          <p className="phero__sub reveal" style={{ fontSize: "1.15rem", marginTop: 16, maxWidth: "80ch" }}>
            {article.desc || article.description}
          </p>

          <div
            className="reveal"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginTop: 28,
              paddingTop: 20,
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              fontSize: "0.88rem",
              color: "rgba(250, 250, 252, 0.75)",
            }}
          >
            <div>
              <b style={{ color: "#fff", display: "block" }}>{article.writer || "Laguna Technical Team"}</b>
              <span style={{ fontSize: "0.82rem" }}>{article.designation || "Clinical Specialist"}</span>
            </div>
            <span style={{ width: 1, height: 24, background: "rgba(255, 255, 255, 0.15)" }} />
            <div>
              <span>{article.date}</span> · <span>{article.readDuration || "5 min read"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Article Body */}
      <section className="section">
        <div className="container">
          {article.imageUrl && (
            <div
              className="reveal"
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(380px, 70vh, 800px)",
                borderRadius: "15px",
                overflow: "hidden",
                border: "1px solid var(--line)",
                marginBottom: 44,
                // boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
              }}
            >
              <InsightImage
                src={article.imageUrl}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 840px) 100vw, 840px"
                style={{ objectFit: "contain" }}
              />
            </div>
          )}

          <article
            className="article-body reveal"
            dangerouslySetInnerHTML={{ __html: article.content || "<p>Article content coming soon.</p>" }}
            style={{
              lineHeight: 1.75,
              fontSize: "1.08rem",
              color: "var(--ink)",
            }}
          />

          {/* Social / Back button */}
          <div
            style={{
              marginTop: 56,
              paddingTop: 24,
              borderTop: "1px solid var(--line)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link className="btn btn--outline" href="/insights">
              ← Back to Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="section section--offwhite">
          <div className="container">
            <div className="shead reveal">
              <span className="eyebrow">More from Laguna</span>
              <h2 className="display">Related insights & articles</h2>
            </div>
            <div className="prodgrid prodgrid--3 reveal">
              {related.map((item) => (
                <Link key={item.slug} className="card pcard" href={`/insights/${item.slug}`}>
                  <div className="pcard__media" style={{ overflow: "hidden", position: "relative", height: 200 }}>
                    {item.imageUrl ? (
                      <InsightImage
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <Icon name={item.icon || "layers"} size={44} strokeWidth={1.2} />
                    )}
                    <span className="pcard__tag" style={{ position: "absolute", top: 12, left: 12, zIndex: 2 }}>
                      {(item.categoryLabel || item.category).toUpperCase()}
                    </span>
                  </div>
                  <div className="pcard__body">
                    <h3 style={{ fontSize: "1.05rem" }}>{item.title}</h3>
                    <p>{item.desc || item.description}</p>
                    <time className="tick">{item.date}</time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        eyebrow="Ready to submit a case?"
        title="Experience predictable lab work"
        lead="Send your intraoral scan or impression to Laguna Dental Arts for consistent fit, natural aesthetics, and responsive support."
        primaryLabel="Send a Case"
        primaryHref="/portal"
        secondaryLabel="Contact Our Team"
        secondaryHref="/contact"
      />
    </main>
  );
}

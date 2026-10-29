import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { InsightImage } from "@/components/ui/InsightImage";
import { InsightsGrid } from "@/components/insights/InsightsGrid";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { getPublishedInsightsPage } from "@/lib/insights-db";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 7;

export const metadata: Metadata = {
  title: {
    absolute: "Digital Dentistry Insights & Lab Notes | Laguna Dental Arts",
  },
  description:
    "Digital dentistry insights from Laguna Dental Arts: materials, clinical tips, workflow deep dives and case studies, written by the technicians behind your cases.",
  alternates: {
    canonical: "https://lagunadentalarts.com/insights",
  },
  openGraph: {
    title: "Digital Dentistry Insights & Lab Notes | Laguna Dental Arts",
    description:
      "Digital dentistry insights from Laguna Dental Arts: materials, clinical tips, workflow deep dives and case studies, written by the technicians behind your cases.",
    url: "https://lagunadentalarts.com/insights",
    type: "website",
  },
};

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const requestedPage = Math.max(1, Number(pageParam) || 1);
  const { articles, page, totalPages } = await getPublishedInsightsPage(requestedPage, PAGE_SIZE);
  const featured = page === 1 ? articles[0] ?? null : null;
  const rest = page === 1 ? articles.slice(1) : articles;

  return (
    <main>
      <section className="phero phero--image phero--insights">
        <div className="container">
          <div className="phero__crumbs reveal"><Link href="/">Home</Link> / Insights</div>
          <span className="eyebrow reveal">Insights</span>
          <h1 className="display reveal">The Laguna Newsroom.</h1>
          <p className="phero__sub reveal">Clinical tips, materials science, digital-dentistry deep dives and case studies, written by the technicians and clinicians behind your cases. Practical digital dentistry insights, no fluff.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {articles.length === 0 ? (
            <div
              className="reveal"
              style={{ textAlign: "center", padding: "80px 20px", color: "var(--ink-soft)" }}
            >
              <Icon name="layers" size={48} strokeWidth={1.2} />
              <h3 style={{ marginTop: 20, fontSize: "1.4rem" }}>No insights yet</h3>
              <p style={{ marginTop: 8, maxWidth: "48ch", marginInline: "auto" }}>
                There are no published articles at the moment. Please check back soon for clinical tips, materials science and case studies from the Laguna team.
              </p>
            </div>
          ) : (
            <>
              {featured && (
                <Link
                  className="mag__feature reveal"
                  href={`/insights/${featured.slug}`}
                >
                  <div className="inner">
                    <span className="mcat">{featured.categoryLabel} · Featured</span>
                    <h3>{featured.title}</h3>
                    <p>{featured.desc || featured.description}</p>
                    <span className="btn btn--light" style={{ marginTop: 24 }}>
                      Read the feature <Icon name="arrow" size={17} strokeWidth={2.4} className="arw" />
                    </span>
                  </div>
                  {featured.imageUrl && (
                    <div className="mag__feature-media-wrap">
                      <div className="mag__feature-media">
                      <InsightImage
                        src={featured.imageUrl}
                        alt={featured.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      </div>
                    </div>
                  )}
                </Link>
              )}

              {rest.length > 0 && <InsightsGrid articles={rest} />}

              {totalPages > 1 && (
                <nav
                  aria-label="Insights pagination"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                    marginTop: 48,
                  }}
                >
                  {page > 1 ? (
                    <Link className="btn btn--outline" href={`/insights?page=${page - 1}`}>
                      ← Prev
                    </Link>
                  ) : (
                    <span className="btn btn--outline" style={{ opacity: 0.4, pointerEvents: "none" }}>
                      ← Prev
                    </span>
                  )}
                  <span style={{ color: "var(--ink-soft)", fontSize: "0.9rem" }}>
                    Page {page} of {totalPages}
                  </span>
                  {page < totalPages ? (
                    <Link className="btn btn--outline" href={`/insights?page=${page + 1}`}>
                      Next →
                    </Link>
                  ) : (
                    <span className="btn btn--outline" style={{ opacity: 0.4, pointerEvents: "none" }}>
                      Next →
                    </span>
                  )}
                </nav>
              )}
            </>
          )}
        </div>
      </section>

      <section className="section section--offwhite section--tight">
        <div className="container">
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}

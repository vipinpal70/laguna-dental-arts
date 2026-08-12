import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { CategoryFilterGrid } from "@/components/ui/CategoryFilterGrid";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { FEATURED_ARTICLE, INSIGHT_ARTICLES, INSIGHT_CATEGORIES } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Clinical tips, materials science, digital-dentistry deep dives and case studies from Laguna Dental Arts.",
};

export default function InsightsPage() {
  return (
    <main>
      <section className="phero">
        <div className="container">
          <div className="phero__crumbs reveal"><Link href="/">Home</Link> / Insights</div>
          <span className="eyebrow reveal">Insights</span>
          <h1 className="display reveal">The Laguna newsroom.</h1>
          <p className="phero__sub reveal">Clinical tips, materials science, digital-dentistry deep dives and case studies — written by the technicians and clinicians behind your cases.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ig-head reveal" style={{ justifyContent: "flex-end" }}>
            <div className="ig-search">
              <Icon name="search" size={18} />
              <input type="search" placeholder="Search insights" aria-label="Search insights" />
            </div>
          </div>

          <a className="mag__feature reveal" href="#" style={{ minHeight: 460 }}>
            <div className="scrim" />
            <div className="inner">
              <span className="mcat">{FEATURED_ARTICLE.categoryLabel}</span>
              <h3>{FEATURED_ARTICLE.title}</h3>
              <p>{FEATURED_ARTICLE.desc}</p>
              <span className="btn btn--light" style={{ marginTop: 24 }}>
                Read the feature <Icon name="arrow" size={17} strokeWidth={2.4} className="arw" />
              </span>
            </div>
          </a>

          <CategoryFilterGrid
            ariaLabel="Filter insights by category"
            filters={INSIGHT_CATEGORIES}
            gridClassName="prodgrid prodgrid--3"
            items={INSIGHT_ARTICLES.map((a) => ({
              key: a.slug,
              categories: [a.category],
              node: (
                <Link className="card pcard" href="#">
                  <div className="pcard__media">
                    <span className="pcard__tag">{a.categoryLabel.toUpperCase()}</span>
                    <Icon name={a.icon} size={44} strokeWidth={1.2} />
                  </div>
                  <div className="pcard__body">
                    <h3 style={{ fontSize: "1.05rem" }}>{a.title}</h3>
                    <p>{a.desc}</p>
                    <time className="tick">{a.date}</time>
                  </div>
                </Link>
              ),
            }))}
          />
        </div>
      </section>

      <section className="section section--tint section--tight">
        <div className="container">
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}

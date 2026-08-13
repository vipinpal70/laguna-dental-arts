"use client";

import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { CategoryFilterGrid } from "@/components/ui/CategoryFilterGrid";
import { InsightImage } from "@/components/ui/InsightImage";
import { INSIGHT_CATEGORIES, type InsightArticle } from "@/data/insights";

export function InsightsGrid({ articles }: { articles: InsightArticle[] }) {
  return (
    <CategoryFilterGrid
      ariaLabel="Filter insights by category"
      filters={INSIGHT_CATEGORIES}
      gridClassName="prodgrid prodgrid--3"
      showSearch
      searchPlaceholder="Search insights"
      items={articles.map((a) => ({
        key: a._id || a.slug,
        title: a.title,
        desc: a.desc || a.description || "",
        categories: [a.category],
        node: (
          <Link className="card pcard" href={`/insights/${a.slug}`}>
            <div className="pcard__media" style={{ overflow: "hidden", position: "relative" }}>
              {a.imageUrl ? (
                <InsightImage
                  src={a.imageUrl}
                  alt={a.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              ) : (
                <Icon name={a.icon || "layers"} size={44} strokeWidth={1.2} />
              )}
              <span className="pcard__tag" style={{ position: "absolute", top: 12, left: 12, zIndex: 2 }}>
                {(a.categoryLabel || a.category).toUpperCase()}
              </span>
            </div>
            <div className="pcard__body">
              <h3 style={{ fontSize: "1.05rem" }}>{a.title}</h3>
              <p>{a.desc || a.description}</p>
              <time className="tick">{a.date}</time>
            </div>
          </Link>
        ),
      }))}
    />
  );
}

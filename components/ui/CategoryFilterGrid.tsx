"use client";

import { cloneElement, isValidElement, useState } from "react";

export type FilterOption = { key: string; label: string };
export type FilterableItem = { key: string; categories: string[]; node: React.ReactElement<{ className?: string }> };

export function CategoryFilterGrid({
  filters,
  items,
  gridClassName = "prodgrid",
  ariaLabel,
}: {
  filters: FilterOption[];
  items: FilterableItem[];
  gridClassName?: string;
  ariaLabel: string;
}) {
  const [active, setActive] = useState("all");

  return (
    <>
      <div className="filter-group reveal" role="group" aria-label={ariaLabel}>
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`filter-btn${active === f.key ? " is-active" : ""}`}
            aria-pressed={active === f.key}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className={`${gridClassName} reveal`}>
        {items.map((item) => {
          const hidden = active !== "all" && !item.categories.includes(active);
          if (!isValidElement(item.node)) return null;
          const existing = item.node.props.className ?? "";
          return cloneElement(item.node, {
            key: item.key,
            className: hidden ? `${existing} is-filtered-out`.trim() : existing,
          });
        })}
      </div>
    </>
  );
}

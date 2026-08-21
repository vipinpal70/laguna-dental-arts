"use client";

import { cloneElement, isValidElement, useState } from "react";
import { Icon } from "@/components/icons/Icon";

export type FilterOption = { key: string; label: string };
export type FilterableItem = {
  key: string;
  categories: string[];
  title?: string;
  desc?: string;
  node: React.ReactElement<{ className?: string }>;
};

export function CategoryFilterGrid({
  filters,
  items,
  gridClassName = "prodgrid",
  ariaLabel,
  showSearch,
  searchPlaceholder = "Search...",
  rightElement,
}: {
  filters: FilterOption[];
  items: FilterableItem[];
  gridClassName?: string;
  ariaLabel: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  rightElement?: React.ReactNode;
}) {
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");

  const renderedRightElement =
    rightElement ??
    (showSearch ? (
      <div className="ig-search">
        <Icon name="search" size={18} />
        <input
          type="search"
          placeholder={searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label={searchPlaceholder}
        />
      </div>
    ) : null);

  return (
    <>
      <div className="filter-bar">
        <div className="filter-group" role="group" aria-label={ariaLabel}>
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
        {renderedRightElement && <div className="filter-bar__right">{renderedRightElement}</div>}
      </div>

      <div className={gridClassName}>
        {items.map((item) => {
          const categoryMatch = active === "all" || item.categories.includes(active);
          const query = search.trim().toLowerCase();
          const searchMatch =
            !query ||
            (item.title && item.title.toLowerCase().includes(query)) ||
            (item.desc && item.desc.toLowerCase().includes(query)) ||
            item.categories.some((c) => c.toLowerCase().includes(query));
          const hidden = !categoryMatch || !searchMatch;
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

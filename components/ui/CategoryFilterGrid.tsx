"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icon";

export type FilterOption = { key: string; label: string };
export type FilterableItem = {
  key: string;
  categories: string[];
  title?: string;
  desc?: string;
  node: React.ReactNode;
};

export function CategoryFilterGrid({
  filters,
  items,
  gridClassName = "prodgrid prodgrid--3",
  defaultFilter = "all",
  ariaLabel,
  showSearch,
  searchPlaceholder = "Search...",
  rightElement,
}: {
  filters: FilterOption[];
  items: FilterableItem[];
  gridClassName?: string;
  defaultFilter?: string;
  ariaLabel: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  rightElement?: React.ReactNode;
}) {
  const [active, setActive] = useState(defaultFilter);
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
          const categoryMatch =
            active === "all" ||
            item.categories.some((c) => c.toLowerCase() === active.toLowerCase());
          const query = search.trim().toLowerCase();
          const searchMatch =
            !query ||
            (item.title && item.title.toLowerCase().includes(query)) ||
            (item.desc && item.desc.toLowerCase().includes(query)) ||
            item.categories.some((c) => c.toLowerCase().includes(query));
          const hidden = !categoryMatch || !searchMatch;
          return (
            <div
              key={item.key}
              className={hidden ? "is-filtered-out" : undefined}
              style={hidden ? { display: "none" } : undefined}
            >
              {item.node}
            </div>
          );
        })}
      </div>
    </>
  );
}

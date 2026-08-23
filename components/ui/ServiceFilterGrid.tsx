"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type FilterOption = { key: string; label: string };

export function ServiceFilterGrid({
  filters,
  children,
  gridClassName = "prodgrid",
  ariaLabel,
}: {
  filters: FilterOption[];
  children: ReactNode;
  gridClassName?: string;
  ariaLabel: string;
}) {
  const [active, setActive] = useState("all");

  return (
    <div className="service-filter-grid" data-active-filter={active}>
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
      </div>

      <div className={gridClassName}>{children}</div>
    </div>
  );
}

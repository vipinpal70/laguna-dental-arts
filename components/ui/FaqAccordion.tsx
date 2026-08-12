"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icon";

export type FaqEntry = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div className={`faq__item${open ? " open" : ""}`} key={item.q}>
            <button
              className="faq__q"
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span>{item.q}</span>
              <span className="faq__ic">
                <Icon name="plus" size={14} strokeWidth={2.4} />
              </span>
            </button>
            <div className="faq__a">
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

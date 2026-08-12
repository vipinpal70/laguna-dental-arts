"use client";

import { useState } from "react";

export function PdFaq({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pd-faq-list">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div className={`pd-faq-item${open ? " open" : ""}`} key={item.q}>
            <button className="pd-faq-q" type="button" aria-expanded={open} onClick={() => setOpenIndex(open ? null : i)}>
              <span>{item.q}</span>
              <span className="pd-faq-plus" aria-hidden="true" />
            </button>
            <div className="pd-faq-a">
              <div><p>{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

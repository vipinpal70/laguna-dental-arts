"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export function LocationFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ marginTop: 24, borderTop: "1px solid rgba(3,14,68,0.14)" }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.q} style={{ borderBottom: "1px solid rgba(3,14,68,0.14)" }}>
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "20px 0",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "#030E44",
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </span>
              <span
                aria-hidden="true"
                style={{
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  borderRadius: 10,
                  background: isOpen ? "#030E44" : "#3B9DFF",
                  color: "#FFFFFF",
                  fontSize: 22,
                  lineHeight: 1,
                  display: "grid",
                  placeItems: "center",
                  transition: "all 0.2s ease",
                }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  padding: "0 0 20px",
                  marginTop: -4,
                  color: "#58638A",
                  maxWidth: 680,
                  lineHeight: 1.6,
                  fontSize: "0.98rem",
                }}
              >
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

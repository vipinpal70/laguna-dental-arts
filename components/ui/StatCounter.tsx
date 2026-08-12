"use client";

import { useEffect, useRef, useState } from "react";

export function StatCounter({
  to,
  suffix,
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started || !ref.current) return;
    const el = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.textContent = to.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      return;
    }
    const dur = 1500;
    const t0 = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (to * eased).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      if (p < 1) raf = requestAnimationFrame(tick);
      else el.textContent = to.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to, decimals]);

  return (
    <div className="stat__num">
      <span ref={ref}>0</span>
      {suffix ? <span className="suf">{suffix}</span> : null}
    </div>
  );
}

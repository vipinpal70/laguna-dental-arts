"use client";

import { useEffect, useRef, useState } from "react";

export type Testimonial = { quote: string; name: string; role: string; initials: string };

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setIndex((i) => (i + 1) % items.length), 6500);
  };

  useEffect(() => {
    start();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  return (
    <div className="tslider" onMouseEnter={() => timer.current && clearInterval(timer.current)} onMouseLeave={start}>
      <div className="tslider__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {items.map((t) => (
          <div className="tslide" key={t.name}>
            <div className="card tcard-inner">
              <div className="tcard__av">{t.initials}</div>
              <div>
                <div className="tcard__stars">★★★★★</div>
                <p className="tcard__quote">{t.quote}</p>
                <div className="tcard__who">
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="tslider__nav">
        {items.map((t, i) => (
          <button
            key={t.name}
            className={`tdot${i === index ? " active" : ""}`}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => {
              setIndex(i);
              start();
            }}
          />
        ))}
      </div>
    </div>
  );
}

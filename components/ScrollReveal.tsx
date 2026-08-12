"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const revealTargets = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));

    const flow = document.querySelector(".flow");
    let flowObserver: IntersectionObserver | undefined;
    if (flow) {
      flowObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              flowObserver?.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      flowObserver.observe(flow);
    }

    return () => {
      io.disconnect();
      flowObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}

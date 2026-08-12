"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSent(false);
      form.reset();
    }, 2600);
  };

  return (
    <div className="card formcard reveal" style={{ maxWidth: 720, marginInline: "auto", textAlign: "center" }}>
      <span className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>Stay in the loop</span>
      <h2 className="display" style={{ fontSize: "clamp(1.6rem,2.6vw,2.1rem)", marginTop: 16 }}>Clinical insights, once a month.</h2>
      <p className="lead" style={{ margin: "14px auto 26px" }}>No fluff — just materials, workflow and case learnings worth your time.</p>
      <form onSubmit={onSubmit} style={{ display: "flex", gap: 12, maxWidth: 460, marginInline: "auto", flexWrap: "wrap", justifyContent: "center" }}>
        <input type="email" required placeholder="you@practice.com" aria-label="Email" style={{ flex: 1, minWidth: 220, padding: "14px 16px", border: "1px solid var(--line-strong)", borderRadius: "var(--r-pill)", background: "#f8faff" }} />
        <button className="btn" type="submit">Subscribe</button>
      </form>
      {sent && <div className="form-success" style={{ display: "inline-block" }}>Subscribed ✓ Welcome aboard.</div>}
    </div>
  );
}

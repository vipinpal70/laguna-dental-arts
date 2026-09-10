"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icon";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setError("");
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: (data.get("firstName") as string) || "",
      lastName: (data.get("lastName") as string) || "",
      email: (data.get("email") as string) || "",
      phone: (data.get("phone") as string) || "",
      practiceName: (data.get("practiceName") as string) || "",
      interest: (data.get("interest") as string) || "",
      message: (data.get("message") as string) || "",
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 3200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card formcard reveal">
      <h2 className="display" style={{ fontSize: "1.6rem" }}>Send an inquiry</h2>
      <p style={{ color: "var(--ink-soft)", margin: "10px 0 26px" }}>Tell us a little about your practice and we&apos;ll set you up.</p>
      <form onSubmit={onSubmit}>
        <div className="field--row">
          <div className="field"><label>First name</label><input name="firstName" required placeholder="Jane" /></div>
          <div className="field"><label>Last name</label><input name="lastName" required placeholder="Doe" /></div>
        </div>
        <div className="field--row">
          <div className="field"><label>Practice email</label><input name="email" type="email" required placeholder="you@practice.com" /></div>
          <div className="field"><label>Phone</label><input name="phone" type="tel" placeholder="(916) 688-1333" /></div>
        </div>
        <div className="field"><label>Practice name</label><input name="practiceName" placeholder="Bright Smiles Dental" /></div>
        <div className="field">
          <label>I&apos;m interested in</label>
          <select name="interest" defaultValue="Becoming a partner">
            <option>Becoming a partner</option>
            <option>Crowns &amp; bridges</option>
            <option>Implants</option>
            <option>Cosmetic / veneers</option>
            <option>Dentures</option>
            <option>Appliances</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="field">
          <label>Message</label>
          <textarea name="message" placeholder="Tell us about your typical case volume and what you're looking for in a lab." />
        </div>
        <button className="btn btn--lg" type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Send inquiry"} <Icon name="arrow" size={18} strokeWidth={2.4} className="arw" />
        </button>
        {sent && <div className="form-success">Request received ✓ We&apos;ll be in touch shortly.</div>}
        {error && <div className="form-success" style={{ background: "#fee2e2", color: "#b91c1c" }}>{error}</div>}
      </form>
    </div>
  );
}

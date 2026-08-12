"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icon";

export function ContactForm() {
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
    <div className="card formcard reveal">
      <h2 className="display" style={{ fontSize: "1.6rem" }}>Send an inquiry</h2>
      <p style={{ color: "var(--ink-soft)", margin: "10px 0 26px" }}>Tell us a little about your practice and we&apos;ll set you up.</p>
      <form onSubmit={onSubmit}>
        <div className="field--row">
          <div className="field"><label>First name</label><input required placeholder="Jane" /></div>
          <div className="field"><label>Last name</label><input required placeholder="Doe" /></div>
        </div>
        <div className="field--row">
          <div className="field"><label>Practice email</label><input type="email" required placeholder="you@practice.com" /></div>
          <div className="field"><label>Phone</label><input type="tel" placeholder="(916) 688-1333" /></div>
        </div>
        <div className="field"><label>Practice name</label><input placeholder="Bright Smiles Dental" /></div>
        <div className="field">
          <label>I&apos;m interested in</label>
          <select defaultValue="Becoming a partner">
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
          <textarea placeholder="Tell us about your typical case volume and what you're looking for in a lab." />
        </div>
        <button className="btn btn--lg btn--full" type="submit">
          Send inquiry <Icon name="arrow" size={18} strokeWidth={2.4} className="arw" />
        </button>
        {sent && <div className="form-success">Request received ✓ We&apos;ll be in touch shortly.</div>}
      </form>
    </div>
  );
}

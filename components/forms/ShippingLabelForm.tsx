"use client";

import { useState } from "react";
import { SITE } from "@/lib/site-data";

export function ShippingLabelForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="tool-card" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <h2>Request your label</h2>
      <p>Enter the practice and package details below. No patient clinical information is required.</p>
      <div className="tool-form-grid">
        <div className="field"><label htmlFor="practice">Practice name</label><input id="practice" name="practice" required autoComplete="organization" /></div>
        <div className="field"><label htmlFor="doctor">Doctor name</label><input id="doctor" name="doctor" required autoComplete="name" /></div>
        <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
        <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" required autoComplete="tel" /></div>
        <div className="field tool-field--full"><label htmlFor="address">Pickup address</label><input id="address" name="address" required autoComplete="street-address" /></div>
        <div className="field">
          <label htmlFor="package">Package type</label>
          <select id="package" name="package" defaultValue="Lab case box">
            <option>Lab case box</option>
            <option>Small package</option>
            <option>Multiple cases</option>
          </select>
        </div>
        <div className="field"><label htmlFor="date">Preferred pickup date</label><input id="date" name="date" type="date" /></div>
        <div className="field tool-field--full">
          <label htmlFor="notes">Notes (optional)</label>
          <textarea id="notes" name="notes" placeholder="Case number or pickup instructions — do not include patient health information." />
        </div>
      </div>
      <div className="tool-actions">
        <button className="btn" type="submit">Continue Request →</button>
      </div>
      {submitted && (
        <div className="tool-result">
          <h3>Ready for secure processing</h3>
          <p>Label generation will be completed through our case team. Call us to confirm your pickup and receive the label.</p>
          <a className="btn" href={SITE.phoneHref}>Call {SITE.phone}</a>
        </div>
      )}
    </form>
  );
}

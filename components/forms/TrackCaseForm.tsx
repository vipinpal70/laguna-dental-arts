"use client";

import { useState } from "react";
import Link from "next/link";

export function TrackCaseForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="tool-card" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <h2>Find your case</h2>
      <p>Enter the case number shown on your confirmation or packing documentation.</p>
      <div className="tool-form-grid">
        <div className="field tool-field--full"><label htmlFor="case-number">Case number</label><input id="case-number" name="case-number" required placeholder="Example: LDA-24851" autoComplete="off" /></div>
        <div className="field tool-field--full"><label htmlFor="postal-code">Practice ZIP code</label><input id="postal-code" name="postal-code" required inputMode="numeric" autoComplete="postal-code" placeholder="5-digit ZIP code" /></div>
      </div>
      <div className="tool-actions">
        <button className="btn" type="submit">Track Case →</button>
        <span className="form-note" style={{ margin: 0 }}>Case information remains secured in the portal.</span>
      </div>
      {submitted && (
        <div className="tool-result">
          <h3>Continue to your secure portal</h3>
          <p>Live production and delivery status is available after secure portal sign-in.</p>
          <Link className="btn" href="/portal">Open Dental Portal →</Link>
        </div>
      )}
    </form>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Icon } from "@/components/icons/Icon";
import { SITE } from "@/lib/site-data";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!showModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [showModal]);

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
      marketingConsent: (data.get("marketingConsent") as string) === "on",
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
      setShowModal(true);
      form.reset();
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
        <div className="field--checkbox">
          <input
            type="checkbox"
            id="marketingConsent"
            name="marketingConsent"
          />
          <label htmlFor="marketingConsent">
            I agree to receive email and marketing communications from Laguna Dental Arts. I understand that I can unsubscribe at any time.
          </label>
        </div>
        <button className="btn btn--lg" type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Send inquiry"} <Icon name="arrow" size={18} strokeWidth={2.4} className="arw" />
        </button>
        {sent && <div className="form-success">Request received ✓ We&apos;ll be in touch shortly.</div>}
        {error && <div className="form-success" style={{ background: "#fee2e2", color: "#b91c1c" }}>{error}</div>}
      </form>

      {showModal && (
        <div
          className="thankyou-modal-backdrop"
          onClick={() => setShowModal(false)}
          role="presentation"
        >
          <div
            className="thankyou-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="thankyou-modal-title"
          >
            <button
              type="button"
              className="thankyou-modal__close"
              onClick={() => setShowModal(false)}
              aria-label="Close thank you modal"
            >
              <Icon name="close" size={16} strokeWidth={2.4} />
            </button>

            <div className="thankyou-modal__icon">
              <Icon name="check" size={28} strokeWidth={2.6} />
            </div>

            <h3 id="thankyou-modal-title" className="thankyou-modal__title">
              Thank You!
            </h3>

            <p className="thankyou-modal__desc">
              Your inquiry has been received. Our clinical team will review your message and reach out shortly.
            </p>

            {/* <div className="thankyou-modal__info">
              <div className="thankyou-modal__info-item">
                <span className="thankyou-modal__info-label">Direct phone:</span>
                <a href={SITE.phoneHref} className="thankyou-modal__info-link">{SITE.phone}</a>
              </div>
              <div className="thankyou-modal__info-item">
                <span className="thankyou-modal__info-label">Email:</span>
                <a href={`mailto:${SITE.email}`} className="thankyou-modal__info-link">{SITE.email}</a>
              </div>
            </div> */}

            {/* <div className="thankyou-modal__actions">
              <button
                type="button"
                className="btn btn--lg thankyou-modal__btn"
                onClick={() => setShowModal(false)}
              >
                Done
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

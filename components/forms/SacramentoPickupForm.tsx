"use client";

import { useState } from "react";

export function SacramentoPickupForm() {
  const [name, setName] = useState("");
  const [practice, setPractice] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [caseType, setCaseType] = useState("Crown & bridge");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          practiceName: practice,
          phone,
          email,
          interest: `Sacramento Pickup Request - ${caseType}`,
          message: `Practice: ${practice} | Phone: ${phone} | Requested case type: ${caseType}`,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Failed to submit request.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please call us directly at +1 (916) 688-1333.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 24,
          padding: 36,
          textAlign: "center",
          color: "#030E44",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "rgba(59, 157, 255, 0.15)",
            color: "#3B9DFF",
            display: "grid",
            placeItems: "center",
            margin: "0 auto 16px",
            fontSize: 26,
            fontWeight: "bold",
          }}
        >
          ✓
        </div>
        <h3 style={{ margin: "0 0 10px", fontSize: 22, fontWeight: 700 }}>Pickup Request Received</h3>
        <p style={{ margin: 0, color: "#58638A", fontSize: 15, lineHeight: 1.6 }}>
          Thank you, <b>{name}</b>. Our courier dispatch team will confirm your practice pickup time within one business day.
        </p>
        <div style={{ marginTop: 24, fontSize: 14, color: "#58638A" }}>
          Need urgent assistance? Call us directly at{" "}
          <a href="tel:+19166881333" style={{ color: "#3B9DFF", fontWeight: 700 }}>
            +1 (916) 688-1333
          </a>.
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#FFFFFF",
        borderRadius: 24,
        padding: 28,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 16,
      }}
    >
      {error && (
        <div
          style={{
            gridColumn: "1 / -1",
            padding: "10px 14px",
            borderRadius: 10,
            background: "#FEE2E2",
            color: "#991B1B",
            fontSize: 14,
          }}
        >
          {error}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor="f-name" style={{ fontSize: 13, fontWeight: 600, color: "#030E44" }}>
          Your name *
        </label>
        <input
          id="f-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Dr. Jane Smith"
          style={{
            height: 46,
            border: "1px solid rgba(3,14,68,0.25)",
            borderRadius: 12,
            padding: "0 14px",
            font: "inherit",
            color: "#030E44",
            background: "#FAFAFC",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor="f-practice" style={{ fontSize: 13, fontWeight: 600, color: "#030E44" }}>
          Practice name *
        </label>
        <input
          id="f-practice"
          type="text"
          required
          value={practice}
          onChange={(e) => setPractice(e.target.value)}
          placeholder="Sacramento Dental Care"
          style={{
            height: 46,
            border: "1px solid rgba(3,14,68,0.25)",
            borderRadius: 12,
            padding: "0 14px",
            font: "inherit",
            color: "#030E44",
            background: "#FAFAFC",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor="f-phone" style={{ fontSize: 13, fontWeight: 600, color: "#030E44" }}>
          Phone *
        </label>
        <input
          id="f-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(916) 555-0199"
          style={{
            height: 46,
            border: "1px solid rgba(3,14,68,0.25)",
            borderRadius: 12,
            padding: "0 14px",
            font: "inherit",
            color: "#030E44",
            background: "#FAFAFC",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor="f-email" style={{ fontSize: 13, fontWeight: 600, color: "#030E44" }}>
          Email *
        </label>
        <input
          id="f-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="doctor@practice.com"
          style={{
            height: 46,
            border: "1px solid rgba(3,14,68,0.25)",
            borderRadius: 12,
            padding: "0 14px",
            font: "inherit",
            color: "#030E44",
            background: "#FAFAFC",
          }}
        />
      </div>
      <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: 6 }}>
        <label htmlFor="f-case" style={{ fontSize: 13, fontWeight: 600, color: "#030E44" }}>
          Case type
        </label>
        <select
          id="f-case"
          value={caseType}
          onChange={(e) => setCaseType(e.target.value)}
          style={{
            height: 46,
            border: "1px solid rgba(3,14,68,0.25)",
            borderRadius: 12,
            padding: "0 14px",
            font: "inherit",
            color: "#030E44",
            background: "#FAFAFC",
          }}
        >
          <option>Crown & bridge</option>
          <option>Implant restoration</option>
          <option>Full-arch</option>
          <option>Denture or partial</option>
          <option>Night guard or appliance</option>
          <option>Other</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={submitting}
        style={{
          gridColumn: "1 / -1",
          height: 52,
          border: 0,
          borderRadius: 18,
          background: "#3B9DFF",
          color: "#FFFFFF",
          font: "inherit",
          fontWeight: 600,
          cursor: submitting ? "not-allowed" : "pointer",
          opacity: submitting ? 0.7 : 1,
          transition: "background 0.2s, transform 0.15s",
        }}
      >
        {submitting ? "Submitting request..." : "Request a pickup →"}
      </button>
      <div style={{ gridColumn: "1 / -1", fontSize: 13, color: "#58638A" }}>
        Prefer digital?{" "}
        <a href="https://upload.lagunadentalarts.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#3B9DFF", fontWeight: 600, textDecoration: "none" }}>
          Upload a scan
        </a>{" "}
        instead.
      </div>
    </form>
  );
}

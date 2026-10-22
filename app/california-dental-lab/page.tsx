import type { Metadata } from "next";
import Link from "next/link";
import { CaliforniaStartForm } from "@/components/forms/CaliforniaStartForm";
import { LocationFaq } from "@/components/ui/LocationFaq";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Dental Lab in California · Made in USA · Laguna Dental Arts",
  },
  description:
    "A digital dental lab in California, based in Elk Grove. Crowns, implants, full-arch and removables, designed and milled in-house, with tracked shipping statewide.",
  alternates: {
    canonical: "https://lagunadentalarts.com/california-dental-lab",
  },
  openGraph: {
    title: "Digital Dental Lab in California · Made in USA · Laguna Dental Arts",
    description:
      "A digital dental lab in California, based in Elk Grove. Crowns, implants, full-arch and removables, designed and milled in-house, with tracked shipping statewide.",
    url: "https://lagunadentalarts.com/california-dental-lab",
    type: "website",
  },
};

const STEPS = [
  {
    n: "01",
    title: "Capture",
    desc: "Scan upper, lower and bite, or take a traditional impression.",
  },
  {
    n: "02",
    title: "Submit",
    desc: "Upload files and the Rx securely, or ship the case to Elk Grove.",
  },
  {
    n: "03",
    title: "Review & plan",
    desc: "We check the records and call if anything needs clarifying.",
  },
  {
    n: "04",
    title: "Mill & QC",
    desc: "CAD design, in-house milling, hand finishing and a quality review.",
  },
  {
    n: "05",
    title: "Deliver",
    desc: "Your case ships back tracked, with the team on call for questions.",
  },
];

const RESTORATIONS = [
  {
    title: "Crown & Bridge",
    desc: "Zirconia, e.max and PFM restorations, milled in-house.",
    href: "/lab-services/crowns",
    linkText: "Explore crowns →",
  },
  {
    title: "Implant Restorations",
    desc: "Custom abutments, screw-retained and cementable crowns.",
    href: "/lab-services/implants",
    linkText: "Explore implants →",
  },
  {
    title: "Full-Arch Solutions",
    desc: "All-on-X hybrids and screw-retained zirconia.",
    href: "/lab-services/full-arch",
    linkText: "Explore full-arch →",
  },
  {
    title: "Removables & Partials",
    desc: "Dentures, metal frameworks and flexible partials.",
    href: "/lab-services/dentures",
    linkText: "Explore removables →",
  },
  {
    title: "Night Guards & Orthodontics",
    desc: "Splints, retainers and orthodontics.",
    href: "/lab-services/night-guards",
    linkText: "Explore orthodontics →",
  },
  {
    title: "Guides, Models & Wax-Ups",
    desc: "Surgical guides, printed models and diagnostic wax-ups.",
    href: "/lab-services/surgical-guides",
    linkText: "Explore guides →",
  },
];

const WHY_DOMESTIC = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B9DFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
    title: "Regulated production",
    desc: "ISO 13485 quality system and FDA registration.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B9DFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    title: "In-house milling",
    desc: "Zirconia, PMMA and PFM designed and milled under one roof.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B9DFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
      </svg>
    ),
    title: "Same time zone",
    desc: "Reach a technician during your clinic hours, Mon–Fri 8 am – 5 pm Pacific.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B9DFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 7h11v9H3z" />
        <path d="M14 10h4l3 3v3h-7" />
        <circle cx="7" cy="18" r="1.8" />
        <circle cx="17" cy="18" r="1.8" />
      </svg>
    ),
    title: "No customs delays",
    desc: "Cases stay in the state, so transit is days, not weeks.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We send digital cases from San Francisco via tracked shipping and turnaround is remarkably predictable. Seat appointments are quick with almost zero occlusal adjustments.",
    author: "Dr. Marcus Vance, DDS",
    practice: "Bayview Dental Studio, San Francisco, CA",
  },
  {
    quote:
      "Every restoration is designed and milled in-house in California under FDA compliance. The fit and finish on complex full-arch cases have been exceptional.",
    author: "Dr. Elena Rostova, DMD",
    practice: "Pacific Coast Prosthodontics, San Diego, CA",
  },
  {
    quote:
      "Consolidated invoicing and dedicated master technician support across all four of our clinics. Laguna Dental Arts has been our most reliable California lab partner.",
    author: "Dr. Kevin Nguyen, DDS",
    practice: "Golden State Dental Partners, San Jose, CA",
  },
];

const FAQS = [
  {
    q: "Do you work with dentists outside Sacramento?",
    a: "Yes. As a digital dental lab in California, we work with practices statewide, from the Bay Area to San Diego. Upload a scan from anywhere, or ship a traditional case to our Elk Grove lab.",
  },
  {
    q: "How do I ship a traditional impression to the lab?",
    a: "Request prepaid shipping labels and send impressions, models or records by tracked carrier. Dentists near Sacramento can use daily courier pickup from our dental lab in Elk Grove CA instead.",
  },
  {
    q: "Are your restorations made in the USA?",
    a: "Yes. Every restoration is designed and milled in-house, never outsourced overseas. As one of the dental labs in California built on a made-in-USA workflow, we run an ISO 13485 quality system and FDA registration.",
  },
  {
    q: "Which intraoral scanners do you accept?",
    a: "We accept iTero, 3Shape, Medit and Primescan, plus open STL and PLY files. Our CAD/CAM dental lab can also help connect a scanner you have not exported from before.",
  },
  {
    q: "Do you work with DSOs and multi-location groups?",
    a: "Yes. DSOs and groups get standardized specs, one account and consolidated support from a single digital dental lab California teams can scale with. Ask about volume pricing across locations.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Laguna Dental Arts",
  url: "https://lagunadentalarts.com/california-dental-lab",
  telephone: "+1-916-688-1333",
  email: "rx-photos@lagunadentalarts.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9152 Elkmont Way",
    addressLocality: "Elk Grove",
    addressRegion: "CA",
    postalCode: "95624",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
};

export default function CaliforniaDentalLabPage() {
  return (
    <main style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif", color: "#030E44", background: "#FAFAFC", fontSize: 16, lineHeight: 1.6, letterSpacing: "-0.008em" }}>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* Hero Section */}
      <section style={{ background: "#030E44", padding: "130px 24px 80px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: "rgba(250,250,252,0.72)" }}>
            <Link href="/" style={{ color: "rgba(250,250,252,0.72)", textDecoration: "none" }}>
              Home
            </Link>{" "}
            › California Dental Lab
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#3B9DFF",
            }}
          >
            Best Dental Lab in the USA · Based in California
          </div>
          <h1
            style={{
              margin: "12px 0 0",
              fontSize: "clamp(36px, 5.2vw, 60px)",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              fontWeight: 700,
              color: "#FFFFFF",
              maxWidth: 860,
            }}
          >
            A digital dental lab in California serving practices <span style={{ color: "#3B9DFF" }}>statewide.</span>
          </h1>
          <p
            style={{
              margin: "20px 0 0",
              maxWidth: 640,
              fontSize: 18,
              color: "rgba(250,250,252,0.72)",
            }}
          >
            Laguna Dental Arts is a full-service digital dental lab in California, based in Elk Grove. Send a scan from anywhere in the state, or ship a traditional case, and every restoration is designed, milled and finished in-house.
          </p>
          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a
              href="https://upload.lagunadentalarts.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#3B9DFF",
                color: "#FFFFFF",
                fontWeight: 600,
                padding: "14px 24px",
                borderRadius: 18,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Send a digital case →
            </a>
            <a
              href="#start"
              style={{
                border: "1px solid rgba(250,250,252,0.3)",
                color: "#FFFFFF",
                fontWeight: 600,
                padding: "14px 24px",
                borderRadius: 18,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Request shipping labels
            </a>
          </div>
          <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 10 }}>
            <span style={{ border: "1px solid rgba(250,250,252,0.22)", borderRadius: 999, padding: "6px 14px", fontSize: 13, color: "rgba(250,250,252,0.72)" }}>
              Made-in-USA workflow
            </span>
            <span style={{ border: "1px solid rgba(250,250,252,0.22)", borderRadius: 999, padding: "6px 14px", fontSize: 13, color: "rgba(250,250,252,0.72)" }}>
              ISO 13485
            </span>
            <span style={{ border: "1px solid rgba(250,250,252,0.22)", borderRadius: 999, padding: "6px 14px", fontSize: 13, color: "rgba(250,250,252,0.72)" }}>
              FDA registered
            </span>
            <span style={{ border: "1px solid rgba(250,250,252,0.22)", borderRadius: 999, padding: "6px 14px", fontSize: 13, color: "rgba(250,250,252,0.72)" }}>
              3Shape & Exocad design
            </span>
          </div>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section style={{ padding: "0 24px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "-36px auto 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          <div style={{ background: "#F7F9FD", border: "1px solid rgba(3,14,68,0.14)", borderRadius: 14, padding: "18px 20px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#58638A" }}>
              Lab location
            </div>
            <div style={{ marginTop: 4, fontWeight: 700 }}>Elk Grove, California</div>
          </div>
          <div style={{ background: "#F7F9FD", border: "1px solid rgba(3,14,68,0.14)", borderRadius: 14, padding: "18px 20px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#58638A" }}>
              Shipping
            </div>
            <div style={{ marginTop: 4, fontWeight: 700 }}>Tracked, statewide</div>
          </div>
          <div style={{ background: "#F7F9FD", border: "1px solid rgba(3,14,68,0.14)", borderRadius: 14, padding: "18px 20px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#58638A" }}>
              Production
            </div>
            <div style={{ marginTop: 4, fontWeight: 700 }}>Milled in-house</div>
          </div>
          <div style={{ background: "#F7F9FD", border: "1px solid rgba(3,14,68,0.14)", borderRadius: 14, padding: "18px 20px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#58638A" }}>
              Scanners
            </div>
            <div style={{ marginTop: 4, fontWeight: 700 }}>iTero / 3Shape / Medit / Primescan</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "96px 24px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3B9DFF" }}>
            How it works
          </div>
          <h2 style={{ margin: "10px 0 0", fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.02em", maxWidth: 720 }}>
            A workflow built around the scanner you already use
          </h2>
          <p style={{ margin: "16px 0 0", color: "#58638A", maxWidth: 720 }}>
            As a CAD/CAM dental lab, we design, mill and finish every case in-house, so a digital dental lab in California keeps your workflow predictable from scan to seat.
          </p>
          <div
            style={{
              marginTop: 36,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: 16,
            }}
          >
            {STEPS.map((s) => (
              <div
                key={s.n}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(3,14,68,0.14)",
                  borderRadius: 18,
                  padding: 22,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1F6FD0" }}>{s.n}</div>
                <div style={{ marginTop: 8, fontSize: 18, fontWeight: 700 }}>{s.title}</div>
                <div style={{ marginTop: 6, color: "#58638A", fontSize: 15 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restorative Menu */}
      <section style={{ padding: "96px 24px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3B9DFF" }}>
            Restorative menu
          </div>
          <h2 style={{ margin: "10px 0 0", fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.02em", maxWidth: 720 }}>
            Full-service, so one lab covers every case
          </h2>
          <p style={{ margin: "16px 0 0", color: "#58638A", maxWidth: 720 }}>
            Few dental labs in California carry this full a menu under one roof, so you send crowns, implants, full-arch and removables to a single team.
          </p>
          <div
            style={{
              marginTop: 36,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {RESTORATIONS.map((r) => (
              <Link
                key={r.title}
                href={r.href}
                style={{
                  display: "block",
                  background: "#FFFFFF",
                  border: "1px solid rgba(3,14,68,0.14)",
                  borderRadius: 18,
                  padding: 24,
                  textDecoration: "none",
                  color: "#030E44",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em" }}>{r.title}</div>
                <div style={{ marginTop: 6, color: "#58638A", fontSize: 15 }}>{r.desc}</div>
                <div style={{ marginTop: 16, fontSize: 14, fontWeight: 600, color: "#1F6FD0" }}>{r.linkText}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Domestic Lab */}
      <section style={{ marginTop: 96, background: "#F1F5FB", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3B9DFF" }}>
            Why a domestic lab
          </div>
          <h2 style={{ margin: "10px 0 0", fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.02em", maxWidth: 760 }}>
            Made in California, not shipped overseas
          </h2>
          <p style={{ margin: "16px 0 0", color: "#58638A", maxWidth: 760 }}>
            Choosing a dental lab in California, USA keeps your cases in the same time zone, under one quality system, with no customs delays.
          </p>
          <div
            style={{
              marginTop: 36,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {WHY_DOMESTIC.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(3,14,68,0.14)",
                  borderRadius: 18,
                  padding: 24,
                }}
              >
                {item.icon}
                <div style={{ marginTop: 14, fontSize: 18, fontWeight: 700 }}>{item.title}</div>
                <div style={{ marginTop: 6, color: "#58638A", fontSize: 15 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "96px 24px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3B9DFF" }}>
            From California practices
          </div>
          <h2 style={{ margin: "10px 0 0", fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
            What dental professionals say
          </h2>
          <div
            style={{
              marginTop: 36,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.author}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(3,14,68,0.14)",
                  borderRadius: 18,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ margin: 0, color: "#35415F", lineHeight: 1.6, fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ marginTop: 20 }}>
                  <div style={{ fontWeight: 700, color: "#030E44" }}>{t.author}</div>
                  <div style={{ fontSize: 14, color: "#58638A" }}>{t.practice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: "96px 24px 0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ margin: 0, fontSize: "clamp(24px, 3vw, 32px)", letterSpacing: "-0.02em" }}>
            Frequently asked questions
          </h2>
          <LocationFaq items={FAQS} />
        </div>
      </section>

      {/* Start Case Section */}
      <section id="start" style={{ marginTop: 96, background: "#030E44", padding: "88px 24px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3B9DFF" }}>
              Let&apos;s work together
            </div>
            <h2 style={{ margin: "10px 0 0", fontSize: "clamp(30px, 3.8vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#FFFFFF" }}>
              Start your first case with a California lab
            </h2>
            <p style={{ margin: "16px 0 0", color: "rgba(250,250,252,0.72)", lineHeight: 1.6 }}>
              Tell us about your practice and we&apos;ll send shipping labels and a scanner connection guide within one business day.
            </p>
            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10, color: "#FFFFFF" }}>
              <a href="tel:+19166881333" style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 20, textDecoration: "none" }}>
                +1 (916) 688-1333
              </a>
              <div style={{ color: "rgba(250,250,252,0.72)" }}>9152 Elkmont Way, Elk Grove, CA 95624</div>
              <div style={{ color: "rgba(250,250,252,0.72)" }}>Mon–Fri, 8 am – 6 pm Pacific</div>
            </div>
          </div>
          <CaliforniaStartForm />
        </div>
      </section>
    </main>
  );
}

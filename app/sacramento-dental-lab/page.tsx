import type { Metadata } from "next";
import Link from "next/link";
import { SacramentoPickupForm } from "@/components/forms/SacramentoPickupForm";
import { LocationFaq } from "@/components/ui/LocationFaq";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Dental Laboratory in Sacramento & Elk Grove | Laguna Dental Arts",
  },
  description:
    "Digital dental laboratory in Sacramento, based in Elk Grove. Crowns, implants, full-arch and dentures with daily pickup for Sacramento-area dentists. Call (916) 688-1333.",
  alternates: {
    canonical: "https://lagunadentalarts.com/sacramento-dental-lab",
  },
  openGraph: {
    title: "Digital Dental Laboratory in Sacramento & Elk Grove | Laguna Dental Arts",
    description:
      "Digital dental laboratory in Sacramento, based in Elk Grove. Crowns, implants, full-arch and dentures with daily pickup for Sacramento-area dentists. Call (916) 688-1333.",
    url: "https://lagunadentalarts.com/sacramento-dental-lab",
    type: "website",
  },
};

const LOCAL_AREAS = [
  "Sacramento",
  "Elk Grove",
  "Folsom",
  "Rancho Cordova",
  "Citrus Heights",
  "Galt",
  "Isleton",
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
    desc: "Splints, retainers and orthodontic appliances.",
    href: "/lab-services/night-guards",
    linkText: "Explore appliances →",
  },
  {
    title: "Guides, Models & Wax-Ups",
    desc: "Surgical guides, printed models and diagnostic wax-ups.",
    href: "/lab-services/surgical-guides",
    linkText: "Explore guides →",
  },
];

const WHY_LOCAL = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B9DFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 7h11v9H3z" />
        <path d="M14 10h4l3 3v3h-7" />
        <circle cx="7" cy="18" r="1.8" />
        <circle cx="17" cy="18" r="1.8" />
      </svg>
    ),
    title: "Daily courier",
    desc: "Cases move by driver, so nothing waits on a shipping label.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B9DFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
      </svg>
    ),
    title: "A technician on the phone",
    desc: "We call when records need clarifying, before we guess.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B9DFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18z" />
      </svg>
    ),
    title: "In-person shade matching",
    desc: "Send the patient to the lab for demanding anterior cases.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B9DFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    title: "Rush when it matters",
    desc: "Being close makes a rush case possible. Call first to confirm.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The pickup route is the biggest difference for us. Scans go out at 4 pm, and cases return on time without courier guesswork.",
    author: "Dr. J. Cho, DDS",
    practice: "Elk Grove Dental Group, Elk Grove",
  },
  {
    quote:
      "Consistent margins and natural shades on our anterior zirconia cases. Having the lab right here in Elk Grove makes custom shade matching painless for our patients.",
    author: "Dr. R. Martinez, DDS",
    practice: "Sacramento Family Dentistry, Sacramento",
  },
  {
    quote:
      "When an implant case has tight clearance, an experienced technician calls before milling. That level of direct local communication is rare with national labs.",
    author: "Dr. S. Patel, DMD",
    practice: "Capitol City Dental Care, Sacramento",
  },
];

const FAQS = [
  {
    q: "Do you pick up from dental offices in Sacramento?",
    a: "Yes. As a digital dental laboratory in Sacramento’s Elk Grove area, we run daily pickup and delivery to dental offices across Sacramento County, Monday through Friday. Call (916) 688-1333 to add your practice to the route.",
  },
  {
    q: "Which towns are on your delivery route?",
    a: "Our dental laboratory near Sacramento covers Elk Grove, Sacramento, Folsom, Rancho Cordova, Citrus Heights, Galt and Isleton. Beyond the courier route, we ship tracked cases nationwide.",
  },
  {
    q: "Which intraoral scanners do you accept?",
    a: "Laguna Dental Arts Elk Grove accepts iTero, 3Shape, Medit and Primescan, plus open STL and PLY files. Prefer analog? Our dental lab in Elk Grove, CA still takes conventional impressions.",
  },
  {
    q: "How fast can you turn around a rush crown?",
    a: "Standard crowns run 6 to 9 in-lab days. Being a local dental lab near me for dentists in Sacramento makes rush cases possible when the schedule allows, so call before sending to confirm.",
  },
  {
    q: "Can I visit the lab in Elk Grove?",
    a: "Yes. You’re welcome at Laguna Dental Lab Elk Grove CA, 9152 Elkmont Way, Monday to Friday. It’s also where we handle in-person shade matching for demanding anterior cases.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Laguna Dental Arts",
  url: "https://lagunadentalarts.com/sacramento-dental-lab",
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

export default function SacramentoDentalLabPage() {
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
            › Sacramento Dental Lab
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
            Sacramento · Elk Grove
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
            Digital Dental Laboratory in <span style={{ color: "#3B9DFF" }}>Sacramento, California</span>
          </h1>
          <p
            style={{
              margin: "20px 0 0",
              maxWidth: 640,
              fontSize: 18,
              color: "rgba(250,250,252,0.72)",
            }}
          >
            A full-service digital dental laboratory near Sacramento, based in Elk Grove and serving dental practices across Sacramento County, CA. Crowns, implants, full-arch, removables and orthodontics, with daily pickup and delivery.
          </p>
          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a
              href="#pickup"
              style={{
                background: "#3B9DFF",
                color: "#FFFFFF",
                fontWeight: 600,
                padding: "14px 24px",
                borderRadius: 18,
                textDecoration: "none",
                display: "inline-block",
                transition: "opacity 0.2s",
              }}
            >
              Request a pickup →
            </a>
            <a
              href="https://upload.lagunadentalarts.com/"
              target="_blank"
              rel="noopener noreferrer"
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
              Send a digital case
            </a>
          </div>
          <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 10 }}>
            <span style={{ border: "1px solid rgba(250,250,252,0.22)", borderRadius: 999, padding: "6px 14px", fontSize: 13, color: "rgba(250,250,252,0.72)" }}>
              Daily pickup & delivery
            </span>
            <span style={{ border: "1px solid rgba(250,250,252,0.22)", borderRadius: 999, padding: "6px 14px", fontSize: 13, color: "rgba(250,250,252,0.72)" }}>
              Digital & traditional cases
            </span>
            <span style={{ border: "1px solid rgba(250,250,252,0.22)", borderRadius: 999, padding: "6px 14px", fontSize: 13, color: "rgba(250,250,252,0.72)" }}>
              In-house milling
            </span>
            <span style={{ border: "1px solid rgba(250,250,252,0.22)", borderRadius: 999, padding: "6px 14px", fontSize: 13, color: "rgba(250,250,252,0.72)" }}>
              ISO 13485 · FDA registered
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
            <div style={{ marginTop: 4, fontWeight: 700 }}>Elk Grove, Sacramento, CA</div>
          </div>
          <div style={{ background: "#F7F9FD", border: "1px solid rgba(3,14,68,0.14)", borderRadius: 14, padding: "18px 20px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#58638A" }}>
              Pickup
            </div>
            <div style={{ marginTop: 4, fontWeight: 700 }}>Daily, Mon–Fri</div>
          </div>
          <div style={{ background: "#F7F9FD", border: "1px solid rgba(3,14,68,0.14)", borderRadius: 14, padding: "18px 20px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#58638A" }}>
              Lab hours
            </div>
            <div style={{ marginTop: 4, fontWeight: 700 }}>Mon–Fri, 8 am – 5 pm</div>
          </div>
          <div style={{ background: "#F7F9FD", border: "1px solid rgba(3,14,68,0.14)", borderRadius: 14, padding: "18px 20px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#58638A" }}>
              Scanners
            </div>
            <div style={{ marginTop: 4, fontWeight: 700 }}>iTero / 3Shape / Medit</div>
          </div>
        </div>
      </section>

      {/* Pickup & Delivery Area */}
      <section style={{ padding: "88px 24px 0" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3B9DFF" }}>
              Pickup & delivery area
            </div>
            <h2 style={{ margin: "10px 0 0", fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
              A local lab your courier can reach the same day
            </h2>
            <p style={{ margin: "16px 0 0", color: "#58638A" }}>
              Upload a digital scan and your case starts the same day. Our driver collects impressions and delivers finished cases across the greater Sacramento area, straight from our dental lab in Elk Grove, CA. Outside the route, we send tracked shipping nationwide.
            </p>
            <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 10 }}>
              {LOCAL_AREAS.map((area) => (
                <span
                  key={area}
                  style={{
                    background: "#F1F5FB",
                    border: "1px solid rgba(3,14,68,0.14)",
                    borderRadius: 999,
                    padding: "6px 14px",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
            <p style={{ margin: "20px 0 0", fontSize: 14, color: "#58638A" }}>
              Pickup cut-off: 5:00 PM PT. Call{" "}
              <a href="tel:+19166881333" style={{ fontWeight: 700, color: "#030E44", textDecoration: "none" }}>
                +1 (916) 688-1333
              </a>{" "}
              to add your practice to the route.
            </p>
          </div>
          <div style={{ background: "#F1F5FB", border: "1px solid rgba(3,14,68,0.14)", borderRadius: 24, padding: 20 }}>
            <div
              style={{
                height: 340,
                borderRadius: 14,
                overflow: "hidden",
                position: "relative",
                background: "#FFFFFF",
                border: "1px solid rgba(3,14,68,0.14)",
              }}
            >
              <iframe
                title="Laguna Dental Arts Sacramento Elk Grove Location"
                src="https://maps.google.com/maps?q=9152+Elkmont+Way,+Elk+Grove,+CA+95624&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0, width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Restorative Menu */}
      <section style={{ padding: "96px 24px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3B9DFF" }}>
            Our Dental Restoration
          </div>
          <h2 style={{ margin: "10px 0 0", fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.02em", maxWidth: 720 }}>
            One lab for the cases Sacramento dentists send every day
          </h2>
          <p style={{ margin: "16px 0 0", color: "#58638A", maxWidth: 720 }}>
            Every case runs through the same CAD/CAM dental lab pipeline, so a digital dental lab workflow covers crowns, implants, full-arch and removables without juggling vendors.
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

      {/* Why Local */}
      <section style={{ padding: "96px 24px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3B9DFF" }}>
            Why a local lab
          </div>
          <h2 style={{ margin: "10px 0 0", fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.02em", maxWidth: 720 }}>
            More than a vendor. A lab down the road.
          </h2>
          <p style={{ margin: "16px 0 0", color: "#58638A", maxWidth: 720 }}>
            At Laguna Dental, Elk Grove sits minutes from Sacramento practices, so a case is a short drive, not a shipping gamble. That proximity is what makes a dental laboratory near Sacramento genuinely responsive.
          </p>
          <div
            style={{
              marginTop: 36,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {WHY_LOCAL.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#F7F9FD",
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
            From Sacramento-area practices
          </div>
          <h2 style={{ margin: "10px 0 0", fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
            What local dentists say
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

      {/* Pickup Section */}
      <section id="pickup" style={{ marginTop: 96, background: "#030E44", padding: "88px 24px" }}>
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
              Request a pickup from your practice
            </h2>
            <p style={{ margin: "16px 0 0", color: "rgba(250,250,252,0.72)", lineHeight: 1.6 }}>
              Tell us where you are and what you&apos;re sending. We reply within one business day with a pickup time. First case evaluation available upon request.
            </p>
            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10, color: "#FFFFFF" }}>
              <a href="tel:+19166881333" style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 20, textDecoration: "none" }}>
                +1 (916) 688-1333
              </a>
              <div style={{ color: "rgba(250,250,252,0.72)" }}>9152 Elkmont Way, Elk Grove, CA 95624</div>
              <div style={{ color: "rgba(250,250,252,0.72)" }}>Mon–Fri, 8 am – 5 pm</div>
            </div>
          </div>
          <SacramentoPickupForm />
        </div>
      </section>
    </main>
  );
}

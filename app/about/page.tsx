import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icons/Icon";
import { CtaBand } from "@/components/ui/CtaBand";
import { TeamGrid } from "@/components/about/TeamGrid";

export const metadata: Metadata = {
  title: "About",
  description: "The story, facility and people behind Laguna Dental Arts, a premium California dental laboratory.",
};

const VALUES = [
  { n: "01", title: "Precision", desc: "We measure fit, not vibes. Every unit is verified against tolerance before it ships, so it seats the way it should." },
  { n: "02", title: "Craft", desc: "Digital tools handle the geometry; our master ceramists give each restoration the character of a natural tooth." },
  { n: "03", title: "Partnership", desc: "You get named technicians and an account lead who learn your preferences  support that feels like an extension of your team." },
  { n: "04", title: "Innovation", desc: "We adopt new materials and workflows deliberately, validating each one before it ever touches a patient case." },
];

export default function AboutPage() {
  return (
    <main>
      <section className="phero phero--image phero--about">
        <div className="container">
          <div className="phero__crumbs reveal"><Link href="/">Home</Link> / About</div>
          <span className="eyebrow reveal">Our Story</span>
          <h1 className="display reveal">A California laboratory obsessed with fit.</h1>
          <p className="phero__sub reveal">For over 25 years, dental restorations have been our focus. Here&apos;s what that experience has taught us.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <div className="media media--tall">
              <Image src="/images/about-founded.jpg" alt="Founded by ceramists, run like a manufacturer" width={800} height={1000} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              <span className="media__corner tl" /><span className="media__corner tr" /><span className="media__corner bl" /><span className="media__corner br" />
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">Est. 1998</span>
            <h2 className="display" style={{ marginTop: 18 }}>Founded by ceramists, run like a manufacturer.</h2>
            <p className="lead" style={{ marginTop: 20 }}>Laguna Dental Arts began at a single bench in Elk Grove, where our founders set an uncompromising standard for marginal fit, shade, and restorative quality. As dentistry evolved, we expanded our capabilities across both traditional and digital workflows, investing in scanners, milling, printing, and case-management systems that keep every restoration traceable.</p>
            <p style={{ marginTop: 18, color: "var(--ink-soft)" }}>Today, that same standard runs across a 12,000&nbsp;sq&nbsp;ft facility and a team of 140. The tools have evolved. The obsession hasn&apos;t.</p>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="shead reveal"><span className="eyebrow">Our Strengths</span><h2 className="display">Excellence in every restoration.</h2></div>
          <div className="stat-grid reveal">
            <div className="stat">
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: 6 }}>All-on-X &amp; Full-Arch</h3>
              <div className="stat__label">Specialists in complex cases.</div>
            </div>
            <div className="stat">
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: 6 }}>Chairside support</h3>
              <div className="stat__label">Expert help when it matters.</div>
            </div>
            <div className="stat">
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: 6 }}>Dentist-focused</h3>
              <div className="stat__label">Service built around your needs.</div>
            </div>
            <div className="stat">
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: 6 }}>Custom Esthetics</h3>
              <div className="stat__label">Beautiful, natural-looking results.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--rev">
          <div className="split__media reveal">
            <div className="media media--wide">
              <Image src="/images/digital-pipeline.jpg" alt="A fully digital pipeline, under one roof" width={800} height={500} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              <span className="media__corner tl" /><span className="media__corner tr" /><span className="media__corner bl" /><span className="media__corner br" />
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">Technology</span>
            <h2 className="display" style={{ marginTop: 18 }}>A fully digital pipeline, under one roof.</h2>
            <p className="lead" style={{ marginTop: 20 }}>Scanning, CAD design, 5-axis milling, DLP printing and hand-layering all live in the same building  connected by one case system. Nothing is re-keyed, nothing is outsourced, and every step is logged against the case for full traceability.</p>
            <Link className="textlink" style={{ marginTop: 26, display: "inline-flex" }} href="/services">
              See what we make <Icon name="arrow" size={16} strokeWidth={2.4} className="arw" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="shead reveal"><span className="eyebrow">What we stand for</span><h2 className="display">Four commitments behind every case.</h2></div>
          <div className="values reveal">
            {VALUES.map((v) => (
              <div className="value" key={v.n}>
                <div className="n">{v.n}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }} id="team">
        <div className="container">
          <div className="team-showcase__head reveal">
            <span className="eyebrow center">Our Team</span>
            <h2 className="display">The people behind <span>every restoration.</span></h2>
            <p>Experienced specialists across design, ceramics, implants and client support work together to make every case predictable from intake to delivery.</p>
          </div>
          <TeamGrid />
        </div>
      </section>

      <CtaBand
        eyebrow="Become a Partner"
        title="Ready to partner with Laguna?"
        lead="Send your first case, tour the lab, or talk through what your practice needs. We'll set up your portal and a dedicated case team within a day."
        primaryLabel="Become a Partner"
        primaryHref="/contact"
        secondaryLabel="Explore Lab Services"
        secondaryHref="/services"
      />
    </main>
  );
}

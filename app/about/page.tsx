import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { StatCounter } from "@/components/ui/StatCounter";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description: "The story, facility and people behind Laguna Dental Arts, a premium California dental laboratory.",
};

const VALUES = [
  { n: "01", title: "Precision", desc: "We measure fit, not vibes. Every unit is verified against tolerance before it ships, so it seats the way it should." },
  { n: "02", title: "Craft", desc: "Digital tools handle the geometry; our master ceramists give each restoration the character of a natural tooth." },
  { n: "03", title: "Partnership", desc: "You get named technicians and an account lead who learn your preferences — support that feels like an extension of your team." },
  { n: "04", title: "Innovation", desc: "We adopt new materials and workflows deliberately, validating each one before it ever touches a patient case." },
];

const TEAM = [
  { mark: "LD", title: "Laboratory Leadership", role: "Quality, operations & clinical partnerships", href: "/contact", label: "Meet the team →" },
  { mark: "CB", title: "Crown & Bridge", role: "Restorative design & ceramics", href: "/services/crowns", label: "View expertise →" },
  { mark: "FA", title: "Full-Arch Team", role: "Complex cases & digital planning", href: "/services/bridges", label: "View expertise →" },
  { mark: "IR", title: "Implant Restorations", role: "Custom abutments & implant workflows", href: "/services/implants", label: "View expertise →" },
  { mark: "RP", title: "Removables Team", role: "Dentures, frameworks & partials", href: "/services/dentures", label: "View expertise →" },
  { mark: "DT", title: "Digital Technology", role: "CAD/CAM, scanning & manufacturing", href: "/services", label: "View expertise →" },
  { mark: "CS", title: "Client Support", role: "Case coordination & practice success", href: "/contact", label: "Talk with us →" },
];

export default function AboutPage() {
  return (
    <main>
      <section className="phero phero--image phero--about">
        <div className="container">
          <div className="phero__crumbs reveal"><Link href="/">Home</Link> / About</div>
          <span className="eyebrow reveal">Our Story</span>
          <h1 className="display reveal">A California laboratory obsessed with fit.</h1>
          <p className="phero__sub reveal">For over 25 years we&apos;ve done one thing: make restorations that dentists can seat with confidence. Here&apos;s how a small Elk Grove studio became a modern digital manufacturer.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <div className="media media--tall">
              <div className="artscene" style={{ background: "linear-gradient(150deg,#163a76,#06132e)" }} />
              <span className="media__corner tl" /><span className="media__corner tr" /><span className="media__corner bl" /><span className="media__corner br" />
              <span className="media__cap">CAD DESIGN BAY · TECHNICIAN WORKSTATION</span>
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">Est. 1998</span>
            <h2 className="display" style={{ marginTop: 18 }}>Founded by ceramists, run like a manufacturer.</h2>
            <p className="lead" style={{ marginTop: 20 }}>Laguna Dental Arts began at a single bench in Elk Grove, where our founders set an uncompromising standard for marginal fit and shade. As digital dentistry matured, we invested early — in scanners, milling, printing and a case-management system that treats every restoration as a traceable medical device.</p>
            <p style={{ marginTop: 18, color: "var(--ink-soft)" }}>Today, that same standard runs across a 42,000&nbsp;sq&nbsp;ft facility and a team of 140. The tools changed; the obsession didn&apos;t.</p>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="shead reveal"><span className="eyebrow">By the numbers</span><h2 className="display">Scale you can rely on.</h2></div>
          <div className="stat-grid reveal">
            <div className="stat"><StatCounter to={27} suffix="+" /><div className="stat__label">Years in business</div></div>
            <div className="stat"><StatCounter to={1.2} suffix="M" decimals={1} /><div className="stat__label">Cases delivered</div></div>
            <div className="stat"><StatCounter to={140} /><div className="stat__label">Team members</div></div>
            <div className="stat"><StatCounter to={42} suffix="K" /><div className="stat__label">Sq ft facility</div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--rev">
          <div className="split__media reveal">
            <div className="media media--wide">
              <div className="artscene" style={{ background: "linear-gradient(150deg,#123061,#0a1e45)" }} />
              <span className="media__corner tl" /><span className="media__corner tr" /><span className="media__corner bl" /><span className="media__corner br" />
              <span className="media__cap">5-AXIS MILLING · IN-HOUSE MANUFACTURING</span>
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">Technology</span>
            <h2 className="display" style={{ marginTop: 18 }}>A fully digital pipeline, under one roof.</h2>
            <p className="lead" style={{ marginTop: 20 }}>Scanning, CAD design, 5-axis milling, DLP printing and hand-layering all live in the same building — connected by one case system. Nothing is re-keyed, nothing is outsourced, and every step is logged against the case for full traceability.</p>
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

      <section className="section" id="team">
        <div className="container">
          <div className="team-showcase__head reveal">
            <span className="eyebrow center">Our Team</span>
            <h2 className="display">The people behind <span>every restoration.</span></h2>
            <p>Experienced specialists across design, ceramics, implants and client support work together to make every case predictable from intake to delivery.</p>
          </div>
          <div className="team-grid reveal">
            {TEAM.map((t) => (
              <article className="card team-card" key={t.mark}>
                <div className="team-card__portrait"><span className="team-card__mark">{t.mark}</span></div>
                <div className="team-card__body">
                  <h3>{t.title}</h3>
                  <div className="team-card__role">{t.role}</div>
                  <Link className="team-card__link" href={t.href}>{t.label}</Link>
                </div>
              </article>
            ))}
            <article className="card team-card team-card--join">
              <div className="team-card__body">
                <div className="team-card__plus">+</div>
                <h3>Build your career with us.</h3>
                <p>We welcome skilled dental professionals who care deeply about precision and partnership.</p>
                <Link className="team-card__link" href="/contact">Get in touch →</Link>
              </div>
            </article>
          </div>
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

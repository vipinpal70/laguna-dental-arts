import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icons/Icon";
import { StatCounter } from "@/components/ui/StatCounter";
import { CtaBand } from "@/components/ui/CtaBand";
import { TeamGrid } from "@/components/about/TeamGrid";

export const metadata: Metadata = {
  title: {
    absolute: "Dental Labs in California | About Laguna Dental Arts",
  },
  description:
    "Laguna Dental Arts is one of the dental labs in California pairing master ceramists with a fully digital, in-house, made-in-USA workflow. Precision on every case.",
  alternates: {
    canonical: "https://lagunadentalarts.com/about",
  },
  openGraph: {
    title: "Dental Labs in California | About Laguna Dental Arts",
    description:
      "Laguna Dental Arts is one of the dental labs in California pairing master ceramists with a fully digital, in-house, made-in-USA workflow. Precision on every case.",
    url: "https://lagunadentalarts.com/about",
    type: "website",
  },
};

const VALUES = [
  { n: "01", title: "Precision", desc: "We don't guess – we verify. Every restoration is carefully checked for accuracy and fit before delivery." },
  { n: "02", title: "Partnership", desc: "You'll work with a dedicated technician and a relationship manager who understand your preferences and provide support that feels like an extension of your team." },
  { n: "03", title: "Innovation", desc: "We invest in the latest technology while helping shape what comes next in digital dentistry." },
];

export default function AboutPage() {
  return (
    <main>
      <section className="phero phero--image phero--about">
        <div className="container">
          <div className="phero__crumbs reveal"><Link href="/">Home</Link> / About</div>
          <span className="eyebrow reveal">About Laguna Dental Arts</span>
          <h1 className="display reveal">A California dental lab obsessed with fit.</h1>
          <p className="phero__sub reveal">For 37 years we&apos;ve done one thing: make restorations dentists can seat with confidence. Here&apos;s how a small California studio grew into one of the most precise dental labs in California.</p>
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
            <span className="eyebrow">Est. 1989</span>
            <h2 className="display" style={{ marginTop: 18 }}>Founded by ceramists, run like a manufacturer.</h2>
            <p className="lead" style={{ marginTop: 20 }}>Laguna Dental Arts began at a single bench in California, where our founders set an uncompromising standard for marginal fit and shade. As digital dentistry matured, we invested early: scanners, milling, printing, and a case-management system that treats every restoration as a traceable medical device. Today that same standard runs across a modern facility and a full technical team. The tools have changed. The obsession with quality did not. That is what makes Laguna one of the dental labs in California worth switching to.</p>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="shead reveal"><span className="eyebrow">By the numbers</span><h2 className="display">Scale you can rely on.</h2></div>
          <div className="stat-grid reveal">
            <div className="stat">
              <StatCounter to={37} suffix="+" />
              <div className="stat__label">Years in business</div>
            </div>
            <div className="stat">
              <StatCounter to={1} suffix="M+" />
              <div className="stat__label">Cases delivered</div>
            </div>
            <div className="stat">
              <StatCounter to={45} />
              <div className="stat__label">Team members</div>
            </div>
            <div className="stat">
              <StatCounter to={13} suffix="K" />
              <div className="stat__label">Sq ft facility</div>
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
            <p className="lead" style={{ marginTop: 20 }}>Scanning, CAD design, 5-axis milling, DLP printing and hand-layering all live in the same building  connected by one case system. Nothing is re-keyed, and every step is logged against the case for full traceability.</p>
            <Link className="textlink" style={{ marginTop: 26, display: "inline-flex" }} href="/lab-services">
              See what we make <Icon name="arrow" size={16} strokeWidth={2.4} className="arw" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="shead reveal"><span className="eyebrow">What we stand for</span><h2 className="display">Three commitments behind every case.</h2></div>
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
            <p>Experienced technicians across all departments — crown and bridge, implants, full arch, surgical, removable, orthodontic and customer experience — work together to make every case predictable. When you call Laguna Dental Arts, you can ask your technician by name.</p>
          </div>
          <TeamGrid />
        </div>
      </section>

      <CtaBand
        eyebrow="Become a Partner"
        title="Ready to partner with Laguna?"
        lead="Send your first case, tour the lab, or talk through what your practice needs. We set up your portal and a dedicated technician. This is the difference a full-service dental lab built on partnership makes."
        primaryLabel="Become a Partner"
        primaryHref="/contact"
        secondaryLabel="Explore Lab Services"
        secondaryHref="/lab-services"
      />
    </main>
  );
}

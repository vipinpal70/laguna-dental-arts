import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Compass, Layers, MessageSquare } from "lucide-react";
import { Icon } from "@/components/icons/Icon";
import { StatCounter } from "@/components/ui/StatCounter";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: {
    absolute: "Laguna Dental Arts - Full-Service Digital Dental Lab",
  },
  description:
    "Full-service California dental lab for crowns, implants, full-arch restorations, removables, appliances and digital workflows.",
  alternates: {
    canonical: "https://lagunadentalarts.com/",
  },
  openGraph: {
    title: "Laguna Dental Arts - Full-Service Digital Dental Lab",
    description:
      "Full-service California dental lab for crowns, implants, full-arch restorations, removables, appliances and digital workflows.",
    url: "https://lagunadentalarts.com/",
    type: "website",
  },
};

const PRODUCTS = [
  {
    key: "crown",
    categories: ["fixed"],
    image: "/assets/LDA_product_images/dental-crown.png",
    title: "Crown",
    desc: "Zirconia, e.max, and PFM restorations.",
    href: "/lab-services/crowns",
    linkLabel: "Explore crown & bridge",
  },
  {
    key: "implants",
    categories: ["implant", "fixed"],
    image: "/assets/LDA_product_images/implant-restoration.png",
    title: "Implant Restorations",
    desc: "Custom abutments through screw-retained and cementable crowns, design to your plan.",
    href: "/lab-services/implants",
    linkLabel: "Explore implants",
  },
  {
    key: "full-arch",
    categories: ["implant", "fixed"],
    image: "/assets/LDA_product_images/full-arch.png",
    title: "Full-Arch Solutions",
    desc: "All-on-X hybrids and screw-retained zirconia, planned to delivery.",
    href: "/lab-services/full-arch",
    linkLabel: "Explore full-arch",
  },
  {
    key: "removables",
    categories: ["removable"],
    image: "/assets/LDA_product_images/Denture.jpeg",
    title: "Removables & Partials",
    desc: "Dentures, partials, and flexible frameworks, digital or traditional.",
    href: "/lab-services/dentures",
    linkLabel: "Explore removables",
  },
  {
    key: "night-guards",
    categories: ["removable"],
    image: "/assets/LDA_product_images/night-guards.jpeg",
    title: "Night Guards & Appliances",
    desc: "Splints, retainers, and orthodontic appliances, made to spec.",
    href: "/lab-services/night-guards",
    linkLabel: "Explore appliances",
  },
  {
    key: "guides-models",
    categories: ["digital", "digital-guides"],
    image: "/assets/LDA_product_images/surgical-guide.png",
    title: "Guides, Models & Wax-Ups",
    desc: "Surgical guides, printed models, and diagnostic wax-ups.",
    href: "/lab-services",
    linkLabel: "Explore digital dentistry",
  },
];

const VALUES = [
  {
    icon: Compass,
    title: "Digital Precision",
    desc: "3Shape and Exocad design paired with in-house milling of zirconia, PMMA, and PFM, engineered for accurate margins and a consistent fit.",
  },
  {
    icon: Layers,
    title: "Expert Craftsmanship",
    desc: "Experienced technicians refine anatomy, texture, shade, and finish by hand, where digital production meets restorative artistry.",
  },
  {
    icon: MessageSquare,
    title: "Dentist-Focused Support",
    desc: "Talk to real people who understand lab cases. We reach out when records need clarification and keep your clinical intent at the center.",
  },
];

const WHY = [
  {
    icon: "compass" as const,
    title: "Advanced Technology",
    desc: "Digital design, in-house milling, and 3D production keep the cases you send consistent.",
  },
  {
    icon: "gem" as const,
    title: "Experienced Technicians",
    desc: "Hand finishing and technical review from specialists in esthetics, removables, and implants.",
  },
  {
    icon: "check" as const,
    title: "Consistent Quality",
    desc: "A systematic quality control process ensures every case meets your standards and expectations.",
  },
  {
    icon: "chat" as const,
    title: "Responsive Communication",
    desc: "Real people, not anonymous case processing. Reach the lab when questions or complex decisions come up.",
  },
  {
    icon: "list3" as const,
    title: "Full-Service Breadth",
    desc: "Run routine, specialty, and complex categories through one full-service dental lab relationship.",
  },
  {
    icon: "clock" as const,
    title: "Dentist-Centered Workflow",
    desc: "Predictable schedules and a process that respects your chair time.",
  },
];

const WORKFLOW = [
  { icon: "scan" as const, name: "Capture", desc: "Scan complete upper, lower, and bite records with your intraoral scanner." },
  { icon: "upload" as const, name: "Submit", desc: "Upload files, photos, and the Rx securely, or send a traditional case." },
  { icon: "search" as const, name: "Review & Plan", desc: "We check completeness and contact you if anything needs clarification." },
  { icon: "mill" as const, name: "Mill & QC", desc: "CAD design, milling, finishing, and a defined quality-control review." },
  { icon: "truck" as const, name: "Deliver", desc: "Your case ships back with access to the team for questions or follow-up." },
];

const TESTIMONIALS = [
  {
    initials: "RM",
    name: "Dr. R. Martinez",
    role: "DDS",
    quote:
      "The communication is what sets Laguna apart. When a full-arch case needs a design decision, someone who understands the workflow calls me, not a ticketing system.",
  },
  {
    initials: "SP",
    name: "Dr. S. Patel",
    role: "DMD",
    quote:
      "Consistent margins, natural esthetics, and a team that flags missing records before production. My crown and bridge cases come back predictable, case after case.",
  },
  {
    initials: "JC",
    name: "Dr. J. Cho",
    role: "DDS",
    quote:
      "Daily pickup keeps our schedule tight, and the digital workflow made switching from impressions painless. It feels like an extension of our practice.",
  },
];

const FAQ = [
  {
    q: "What dental lab services does Laguna Dental Arts provide?",
    a: "Laguna is a full-service dental lab for crowns and bridges, veneers, implants and full-arch restorations, removables, night guards, orthodontic and surgical guides.",
  },
  {
    q: "Does Laguna Dental Arts accept digital scans?",
    a: "Yes. As a CAD/CAM dental lab, we accept cases from every major intraoral scanner workflow and open STL or PLY files. Contact the lab if you need help connecting your scanner.",
  },
  {
    q: "Can I send traditional impressions?",
    a: "Yes. The lab runs digital and conventional workflows. Include a complete prescription, opposing records, bite, shade, and any photographs or component details the restoration needs.",
  },
  {
    q: "Do you offer pickup and delivery near Sacramento and Elk Grove?",
    a: "Yes, we offer reliable daily pickup and delivery throughout the greater Sacramento area, along with tracked shipping nationwide.",
  },
  {
    q: "Which scanners do you work with?",
    a: "iTero, 3Shape, Medit, Primescan, and other major systems, plus open STL and PLY files.",
  },
];

const STRIP_ITEMS = [
  "Digital & traditional cases",
  "3Shape & Exocad",
  "In-house milling",
  "HIPAA-conscious handling",
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="hhero">
        <div className="hhero-grid">
          <div className="hhero-media">
            <video autoPlay muted loop playsInline preload="metadata" poster="/video/hero-poster.jpg" aria-label="Laguna Dental Arts laboratory showcase">
              <source src="/video/hero-banner.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="container">
            <h1 className="reveal">Your full-service <span className="mark">dental lab partner</span></h1>
            <p className="hhero-sub reveal">
              One lab for crowns, implants, full-arch, removables and ortho. Digital or traditional, we design, mill, and finish in-house so cases seat clean and arrive on schedule.
            </p>
            <div className="hhero-ctas reveal">
              <Link className="btn btn--lg btn--light" href="https://upload.lagunadentalarts.com/" target="_blank" rel="noopener noreferrer">
                Send a Case <Icon name="arrow" size={16} strokeWidth={2.4} className="arw" />
              </Link>
              <Link className="btn btn--lg btn--outline-light" href="/lab-services">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="strip-inner">
          <div className="strip-track">
            {STRIP_ITEMS.concat(STRIP_ITEMS).map((item, index) => (
              <span key={index}>
                <Icon name="check" size={17} strokeWidth={2.3} /> {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* More than a dental lab */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="shead shead--center reveal">
            <span className="eyebrow center">More than a dental lab</span>
            <h2 className="display">A partner in your practice</h2>
            <p className="lead">Juggling multiple labs makes case management harder than it should be. A full-service dental lab pulls a broad restorative menu, digital tooling, and real people into one place. You send the case. We carry it from design to finish, and we call you before we guess.</p>
          </div>
          <div className="val-grid">
            {VALUES.map((v) => {
              const IconComponent = v.icon;
              return (
                <div className="card val-card reveal" key={v.title}>
                  <div className="val-ic ic-tile">
                    <IconComponent size={22} strokeWidth={1.9} />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* One lab built for your bench */}
      <section className="section">
        <div className="container">
          <div className="shead shead--center reveal">
            <span className="eyebrow center">One lab, built for your bench</span>
            <h2 className="display">Capability you can plan around</h2>
          </div>
          <div className="stat-grid stat-grid--light reveal">
            <div className="stat">
              <StatCounter to={35} suffix="+" />
              <div className="stat__label">Years in Business</div>
            </div>
            <div className="stat">
              <StatCounter to={1} suffix="M+" />
              <div className="stat__label">Case delivery</div>
            </div>
            <div className="stat">
              <StatCounter to={8} />
              <div className="stat__label">Restorative categories handled</div>
            </div>
            <div className="stat">
              <StatCounter to={100} suffix="%" />
              <div className="stat__label">of cases pass a defined quality-control review before delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Restorative menu */}
      <section className="section section--tint" id="products">
        <div className="container">
          <div className="shead-row reveal">
            <div className="shead" style={{ maxWidth: 560 }}>
              <span className="eyebrow">Restorative menu</span>
              <h2 className="display">Built around the cases you see every day</h2>
              <p>Filter by category, then talk with our team when a case needs technical guidance. Every category runs through the same CAD/CAM dental lab pipeline, so quality holds whether you send one crown or a full arch.</p>
            </div>
            <Link className="btn" href="/lab-services">
              View All Services <Icon name="arrow" size={16} strokeWidth={2.4} />
            </Link>
          </div>
          <div className="prodgrid prodgrid--3 prodgrid--keep reveal">
            {PRODUCTS.map((p) => (
              <Link className="card pcard" href={p.href} key={p.key}>
                <div className="pcard__media">
                  <Image src={p.image} alt={p.title} width={600} height={450} />
                </div>
                <div className="pcard__body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <span className="pcard__link">{p.linkLabel} <Icon name="arrow" size={15} strokeWidth={2.4} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Digital dentistry made simple */}
      <section className="section" id="workflow">
        <div className="container">
          <div className="shead shead--center reveal">
            <span className="eyebrow center">Digital dentistry made simple</span>
            <h2 className="display">A workflow built around the scanner you already use</h2>
            <p>Use the scanner you own, upload files securely, or send a traditional impression with a completed Rx. Your clinical instructions stay at the center of design and production at our digital dental lab in California.</p>
          </div>
          <div className="flow">
            <div className="flow__track" style={{ gridTemplateColumns: `repeat(${WORKFLOW.length}, 1fr)` }}>
              <div className="flow__line"><i /></div>
              {WORKFLOW.map((step, i) => (
                <div className="flow__step" key={step.name}>
                  <div className="flow__dot"><Icon name={step.icon} size={22} strokeWidth={1.9} /></div>
                  <div className="flow__idx">{String(i + 1).padStart(2, "0")}</div>
                  <div className="flow__name">{step.name}</div>
                  <p className="flow__desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ textAlign: "center", marginTop: 44 }}>
            <Link className="btn btn--lg" href="/portal">
              Upload a Digital Case <Icon name="arrow" size={16} strokeWidth={2.4} className="arw" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why practices choose Laguna */}
      <section className="section section--tint" id="why">
        <div className="container">
          <div className="shead reveal">
            <span className="eyebrow">Why practices choose Laguna</span>
            <h2 className="display">More than a vendor. <br /> A laboratory partner.</h2>
            <p>The best lab relationship runs on clear communication, consistent processes, technical range, and a team that understands the importance of meeting your due dates.</p>
          </div>
          <div className="why__grid">
            {WHY.map((w) => (
              <div className="why__cell reveal" key={w.title}>
                <div className="why__ico ic-tile"><Icon name={w.icon} size={22} strokeWidth={1.9} /></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <div className="shead shead--center reveal">
            <span className="eyebrow center">From the practices we partner with</span>
            <h2 className="display">What dental professionals say</h2>
          </div>
          <TestimonialCarousel items={TESTIMONIALS} />
        </div>
      </section>

      <section className="section section--tint" id="faq">
        <div className="container">
          <div className="shead shead--center reveal">
            <span className="eyebrow center">Common questions</span>
            <h2 className="display">Frequently asked questions</h2>
          </div>
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <CtaBand
        eyebrow="Let's work together"
        title="Ready to start your next case?"
        lead="Your next case deserves a full-service dental lab partner who understands the prescription, the timeline, and the patient behind the restoration."
        primaryLabel="Send Your Next Case"
        primaryHref="/portal"
        secondaryLabel="Talk With Our Team"
        secondaryHref="tel:+19166881333"
      />
    </main>
  );
}


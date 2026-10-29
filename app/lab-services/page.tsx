import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icons/Icon";
import { ServiceFilterGrid } from "@/components/ui/ServiceFilterGrid";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBand } from "@/components/ui/CtaBand";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: {
    absolute: "Dental Lab Solutions & Services | Laguna Dental Arts",
  },
  description:
    "Full dental lab solutions from Laguna Dental Arts: crowns, bridges, implants, veneers, dentures, guards and appliances, made in one California lab. Explore services.",
  alternates: {
    canonical: "https://lagunadentalarts.com/lab-services",
  },
  openGraph: {
    title: "Dental Lab Solutions & Services | Laguna Dental Arts",
    description:
      "Full dental lab solutions from Laguna Dental Arts: crowns, bridges, implants, veneers, dentures, guards and appliances, made in one California lab. Explore services.",
    url: "https://lagunadentalarts.com/lab-services",
    type: "website",
  },
};

const WORKFLOW = [
  { icon: "scan" as const, name: "Scan", desc: "Intraoral scan captured chairside." },
  { icon: "upload" as const, name: "Upload", desc: "Case submitted through the portal." },
  { icon: "design" as const, name: "Design", desc: "CAD design by our technicians." },
  { icon: "mill" as const, name: "Manufacture", desc: "Milled, printed and layered." },
  { icon: "qc" as const, name: "Quality Check", desc: "Inspected against tolerance." },
  { icon: "truck" as const, name: "Delivery", desc: "Tracked to your door." },
];

const FAQ = [
  { q: "What services does Laguna Dental Arts provide?", a: "We support crown and bridge, implant restorations, full-arch solutions, veneers, dentures and partials, night guards, orthodontic appliances, surgical guides, models, and digital planning." },
  { q: "Do you accept both digital scans and traditional impressions?", a: "Yes. We work with the major intraoral scanner systems, and we still take conventional impressions and physical records when the case calls for it." },
  { q: "Can your technicians help me choose a material or workflow?", a: "Yes. Send the clinical objective, restorative space, occlusion, esthetics, and records, and our team explains the lab options while you keep the clinical decision." },
  { q: "What information should accompany every lab case?", a: "A complete prescription, patient identifier, due date, restoration and material, shade, prepared and opposing arches, bite, and any implant or appliance details. Add photographs when they affect design." },
  { q: "How do I confirm turnaround or request pickup?", a: "Call the lab for turnaround times and to schedule a pickup." },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="phero phero--image phero--services">
        <div className="container">
          <div className="phero__crumbs reveal"><Link href="/">Home</Link> / Lab Services</div>
          <span className="eyebrow reveal">Dental lab solutions</span>
          <h1 className="display reveal">Everything your practice sends out, can be made at Laguna Dental Arts.</h1>
          <p className="phero__sub reveal">From fixed and removable restorations to cosmetic cases and orthodontic solutions, every product is crafted for precise fit, dependable function, and natural-looking results – all from one trusted lab.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServiceFilterGrid
            gridClassName="prodgrid prodgrid--keep"
            ariaLabel="Filter lab services"
            filters={[
              { key: "all", label: "All" },
              { key: "crown", label: "Crown" },
              { key: "fixed", label: "Fixed" },
              { key: "implant", label: "Implant" },
              { key: "removable", label: "Removable" },
              { key: "digital", label: "Digital" },
            ]}
          >
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                className="card pcard"
                href={`/lab-services/${s.slug}`}
                data-categories={s.categories.join(" ")}
              >
                <div className="pcard__media">
                  {/* <span className="pcard__tag">{s.code}</span> */}
                  <Image src={s.image || "/laguna-sample-img.jpg"} alt={s.title} width={600} height={450} className="pcard__product-image" />
                </div>
                <div className="pcard__body">
                  <h3>{s.title}</h3>
                  <p>{s.cardDesc}</p>
                  <span className="pcard__link">Explore <Icon name="arrow" size={15} strokeWidth={2.4} /></span>
                </div>
              </Link>
            ))}
          </ServiceFilterGrid>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="shead shead--center reveal"><span className="eyebrow center">How we work</span><h2 className="display">One workflow behind every service.</h2></div>
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
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }} id="faq">
        <div className="container">
          <div className="shead shead--center reveal"><span className="eyebrow center">FAQ</span><h2 className="display">FAQs on our dental lab services.</h2></div>
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <CtaBand
        eyebrow="Become a Partner"
        title="Ready to partner with Laguna?"
        lead="Ready to send your first case, schedule a lab tour, or speak with a specialist, our team makes it easy to get started."
        primaryLabel="Become a Partner"
        primaryHref="/contact"
        secondaryLabel="Explore Lab Services"
        secondaryHref="/lab-services"
      />
    </main>
  );
}

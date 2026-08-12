import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { ProductIcon } from "@/components/icons/ProductIcon";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Dental Portal",
  description: "Submit cases, track every unit from design to delivery, download prescriptions and invoices, and message your case team.",
};

const FEATURES = [
  { icon: "track" as const, title: "Real-time tracking", desc: "Watch every case move through design, manufacturing and QC, with an ETA you can schedule around." },
  { icon: "cloud" as const, title: "Case submission", desc: "Upload scans and prescriptions in minutes. STL, PLY and all major scanner exports welcome." },
  { icon: "download" as const, title: "Downloads & invoices", desc: "Pull prescriptions, delivery notes and invoices whenever you need them — no phone tag." },
  { icon: "support" as const, title: "Message your team", desc: "Talk directly to the technicians on your case, with the full history attached." },
  { icon: "doc" as const, title: "Case history & archive", desc: "Every design and shade is archived, so remakes and repeat patients are effortless." },
  { icon: "lock" as const, title: "Secure & HIPAA-aware", desc: "Encrypted access and role-based permissions keep patient data protected end to end." },
];

export default function PortalPage() {
  return (
    <main>
      <section className="phero">
        <div className="container">
          <div className="phero__crumbs reveal"><Link href="/">Home</Link> / Customer Portal</div>
          <div className="split" style={{ alignItems: "center", marginTop: 24 }}>
            <div className="reveal">
              <span className="eyebrow">Customer Portal</span>
              <h1 className="display" style={{ marginTop: 18 }}>Your cases, in real time.</h1>
              <p className="phero__sub">Submit cases, track every unit from design to delivery, download prescriptions and invoices, and message your case team — all in one secure place.</p>
              <div className="hhero-ctas" style={{ marginTop: 32 }}>
                <a className="btn btn--lg btn--light" href="#">
                  <Icon name="lock" size={16} /> Sign in to the portal
                </a>
                <Link className="btn btn--lg btn--outline-light" href="/contact">Request access</Link>
              </div>
            </div>
            <div className="reveal">
              <div className="portal-mock">
                <div className="portal-mock__bar">
                  <i /><i /><i />
                  <span className="portal-mock__url">portal.lagunadentalarts.com</span>
                </div>
                <div className="portal-mock__body">
                  <div className="portal-mock__head">
                    <b>Active cases</b>
                    <span className="tick" style={{ color: "var(--blue)" }}>4 IN PRODUCTION</span>
                  </div>
                  <div className="portal-row">
                    <span className="portal-row__ic"><ProductIcon name="crown" style={{ width: 22, height: 16 }} /></span>
                    <div className="portal-row__meta"><b>#LDA-24817 · Zirconia crown</b><span>STAGE · MILLING</span></div>
                    <span className="portal-row__bar"><i style={{ width: "70%" }} /></span>
                  </div>
                  <div className="portal-row">
                    <span className="portal-row__ic"><ProductIcon name="implant" style={{ width: 22, height: 16 }} /></span>
                    <div className="portal-row__meta"><b>#LDA-24802 · Custom abutment</b><span>STAGE · QUALITY CHECK</span></div>
                    <span className="portal-row__bar"><i style={{ width: "90%" }} /></span>
                  </div>
                  <div className="portal-row">
                    <span className="portal-row__ic done"><Icon name="truck" size={20} /></span>
                    <div className="portal-row__meta done"><b>#LDA-24790 · Veneers ×6</b><span>SHIPPED · ARRIVES TOMORROW</span></div>
                    <span className="portal-row__bar done"><i style={{ width: "100%" }} /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="shead shead--center reveal"><span className="eyebrow center">What you get</span><h2 className="display">A calmer way to run lab work.</h2></div>
          <div className="pfeatures reveal">
            {FEATURES.map((f) => (
              <div className="card pfeat" key={f.title}>
                <div className="ic ic-tile"><Icon name={f.icon} size={22} strokeWidth={1.9} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Become a Partner"
        title="Get your portal set up today."
        lead="Partners get portal access, a dedicated case team and pickup scheduling within one business day."
        primaryLabel="Become a Partner"
        primaryHref="/contact"
        secondaryLabel="Explore Lab Services"
        secondaryHref="/services"
      />
    </main>
  );
}

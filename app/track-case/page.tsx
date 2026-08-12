import type { Metadata } from "next";
import Link from "next/link";
import { TrackCaseForm } from "@/components/forms/TrackCaseForm";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Track Case",
  description: "Track a Laguna Dental Arts laboratory case.",
};

export default function TrackCasePage() {
  return (
    <main>
      <section className="tool-hero">
        <div className="container">
          <div className="phero__crumbs"><Link href="/">Home</Link> / Track Case</div>
          <span className="eyebrow" style={{ marginTop: 24 }}>Case visibility</span>
          <h1>Know where every case stands.</h1>
          <p>Use your case reference to continue securely to Laguna Dental Arts case status and delivery information.</p>
        </div>
      </section>

      <section className="tool-section">
        <div className="container tool-grid">
          <TrackCaseForm />
          <aside className="tool-aside">
            <h3>One case. Clear progress.</h3>
            <div className="tool-steps">
              <div className="tool-step"><span className="step-num ic-tile">1</span><div><b>Received</b><p>Records and prescription are checked.</p></div></div>
              <div className="tool-step"><span className="step-num ic-tile">2</span><div><b>In production</b><p>Your restoration moves through design and fabrication.</p></div></div>
              <div className="tool-step"><span className="step-num ic-tile">3</span><div><b>Shipped</b><p>Delivery details are posted to your case.</p></div></div>
            </div>
            <div className="tool-support">
              Can&apos;t find a case?<br /><a href={SITE.phoneHref}>Call {SITE.phone}</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

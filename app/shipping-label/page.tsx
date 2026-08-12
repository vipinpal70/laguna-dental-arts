import type { Metadata } from "next";
import Link from "next/link";
import { ShippingLabelForm } from "@/components/forms/ShippingLabelForm";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Shipping Label",
  description: "Request a shipping label for a Laguna Dental Arts laboratory case.",
};

export default function ShippingLabelPage() {
  return (
    <main>
      <section className="tool-hero">
        <div className="container">
          <div className="phero__crumbs"><Link href="/">Home</Link> / Shipping Label</div>
          <span className="eyebrow" style={{ marginTop: 24 }}>Practice tools</span>
          <h1>Shipping made simple.</h1>
          <p>Request a prepaid shipping label for impressions, models, records, or an active Laguna Dental Arts case.</p>
        </div>
      </section>

      <section className="tool-section">
        <div className="container tool-grid">
          <ShippingLabelForm />
          <aside className="tool-aside">
            <h3>From your practice to our bench.</h3>
            <div className="tool-steps">
              <div className="tool-step"><span className="step-num ic-tile">1</span><div><b>Request</b><p>Share practice and package details.</p></div></div>
              <div className="tool-step"><span className="step-num ic-tile">2</span><div><b>Print</b><p>Our team provides the prepaid label.</p></div></div>
              <div className="tool-step"><span className="step-num ic-tile">3</span><div><b>Ship</b><p>Pack securely and schedule the carrier pickup.</p></div></div>
            </div>
            <div className="tool-support">
              Need help now?<br /><a href={SITE.phoneHref}>{SITE.phone}</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

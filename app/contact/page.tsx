import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Our Dental Lab in Elk Grove | Laguna Dental Arts",
  },
  description:
    "Contact Laguna Dental Arts, a dental lab in Elk Grove, CA. Become a partner, request a pickup, or ask a clinical question. Same-business-day replies.",
  alternates: {
    canonical: "https://lagunadentalarts.com/contact",
  },
  openGraph: {
    title: "Contact Our Dental Lab in Elk Grove | Laguna Dental Arts",
    description:
      "Contact Laguna Dental Arts, a dental lab in Elk Grove, CA. Become a partner, request a pickup, or ask a clinical question. Same-business-day replies.",
    url: "https://lagunadentalarts.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="phero phero--image phero--contact">
        <div className="container">
          <div className="phero__crumbs reveal"><Link href="/">Home</Link> / Contact</div>
          <span className="eyebrow reveal">Contact</span>
          <h1 className="display reveal">Let&apos;s talk about your cases.</h1>
          <p className="phero__sub reveal">Whether you have a quick question or a complex case, our specialists are ready to support you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="reveal">
            <ContactForm />
            <div className="info-row" style={{ marginTop: 32 }}>
              <div>
                <h4>What happens next</h4>
                <ol style={{ marginTop: 10, paddingLeft: 20, color: "var(--ink-soft)", lineHeight: 1.7 }}>
                  <li>Our team responds promptly and makes every inquiry a priority.</li>
                  <li>You send your first case.</li>
                  <li>We open your account, set up the portal, and assign a technician.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="reveal">
            <div className="info-row">
              <span className="ic ic-tile"><Icon name="pin" size={20} strokeWidth={1.8} /></span>
              <div><h4>Visit the lab</h4><p>{SITE.addressLine1}<br />{SITE.addressLine2}</p></div>
            </div>
            <div className="info-row">
              <span className="ic ic-tile"><Icon name="phone" size={20} strokeWidth={1.8} /></span>
              <div><h4>Call us</h4><p><a href={SITE.phoneHref}>{SITE.phone}</a></p></div>
            </div>
            <div className="info-row">
              <span className="ic ic-tile"><Icon name="mail" size={20} strokeWidth={1.8} /></span>
              <div><h4>Email</h4><p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p></div>
            </div>
            <div className="info-row">
              <span className="ic ic-tile"><Icon name="clock" size={20} strokeWidth={1.8} /></span>
              <div><h4>Business hours</h4><p>{SITE.hours ? <>{SITE.hours}<br /></> : null}{SITE.hoursNote}</p></div>
            </div>
            <div className="map-frame" style={{ width: "100%", maxWidth: "100%", height: 300, position: "relative" }}>
              <iframe
                title="Laguna Dental Arts Location Map"
                src="https://maps.google.com/maps?q=9152+Elkmont+Way,+Elk+Grove,+CA+95624&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0, width: "100%", height: "100%", borderRadius: "inherit" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span className="media__cap" style={{ zIndex: 10, pointerEvents: "none" }}>MAP · {SITE.addressLine1.toUpperCase()}</span>
            </div>
            <div className="info-row" style={{ marginTop: 24 }}>
              <div>
                <h4>Local pickup, statewide shipping</h4>
                <p>For practices near Sacramento, our drivers run daily pickup and delivery, so cases move without days lost to a mail queue. Further out, we ship nationwide with tracking and fast turnaround.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Laguna Dental Arts in Elk Grove, California. Become a partner, request a pickup or ask a clinical question.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="phero phero--image phero--contact">
        <div className="container">
          <div className="phero__crumbs reveal"><Link href="/">Home</Link> / Contact</div>
          <span className="eyebrow reveal">Contact</span>
          <h1 className="display reveal">Let&apos;s talk about your cases.</h1>
          <p className="phero__sub reveal">Become a partner, request a pickup, or ask a clinical question. Our Elk Grove dental lab keeps communication direct, and your technician is available seven days a week.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <ContactForm />
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
              <div><h4>Business hours</h4><p>{SITE.hours}<br />{SITE.hoursNote}</p></div>
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
          </div>
        </div>
      </section>
    </main>
  );
}

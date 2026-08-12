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
          <p className="phero__sub reveal">Become a partner, request a pickup, or ask a clinical question. Real people, based in Elk Grove, usually reply the same business day.</p>
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
            <div className="map-frame">
              <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ display: "inline-grid", placeItems: "center", width: 52, height: 52, borderRadius: "50%", background: "rgba(59,157,255,.25)" }}>
                    <span style={{ display: "block", width: 20, height: 20, borderRadius: "50%", background: "var(--blue)" }} />
                  </span>
                </div>
              </div>
              <span className="media__cap">MAP · {SITE.addressLine1.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

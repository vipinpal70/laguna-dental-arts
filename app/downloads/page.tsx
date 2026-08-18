import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { CtaBand } from "@/components/ui/CtaBand";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Downloads & Resources",
  description: "Download prescription lab slips, conversion Rx forms, shipping labels, and clinical resources for Laguna Dental Arts.",
};

const DOWNLOADS = [
  {
    title: "Laguna Dental Arts Rx",
    actionLabel: "Download",
    href: "/downloads/Laguna_Dental_Arts_Lab_Slip.pdf",
    filename: "Laguna_Dental_Arts_Lab_Slip.pdf",
  },
  {
    title: "Conversion Rx",
    actionLabel: "Download",
    href: "/downloads/LAGUNA-CONVERSON-LAB-SLIP.pdf",
    filename: "LAGUNA-CONVERSON-LAB-SLIP.pdf",
  },
];

export default function DownloadsPage() {
  return (
    <main>
      {/* Main Downloads Content */}
      <section className="section" style={{ paddingTop: "clamp(120px, 14vh, 150px)" }}>
        <div className="container">
          <div className="reveal">
            <h1 className="display" style={{ fontSize: "clamp(32px, 4.5vw, 54px)", color: "var(--navy)" }}>
              Downloads &amp; Resources for Dental Practices
            </h1>
            <p className="lead" style={{ marginTop: 18, maxWidth: "68ch" }}>
              As a convenient tool, we’ve uploaded some of our most requested resources and forms from Laguna Dental Arts here. Please feel free to download these and use to send with your next case, prep your patient, or refer to for product details.
            </p>
          </div>
          {/* Download Cards Grid */}
          <div className="downloads-grid reveal">
            {DOWNLOADS.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="download-card"
                aria-label={`Open ${item.title} PDF in a new tab`}
              >
                <div className="download-card__title">{item.title}</div>
                <div className="download-card__action">
                  <span>{item.actionLabel}</span>
                  <Icon name="arrow" size={15} strokeWidth={2.2} />
                </div>
              </a>
            ))}
          </div>

          {/* Secondary Info Rows */}
          <div className="info-help-grid reveal">
            <div className="info-help-item">
              <h4>Shipping Label</h4>
              <p>
                For a shipping label call{" "}
                <a href={SITE.phoneHref}>{SITE.phone}</a> or{" "}
                <Link href="/shipping-label" style={{ color: "var(--blue)", fontWeight: 600 }}>
                  generate online →
                </Link>
              </p>
            </div>
            <div className="info-help-item">
              <h4>Prep Guide</h4>
              <p>
                For a prep guide call{" "}
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

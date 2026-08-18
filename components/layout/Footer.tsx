"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { FOOTER_COMPANY, FOOTER_LAB_SERVICES, SITE, SOCIAL_LINKS } from "@/lib/site-data";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/admin" || pathname?.startsWith("/admin/")) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link className="brand" href="/" aria-label="Laguna Dental Arts home">
              <Image
                className="brand__logo"
                src="/images/laguna-dental-arts-logo.png"
                alt="Laguna Dental Arts"
                width={1806}
                height={505}
                style={{ height: 56, width: "auto" }}
              />
            </Link>
            <p>A premium California dental laboratory pairing master craftsmanship with a fully digital, made-in-USA workflow.</p>
            <div className="footer__social">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <SocialIcon name={s.name as any} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5>Lab Services</h5>
            <ul>
              {FOOTER_LAB_SERVICES.map((l) => (
                <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              {FOOTER_COMPANY.map((l) => (
                <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li>{SITE.addressLine1}<br />{SITE.addressLine2}</li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 LAGUNA DENTAL ARTS · ISO 13485 · FDA REGISTERED</span>
          <span>
            <Link href="/privacy" style={{ transition: "color 0.2s" }}>PRIVACY</Link>
            {" · "}
            <Link href="/terms" style={{ transition: "color 0.2s" }}>TERMS</Link>
            {" · "}
            <Link href="/privacy#hipaa" style={{ transition: "color 0.2s" }}>HIPAA</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

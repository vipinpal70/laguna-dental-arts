"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { NAV_LINKS, SERVICE_LINKS, SITE } from "@/lib/site-data";

const NAV_ICON_MAP = {
  crown: "crownI",
  bridge: "layers2",
  nightguard: "guard",
  implant: "implantI",
  denture: "denture",
  ortho: "guides",
} as const;

export function Header() {
  const pathname = usePathname();
  const [isSolid, setIsSolid] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileQuickLinksOpen, setMobileQuickLinksOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const quickLinksTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {  
    setPrevPathname(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
    setQuickLinksOpen(false);
    setMobileServicesOpen(false);
    setMobileQuickLinksOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setIsSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  const openQuickLinks = () => {
    if (quickLinksTimer.current) clearTimeout(quickLinksTimer.current);
    setQuickLinksOpen(true);
  };
  const closeQuickLinks = () => {
    quickLinksTimer.current = setTimeout(() => setQuickLinksOpen(false), 140);
  };

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  if (pathname === "/admin" || pathname?.startsWith("/admin/")) {
    return null;
  }

  const isLightPage = ["/privacy", "/terms"].includes(pathname);

  return (
    <>

      <header className={`nav${isSolid ? " is-solid" : ""}${isLightPage ? " nav--light" : ""}`}>
        <div className="nav__inner">
          <Link className="brand" href="/" aria-label="Laguna Dental Arts home">
            <Image
              className="brand__logo"
              src="/images/laguna-dental-arts-logo.png"
              alt="Laguna Dental Arts"
              width={1806}
              height={505}
              priority
            />
          </Link>

          <nav className="nav__menu" aria-label="Primary">

            {/* Lab Services */}
            <div
              className={`nav__item${servicesOpen ? " open" : ""}`}
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <Link
                className={`nav__link${isActive("/services") ? " is-active" : ""}`}
                href="/services"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Lab Services
                <Icon name="chev" size={11} strokeWidth={2.4} className="chev" />
              </Link>
              <div className="mega" role="menu">
                <Link className="mega__all" href="/services">
                  <span>
                    <b>All Services</b>
                    <small>Explore our complete lab services</small>
                  </span>
                </Link>
                {SERVICE_LINKS.map((s) => (
                  <Link key={s.title} className="mega__item" href={s.href}>
                    <span className="mega__txt">
                      <b>{s.title}</b>
                      <span>{s.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            {/* Quick Links*/}
            <div
              className={`nav__item${quickLinksOpen ? " open" : ""}`}
              onMouseEnter={openQuickLinks}
              onMouseLeave={closeQuickLinks}
            >
              <button
                type="button"
                className={`nav__link${
                  isActive("/shipping-label") || isActive("/track-case") ? " is-active" : ""
                }`}
                aria-haspopup="true"
                aria-expanded={quickLinksOpen}
              >
                Quick Links
                <Icon name="chev" size={11} strokeWidth={2.4} className="chev" />
              </button>
              <div className="mega mega--quick" role="menu">
                <Link
                  className="mega__item"
                  href="/downloads"
                >
                  <span className="mega__txt">
                    <b>Download Rx Form</b>
                    <span>Print or save digital Rx sheet</span>
                  </span>
                </Link>
                <Link className="mega__item" href="/shipping-label">
                  <span className="mega__txt">
                    <b>Shipping Label</b>
                    <span>Generate & print prepaid label</span>
                  </span>
                </Link>
                <Link className="mega__item" href="/track-case">
                  <span className="mega__txt">
                    <b>Track Case</b>
                    <span>Real-time status of your lab case</span>
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Insight, Dental portal, Contact, Training */}
            {NAV_LINKS.map((l) => (
              <Link key={l.href} className={`nav__link${isActive(l.href) ? " is-active" : ""}`} href={l.href}>
                {l.label}
              </Link>
            ))}
            
            {/* About */}
            {/* <Link className={`nav__link${isActive("/about") ? " is-active" : ""}`} href="/about">
              About Us
            </Link> */}
          </nav>

          <div className="nav__actions">
            <Link className="btn btn--send" href="/portal">
              Send a Case <Icon name="arrow" size={16} strokeWidth={2.4} className="arw" />
            </Link>
            <button
              className="nav__burger"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mnav${mobileOpen ? " open" : ""}`} id="mnav">
        <button className="mnav__close" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
          <Icon name="close" size={18} />
        </button>
        <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMobileOpen(false)}>About Us</Link>

        {/* Lab Services Accordion Dropdown */}
        <div className="mnav__acc">
          <button
            type="button"
            className={`mnav__acc-trigger${mobileServicesOpen ? " is-open" : ""}`}
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            aria-expanded={mobileServicesOpen}
          >
            <span>Lab Services</span>
            <Icon name="chev" size={12} strokeWidth={2.4} className={`chev${mobileServicesOpen ? " is-open" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="sub">
              <Link href="/services" onClick={() => setMobileOpen(false)}>
                All Services
              </Link>
              {SERVICE_LINKS.map((s) => (
                <Link key={s.title} href={s.href} onClick={() => setMobileOpen(false)}>
                  {s.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links Accordion Dropdown */}
        <div className="mnav__acc">
          <button
            type="button"
            className={`mnav__acc-trigger${mobileQuickLinksOpen ? " is-open" : ""}`}
            onClick={() => setMobileQuickLinksOpen(!mobileQuickLinksOpen)}
            aria-expanded={mobileQuickLinksOpen}
          >
            <span>Quick Links</span>
            <Icon name="chev" size={12} strokeWidth={2.4} className={`chev${mobileQuickLinksOpen ? " is-open" : ""}`} />
          </button>
          {mobileQuickLinksOpen && (
            <div className="sub">
              <Link href="/downloads" onClick={() => setMobileOpen(false)}>
                Download Rx Form
              </Link>
              <Link href="/shipping-label" onClick={() => setMobileOpen(false)}>
                Shipping Label
              </Link>
              <Link href="/track-case" onClick={() => setMobileOpen(false)}>
                Track Case
              </Link>
            </div>
          )}
        </div>

        <Link href="/insights" onClick={() => setMobileOpen(false)}>Insights</Link>
        <Link href="/portal" onClick={() => setMobileOpen(false)}>Dental Portal</Link>
        <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        <div className="mnav__actions">
          <a className="btn btn--outline-light btn--full" href={SITE.phoneHref}>
            <Icon name="phone" size={16} /> {SITE.phone}
          </a>
          <Link className="btn btn--light btn--full" href="/portal" onClick={() => setMobileOpen(false)}>
            Send a Case
          </Link>
        </div>
      </div>
    </>
  );
}

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
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

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <div className="topbar">
        <div className="topbar__inner">
          <a href="https://synergy3d.net/synergy_script.pdf" target="_blank" rel="noopener noreferrer">
            <Icon name="download" size={15} strokeWidth={1.9} />
            Download Rx Form
          </a>
          <span className="topbar__divider" aria-hidden="true" />
          <Link href="/shipping-label">
            <Icon name="truck" size={15} strokeWidth={1.9} />
            Shipping Label
          </Link>
          <span className="topbar__divider" aria-hidden="true" />
          <Link href="/track-case">
            <Icon name="track" size={15} strokeWidth={1.9} />
            Track Case
          </Link>
        </div>
      </div>

      <header className={`nav${isSolid ? " is-solid" : ""}`}>
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
            <Link className={`nav__link${isActive("/about") ? " is-active" : ""}`} href="/about">
              About Us
            </Link>
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
                  <span className="mega__all-ic">
                    <Icon name="grid" size={20} strokeWidth={2} />
                  </span>
                  <span>
                    <b>All Services</b>
                    <small>Explore our complete lab services</small>
                  </span>
                </Link>
                {SERVICE_LINKS.map((s) => (
                  <Link key={s.title} className="mega__item" href={s.href}>
                    <span className="mega__ico">
                      <Icon name={NAV_ICON_MAP[s.icon as keyof typeof NAV_ICON_MAP]} size={20} strokeWidth={1.9} />
                    </span>
                    <span className="mega__txt">
                      <b>{s.title}</b>
                      <span>{s.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            {NAV_LINKS.filter((l) => l.label !== "About Us").map((l) => (
              <Link key={l.href} className={`nav__link${isActive(l.href) ? " is-active" : ""}`} href={l.href}>
                {l.label}
              </Link>
            ))}
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
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Lab Services</Link>
        <div className="sub">
          <Link href="/services">All Services</Link>
          {SERVICE_LINKS.map((s) => (
            <Link key={s.title} href={s.href}>
              {s.title}
            </Link>
          ))}
        </div>
        <Link href="/insights">Insights</Link>
        <Link href="/portal">Dental Portal</Link>
        <Link href="/contact">Contact</Link>
        <div className="mnav__actions">
          <a className="btn" href={SITE.phoneHref}>
            <Icon name="phone" size={16} /> {SITE.phone}
          </a>
          <Link className="btn btn--light" href="/portal">
            Send a Case
          </Link>
        </div>
      </div>
    </>
  );
}

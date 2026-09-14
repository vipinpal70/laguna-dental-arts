import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons/Icon";
import { ProductIcon } from "@/components/icons/ProductIcon";
import { PdFaq } from "@/components/ui/PdFaq";
import { SCANNERS, SERVICES, buildServiceFaq, getService } from "@/data/services";
import { SITE } from "@/lib/site-data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const title = service.metaTitle || `${service.title} | Laguna Dental Arts`;
  const description = service.metaDescription || service.intro;
  const canonicalUrl = `https://lagunadentalarts.com/lab-services/${service.slug}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: service.image ? [{ url: service.image }] : undefined,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const faq = buildServiceFaq(service);
  const crumbLabel = service.breadcrumb
    ? (service.breadcrumb.includes("/")
        ? service.breadcrumb.split("/").pop()?.trim()
        : service.breadcrumb.split("›").pop()?.trim()) || service.title
    : service.title;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.lagunadentalarts.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Lab Services",
        "item": "https://www.lagunadentalarts.com/lab-services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": crumbLabel,
        "item": `https://www.lagunadentalarts.com/lab-services/${service.slug}`,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="pd-hero">
        <div className="container">
          <div className="pd-crumbs" style={{ fontSize: 12, color: "rgba(255,255,255,.58)" }}>
            <Link href="/">Home</Link> &nbsp;›&nbsp; <Link href="/lab-services">Lab Services</Link> &nbsp;›&nbsp; {crumbLabel}
          </div>
          <span className="pd-kicker" style={{ marginTop: 28 }}>{service.category}</span>
          <p
            className="pd-hero-title"
            dangerouslySetInnerHTML={{ __html: service.heroHtml }}
          />
        </div>
      </section>

      <section className="pd-detail">
        <div className="container pd-grid">
          <div className="pd-visual">
            {service.image ? (
              <Image src={service.image} alt={`${service.title} dental restoration`} width={600} height={450} />
            ) : (
              <ProductIcon name={service.art as never} />
            )}
          </div>
          <div className="pd-copy">
            <span className="pd-kicker" style={{ color: "var(--navy)" }}>{service.code}</span>
            <h1>{service.title}</h1>
            <p className="pd-intro">{service.intro}</p>

            <div className="pd-specs">
              {service.specs.map(([label, value]) => (
                <div className="pd-spec" key={label}>
                  <span>{label}</span>
                  <b>{value}</b>
                </div>
              ))}
            </div>

            {service.whereFits && (
              <div className="pd-fits" style={{ marginTop: 36 }}>
                <h3 style={{ fontSize: "1.15rem", color: "var(--navy)", marginBottom: 14, fontWeight: 700 }}>
                  {service.whereFits.title}
                </h3>
                <ul style={{ display: "grid", gap: 12, paddingLeft: 20, listStyleType: "disc", color: "#465273", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {service.whereFits.items.map((item, idx) => {
                    const colonIdx = item.indexOf(":");
                    if (colonIdx !== -1) {
                      const heading = item.slice(0, colonIdx);
                      const body = item.slice(colonIdx + 1);
                      return (
                        <li key={idx}>
                          <strong style={{ color: "var(--navy)" }}>{heading.replace(/^[-•\s]+/, "")}:</strong>{body}
                        </li>
                      );
                    }
                    return <li key={idx}>{item.replace(/^[-•\s]+/, "")}</li>;
                  })}
                </ul>
              </div>
            )}

            {service.featureSection && (
              <div className="pd-feature" style={{ marginTop: 32 }}>
                <h3 style={{ fontSize: "1.15rem", color: "var(--navy)", marginBottom: 12, fontWeight: 700 }}>
                  {service.featureSection.title}
                </h3>
                <p style={{ color: "var(--ink-soft)", fontSize: "0.98rem", lineHeight: 1.7 }}>
                  {service.featureSection.body}
                </p>
              </div>
            )}

            <div className="pd-included">
              <h2>What&apos;s included</h2>
              <ul>
                {service.included.map((item) => (
                  <li key={item}>
                    <span className="pd-check"><Icon name="check" size={12} strokeWidth={3} /></span>
                    <span>{item.replace(/^[-•\s]+/, "")}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pd-actions">
              <Link className="btn" href="/portal">
                Start a Case <Icon name="arrow" size={16} strokeWidth={2.4} className="arw" />
              </Link>
              <a className="pd-rx" href="/downloads">
                Download Rx Form
              </a>
            </div>
            <p className="pd-help">Questions? Call us at <strong>{SITE.phone}</strong>, 7 days a week.</p>

            <div className="pd-faq">
              <h2>Frequently asked questions</h2>
              <PdFaq items={faq} />
            </div>

            <div className="pd-scanners">
              <h2>Compatible scanners</h2>
              <div className="pd-chips">
                {SCANNERS.map((s) => <span className="pd-chip" key={s}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

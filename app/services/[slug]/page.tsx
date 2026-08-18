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
  return {
    title: service.title,
    description: service.intro,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const faq = buildServiceFaq(service);

  return (
    <main>
      <section className="pd-hero">
        <div className="container">
          <div className="pd-crumbs" style={{ fontSize: 12, color: "rgba(255,255,255,.58)" }}>
            <Link href="/">Home</Link> &nbsp;›&nbsp; <Link href="/services">Lab Services</Link> &nbsp;›&nbsp; {service.title}
          </div>
          <span className="pd-kicker" style={{ marginTop: 28 }}>{service.category}</span>
          <h1 dangerouslySetInnerHTML={{ __html: service.heroHtml }} />
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
            <h2>{service.title}</h2>
            <p className="pd-intro">{service.intro}</p>

            <div className="pd-specs">
              {service.specs.map(([label, value]) => (
                <div className="pd-spec" key={label}>
                  <span>{label}</span>
                  <b>{value}</b>
                </div>
              ))}
            </div>

            <div className="pd-included">
              <h3>What&apos;s included</h3>
              <ul>
                {service.included.map((item) => (
                  <li key={item}>
                    <span className="pd-check"><Icon name="check" size={12} strokeWidth={3} /></span>
                    <span>{item}</span>
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
            <p className="pd-help">Questions? Call us at <strong>{SITE.phone}</strong> — 7 days a week.</p>

            <div className="pd-faq">
              <h3>Frequently asked questions</h3>
              <PdFaq items={faq} />
            </div>

            <div className="pd-scanners">
              <h3>Compatible scanners</h3>
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

import Link from "next/link";
import { Icon } from "@/components/icons/Icon";

export function CtaBand({
  eyebrow,
  title,
  lead,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}) {
  return (
    <div className="section">
      <div className="container">
        <div className="cta-band reveal">
          <span className="eyebrow center">{eyebrow}</span>
          <h2 className="display" style={{ marginTop: 16 }}>{title}</h2>
          <p className="lead">{lead}</p>
          <div className="cta-band__actions">
            <Link className="btn btn--lg btn--light" href={primaryHref}>
              {primaryLabel} <Icon name="arrow" size={18} strokeWidth={2.4} className="arw" />
            </Link>
            <Link className="btn btn--lg btn--outline-light" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

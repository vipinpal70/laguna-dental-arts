import type { Metadata } from "next";
import { TermsClient } from "./TermsClient";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions of Service | Laguna Dental Arts",
  },
  description:
    "Review the terms and conditions governing Laguna Dental Arts dental laboratory services, billing, warranties, shipping and compliance.",
  alternates: {
    canonical: "https://lagunadentalarts.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions of Service | Laguna Dental Arts",
    description:
      "Review the terms and conditions governing Laguna Dental Arts dental laboratory services, billing, warranties, shipping and compliance.",
    url: "https://lagunadentalarts.com/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return <TermsClient />;
}

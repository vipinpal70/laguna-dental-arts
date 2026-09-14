import type { Metadata } from "next";
import { PrivacyClient } from "./PrivacyClient";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Laguna Dental Arts",
  },
  description:
    "Review the Laguna Dental Arts privacy policy, including HIPAA, CCPA, information collection, use and data security practices.",
  alternates: {
    canonical: "https://lagunadentalarts.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Laguna Dental Arts",
    description:
      "Review the Laguna Dental Arts privacy policy, including HIPAA, CCPA, information collection, use and data security practices.",
    url: "https://lagunadentalarts.com/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}

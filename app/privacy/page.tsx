import type { Metadata } from "next";
import { PrivacyClient } from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Laguna Dental Arts, explaining HIPAA compliance, data collection, CCPA rights, and protected health information safeguards.",
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}

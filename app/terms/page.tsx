import type { Metadata } from "next";
import { TermsClient } from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Laguna Dental Arts dental laboratory services, billing, warranties, shipping, and liability.",
};

export default function TermsPage() {
  return <TermsClient />;
}

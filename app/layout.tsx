import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Laguna Dental Arts — Full-Service Digital Dental Lab",
    template: "%s · Laguna Dental Arts",
  },
  description:
    "Partner with Laguna Dental Arts for crowns, implants, dentures, surgical guides and digital dental lab support from our California-based team.",
  metadataBase: new URL("https://www.lagunadentalarts.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}

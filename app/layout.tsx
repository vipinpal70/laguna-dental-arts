import type { Metadata } from "next";
import Script from "next/script";
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TNGTVDPR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TNGTVDPR');`,
          }}
        />
        <Header />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}

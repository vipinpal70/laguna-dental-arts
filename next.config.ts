import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.68.102'],
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/lab-services",
        permanent: true,
      },
      {
        source: "/services/:slug",
        destination: "/lab-services/:slug",
        permanent: true,
      },
      {
        source: "/rx/Laguna_Dental_Arts_Lab_Slip.pdf",
        destination: "/",
        permanent: true,
      },
      {
        source: "/digital-upload",
        destination: "https://upload.lagunadentalarts.com/",
        permanent: true,
      },
      {
        source: "/products/crown-and-bridge",
        destination: "/lab-services/crowns",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/products/removable",
        destination: "/lab-services/acrylic-denture",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/lab-services",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/",
        permanent: true,
      },
      {
        source: "/products/implant-supported",
        destination: "/lab-services/implants",
        permanent: true,
      },
      {
        source: "/products/orthodontics",
        destination: "/lab-services/orthodontics",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/",
        permanent: true,
      },
      {
        source: "/premium-crown-and-bridge",
        destination: "/lab-services/bridges",
        permanent: true,
      },
      {
        source: "/products/surgical-guides",
        destination: "/lab-services/surgical-guides",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

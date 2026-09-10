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
    ];
  },
};

export default nextConfig;

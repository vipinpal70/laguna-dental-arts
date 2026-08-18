import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";

const BASE_URL = "https://www.lagunadentalarts.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/insights",
    "/portal",
    "/shipping-label",
    "/track-case",
    "/terms",
    "/privacy",
    "/downloads",
  ];

  const routes = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...serviceRoutes];
}

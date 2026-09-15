import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { getPublishedInsights } from "@/lib/insights-db";

const BASE_URL = "https://www.lagunadentalarts.com";

// Regenerate on every request so newly published insights appear in the
// sitemap without a rebuild (matches the insights pages' rendering mode).
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/lab-services",
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
    url: `${BASE_URL}/lab-services/${s.slug}`,
    lastModified: new Date(),
  }));

  const insights = await getPublishedInsights();
  const insightRoutes = insights.map((article) => ({
    url: `${BASE_URL}/insights/${article.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...serviceRoutes, ...insightRoutes];
}

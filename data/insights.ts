export type InsightCategory = "digital-dentistry" | "materials" | "clinical" | "industry" | "case-studies" | (string & {});

export type InsightArticle = {
  _id?: string;
  slug: string;
  category: InsightCategory;
  categoryLabel: string;
  title: string;
  desc: string;
  description?: string;
  date: string;
  readDuration?: string;
  writer?: string;
  designation?: string;
  imageUrl?: string;
  content?: string;
  published?: boolean;
  icon?: "layers" | "precision" | "globe" | "design" | "star" | "track";
};

export const INSIGHT_CATEGORIES: { key: InsightCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "digital-dentistry", label: "Digital Dentistry" },
  { key: "materials", label: "Materials" },
  { key: "clinical", label: "Clinical" },
  { key: "industry", label: "Industry" },
  { key: "case-studies", label: "Case Studies" },
];

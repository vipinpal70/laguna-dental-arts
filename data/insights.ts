export type InsightCategory = "digital-dentistry" | "materials" | "clinical" | "industry" | "case-studies";

export type InsightArticle = {
  slug: string;
  category: InsightCategory;
  categoryLabel: string;
  title: string;
  desc: string;
  date: string;
  icon: "layers" | "precision" | "globe" | "design" | "star" | "track";
};

export const INSIGHT_CATEGORIES: { key: InsightCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "digital-dentistry", label: "Digital Dentistry" },
  { key: "materials", label: "Materials" },
  { key: "clinical", label: "Clinical" },
  { key: "industry", label: "Industry" },
  { key: "case-studies", label: "Case Studies" },
];

export const FEATURED_ARTICLE = {
  category: "digital-dentistry" as InsightCategory,
  categoryLabel: "Digital Dentistry · Featured",
  title: "How full-arch digital workflows are compressing chairside time",
  desc: "Scan-to-design pipelines are quietly reshaping full-arch treatment. We break down where the time savings actually come from — and the handoffs that still slow cases down.",
};

export const INSIGHT_ARTICLES: InsightArticle[] = [
  { slug: "zirconia-vs-lithium-disilicate", category: "materials", categoryLabel: "Materials", icon: "layers", title: "Zirconia vs. lithium disilicate: choosing by indication", desc: "A practical framework for picking the right ceramic based on prep, load and esthetic demand.", date: "MAR 12, 2026" },
  { slug: "predictable-margins-checklist", category: "clinical", categoryLabel: "Clinical", icon: "precision", title: "A prosthodontist's checklist for predictable margins", desc: "Small chairside habits that make the biggest difference to marginal fit and seating time.", date: "FEB 28, 2026" },
  { slug: "intraoral-scanning-adoption-2026", category: "industry", categoryLabel: "Industry", icon: "globe", title: "What intraoral scanning adoption looks like in 2026", desc: "Where scanner penetration stands, and what it means for the practices still on impressions.", date: "FEB 09, 2026" },
  { slug: "designing-for-the-mill", category: "digital-dentistry", categoryLabel: "Digital Dentistry", icon: "design", title: "Designing for the mill: contacts, contours and cement gaps", desc: "How design parameters upstream quietly determine how a unit fits at the chair.", date: "JAN 24, 2026" },
  { slug: "shade-communication", category: "clinical", categoryLabel: "Clinical", icon: "star", title: "Shade communication that actually survives the lab", desc: "Photography and notes that help our ceramists match what you see in the operatory.", date: "JAN 10, 2026" },
  { slug: "full-arch-conversion-nine-days", category: "case-studies", categoryLabel: "Case Study", icon: "track", title: "Full-arch conversion, start to seat, in nine days", desc: "A step-by-step walkthrough of one full-arch case through our digital pipeline.", date: "DEC 15, 2025" },
];

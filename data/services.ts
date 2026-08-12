export type ServiceSpec = [string, string];

export type Service = {
  slug: string;
  code: string;
  category: string;
  categories: string[];
  title: string;
  heroHtml: string;
  art: string;
  image?: string;
  cardDesc: string;
  intro: string;
  specs: ServiceSpec[];
  included: string[];
  faq: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "crowns",
    code: "CRWN · 01",
    category: "Crown & Bridge",
    categories: ["fixed", "digital"],
    title: "Crowns",
    heroHtml: "Precision-milled <em>crowns.</em>",
    art: "crown",
    image: "/images/products/crown-bridge.png",
    cardDesc: "Single-unit zirconia, e.max and PFM crowns milled to a precise marginal fit.",
    intro: "Our full-contour and layered crowns are designed from premium zirconia, lithium disilicate and PFM systems. Each restoration is milled or pressed, finished by experienced ceramists and verified before delivery.",
    specs: [["Turnaround", "5 Business Days"], ["Fit Accuracy", "Sub–30µm"], ["Materials", "Zirconia / e.max / PFM"], ["Shade System", "VITA Classical"]],
    included: [
      "High-translucency options for anterior esthetics",
      "High-strength grades for posterior load-bearing cases",
      "Layered ceramics available for premium cases",
      "Biocompatible, clinically proven materials",
      "Compatible with all major digital workflows",
      "Rush options available by confirmation",
    ],
    faq: [],
  },
  {
    slug: "bridges",
    code: "BRDG · 02",
    category: "Crown & Bridge",
    categories: ["fixed", "digital"],
    title: "Bridges",
    heroHtml: "Engineered spans. <em>Predictable fit.</em>",
    art: "bridge",
    image: "/images/products/full-arch-solutions.png",
    cardDesc: "Multi-unit restorations engineered for strength, fit and natural contour.",
    intro: "Multi-unit bridges are engineered for strength, connector integrity and clean tissue contours. Our team balances material selection, span length and esthetics for a restoration designed to seat confidently.",
    specs: [["Turnaround", "7 Business Days"], ["Design Review", "Available"], ["Materials", "Zirconia / PFM"], ["Span Options", "3-unit to full-arch"]],
    included: [
      "Full-contour and layered zirconia options",
      "Connector dimensions reviewed for the indication",
      "Pontic contours designed for hygienic access",
      "Digital design review available when requested",
      "Major scanner workflows accepted",
      "Case-specific support from our technical team",
    ],
    faq: [],
  },
  {
    slug: "implants",
    code: "IMPL · 03",
    category: "Implant Restorations",
    categories: ["implant", "fixed", "digital"],
    title: "Implant Restorations",
    heroHtml: "Built around the <em>implant.</em>",
    art: "implant",
    image: "/images/products/implant-restorations.png",
    cardDesc: "Custom abutments and screw-retained restorations on all major systems.",
    intro: "Custom abutments, screw-retained crowns and full-arch implant restorations are planned around the restorative space, tissue architecture and approved implant components.",
    specs: [["Turnaround", "7–10 Business Days"], ["Systems", "Major Platforms"], ["Materials", "Titanium / Zirconia"], ["Retention", "Screw / Cement"]],
    included: [
      "Custom emergence-profile design",
      "Titanium, zirconia and Ti-base options",
      "Screw-channel positioning reviewed before production",
      "Authentic or approved compatible components",
      "Full-arch planning support",
      "Digital and traditional submissions accepted",
    ],
    faq: [],
  },
  {
    slug: "veneers",
    code: "VNR · 04",
    category: "Cosmetic Ceramics",
    categories: ["fixed"],
    title: "Veneers",
    heroHtml: "Thin ceramics. <em>Natural light.</em>",
    art: "veneer",
    cardDesc: "Ultra-thin layered ceramics with lifelike translucency and shade mapping.",
    intro: "Layered and pressed veneers are crafted for lifelike translucency, surface texture and shade integration. Every case is evaluated for preparation, material thickness and the intended smile design.",
    specs: [["Turnaround", "7 Business Days"], ["Thickness", "Case Specific"], ["Material", "Lithium Disilicate"], ["Shade System", "VITA Classical"]],
    included: [
      "Layered and pressed ceramic options",
      "Diagnostic wax-up support",
      "Texture and characterization matched to photographs",
      "Stump-shade consideration for predictable value",
      "Try-in guidance available",
      "Digital smile-design records welcomed",
    ],
    faq: [],
  },
  {
    slug: "dentures",
    code: "DNTR · 05",
    category: "Removables",
    categories: ["removable", "digital"],
    title: "Dentures",
    heroHtml: "Digital dentures. <em>Repeatable fit.</em>",
    art: "denture",
    image: "/images/products/removables-partials.png",
    cardDesc: "Digitally designed full and partial dentures with a repeatable, archived fit.",
    intro: "Full dentures, partial frameworks and implant overdentures are designed for balanced function, natural tooth arrangement and an archived workflow that makes future service simpler.",
    specs: [["Turnaround", "10 Business Days"], ["Workflow", "Digital / Traditional"], ["Bases", "Milled / Printed"], ["Options", "Full / Partial / Overdenture"]],
    included: [
      "Digitally archived tooth arrangement and base design",
      "Full and partial denture workflows",
      "Implant overdenture support",
      "Natural gingival characterization options",
      "Try-in stages available by case type",
      "Repair and reline services available",
    ],
    faq: [],
  },
  {
    slug: "night-guards",
    code: "GRD · 06",
    category: "Guards & Appliances",
    categories: ["removable", "digital"],
    title: "Night Guards",
    heroHtml: "Protection designed for <em>comfort.</em>",
    art: "nightguard",
    image: "/images/products/night-guards.png",
    cardDesc: "Hard and dual-laminate guards that protect against bruxism and wear.",
    intro: "Hard, soft and dual-laminate guards are fabricated from accurate digital or traditional records, with thoughtful occlusal refinement and polished edges for patient comfort.",
    specs: [["Turnaround", "5 Business Days"], ["Materials", "Hard / Dual Laminate"], ["Designs", "Flat Plane / Anterior"], ["Workflow", "Digital / Traditional"]],
    included: [
      "Bruxism and protective appliance options",
      "Comfort-focused border finishing",
      "Occlusal adjustment before delivery",
      "Upper or lower arch designs",
      "Digital files archived for replacement",
      "Rush service available by confirmation",
    ],
    faq: [],
  },
  {
    slug: "orthodontics",
    code: "ORTHO · 07",
    category: "Orthodontic Appliances",
    categories: ["removable", "digital"],
    title: "Orthodontics",
    heroHtml: "Digital appliances made to <em>move.</em>",
    art: "ortho",
    cardDesc: "Clear aligners, retainers and indirect bonding trays from digital scans.",
    intro: "Clear retainers, aligner-related appliances and indirect bonding solutions are produced from precise digital records for predictable fit and an efficient clinical workflow.",
    specs: [["Turnaround", "5–7 Business Days"], ["Records", "STL / PLY / Models"], ["Appliances", "Retainers / Aligners"], ["Planning", "Digital"]],
    included: [
      "Clear retainer fabrication",
      "Digital setup support",
      "Indirect bonding tray options",
      "Accurate trim lines and polished borders",
      "Archived files for replacement appliances",
      "Open scanner-file compatibility",
    ],
    faq: [],
  },
  {
    slug: "sleep-appliances",
    code: "SLEEP · 08",
    category: "Sleep Appliances",
    categories: ["removable", "digital"],
    title: "Sleep Appliances",
    heroHtml: "Better nights start with a <em>precise fit.</em>",
    art: "sleep",
    cardDesc: "Mandibular advancement devices for snoring and mild-to-moderate OSA.",
    intro: "Mandibular advancement devices are fabricated for comfort, adjustability and repeatable fit, supporting dentist-directed treatment for snoring and appropriate sleep-disordered breathing cases.",
    specs: [["Turnaround", "10 Business Days"], ["Design", "Titratable"], ["Workflow", "Digital / Traditional"], ["Support", "Adjustment Guidance"]],
    included: [
      "Multiple appliance designs available",
      "Patient-comfort focused finishing",
      "Titratable advancement options",
      "Digital records accepted",
      "Replacement and repair support",
      "Case review available before production",
    ],
    faq: [],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function buildServiceFaq(service: Service) {
  return [
    { q: `What records should I send for a ${service.title} case?`, a: "Send a completed prescription, the final digital scan or impression, opposing arch, bite record and all relevant photographs or component details. Complete records help us confirm the design before production." },
    { q: `Do you accept digital scans for ${service.title}?`, a: "Yes. We accept major intraoral scanner workflows as well as open STL and PLY files. Contact our team if you need help connecting your scanner or transferring a case." },
    { q: `What is the typical turnaround time for ${service.title}?`, a: `The standard estimate for this product is ${service.specs[0][1]}. Timing can vary with complexity, material, records and approval requirements, so confirm the current schedule when submitting.` },
    { q: "Can your team help me select the right material or design?", a: "Yes. Include the clinical indication, restorative space, esthetic goals and occlusal considerations with the case. Our technical team can review the options before production begins." },
    { q: `Are rush ${service.title} cases available?`, a: "Rush service may be available depending on the case type, records and production schedule. Please call before sending the case so we can confirm feasibility and the requested delivery date." },
  ];
}

export const SCANNERS = ["iTero", "3Shape", "Medit", "Carestream", "Dexis", "Sirona", "Planmeca"];

export type ServiceSpec = [string, string];

export type Service = {
  slug: string;
  code: string;
  category: string;
  categories: string[];
  title: string;
  h1?: string;
  subtext?: string;
  headline?: string;
  heroHtml: string;
  art: string;
  image?: string;
  cardDesc: string;
  intro: string;
  metaTitle?: string;
  metaDescription?: string;
  breadcrumb?: string;
  specs: ServiceSpec[];
  whereFits?: {
    title: string;
    items: string[];
  };
  featureSection?: {
    title: string;
    body: string;
  };
  included: string[];
  faq: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    "slug": "crowns",
    "code": "CRWN · 01",
    "category": "Crown & Bridge",
    "categories": [
      "fixed",
      "crown"
    ],
    "title": "Crown",
    "heroHtml": "Precision-milled <em>crown.</em>",
    "art": "crown",
    "image": "/assets/LDA_product_images/dental-crown.png",
    "cardDesc": "Our full-contour and layered crowns are designed from premium zirconia, lithium disilicate and PFM systems. Each restoration is milled or pressed, finished by experienced ceramists and verified before delivery.",
    "intro": "Our full-contour and layered crowns are designed from premium zirconia, lithium disilicate and PFM systems. Each restoration is milled or pressed, finished by experienced ceramists and verified before delivery.",
    "metaTitle": "Dental Crowns | Full-Contour & Layered | Laguna Dental Arts",
    "metaDescription": "Full-contour and layered dental crowns crafted in zirconia, lithium disilicate, and PFM for dependable margins and natural aesthetics. Start a case today.",
    "breadcrumb": "Home / Lab Services / Crowns",
    "specs": [
      [
        "Turnaround",
        "6–9 Days in lab"
      ],
      [
        "Fit Accuracy",
        "Sub–30µm"
      ],
      [
        "Materials",
        "Zirconia / e.max / PFM"
      ],
      [
        "Shade System",
        "VITA Classical"
      ]
    ],
    "included": [
      "High-translucency options for anterior esthetics",
      "High-strength grades for posterior load-bearing cases",
      "Layered ceramics available for premium cases",
      "Biocompatible, clinically proven materials",
      "Compatible with all major digital workflows",
      "Rush options available by confirmation"
    ],
    "faq": []
  },
  {
    "slug": "bridges",
    "code": "BRDG · 02",
    "category": "Crown & Bridge",
    "categories": [
      "fixed"
    ],
    "title": "Bridges",
    "heroHtml": "Engineered spans. <em>Predictable fit.</em>",
    "art": "bridge",
    "image": "/assets/LDA_product_images/dental-bridge.png",
    "cardDesc": "Multi-unit bridges are engineered for strength, connector integrity and clean tissue contours. Our team balances material selection, span length and esthetics for a restoration designed to seat confidently.",
    "intro": "Multi-unit bridges are engineered for strength, connector integrity and clean tissue contours. Our team balances material selection, span length and esthetics for a restoration designed to seat confidently.",
    "metaTitle": "Dental Bridges | Engineered Spans & Fit | Laguna Dental Arts",
    "metaDescription": "Multi-unit dental bridges engineered for strength, connector integrity and clean tissue contours. Zirconia and PFM options. Start a case today.",
    "breadcrumb": "Home / Lab Services / Bridges",
    "specs": [
      [
        "Turnaround",
        "8–10 Days in lab"
      ],
      [
        "Design Review",
        "Available"
      ],
      [
        "Materials",
        "Zirconia / PFM"
      ],
      [
        "Span Options",
        "3-unit to full-arch"
      ]
    ],
    "included": [
      "Full-contour and layered zirconia options",
      "Connector dimensions reviewed for the indication",
      "Pontic contours designed for hygienic access",
      "Digital design review available when requested",
      "Major scanner workflows accepted",
      "Case-specific support from our technical team"
    ],
    "faq": []
  },
  {
    "slug": "implants",
    "code": "IMPL · 03",
    "category": "Implant Restoration",
    "categories": [
      "implant"
    ],
    "title": "Implant Restoration",
    "heroHtml": "Built around the <em>implant.</em>",
    "art": "implant",
    "image": "/assets/LDA_product_images/implant-restoration.png",
    "cardDesc": "Custom abutments, screw-retained crowns and full-arch implant restoration are planned around the restorative space, tissue architecture and approved implant components.",
    "intro": "Custom abutments, screw-retained crowns and full-arch implant restoration are planned around the restorative space, tissue architecture and approved implant components.",
    "metaTitle": "Implant Restorations | Custom Abutments & Crowns | Laguna Dental Arts",
    "metaDescription": "Custom implant abutments and screw-retained crowns designed to specific implant platforms for stable emergence and tissue health. Start a case today.",
    "breadcrumb": "Home / Lab Services / Implant Restoration",
    "specs": [
      [
        "Turnaround",
        "10–14 Days in lab"
      ],
      [
        "Systems",
        "Major Platforms"
      ],
      [
        "Materials",
        "Titanium / Zirconia"
      ],
      [
        "Retention",
        "Screw / Cement"
      ]
    ],
    "included": [
      "Custom emergence-profile design",
      "Titanium, zirconia and Ti-base options",
      "Screw-channel positioning reviewed before production",
      "Authentic or approved compatible components",
      "Full-arch planning support",
      "Digital and traditional submissions accepted"
    ],
    "faq": []
  },
  {
    "slug": "veneers",
    "code": "VNR · 04",
    "category": "Cosmetic Ceramics",
    "categories": [
      "fixed"
    ],
    "title": "Veneers",
    "heroHtml": "Thin ceramics. <em>Natural light.</em>",
    "art": "veneer",
    "image": "/assets/LDA_product_images/dental-veneers.png",
    "cardDesc": "Layered and pressed veneers are crafted for lifelike translucency, surface texture and shade integration. Every case is evaluated for preparation, material thickness and the intended smile design.",
    "intro": "Layered and pressed veneers are crafted for lifelike translucency, surface texture and shade integration. Every case is evaluated for preparation, material thickness and the intended smile design.",
    "metaTitle": "Dental Veneers | Aesthetic Ceramic Veneers | Laguna Dental Arts",
    "metaDescription": "Ultra-thin aesthetic dental veneers handcrafted in lithium disilicate and feldspathic porcelain for lifelike translucency and precise fit. Start a case.",
    "breadcrumb": "Home / Lab Services / Veneers",
    "specs": [
      [
        "Turnaround",
        "8 Days in lab"
      ],
      [
        "Thickness",
        "Case Specific"
      ],
      [
        "Material",
        "Lithium Disilicate"
      ],
      [
        "Shade System",
        "VITA Classical"
      ]
    ],
    "included": [
      "Layered and pressed ceramic options",
      "Diagnostic wax-up support",
      "Texture and characterization matched to photographs",
      "Stump-shade consideration for predictable value",
      "Try-in guidance available",
      "Digital smile-design records welcomed"
    ],
    "faq": []
  },
  {
    "slug": "dentures",
    "code": "DNTR · 05",
    "category": "Removables",
    "categories": [
      "digital",
      "removable"
    ],
    "title": "Digital Dentures",
    "heroHtml": "Digital dentures. <br /><em>Repeatable fit.</em>",
    "art": "denture",
    "image": "/assets/LDA_product_images/Denture.jpeg",
    "cardDesc": "Full dentures, partial frameworks and implant overdentures are designed for balanced function, natural tooth arrangement and an archived workflow that makes future service simpler.",
    "intro": "Full dentures, partial frameworks and implant overdentures are designed for balanced function, natural tooth arrangement and an archived workflow that makes future service simpler.",
    "metaTitle": "Digital Dentures | Full & Partial Removables | Laguna Dental Arts",
    "metaDescription": "Precision digital dentures and removables designed for balanced occlusion, comfortable borders, and natural smile aesthetics. Start a case today.",
    "breadcrumb": "Home / Lab Services / Digital Dentures",
    "specs": [
      [
        "Turnaround",
        "8–9 Days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Bases",
        "Milled / Printed"
      ],
      [
        "Options",
        "Full / Partial / Overdenture"
      ]
    ],
    "included": [
      "Digitally archived tooth arrangement and base design",
      "Full and partial denture workflows",
      "Implant overdenture support",
      "Natural gingival characterization options",
      "Try-in stages available by case type",
      "Repair and reline services available"
    ],
    "faq": []
  },
  {
    "slug": "night-guards",
    "code": "GRD · 06",
    "category": "Guards & Appliances",
    "categories": [
      "digital"
    ],
    "title": "Night Guards",
    "heroHtml": "Protection designed for <em>comfort.</em>",
    "art": "nightguard",
    "image": "/assets/LDA_product_images/night-guards.jpeg",
    "cardDesc": "Hard, soft and dual-laminate protection finished for patient comfort.",
    "intro": "Hard, soft and dual-laminate guards are fabricated from accurate digital or traditional records, with thoughtful occlusal refinement and polished edges for patient comfort.",
    "metaTitle": "Night Guards & Splints | Occlusal Protection | Laguna Dental Arts",
    "metaDescription": "Custom night guards, hard-soft splints, and occlusal appliances designed from digital impressions for accurate retention and wear protection. Start a case.",
    "breadcrumb": "Home / Lab Services / Night Guards",
    "specs": [
      [
        "Turnaround",
        "4–7 Days in lab"
      ],
      [
        "Materials",
        "Hard / Dual Laminate"
      ],
      [
        "Designs",
        "Flat Plane / Anterior"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ]
    ],
    "included": [
      "Bruxism and protective appliance options",
      "Comfort-focused border finishing",
      "Occlusal adjustment before delivery",
      "Upper or lower arch designs",
      "Digital files archived for replacement",
      "Rush service available by confirmation"
    ],
    "faq": []
  },
  {
    "slug": "orthodontics",
    "code": "ORTHO · 07",
    "category": "Orthodontic Appliances",
    "categories": [
      "digital"
    ],
    "title": "Orthodontics",
    "heroHtml": "Digital appliances made to <em>move.</em>",
    "art": "ortho",
    "image": "/assets/LDA_product_images/orthodontics.png",
    "cardDesc": "Clear retainers, related appliances and indirect bonding solutions are produced from precise digital records for predictable fit and an efficient clinical workflow.",
    "intro": "Retainers, indirect bonding trays and custom orthodontic appliances are produced from precise digital records for a predictable fit and an efficient clinical workflow.",
    "metaTitle": "Orthodontic Appliances | Retainers & Trays | Laguna Dental Arts",
    "metaDescription": "Clear retainers, indirect bonding trays, and orthodontic appliances fabricated from high-accuracy digital setups and durable polymers. Start a case.",
    "breadcrumb": "Home / Lab Services / Orthodontics",
    "specs": [
      [
        "Turnaround",
        "5–7 Days in lab"
      ],
      [
        "Records",
        "STL / PLY / Models"
      ],
      [
        "Appliances",
        "Retainers / Aligners"
      ],
      [
        "Planning",
        "Digital"
      ]
    ],
    "included": [
      "Clear retainer fabrication",
      "Digital setup support",
      "Indirect bonding tray options",
      "Accurate trim lines and polished borders",
      "Archived files for replacement appliances",
      "Open scanner-file compatibility"
    ],
    "faq": []
  },
  {
    "slug": "zirconia-crowns",
    "code": "CRWN · 09",
    "category": "Crown & Bridge",
    "categories": [
      "fixed",
      "crown"
    ],
    "title": "Zirconia Crowns",
    "heroHtml": "Strength shaped with <em>precision.</em>",
    "art": "crown",
    "image": "/assets/LDA_product_images/zirconia-crowns.png",
    "cardDesc": "High-strength crowns with precise margins and monolithic or layered finishing.",
    "intro": "High-strength monolithic and layered zirconia crowns, milled for dependable margins, controlled occlusion and a natural finish. As a zirconia crown lab, we match the material to the restorative zone and clinical demand, so a molar gets full-contour strength while an anterior tooth gets layered translucency. Every case is designed against your prescription and verified before it ships, so the zirconia crowns seat with minimal chairside adjustment and your appointment stays short. Send a digital scan or a traditional impression, and our technicians confirm the design with you before anything reaches the mill.",
    "metaTitle": "Zirconia Crowns | Monolithic & Layered | Laguna Dental Arts",
    "metaDescription": "Monolithic and layered zirconia crowns milled for dependable margins, controlled occlusion and a natural finish. Digital or traditional workflow. Start a case today.",
    "breadcrumb": "Home / Lab Services / Zirconia Crowns",
    "specs": [
      [
        "Turnaround",
        "6–9 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Zirconia"
      ],
      [
        "Options",
        "Monolithic / Layered"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a zirconia crown case?",
        "a": "Send a completed prescription, the final digital scan or impression, opposing arch, bite record, shade, and any photographs or component details. Complete records let us confirm the zirconia crowns design before production."
      },
      {
        "q": "Do you accept digital scans for zirconia crowns?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files. Contact our team if you need help connecting your scanner or transferring a case."
      },
      {
        "q": "What is the typical turnaround for zirconia crowns?",
        "a": "The standard estimate is 6 to 9 days in lab. Timing varies with complexity, material, records, and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "Can your team help me choose monolithic or layered zirconia crowns?",
        "a": "Yes. Share the clinical indication, restorative space, esthetic goals, and occlusion, and our technicians recommend monolithic strength or layered esthetics before production."
      },
      {
        "q": "Are rush zirconia crowns cases available?",
        "a": "Rush service may be available depending on case type, records, and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Zirconia crowns, strength shaped with precision",
    "headline": "Dependable Monolithic & Layered Zirconia Crowns",
    "whereFits": {
      "title": "Where zirconia crowns fit",
      "items": [
        "Posterior strength: Full-contour monolithic zirconia crowns for molars and premolars under heavy load.",
        "Anterior esthetics: Layered zirconia crowns where translucency and shade blending matter most.",
        "Bruxers and implant crowns: High-strength zirconia crowns for grinders and for screw-retained or cemented implant restorations."
      ]
    },
    "featureSection": {
      "title": "Finish and fit you can rely on",
      "body": "Milling is only half the job. Our ceramists refine contour, contact and surface texture by hand, then check the margin and occlusion against your records. That is why dentists who switch their zirconia crowns to Laguna report fewer remakes and shorter seating appointments, case after case. When a shade is difficult, send calibrated photos and a stump shade, and our team matches the result to the tooth beside it."
    },
    "h1": "Zirconia Crowns"
  },
  {
    "slug": "all-on-x-hybrids",
    "code": "ARCH · 10",
    "category": "Implant Solutions",
    "categories": [
      "implant"
    ],
    "title": "All-on-X Hybrids",
    "heroHtml": "One arch. <em>One coordinated plan.</em>",
    "art": "bridge",
    "image": "/assets/LDA_product_images/all-on-x-hybrids.png",
    "cardDesc": "Coordinated full-arch zirconia and PMMA workflows from records to approval.",
    "intro": "Full-arch hybrid restorations planned from approved records, restorative space and implant positions. An all-on-x hybrid replaces a full arch on four or more implants, so we coordinate design checkpoints with you before the case moves into final production. It is screw-retained for retrievability, built on a rigid framework, and finished for a natural gumline and tooth setup. Send the implant system and verified records, and we confirm the interface before anything is milled.",
    "metaTitle": "All-on-X Hybrid Full-Arch Restorations | Laguna Dental Arts",
    "metaDescription": "All-on-X hybrid full-arch restorations planned from your records, restorative space and implant positions. Zirconia or PMMA, All-on-4 or All-on-6. Start a case.",
    "breadcrumb": "Home / Lab Services / All-on-X Hybrids",
    "specs": [
      [
        "Turnaround",
        "10–14 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Zirconia / PMMA"
      ],
      [
        "Options",
        "All-on-4 / All-on-6"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for an all-on-x hybrid case?",
        "a": "Send a completed prescription, an implant-level scan or impression, opposing arch, bite record, the implant system and platform, and photographs or component details. Verified full-arch records let us confirm the all-on-x hybrid design before production."
      },
      {
        "q": "Do you accept digital scans for all-on-x hybrid cases?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, plus scan-body captures for implant positions. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for an all-on-x hybrid?",
        "a": "The standard estimate is 10 to 14 days in lab. Timing varies with complexity, material, records and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "Do you support All-on-4 and All-on-6 designs?",
        "a": "Yes. We build the all-on-x hybrid framework to your implant count and positions in zirconia or PMMA, and our technicians review the plan with you before milling."
      },
      {
        "q": "Are rush all-on-x hybrid cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Reliable All-on-X Hybrid Full-Arch Restorations",
    "headline": "All-on-X hybrid, one arch and one coordinated plan",
    "whereFits": {
      "title": "Where an all-on-x hybrid fits",
      "items": [
        "Full-arch replacement: A fixed, screw-retained all-on-x hybrid for edentulous or terminal-dentition arches.",
        "Immediate and definitive stages: PMMA for the healing and conversion phase, zirconia for the definitive restoration.",
        "All-on-4 and All-on-6: Framework designed to the implant count, position and load."
      ]
    },
    "featureSection": {
      "title": "Planned for passive fit",
      "body": "A full-arch case lives or dies on passive fit. We design the all-on-x hybrid against the verified implant positions, check the framework digitally, and finish so load spreads evenly across every implant instead of stressing one. Every case ships with the components, torque notes and screws your team needs at delivery, so the seat appointment runs without surprises."
    },
    "h1": "All-on-X Hybrids"
  },
  {
    "slug": "full-arch",
    "code": "ARCH · 33",
    "category": "Implant Solutions",
    "categories": [
      "implant"
    ],
    "title": "Full Arch",
    "heroHtml": "Full Arch. <em>One coordinated plan.</em>",
    "art": "bridge",
    "image": "/assets/LDA_product_images/full-arch.png",
    "cardDesc": "Coordinated full-arch zirconia and PMMA workflows from records to approval.",
    "intro": "Full-arch restorations are planned from approved records, restorative space and implant positions. Our team coordinates design checkpoints before the case moves into final production.",
    "metaTitle": "Full-Arch Solutions | Implant Hybrids & Bridges | Laguna Dental Arts",
    "metaDescription": "Comprehensive full-arch implant restorations, All-on-X hybrids, and monolithic zirconia bridges planned for passive fit and durability. Start a case.",
    "breadcrumb": "Home / Lab Services / Full Arch",
    "specs": [
      [
        "Turnaround",
        "10–14 Days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Zirconia / PMMA"
      ],
      [
        "Options",
        "All-on-4 / All-on-6"
      ]
    ],
    "included": [
      "Design reviewed against the submitted prescription and records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance available before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": []
  },
  {
    "slug": "e-max-restorations",
    "code": "EMAX · 11",
    "category": "Ceramics",
    "categories": [
      "fixed",
      "crown"
    ],
    "title": "e.max Restorations",
    "heroHtml": "Translucency with <em>purpose.</em>",
    "art": "veneer",
    "image": "/assets/LDA_product_images/e-max-restorations-full-arch-v2.png",
    "cardDesc": "Lifelike lithium-disilicate veneers, inlays, onlays and selected crowns.",
    "intro": "Lithium-disilicate e.max restorations balance strength with lifelike light transmission for veneers, inlays, onlays and selected crowns. Each case is finished to the prescribed shade and surface character by hand, so light moves through the restoration the way it moves through enamel. Send calibrated photos and a stump shade for tough anterior matches, and our ceramists build the result to the tooth beside it.",
    "metaTitle": "e.max Restorations | Lithium Disilicate | Laguna Dental Arts",
    "metaDescription": "e.max restorations in lithium disilicate for veneers, inlays, onlays and crowns, finished to your shade and surface character. Pressed or milled. Start a case.",
    "breadcrumb": "Home / Lab Services / e.max Restorations",
    "specs": [
      [
        "Turnaround",
        "8 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Lithium Disilicate"
      ],
      [
        "Options",
        "Pressed / Milled"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for an e.max restorations case?",
        "a": "Send a completed prescription, the final digital scan or impression, opposing arch, bite record, stump shade, requested final shade, and calibrated photographs. Complete records let us confirm the e.max restorations design before production."
      },
      {
        "q": "Do you accept digital scans for e.max restorations?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files. Contact our team if you need help connecting your scanner or transferring a case."
      },
      {
        "q": "What is the typical turnaround for e.max restorations?",
        "a": "The standard estimate is 8 days in lab. Timing varies with complexity, material, records and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "Should I choose pressed or milled e.max restorations?",
        "a": "It depends on thickness, esthetic demand and workflow. Share the indication, reduction and shade goals, and our technicians recommend pressed or milled before production."
      },
      {
        "q": "Are rush e.max restorations cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "e.max restorations in lithium disilicate for veneers, inlays, onlays and crowns.",
    "headline": "e.max restorations, translucency with purpose",
    "whereFits": {
      "title": "Where e.max restorations fit",
      "items": [
        "Anterior veneers: Thin, layered e.max restorations where translucency decides the result.",
        "Inlays and onlays: Conservative, tooth-preserving restorations with a natural finish.",
        "Single crowns: Anterior and selected posterior crowns where esthetics lead."
      ]
    },
    "featureSection": {
      "title": "Pressed or milled, matched to the case",
      "body": "e.max comes pressed or milled, and each has a place. Pressed favors thin, highly esthetic veneers and refined margins, while milled suits an efficient digital workflow. Whichever route the case takes, our team characterizes shade and texture by hand and verifies contacts and margin before the e.max restorations ship. When a posterior case needs more raw strength than lithium disilicate offers, we tell you and point you to zirconia."
    },
    "h1": "e.max Restorations"
  },
  {
    "slug": "pfm-crowns",
    "code": "PFM · 12",
    "category": "Ceramics",
    "categories": [
      "fixed",
      "crown"
    ],
    "title": "PFM Crowns",
    "heroHtml": "Proven strength. <em>Refined porcelain.</em>",
    "art": "crown",
    "image": "/assets/LDA_product_images/pfm-crowns.png",
    "cardDesc": "A proven metal-ceramic solution for durable crowns and bridges.",
    "intro": "Porcelain-fused-to-metal PFM crowns combine a durable substructure with hand-finished porcelain. They remain a practical choice where strength, conventional preparation and shade control work together, on single units and multi-unit bridges. Our ceramists build the porcelain for translucency and color and design the coping so margins stay clean and the metal stays hidden.",
    "metaTitle": "PFM Crowns | Porcelain-Fused-to-Metal | Laguna Dental Arts",
    "metaDescription": "PFM crowns pairing a durable metal substructure with hand-finished porcelain for strength, conventional prep and shade control. Crown or bridge. Start a case.",
    "breadcrumb": "Home / Lab Services / PFM Crowns",
    "specs": [
      [
        "Turnaround",
        "8 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Porcelain / Alloy"
      ],
      [
        "Options",
        "Crown / Bridge"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a PFM crowns case?",
        "a": "Send a completed prescription, the final scan or impression, opposing arch, bite record, shade, and the framework alloy or pontic design for bridges. Complete records let us confirm the PFM crowns design before production."
      },
      {
        "q": "Do you accept digital scans for PFM crowns?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files. Contact our team if you need help connecting your scanner or transferring a case."
      },
      {
        "q": "What is the typical turnaround for PFM crowns?",
        "a": "The standard estimate is 8 days in lab. Timing varies with complexity, material, records and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "Can you make PFM bridges as well as single crowns?",
        "a": "Yes. We build single PFM crowns and multi-unit PFM bridges, and our technicians review connector design and pontic form with you before production."
      },
      {
        "q": "Are rush PFM crowns cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Hand-finished porcelain-fused-to-metal for accuracy and strength.",
    "headline": "PFM crowns, proven strength and refined porcelain",
    "whereFits": {
      "title": "Where PFM crowns fit",
      "items": [
        "High-load posterior units: PFM crowns with a metal substructure for durability under function.",
        "Multi-unit bridges: Metal-supported spans where connector strength matters.",
        "Conventional preparations: A dependable option where budget or clinical history favors metal-ceramic."
      ]
    },
    "featureSection": {
      "title": "Finished to hide the metal",
      "body": "The old knock on metal-ceramic is a gray margin. We design the coping and margin so the porcelain masks the metal, and we finish the surface for natural color and translucency, so a posterior PFM crown still reads as a tooth. Alloy options are matched to the case, and biocompatible high-noble frameworks are available for patients sensitive to base metals."
    },
    "h1": "PFM Crowns"
  },
  {
    "slug": "surgical-guides",
    "code": "GUIDE · 13",
    "category": "Implant Solutions",
    "categories": [
      "digital"
    ],
    "title": "Surgical Guides",
    "heroHtml": "Plan digitally. <em>Place confidently.</em>",
    "art": "implant",
    "image": "/assets/LDA_product_images/surgical-guide.png",
    "cardDesc": "Patient-specific guides made from an approved digital implant plan.",
    "intro": "Patient-specific surgical guides translate the approved restorative plan into a precise clinical aid. We review each case for scan alignment, sleeve selection and access before manufacturing, then print the guide in dental-grade resin. Because the implant is planned against the final restoration, the position lands where the crown wants it, not wherever the bone is easiest.",
    "metaTitle": "Surgical Guides | Guided Implant Placement | Laguna Dental Arts",
    "metaDescription": "Patient-specific surgical guides that translate the approved restorative plan into precise implant placement. Tooth, tissue or bone supported. Start a case today.",
    "breadcrumb": "Home / Lab Services / Surgical Guides",
    "specs": [
      [
        "Turnaround",
        "5 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Printed Resin"
      ],
      [
        "Options",
        "Tooth / Tissue / Bone Supported"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a surgical guides case?",
        "a": "Send the CBCT (DICOM), the intraoral scan or model scan, a completed prescription, the implant system, and the approved restorative plan. Aligned records let us confirm the surgical guides design before printing."
      },
      {
        "q": "Do you accept digital scans for surgical guides?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files alongside the CBCT. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for surgical guides?",
        "a": "The standard estimate is 5 days in lab after records and plan approval. Timing varies with complexity, so confirm the current schedule when submitting."
      },
      {
        "q": "What guide support types do you offer?",
        "a": "Tooth-supported, tissue-supported and bone-supported surgical guides, matched to the case and implant system. Our team confirms sleeve and drill compatibility before printing."
      },
      {
        "q": "Are rush surgical guides cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Tooth, tissue or bone supported implant surgical guides.",
    "headline": "Surgical guides, plan digitally and place confidently",
    "whereFits": {
      "title": "Guide support for every case",
      "items": [
        "Tooth-supported: For partially edentulous cases with stable adjacent teeth.",
        "Tissue-supported: For edentulous arches seated on soft tissue, with fixation as needed.",
        "Bone-supported: Where a flap is raised and the guide seats on bone."
      ]
    },
    "featureSection": {
      "title": "What we need to plan your case",
      "body": "Send the CBCT with the intraoral scan and an approved plan, and we align the data, select the sleeve system, and confirm access before printing. Surgical guides are only as good as the records behind them, so clear scans and an accurate merge matter. Note the implant system so we confirm drill and sleeve compatibility, and the clinician retains responsibility for the final treatment plan."
    },
    "h1": "Surgical Guides"
  },
  {
    "slug": "printed-models-dies",
    "code": "MODEL · 14",
    "category": "Digital Dentistry",
    "categories": [
      "digital"
    ],
    "title": "Printed Models & Dies",
    "heroHtml": "Digital records made <em>tangible.</em>",
    "art": "ortho",
    "image": "/assets/LDA_product_images/printed-models-and-dies.png",
    "cardDesc": "Accurate printed models and removable dies for restorative workflows.",
    "intro": "High-resolution printed models & dies support restorative design, appliance fabrication and diagnostic communication. Files are prepared for dimensional stability and clear margins, so a printed model reads accurately and a removable die seats cleanly. Send an STL or PLY, choose solid, sectioned or die, and we print to spec.",
    "metaTitle": "Printed Models & Dies | High-Resolution | Laguna Dental Arts",
    "metaDescription": "High-resolution printed models & dies for restorative design, appliances and diagnostics. Solid, sectioned or die, dimensionally stable. Start a case today.",
    "breadcrumb": "Home / Lab Services / Printed Models & Dies",
    "specs": [
      [
        "Turnaround",
        "3–5 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Dental Model Resin"
      ],
      [
        "Options",
        "Solid / Sectioned / Die"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a printed models & dies case?",
        "a": "Send the digital scan (STL or PLY) or impression, a completed prescription, and the model type you need. Complete records let us produce printed models & dies to spec."
      },
      {
        "q": "Do you accept digital scans for printed models & dies?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files. Contact our team if you need help connecting your scanner or transferring a case."
      },
      {
        "q": "What is the typical turnaround for printed models & dies?",
        "a": "The standard estimate is 3 to 5 days in lab. Timing varies with volume and complexity, so confirm the current schedule when submitting."
      },
      {
        "q": "What model options are available?",
        "a": "Solid models, sectioned models and removable dies, printed in dental model resin. Tell us the workflow and our team recommends the right printed models & dies for the case."
      },
      {
        "q": "Are rush printed models & dies cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "High-resolution printed dental models & dies for restorative designs.",
    "headline": "Printed models & dies, digital records made tangible",
    "whereFits": {
      "title": "Where printed models & dies fit",
      "items": [
        "Restorative design: Working models and removable dies for crown, bridge and implant fabrication.",
        "Appliance fabrication: Stable bases for guards, retainers and other appliances.",
        "Diagnostics and communication: Study models for planning, presentation and records."
      ]
    },
    "featureSection": {
      "title": "Accurate, reproducible, archived",
      "body": "Because the model is printed from your digital file, printed models & dies reproduce exactly if you need another, without storing stone. For full-arch and aligner work, that repeatability keeps a whole treatment on one accurate record. We prepare files for dimensional stability, mark the margin clearly, and check the print before it ships."
    },
    "h1": "Printed Models & Dies"
  },
  {
    "slug": "zirconia-hybrid-custom-abutment",
    "code": "ZHA · 15",
    "category": "Implant Solutions",
    "categories": [
      "implant"
    ],
    "title": "Zirconia Hybrid Custom Abutment",
    "heroHtml": "Titanium support. <em>Zirconia emergence.</em>",
    "art": "implant",
    "image": "/assets/LDA_product_images/zirconia-hybrid-custom-abutment.jpg",
    "cardDesc": "Titanium connection strength with a customized zirconia emergence profile.",
    "intro": "A zirconia hybrid abutment pairs a titanium interface for connection strength with a customized zirconia portion that supports esthetics through the tissue zone. We design each one for clearance, emergence and restorative contour, so the final crown seats over a clean, tissue-friendly foundation. Send the implant system and records, and we confirm the interface before production.",
    "metaTitle": "Zirconia Hybrid Abutment | Ti-Base | Laguna Dental Arts",
    "metaDescription": "A zirconia hybrid abutment pairing a titanium interface for connection strength with a custom zirconia emergence for natural tissue esthetics. Start a case today.",
    "breadcrumb": "Home / Lab Services / Zirconia Hybrid Custom Abutment",
    "specs": [
      [
        "Turnaround",
        "10–14 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Zirconia / Titanium"
      ],
      [
        "Options",
        "Custom Emergence"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a zirconia hybrid abutment case?",
        "a": "Send a completed prescription, an implant-level scan or impression, opposing arch, bite record, the implant system and platform, and photographs. Complete records let us confirm the zirconia hybrid abutment design before production."
      },
      {
        "q": "Do you accept digital scans for a zirconia hybrid abutment?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, plus scan-body captures. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for a zirconia hybrid abutment?",
        "a": "The standard estimate is 10 to 14 days in lab. Timing varies with complexity, records and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "When should I choose a zirconia hybrid abutment over a full titanium abutment?",
        "a": "Favor the zirconia hybrid abutment in the esthetic zone or with thin tissue, where zirconia emergence avoids a gray shadow. Share the site and tissue profile and our team advises."
      },
      {
        "q": "Are rush zirconia hybrid abutment cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Zirconia hybrid abutment with a custom zirconia emergence for natural esthetics.",
    "headline": "Zirconia hybrid abutment, titanium support and zirconia emergence",
    "whereFits": {
      "title": "Where a zirconia hybrid abutment fits",
      "items": [
        "Esthetic zone implants: A zirconia emergence for anterior and premolar sites where tissue shows.",
        "Thin or receding tissue: Zirconia through the tissue avoids the gray shadow a metal abutment can cast.",
        "Screw-retained and cemented crowns: A stable base for either final restoration."
      ]
    },
    "featureSection": {
      "title": "Strength where it counts, esthetics where you see it",
      "body": "The titanium base carries the load and the validated implant connection, while the zirconia portion shapes and supports the soft tissue. That split is the whole point of a zirconia hybrid abutment: mechanical reliability at the implant, natural color at the gumline. We review clearance and emergence digitally, then finish so the crown margin lands where you want it."
    },
    "h1": "Zirconia Hybrid Custom Abutment"
  },
  {
    "slug": "wax-up",
    "code": "WAX · 16",
    "category": "Models & Planning",
    "categories": [
      "digital"
    ],
    "title": "Diagnostic Wax-Up",
    "heroHtml": "See the plan <em>before preparation.</em>",
    "art": "crown",
    "image": "/assets/LDA_product_images/diagnostic-wax-up.png",
    "cardDesc": "A three-dimensional preview for preparation, provisionalization and communication.",
    "intro": "A diagnostic wax-up translates restorative objectives into a clear three-dimensional proposal for preparation guidance, provisionalization and patient communication. Whether digital or traditional, it lets you and your patient agree on length, proportion, midline and incisal position before a bur touches a tooth. Send the case goals and records, and we design the wax-up to your vision.",
    "metaTitle": "Diagnostic Wax-Up | Treatment Planning | Laguna Dental Arts",
    "metaDescription": "A diagnostic wax-up turning your restorative goals into a clear 3D proposal for prep guidance, provisionals and patient communication. Start a case today.",
    "breadcrumb": "Home / Lab Services / Diagnostic Wax-Up",
    "specs": [
      [
        "Turnaround",
        "3–5 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Digital / Traditional"
      ],
      [
        "Options",
        "Diagnostic / Functional"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a diagnostic wax-up case?",
        "a": "Send a completed prescription, a digital scan or impression, opposing arch, bite record, photographs and your esthetic goals such as length, midline and incisal position. Complete records let us design the diagnostic wax-up to plan."
      },
      {
        "q": "Do you accept digital scans for a diagnostic wax-up?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files. Contact our team if you need help connecting your scanner or transferring a case."
      },
      {
        "q": "What is the typical turnaround for a diagnostic wax-up?",
        "a": "The standard estimate is 3 to 5 days in lab. Timing varies with the number of units and complexity, so confirm the current schedule when submitting."
      },
      {
        "q": "Can the diagnostic wax-up be used for mock-ups and provisionals?",
        "a": "Yes. We can output the diagnostic wax-up for reduction guides, chairside mock-ups and provisional matrices, so the approved plan transfers to the mouth."
      },
      {
        "q": "Are rush diagnostic wax-up cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Turning your restorative goals into a clear 3D diagnostic wax-up.",
    "headline": "Diagnostic wax-up, see the plan before preparation",
    "whereFits": {
      "title": "Where a diagnostic wax-up fits",
      "items": [
        "Case acceptance: A visual proposal that helps patients say yes to treatment.",
        "Preparation guidance: A blueprint for reduction guides and provisional matrices.",
        "Complex and esthetic cases: Full-mouth, anterior and implant cases planned before you prep."
      ]
    },
    "featureSection": {
      "title": "From wax-up to predictable restorations",
      "body": "A diagnostic wax-up is where the case is won. Approve the shape and proportion first, and the definitive restorations follow the same plan instead of chasing it. We can output the wax-up digitally for reduction guides, mock-ups and provisional matrices, so the plan carries straight into the mouth. Functional wax-ups also let you test the occlusal scheme before committing."
    },
    "h1": "Diagnostic Wax-Up"
  },
  {
    "slug": "titanium-custom-abutments",
    "code": "TCA · 17",
    "category": "Implant Solutions",
    "categories": [
      "implant"
    ],
    "title": "Titanium Custom Abutments",
    "heroHtml": "Custom support from the <em>implant up.</em>",
    "art": "implant",
    "image": "/assets/LDA_product_images/titanium-custom-abutments.png",
    "cardDesc": "Patient-specific implant foundations shaped for tissue and restorative space.",
    "intro": "Titanium custom abutments are designed around implant position, tissue profile and restorative space to create a stable, clean foundation for the final restoration. Patient-specific geometry places the margin where you want it and shapes the emergence for healthy tissue. Send the implant system and records, and we verify the interface on the platform before milling.",
    "metaTitle": "Titanium Custom Abutments | Laguna Dental Arts",
    "metaDescription": "Titanium custom abutments designed around implant position, tissue profile and restorative space for a stable, clean foundation. Major platforms. Start a case.",
    "breadcrumb": "Home / Lab Services / Titanium Custom Abutments",
    "specs": [
      [
        "Turnaround",
        "10–14 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Titanium"
      ],
      [
        "Options",
        "Major Implant Platforms"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a titanium custom abutments case?",
        "a": "Send a completed prescription, an implant-level scan or impression, opposing arch, bite record, the implant system and platform, and photographs. Complete records let us confirm the titanium custom abutments design before production."
      },
      {
        "q": "Do you accept digital scans for titanium custom abutments?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, plus scan-body captures. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for titanium custom abutments?",
        "a": "The standard estimate is 10 to 14 days in lab. Timing varies with complexity, records and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "Which implant platforms do your titanium custom abutments support?",
        "a": "The major implant platforms. List the manufacturer, system and platform on the prescription, and we verify the connection before milling."
      },
      {
        "q": "Are rush titanium custom abutments cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Titanium custom abutments designed for a stable, clean foundation.",
    "headline": "Titanium custom abutments, custom support from the implant up",
    "whereFits": {
      "title": "Where titanium custom abutments fit",
      "items": [
        "Angled or deep implants: Custom geometry corrects angulation and brings the margin to an accessible position.",
        "Screw-retained and cemented crowns: A precise base for either final restoration.",
        "Posterior and load-bearing sites: Titanium strength where function leads over display."
      ]
    },
    "featureSection": {
      "title": "Designed to the platform, finished for the tissue",
      "body": "Stock abutments compromise on margin position and emergence. Titanium custom abutments are milled to the exact implant platform and the patient's tissue, so the crown margin sits where you can reach it and the emergence supports the gingiva. We confirm the validated connection for your system before production, and every case ships with the components and torque notes your team needs at seating."
    },
    "h1": "Titanium Custom Abutments"
  },
  {
    "slug": "full-contour-zirconia",
    "code": "FCZ · 18",
    "category": "Ceramics",
    "categories": [
      "fixed",
      "crown"
    ],
    "title": "Full-Contour Zirconia",
    "heroHtml": "Full strength. <em>Clean contour.</em>",
    "art": "crown",
    "image": "/assets/LDA_product_images/Full Contour Zirconia refer.png",
    "cardDesc": "Monolithic strength with controlled anatomy and polished contacts.",
    "intro": "Monolithic full-contour zirconia restorations provide high fracture resistance with controlled anatomy and polished antagonist contact areas, well suited to demanding posterior indications. Milled in one solid piece, they need minimal reduction and stand up to heavy function. We polish the contact zones so the opposing dentition stays protected, and verify occlusion against your records before shipping.",
    "metaTitle": "Full-Contour Zirconia | Monolithic | Laguna Dental Arts",
    "metaDescription": "Full-contour zirconia with high fracture resistance, controlled anatomy and polished antagonist contacts, suited to demanding posterior cases. Start a case today.",
    "breadcrumb": "Home / Lab Services / Full-Contour Zirconia",
    "specs": [
      [
        "Turnaround",
        "6 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "High-Strength Zirconia"
      ],
      [
        "Options",
        "Posterior / Bruxer"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a full-contour zirconia case?",
        "a": "Send a completed prescription, the final scan or impression, opposing arch, bite record and shade. Complete records let us confirm the full-contour zirconia design and occlusion before production."
      },
      {
        "q": "Do you accept digital scans for full-contour zirconia?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files. Contact our team if you need help connecting your scanner or transferring a case."
      },
      {
        "q": "What is the typical turnaround for full-contour zirconia?",
        "a": "The standard estimate is 6 days in lab. Timing varies with complexity, records and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "Does full-contour zirconia wear the opposing teeth?",
        "a": "Not when it is finished correctly. We polish the antagonist contact areas so full-contour zirconia protects the opposing dentition rather than abrading it."
      },
      {
        "q": "Are rush full-contour zirconia cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Full-contour zirconia to offer maximum strength without a porcelain overlay.",
    "headline": "Full-contour zirconia, full strength and clean contour",
    "whereFits": {
      "title": "Where full-contour zirconia fits",
      "items": [
        "Posterior crowns: Molars and premolars under heavy occlusal load.",
        "Bruxers and grinders: Full-contour zirconia resists fracture and wear where parafunction is a factor.",
        "Screw-retained implant crowns: A durable monolithic option for posterior implant restorations."
      ]
    },
    "featureSection": {
      "title": "Strength without shredding the opposing tooth",
      "body": "The old knock on monolithic zirconia was antagonist wear. We control it by polishing the contact areas to a fine finish rather than leaving them rough, so full-contour zirconia protects the opposing enamel instead of abrading it. Minimal reduction preserves tooth structure, and the one-piece design removes the chipping risk of layered porcelain. When a case sits in the esthetic zone, we flag whether a layered option suits it better."
    },
    "h1": "Full-Contour Zirconia"
  },
  {
    "slug": "acrylic-denture",
    "code": "AD · 19",
    "category": "Removables",
    "categories": [
      "removable"
    ],
    "title": "Acrylic Denture",
    "heroHtml": "A complete smile, <em>built to function.</em>",
    "art": "denture",
    "image": "/assets/LDA_product_images/acrylic-denture.jpeg",
    "cardDesc": "Complete dentures designed for balanced function and natural arrangement.",
    "intro": "A complete acrylic denture is designed for balanced occlusion, natural tooth arrangement and comfortable borders, in a digital or conventional workflow. We set the teeth for esthetics, phonetics and function, then finish the base for a comfortable fit and a believable gumline. A digital acrylic denture also archives the design, so a replacement reproduces from the same records instead of starting over.",
    "metaTitle": "Acrylic Denture | Complete Removable | Laguna Dental Arts",
    "metaDescription": "A complete acrylic denture designed for balanced occlusion, natural arrangement and comfortable borders. Digital or conventional workflow. Start a case today.",
    "breadcrumb": "Home / Lab Services / Acrylic Denture",
    "specs": [
      [
        "Turnaround",
        "8–9 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Acrylic / Composite Teeth"
      ],
      [
        "Options",
        "Digital / Traditional"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for an acrylic denture case?",
        "a": "Send impressions or scans, jaw relation, vertical dimension, midline and smile-line references, tooth selection, shade and photographs. Complete records let us design the acrylic denture and stage the try-in."
      },
      {
        "q": "Do you accept digital scans for an acrylic denture?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, and we run conventional impressions too. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for an acrylic denture?",
        "a": "The standard estimate is 8 to 9 days in lab across stages. Timing varies with try-ins and complexity, so confirm the current schedule when submitting."
      },
      {
        "q": "Can you reproduce an acrylic denture if a patient loses theirs?",
        "a": "If we hold the digital acrylic denture record, yes. Reproducing from the archived design saves the patient weeks and saves you appointments."
      },
      {
        "q": "Are rush acrylic denture cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "High-impact acrylic dentures for predictable outcomes.",
    "headline": "Acrylic denture, a complete smile built to function",
    "whereFits": {
      "title": "Where an acrylic denture fits",
      "items": [
        "Complete edentulism: Full upper and lower acrylic dentures set for comfort and function.",
        "Immediate dentures: An option placed at extraction, with records kept for the definitive.",
        "Digital reproduction: A digital acrylic denture that reprints from the archived design."
      ]
    },
    "featureSection": {
      "title": "Set for comfort, finished to look natural",
      "body": "A denture that rocks or looks artificial comes back to your chair. We set the occlusion for balance, characterize the gum and tooth arrangement so the acrylic denture reads like natural tissue, and finish the borders for comfort. Send patient photos for anterior cases and we match the setup to the face. For staged cases, we confirm the try-in timeline so your front desk can book the appointments."
    },
    "h1": "Acrylic Denture"
  },
  {
    "slug": "acrylic-partial",
    "code": "AP · 20",
    "category": "Removables",
    "categories": [
      "removable"
    ],
    "title": "Acrylic Partial",
    "heroHtml": "A practical partial with <em>thoughtful fit.</em>",
    "art": "denture",
    "image": "/assets/LDA_product_images/acrylic-partial.png",
    "cardDesc": "A practical removable option for transitional or definitive indications.",
    "intro": "An acrylic partial is a serviceable removable option for transitional or definitive tooth replacement. We plan tooth position, clasping and tissue support from your prescription, so it seats comfortably and holds retention without fighting the remaining dentition. Send a scan or impression with the arch and bite, and we design the acrylic partial to the case.",
    "metaTitle": "Acrylic Partial Denture | Laguna Dental Arts",
    "metaDescription": "An acrylic partial for transitional or definitive tooth replacement, with tooth position, clasping and tissue support planned to your Rx. Start a case today.",
    "breadcrumb": "Home / Lab Services / Acrylic Partial",
    "specs": [
      [
        "Turnaround",
        "7–8 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Acrylic"
      ],
      [
        "Options",
        "Transitional / Definitive"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for an acrylic partial case?",
        "a": "Send a completed prescription, a scan or impression of the arch, opposing arch, bite record, shade and photographs. Note the teeth to replace and any clasp preferences so we design the acrylic partial to plan."
      },
      {
        "q": "Do you accept digital scans for an acrylic partial?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, and conventional impressions too. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for an acrylic partial?",
        "a": "The standard estimate is 7 to 8 days in lab. Timing varies with try-ins and complexity, so confirm the current schedule when submitting."
      },
      {
        "q": "Is an acrylic partial transitional or definitive?",
        "a": "Either. An acrylic partial works as an interim appliance during treatment or as a serviceable definitive where a cast framework is not indicated. Tell us the goal and we advise."
      },
      {
        "q": "Are rush acrylic partial cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Acrylic partial dentures to restore function and esthetic in your patients.",
    "headline": "Acrylic partial, a practical partial with thoughtful fit",
    "whereFits": {
      "title": "Where an acrylic partial fits",
      "items": [
        "Transitional replacement: An interim acrylic partial during healing, implant integration or staged treatment.",
        "Immediate tooth replacement: A quick option after extraction to keep the space and the smile.",
        "Budget-conscious definitive: A serviceable removable where a cast framework is not indicated."
      ]
    },
    "featureSection": {
      "title": "Planned for retention and comfort",
      "body": "A partial that rocks or traps food gets left in a drawer. We design the clasp placement and tissue coverage of the acrylic partial for retention, hygiene and comfort, and set the teeth for a natural look and functional bite. When the case would do better with a rigid cast framework or a flexible material, we say so, so you get the right removable for the patient."
    },
    "h1": "Acrylic Partial"
  },
  {
    "slug": "partial-metal-framework",
    "code": "PMF · 21",
    "category": "Removables",
    "categories": [
      "removable"
    ],
    "title": "Partial Metal Framework",
    "heroHtml": "Rigid support. <em>Refined framework.</em>",
    "art": "denture",
    "image": "/assets/LDA_product_images/partial-metal-framework.png",
    "cardDesc": "Rigid, hygienic frameworks designed for stability and a clear path of insertion.",
    "intro": "A partial metal framework is cast or digitally produced in cobalt chrome and designed for stability, hygienic contours and a precise path of insertion. We plan rests, connectors and clasps to distribute load and protect the abutment teeth, then move to the acrylic and tooth setup stages. Send the arch, opposing and bite, and we design the partial metal framework to seat with a definite, repeatable path.",
    "metaTitle": "Partial Metal Framework | Cobalt Chrome | Laguna Dental Arts",
    "metaDescription": "A partial metal framework in cobalt chrome, designed for stability, hygienic contours and a precise path of insertion. Framework or finished partial. Start a case.",
    "breadcrumb": "Home / Lab Services / Partial Metal Framework",
    "specs": [
      [
        "Turnaround",
        "10 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Cobalt Chrome"
      ],
      [
        "Options",
        "Framework / Complete Partial"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a partial metal framework case?",
        "a": "Send a completed prescription, a scan or impression of the arch, opposing arch, bite record, and photographs. Note the abutment teeth and any survey or design preferences so we build the partial metal framework to plan."
      },
      {
        "q": "Do you accept digital scans for a partial metal framework?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, and conventional impressions too. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for a partial metal framework?",
        "a": "The standard estimate is 10 days in lab. Timing varies with try-ins and complexity, so confirm the current schedule when submitting."
      },
      {
        "q": "Can I order the framework alone or a complete partial?",
        "a": "Both. Order the partial metal framework for try-in, or a complete partial with the acrylic and tooth setup finished. Tell us the stage you want returned."
      },
      {
        "q": "Are rush partial metal framework cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Partial metal framework designed for stability, hygienic contours.",
    "headline": "Partial metal framework, rigid support and refined design",
    "whereFits": {
      "title": "Where a partial metal framework fits",
      "items": [
        "Definitive removable partials: A rigid, long-lasting base for a removable partial denture.",
        "Load distribution: Rest seats and connectors that spread force and protect the abutments.",
        "Tooth- and tissue-borne designs: Frameworks planned to the support available in the arch."
      ]
    },
    "featureSection": {
      "title": "Rigid, hygienic and repeatable",
      "body": "Rigidity is the whole point of metal. A partial metal framework resists flex, so the load spreads across the rests instead of rocking on the tissue, and the design leaves the gingival margins open for hygiene. We survey the case for a single path of insertion and design guide planes and clasps to it, so it seats the same way every time. Order the framework alone, or a complete partial with the tooth setup finished."
    },
    "h1": "Partial Metal Framework"
  },
  {
    "slug": "temporaries",
    "code": "TEMP · 22",
    "category": "Crown & Bridge",
    "categories": [
      "fixed",
      "crown"
    ],
    "title": "Temporary Restorations",
    "heroHtml": "Interim restorations, <em>clinically ready.</em>",
    "art": "bridge",
    "image": "/assets/LDA_product_images/temporaries.jpeg",
    "cardDesc": "Provisional crowns and bridges for function, tissue support and esthetic review.",
    "intro": "Temporary restorations, provisional crowns and bridges, support function, tissue management and esthetic evaluation while the definitive restoration is completed. Milled or printed in PMMA and resin, they protect the prep, hold the space and let you and your patient preview shape and shade before the final case. Send the scan and the plan, and we produce temporary restorations single or multi-unit.",
    "metaTitle": "Temporary Restorations | Provisionals | Laguna Dental Arts",
    "metaDescription": "Temporary restorations: provisional crowns and bridges supporting function, tissue management and esthetics while the definitive is made. Start a case today.",
    "breadcrumb": "Home / Lab Services / Temporaries",
    "specs": [
      [
        "Turnaround",
        "3–5 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "PMMA / Printed Resin"
      ],
      [
        "Options",
        "Single / Multi-Unit"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a temporary restorations case?",
        "a": "Send a completed prescription, a scan or impression, opposing arch, bite record, shade and any pre-op or wax-up reference. Complete records let us design the temporary restorations to plan."
      },
      {
        "q": "Do you accept digital scans for temporary restorations?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files. Contact our team if you need help connecting your scanner or transferring a case."
      },
      {
        "q": "What is the typical turnaround for temporary restorations?",
        "a": "The standard estimate is 3 to 5 days in lab. Timing varies with the number of units, so confirm the current schedule when submitting."
      },
      {
        "q": "Can temporary restorations preview the final result?",
        "a": "Yes. Esthetic temporary restorations let you and the patient approve shape, length and shade before the definitive case follows the same plan."
      },
      {
        "q": "Are rush temporary restorations cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Quality temporaries to support function, tissue management and esthetics.",
    "headline": "Temporary restorations, interim and clinically ready",
    "whereFits": {
      "title": "Where temporary restorations fit",
      "items": [
        "Prep protection: Provisional coverage that protects the tooth and manages the tissue between visits.",
        "Esthetic preview: A trial of shape, length and shade before the definitive restoration.",
        "Complex and staged cases: Multi-unit temporary restorations for full-mouth and implant workflows."
      ]
    },
    "featureSection": {
      "title": "Milled and printed for durability",
      "body": "A provisional that fractures or discolors sends the patient back early. We mill and print temporary restorations in durable PMMA and resin, finish the margins and contacts, and match the shade so they hold up and look right for the interim period. For esthetic cases, temporary restorations double as a preview: approve the shape in provisional form, and the definitive follows the same plan."
    },
    "h1": "Temporary Restorations"
  },
  {
    "slug": "screw-retained-zirconia-bridge",
    "code": "SRZ · 23",
    "category": "Implant Solutions",
    "categories": [
      "implant"
    ],
    "title": "Screw-Retained Zirconia Bridge",
    "heroHtml": "Retrievable strength for the <em>full arch.</em>",
    "art": "bridge",
    "image": "/assets/LDA_product_images/screw-retained-zirconia-bridge.png",
    "cardDesc": "A strong, retrievable zirconia solution for full-arch implant cases.",
    "intro": "A screw-retained zirconia bridge is a strong, retrievable definitive for the full arch, milled in monolithic zirconia and designed around verified implant positions, restorative space and screw access. We build it on ti-bases for a validated implant connection, and finish the zirconia for durability and a natural look. Send verified implant records, and we confirm the framework digitally before milling.",
    "metaTitle": "Screw-Retained Zirconia Bridge | Laguna Dental Arts",
    "metaDescription": "A screw-retained zirconia bridge for the full arch, designed around verified implant positions and screw access for a strong, retrievable definitive. Start a case.",
    "breadcrumb": "Home / Lab Services / Screw-Retained Zirconia Bridge",
    "specs": [
      [
        "Turnaround",
        "10–14 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Zirconia / Ti Bases"
      ],
      [
        "Options",
        "Full Arch"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a screw-retained zirconia bridge case?",
        "a": "Send a completed prescription, a verified implant-level scan or impression, opposing arch, bite record, the implant system and platform, and an approved provisional or design reference. Verified records let us confirm the screw-retained zirconia bridge before milling."
      },
      {
        "q": "Do you accept digital scans for a screw-retained zirconia bridge?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, plus scan-body captures for implant positions. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for a screw-retained zirconia bridge?",
        "a": "The standard estimate is 10 to 14 days in lab. Timing varies with complexity, verification and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "How is a screw-retained zirconia bridge different from a PMMA provisional?",
        "a": "The zirconia bridge is the strong, definitive restoration; a PMMA bridge is an efficient provisional to test the design first. Many arches move from a PMMA prototype to the definitive screw-retained zirconia bridge."
      },
      {
        "q": "Are rush screw-retained zirconia bridge cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "screw-retained zirconia bridge around verified implants for a durable, removable restoration.",
    "headline": "Screw-retained zirconia bridge, retrievable strength for the full arch",
    "whereFits": {
      "title": "Where a screw-retained zirconia bridge fits",
      "items": [
        "Definitive full-arch: A monolithic zirconia bridge for a completed, integrated implant arch.",
        "Retrievable maintenance: Screw retention keeps the restoration serviceable over time.",
        "High-load and bruxer arches: Zirconia strength for patients with heavy function."
      ]
    },
    "featureSection": {
      "title": "Designed for passive fit and retrievability",
      "body": "A full-arch restoration lives or dies on passive fit. We design the screw-retained zirconia bridge against the verified implant positions, check the framework digitally, and place the access channels for retrievability where the occlusion allows. Ti-bases give the case a validated metal connection at each implant, and every case ships with the components, torque values and screws your team needs at delivery."
    },
    "h1": "Screw-Retained Zirconia Bridge"
  },
  {
    "slug": "screw-retained-pmma-bridge",
    "code": "SRP · 24",
    "category": "Implant Solutions",
    "categories": [
      "implant"
    ],
    "title": "Screw-Retained PMMA Bridge",
    "heroHtml": "A confident provisional <em>for the full arch.</em>",
    "art": "bridge",
    "image": "/assets/LDA_product_images/screw-retained-pmma-bridge.png",
    "cardDesc": "Efficient full-arch provisional and prototype restorations.",
    "intro": "A screw-retained PMMA bridge is an efficient fixed provisional for immediate-load and prototype workflows, milled in multilayer PMMA so the restorative design can be evaluated before it is finalized. It carries the patient through healing and integration, and it doubles as a prototype: refine shape, occlusion and esthetics in PMMA, then translate the approved design to the definitive. Send the implant records, and we design the screw-retained PMMA bridge to the plan.",
    "metaTitle": "Screw-Retained PMMA Bridge | Laguna Dental Arts",
    "metaDescription": "A screw-retained PMMA bridge: a fixed provisional for immediate-load and prototype workflows, to test the design before the definitive. Start a case today.",
    "breadcrumb": "Home / Lab Services / Screw-Retained PMMA Bridge",
    "specs": [
      [
        "Turnaround",
        "5–8 days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Multilayer PMMA"
      ],
      [
        "Options",
        "Provisional / Prototype"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a screw-retained PMMA bridge case?",
        "a": "Send a completed prescription, an implant-level scan or impression, opposing arch, bite record, the implant system and platform, and any design or vertical-dimension reference. Complete records let us design the screw-retained PMMA bridge to plan."
      },
      {
        "q": "Do you accept digital scans for a screw-retained PMMA bridge?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, plus scan-body captures. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for a screw-retained PMMA bridge?",
        "a": "The standard estimate is 5 to 8 days in lab. Timing varies with complexity and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "Is a screw-retained PMMA bridge a provisional or a final restoration?",
        "a": "It is a fixed provisional and design prototype. Once you approve the shape and occlusion, the screw-retained PMMA bridge becomes the blueprint for a definitive restoration such as a zirconia bridge."
      },
      {
        "q": "Are rush screw-retained PMMA bridge cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Get accurate screw-retained Polymethyl Methacrylate (PMMA) bridge.",
    "headline": "Screw-retained PMMA bridge, a confident provisional for the full arch",
    "whereFits": {
      "title": "Where a screw-retained PMMA bridge fits",
      "items": [
        "Immediate load: A fixed provisional placed at or soon after implant placement.",
        "Design prototype: A test of shape, occlusion and phonetics before the definitive restoration.",
        "Healing and conversion: A durable interim while the arch integrates."
      ]
    },
    "featureSection": {
      "title": "Test the design before you commit",
      "body": "The value of a screw-retained PMMA bridge is the chance to get the design right before milling the definitive. The patient wears the prototype, you refine contour, vertical dimension and esthetics, and the approved result becomes the blueprint for the final zirconia restoration. Multilayer PMMA gives a natural look for the interim, and screw retention keeps it retrievable for adjustment."
    },
    "h1": "Screw-Retained PMMA Bridge"
  },
  {
    "slug": "implant-bridges",
    "code": "IB · 35",
    "category": "Crown & Bridge",
    "categories": [
      "implant",
      "fixed"
    ],
    "title": "Implant Bridges",
    "heroHtml": "Implant-supported multi-unit <em>bridges.</em>",
    "art": "bridge",
    "image": "/assets/LDA_product_images/implant-bridge.png",
    "cardDesc": "Multi-unit implant-supported bridges engineered for strength, fit, and natural tissue contours.",
    "intro": "Implant bridges provide fixed multi-unit stability anchored directly to implant platforms or titanium abutments, offering long-term strength and aesthetic integration.",
    "metaTitle": "Implant Bridges | Multi-Unit Fixed Solutions | Laguna Dental Arts",
    "metaDescription": "Multi-unit implant-supported bridges engineered for strength, passive seating, and clean tissue emergence. Start a case today.",
    "breadcrumb": "Home / Lab Services / Implant Bridges",
    "specs": [
      [
        "Turnaround",
        "8–12 Days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Zirconia / PFM / Ti"
      ],
      [
        "Options",
        "Screw or Cement Retained"
      ]
    ],
    "included": [
      "Design reviewed against submitted prescription and implant plan",
      "Digital and traditional case submissions supported",
      "Compatible with major implant platform interfaces",
      "Quality-control review completed before delivery",
      "Technical guidance available prior to production"
    ],
    "faq": []
  },
  {
    "slug": "maryland-bridges",
    "code": "MB · 36",
    "category": "Crown & Bridge",
    "categories": [
      "fixed"
    ],
    "title": "Maryland Bridges",
    "heroHtml": "Resin-bonded <em>minimal preparation bridges.</em>",
    "art": "bridge",
    "image": "/assets/LDA_product_images/maryland-bridge-installed-v2.png",
    "cardDesc": "Resin-bonded fixed partial dentures with metal or ceramic wing frameworks for conservative tooth replacement.",
    "intro": "Maryland bridges offer a conservative, minimally invasive solution for missing teeth using retentive metal or ceramic wings bonded to adjacent abutment teeth.",
    "metaTitle": "Maryland Bridges | Conservative Resin-Bonded | Laguna Dental Arts",
    "metaDescription": "Resin-bonded fixed partial dentures with metal or ceramic wings for conservative tooth replacement without adjacent prep. Start a case today.",
    "breadcrumb": "Home / Lab Services / Maryland Bridges",
    "specs": [
      [
        "Turnaround",
        "6–8 Days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Alloy / Zirconia / e.max"
      ],
      [
        "Options",
        "Single or Double Wing"
      ]
    ],
    "included": [
      "Retentive wing framework design for optimal adhesive bond",
      "Conservative preparation workflow support",
      "High esthetic pontic design",
      "Quality-control review before shipment"
    ],
    "faq": []
  },
  {
    "slug": "process-implant-acrylic-denture",
    "code": "IAD · 25",
    "category": "Implant Solutions",
    "categories": [
      "implant"
    ],
    "title": "Implant Acrylic Denture",
    "heroHtml": "Removable stability, <em>implant supported.</em>",
    "art": "denture",
    "image": "/assets/LDA_product_images/implant-acrylic-denture.png",
    "cardDesc": "Attachment-supported acrylic dentures planned for stability and serviceability.",
    "intro": "An implant acrylic denture is a removable overdenture retained by implants, pairing the comfort and esthetics of an acrylic denture with the stability of implant attachments. We design the base, tooth arrangement and attachment housings around your implant positions and the retention plan, so it snaps in securely and lifts out for hygiene. Send the implant system, attachment type and records, and we confirm the components before production.",
    "metaTitle": "Implant Acrylic Denture | Overdenture | Laguna Dental Arts",
    "metaDescription": "An implant acrylic denture pairing the comfort of an acrylic overdenture with secure implant retention. Locator or bar attachments. Start a case today.",
    "breadcrumb": "Home › Lab Services › Implant Acrylic Denture",
    "specs": [
      [
        "Turnaround",
        "8–12 days"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Acrylic / Attachments"
      ],
      [
        "Options",
        "Overdenture"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for an implant acrylic denture case?",
        "a": "Send a completed prescription, an implant-level scan or impression, opposing arch, bite record, the implant system, the attachment type, and photographs. Complete records let us design the implant acrylic denture and housings to plan."
      },
      {
        "q": "Do you accept digital scans for an implant acrylic denture?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, plus scan-body captures. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for an implant acrylic denture?",
        "a": "The standard estimate is 8 to 12 days in lab across stages. Timing varies with try-ins and complexity, so confirm the current schedule when submitting."
      },
      {
        "q": "Which attachment systems do you support for an implant acrylic denture?",
        "a": "Common bar and stud-style attachments, including locator-style systems. List the implant system and attachment on the prescription and we confirm the components before production."
      },
      {
        "q": "Are rush implant acrylic denture cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Affordable implant acrylic denture for high accuracy and passive fit.",
    "headline": "Implant acrylic denture, secure removable retention",
    "whereFits": {
      "title": "Where an implant acrylic denture fits",
      "items": [
        "Retained overdentures: Locator- or bar-retained implant acrylic dentures for a stable, removable full arch.",
        "Transition from a complete denture: Added retention for patients struggling with a conventional lower denture.",
        "Hygiene-friendly full arch: A removable option the patient can clean around the implants."
      ]
    },
    "featureSection": {
      "title": "Comfort of a denture, stability of implants",
      "body": "A conventional lower denture floats; an implant acrylic denture locks in. We set the housings to the prescribed attachments, reinforce the base where the load concentrates, and arrange the teeth for esthetics and a balanced bite. The patient gets a secure fit that still lifts out for cleaning, and you get a design archived for future retention swaps or a reline."
    },
    "h1": "Implant Acrylic Denture"
  },
  {
    "slug": "porcelain-fused-to-zirconia",
    "code": "PFZ · 26",
    "category": "Ceramics",
    "categories": [
      "fixed",
      "crown"
    ],
    "title": "Porcelain Fused to Zirconia",
    "heroHtml": "Zirconia support. <em>Layered character.</em>",
    "art": "crown",
    "image": "/assets/LDA_product_images/porcelain-fused-to-zirconia.png",
    "cardDesc": "A zirconia framework with layered porcelain for added optical depth.",
    "intro": "Porcelain fused to zirconia pairs a high-strength zirconia core with hand-layered porcelain, so you get the fracture resistance of zirconia beneath the depth and translucency of layered ceramic. It suits anterior and esthetic-zone cases that need more character than a monolithic surface can give. Our ceramists layer and characterize each unit to your shade, then verify margin and occlusion before it ships.",
    "metaTitle": "Porcelain Fused to Zirconia | Layered | Laguna Dental Arts",
    "metaDescription": "Porcelain fused to zirconia crowns and bridges: a high-strength zirconia core with hand-layered porcelain for lifelike anterior esthetics. Start a case today.",
    "breadcrumb": "Home › Lab Services › Porcelain Fused to Zirconia",
    "specs": [
      [
        "Turnaround",
        "8 days"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Zirconia Core / Porcelain"
      ],
      [
        "Options",
        "Crown / Bridge"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a porcelain fused to zirconia case?",
        "a": "Send a completed prescription, the final scan or impression, opposing arch, bite record, stump shade, requested final shade, and photographs. Complete records let us confirm the porcelain fused to zirconia design before production."
      },
      {
        "q": "Do you accept digital scans for porcelain fused to zirconia?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files. Contact our team if you need help connecting your scanner or transferring a case."
      },
      {
        "q": "What is the typical turnaround for porcelain fused to zirconia?",
        "a": "The standard estimate is 8 days in lab. Timing varies with complexity, records and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "How is porcelain fused to zirconia different from full-contour zirconia or PFM?",
        "a": "Porcelain fused to zirconia layers porcelain over a zirconia core for esthetics; full-contour zirconia is monolithic for strength; PFM layers porcelain over metal. We match the choice to the zone and load."
      },
      {
        "q": "Are rush porcelain fused to zirconia cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Get highest level of aesthetics with precise quality Porcelain Fused to Zirconia",
    "headline": "Porcelain fused to zirconia, strength beneath and esthetics on top",
    "whereFits": {
      "title": "Where porcelain fused to zirconia fits",
      "items": [
        "Anterior esthetics: Layered porcelain over a zirconia core where translucency and character matter.",
        "Esthetic-zone bridges: Strength for the span with a lifelike display surface.",
        "High-value single crowns: A premium finish where a monolithic look is not enough."
      ]
    },
    "featureSection": {
      "title": "Layered where you see it, strong where it counts",
      "body": "Monolithic zirconia is strong but flat; feldspathic layering brings a tooth to life. Porcelain fused to zirconia gives you both: the core carries the load, the layered porcelain carries the esthetics. We manage the bond between core and porcelain to control chipping risk, and cut back only where the display zone benefits, leaving strength in the functional areas."
    },
    "h1": "Porcelain Fused to Zirconia"
  },
  {
    "slug": "screwmentable-crown-abutment-with-screw-channel-crown",
    "code": "SMC · 28",
    "category": "Implant Solutions",
    "categories": [
      "implant",
      "crown"
    ],
    "title": "Screwmentable Crown",
    "heroHtml": "Two-piece control with <em>retrievable access.</em>",
    "art": "implant",
    "image": "/assets/LDA_product_images/screwmentable-crown-abutment-reference-enhanced.png",
    "cardDesc": "A two-piece restorative design that combines esthetics and retrievability.",
    "intro": "A screwmentable crown combines the retrievability of a screw-retained restoration with the passive fit of a cemented one. We cement the crown to the abutment on the model, so it reaches you as one unit with an access channel, ready to screw in at the chair. It is the answer for angled implants or esthetic sites where the access channel would otherwise exit the facial. Send the implant system and records, and we confirm the interface before production.",
    "metaTitle": "Screwmentable Crown | Screw + Cement | Laguna Dental Arts",
    "metaDescription": "A screwmentable crown combining screw retrievability with a cemented crown's passive fit, lab-bonded to the abutment for a clean, cement-free seat. Start a case.",
    "breadcrumb": "Home › Lab Services › Screwmentable Crown",
    "specs": [
      [
        "Turnaround",
        "8–10 days"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Zirconia / Ti Base"
      ],
      [
        "Options",
        "Single Unit"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a screwmentable crown case?",
        "a": "Send a completed prescription, an implant-level scan or impression, opposing arch, bite record, the implant system and platform, and photographs. Complete records let us confirm the screwmentable crown design before production."
      },
      {
        "q": "Do you accept digital scans for a screwmentable crown?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, plus scan-body captures. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for a screwmentable crown?",
        "a": "The standard estimate is 8 to 10 days in lab. Timing varies with complexity, records and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "When should I choose a screwmentable crown over a directly screw-retained crown?",
        "a": "Favor a screwmentable crown when the implant angle would place the access channel on the facial, or when you want retrievability with a cemented crown's fit. Share the angulation and site and our team advises."
      },
      {
        "q": "Are rush screwmentable crown cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Get benefits of both cement-retained and screw-retained crowns in a hybrid dental implant restoration.",
    "headline": "Screwmentable crown, screw retrievability with cemented ease",
    "whereFits": {
      "title": "Where a screwmentable crown fits",
      "items": [
        "Angled implants: Retrievability without a facial access channel.",
        "Esthetic zone: A clean, screw-accessed result where the channel is hidden.",
        "Retrievable single crowns: The maintenance benefit of screw retention on a cemented-fit crown."
      ]
    },
    "featureSection": {
      "title": "The best of both retention methods",
      "body": "Screw-retained crowns are retrievable but constrained by access-channel position; cemented crowns fit passively but leave residual-cement risk. A screwmentable crown resolves both: we bond the crown to the ti-base extraorally under controlled conditions, so there is no subgingival cement at the chair, and the finished unit still unscrews for service. You place it like a screw-retained crown and get a cemented crown's emergence."
    },
    "h1": "Screwmentable Crown"
  },
  {
    "slug": "zirconia-screw-retained-crown-with-ti-base",
    "code": "ZSC · 29",
    "category": "Implant Solutions",
    "categories": [
      "implant",
      "crown"
    ],
    "title": "Zirconia Screw-Retained Crown",
    "heroHtml": "Zirconia esthetics on a <em>titanium base.</em>",
    "art": "implant",
    "image": "/assets/LDA_product_images/zirconia-screw-retained-crown-ti-base.png",
    "cardDesc": "A retrievable zirconia implant crown supported by a titanium interface.",
    "intro": "A zirconia screw-retained crown is a single-unit implant restoration bonded to a ti-base and screwed directly to the implant, so it is fully retrievable with no cement at the chair. Milled in zirconia for strength and finished for esthetics, it suits posterior and many anterior implant sites where the access-channel position allows. Send the implant system and scan-body records, and we verify the interface before milling.",
    "metaTitle": "Zirconia Screw-Retained Crown | Ti-Base | Laguna Dental Arts",
    "metaDescription": "A zirconia screw-retained crown bonded to a ti-base and screwed directly to the implant, fully retrievable with no cement at the chair. Start a case today.",
    "breadcrumb": "Home › Lab Services › Zirconia Screw-Retained Crown",
    "specs": [
      [
        "Turnaround",
        "10–14 days"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Zirconia / Ti Base"
      ],
      [
        "Options",
        "Single Unit"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a zirconia screw-retained crown case?",
        "a": "Send a completed prescription, an implant-level scan or scan-body capture, opposing arch, bite record, the implant system and platform, shade, and photographs. Complete records let us confirm the zirconia screw-retained crown before milling."
      },
      {
        "q": "Do you accept digital scans for a zirconia screw-retained crown?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, plus scan-body captures. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for a zirconia screw-retained crown?",
        "a": "The standard estimate is 10–14 days in lab. Timing varies with complexity, records and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "How is a zirconia screw-retained crown different from a screwmentable crown?",
        "a": "A zirconia screw-retained crown is bonded to a ti-base and screwed directly to the implant. A screwmentable crown is cemented to the abutment in the lab, then screwed in. Both are retrievable and cement-free at the chair."
      },
      {
        "q": "Are rush zirconia screw-retained crown cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Get modern dental implant restoration through high-quality Zirconia Screw-Retained Crown",
    "headline": "Zirconia screw-retained crown, retrievable single-unit strength",
    "whereFits": {
      "title": "Where a zirconia screw-retained crown fits",
      "items": [
        "Posterior implant crowns: A durable, retrievable zirconia screw-retained crown for molars and premolars.",
        "Favorable access angles: Anterior and premolar sites where the channel exits lingually or occlusally.",
        "Cement-free restorations: No subgingival cement, so no residual-cement risk."
      ]
    },
    "featureSection": {
      "title": "Retrievable, cement-free and strong",
      "body": "Cement-retained implant crowns carry a residual-cement risk; a zirconia screw-retained crown removes it. We bond the zirconia to the ti-base under controlled lab conditions, place the access channel for retrievability, and finish the emergence to support the tissue. The crown screws straight to the implant, torques to spec, and lifts out later for hygiene or service."
    },
    "h1": "Zirconia Screw-Retained Crown"
  },
  {
    "slug": "flexible-partials",
    "code": "FP · 30",
    "category": "Removables",
    "categories": [
      "removable"
    ],
    "title": "Flexible Partial",
    "heroHtml": "Metal-free flexibility with <em>natural comfort.</em>",
    "art": "denture",
    "image": "/assets/LDA_product_images/Flexible Partials.png",
    "cardDesc": "Metal-free removable prosthetics with discreet clasps and comfortable adaptation.",
    "intro": "A flexible partial is a metal-free removable partial denture made from a thermoplastic resin that flexes to the arch, with tissue-toned clasps that disappear at the gumline. It suits patients who want comfort and esthetics for smaller spans, without the visible metal of a cast framework. Send the arch, opposing and bite, and we design the flexible partial for retention and a natural look.",
    "metaTitle": "Flexible Partial | Metal-Free Partial Denture | Laguna Dental Arts",
    "metaDescription": "A flexible partial, a metal-free removable partial denture with tissue-toned clasps that disappear at the gumline. Comfortable and esthetic. Start a case today.",
    "breadcrumb": "Home › Lab Services › Flexible Partial",
    "specs": [
      [
        "Turnaround",
        "9 days"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Thermoplastic / Nylon"
      ],
      [
        "Options",
        "Unilateral / Bilateral"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a flexible partial case?",
        "a": "Send a completed prescription, a scan or impression of the arch, opposing arch, bite record, shade and photographs. Note the teeth to replace so we design the flexible partial to plan."
      },
      {
        "q": "Do you accept digital scans for a flexible partial?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, and conventional impressions too. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for a flexible partial?",
        "a": "The standard estimate is 9 days in lab. Timing varies with complexity, so confirm the current schedule when submitting."
      },
      {
        "q": "How is a flexible partial different from an acrylic or cast-framework partial?",
        "a": "A flexible partial is metal-free and clasp-free for esthetics and comfort on smaller spans. An acrylic partial is a rigid serviceable base; a cast metal framework adds rigidity and load distribution for larger cases."
      },
      {
        "q": "Are rush flexible partial cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Get accurate gum-colored and lightweight removable flexible partial dentures.",
    "headline": "Flexible partial, comfortable and metal-free",
    "whereFits": {
      "title": "Where a flexible partial fits",
      "items": [
        "Esthetic partials: Clasp-free retention where visible metal is a concern.",
        "Smaller spans: Comfortable flexible partials for one to a few missing teeth.",
        "Metal-sensitive patients: A metal-free option where alloys are contraindicated."
      ]
    },
    "featureSection": {
      "title": "Comfort and esthetics, with the right expectations",
      "body": "A flexible partial hides its clasps and cushions against the tissue, which patients love. We design it for the spans it suits and set the teeth for a natural look, and where a case needs the rigidity and load distribution of a cast framework instead, we tell you. Matching the removable to the case is the difference between one a patient wears and one they abandon."
    },
    "h1": "Flexible Partial"
  },
  {
    "slug": "zirconia-hybrid",
    "code": "ZH · 31",
    "category": "Implant Solutions",
    "categories": [
      "implant"
    ],
    "title": "Zirconia Hybrid",
    "heroHtml": "A durable arch with <em>natural presence.</em>",
    "art": "bridge",
    "image": "/assets/LDA_product_images/zirconia-hybrid.png",
    "cardDesc": "A durable full-arch restoration with cleansable contours and natural presence.",
    "intro": "A zirconia hybrid is a definitive full-arch implant prosthesis built on a milled titanium bar with a zirconia overlay and pink zirconia gingiva. The bar reinforces long spans and distributes load, while the zirconia gives strength, stain resistance and a natural finish. We design the zirconia hybrid against verified implant positions and confirm passive fit before it moves into final production. Send the implant records, and we plan the bar and overlay to the case.",
    "metaTitle": "Zirconia Hybrid | Full-Arch Implant Prosthesis | Laguna Dental Arts",
    "metaDescription": "A zirconia hybrid full-arch prosthesis on a milled titanium bar with zirconia teeth and pink zirconia gingiva. Screw-retained and retrievable. Start a case.",
    "breadcrumb": "Home › Lab Services › Zirconia Hybrid",
    "specs": [
      [
        "Turnaround",
        "10–14 days"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Titanium Bar / Zirconia"
      ],
      [
        "Options",
        "Full Arch"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a zirconia hybrid case?",
        "a": "Send a completed prescription, a verified implant-level scan or impression, opposing arch, bite record, the implant system and platform, and an approved provisional or design reference. Verified records let us confirm the zirconia hybrid before production."
      },
      {
        "q": "Do you accept digital scans for a zirconia hybrid?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, plus scan-body captures for implant positions. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for a zirconia hybrid?",
        "a": "The standard estimate is 10–14 days in lab. Timing varies with verification, complexity and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "How is a zirconia hybrid different from an all-on-X hybrid or a zirconia bridge?",
        "a": "A zirconia hybrid uses a milled titanium bar under zirconia with pink zirconia gingiva. An all-on-X hybrid uses denture-style teeth on a bar; a screw-retained zirconia bridge is monolithic zirconia on ti-bases. We match the design to the arch."
      },
      {
        "q": "Are rush zirconia hybrid cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Relaible full arch Zirconia hybrid solution for your “All on 4” style cases.",
    "headline": "Zirconia hybrid, a definitive full-arch on a milled bar",
    "whereFits": {
      "title": "Where a zirconia hybrid fits",
      "items": [
        "Definitive full-arch: A bar-reinforced zirconia hybrid for a completed implant arch.",
        "Long spans and cantilevers: The titanium bar manages flexure where monolithic zirconia alone is riskier.",
        "Significant tissue loss: Pink zirconia gingiva restores a natural transition where ridge height is reduced."
      ]
    },
    "featureSection": {
      "title": "Bar strength, zirconia finish",
      "body": "A monolithic zirconia bridge is excellent, but long spans and cantilevers benefit from a metal substructure. The zirconia hybrid adds a milled titanium bar under the zirconia, so load spreads through the framework and the prosthesis resists fracture over time. Pink zirconia recreates the gumline where tissue is lost, and the whole restoration stays screw-retained and retrievable. Every case ships with components, torque values and screws for delivery."
    },
    "h1": "Zirconia Hybrid"
  },
  {
    "slug": "screw-retained-bridge",
    "code": "SRB · 32",
    "category": "Implant Solutions",
    "categories": [
      "implant"
    ],
    "title": "Screw-Retained Bridge",
    "heroHtml": "Fixed function with <em>clinical retrievability.</em>",
    "art": "bridge",
    "image": "/assets/LDA_product_images/screw-retained-bridge.png",
    "cardDesc": "Multi-unit implant bridges designed for passive fit and serviceability.",
    "intro": "A screw-retained bridge is a fixed, retrievable implant restoration spanning two or more implants, secured with screws rather than cement for cleaner maintenance. We design it around verified implant positions and access channels in your choice of material, so it seats passively and lifts out for service. This page covers partial-span and segmental implant bridges; full-arch cases route to our dedicated full-arch workflows. Send the implant records, and we confirm the interface before production.",
    "metaTitle": "Screw-Retained Bridge | Implant Bridge | Laguna Dental Arts",
    "metaDescription": "A screw-retained bridge for partial-span implant cases, secured with screws for passive fit and clean, retrievable maintenance. Cement-free seating. Start a case.",
    "breadcrumb": "Home › Lab Services › Screw-Retained Bridge",
    "specs": [
      [
        "Turnaround",
        "10–14 days"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Zirconia / PFM / Ti Base"
      ],
      [
        "Options",
        "Multi-Unit"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a screw-retained bridge case?",
        "a": "Send a completed prescription, an implant-level scan or scan-body capture, opposing arch, bite record, the implant system and platform, shade, and photographs. Complete records let us confirm the screw-retained bridge before production."
      },
      {
        "q": "Do you accept digital scans for a screw-retained bridge?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, plus scan-body captures. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for a screw-retained bridge?",
        "a": "The standard estimate is 10 to 14 days in lab. Timing varies with span, verification and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "Does this page cover full-arch cases?",
        "a": "This screw-retained bridge page covers partial-span and segmental implant bridges. Full-arch restorations route to our screw-retained zirconia bridge and zirconia hybrid workflows."
      },
      {
        "q": "Are rush screw-retained bridge cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Offering screw-retained bridges for exceptional clinical performance.",
    "headline": "Screw-retained bridge, retrievable multi-unit implant restorations",
    "whereFits": {
      "title": "Where a screw-retained bridge fits",
      "items": [
        "Partial-span implant bridges: Three- and four-unit posterior or anterior implant bridges.",
        "Retrievable maintenance: Screw retention keeps the restoration serviceable over time.",
        "Cement-free seating: No subgingival cement, so no residual-cement risk."
      ]
    },
    "featureSection": {
      "title": "Passive fit and clean maintenance",
      "body": "A screw-retained bridge removes cement from the equation. We verify implant positions, place the access channels for retrievability where occlusion allows, and design the framework for passive fit across every implant. The result seats without stress on the fixtures and comes out cleanly for hygiene or repair. For a strong, esthetic definitive we build on ti-bases; for full-arch cases, see our screw-retained zirconia bridge and zirconia hybrid options."
    },
    "h1": "Screw-Retained Bridge"
  },
  {
    "slug": "temporary-bridge",
    "code": "TB · 33",
    "category": "Crown & Bridge",
    "categories": [
      "fixed"
    ],
    "title": "Temporary Bridge",
    "heroHtml": "Protect the plan with a <em>strong provisional.</em>",
    "art": "bridge",
    "image": "/assets/LDA_product_images/temporary-bridge.png",
    "cardDesc": "A strong provisional that protects function while the final case progresses.",
    "intro": "A temporary bridge is a provisional multi-unit restoration that maintains the space, protects the preparations and shapes the tissue around pontics while the definitive bridge is made. Milled or printed in PMMA and resin, it lets you and your patient preview shape, length and shade across the span before the final case. Send the scan and plan, and we produce the temporary bridge to protect function and esthetics in the interim.",
    "metaTitle": "Temporary Bridge | Provisional Bridge | Laguna Dental Arts",
    "metaDescription": "A temporary bridge that protects the preparations, holds the span and shapes pontic tissue while the definitive bridge is made. Milled or printed. Start a case.",
    "breadcrumb": "Home › Lab Services › Temporary Bridge",
    "specs": [
      [
        "Turnaround",
        "3–5 days"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "PMMA / Printed Resin"
      ],
      [
        "Options",
        "Short / Long Span"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a temporary bridge case?",
        "a": "Send a completed prescription, a scan or impression, opposing arch, bite record, shade and any pre-op or wax-up reference. Complete records let us design the temporary bridge to plan."
      },
      {
        "q": "Do you accept digital scans for a temporary bridge?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files. Contact our team if you need help connecting your scanner or transferring a case."
      },
      {
        "q": "What is the typical turnaround for a temporary bridge?",
        "a": "The standard estimate is 3 to 5 days in lab. Timing varies with the number of units and complexity, so confirm the current schedule when submitting."
      },
      {
        "q": "Can a temporary bridge shape the tissue for the final restoration?",
        "a": "Yes. Ovate pontics on a temporary bridge can develop the ridge and emergence, so the definitive bridge seats with a natural tissue contour."
      },
      {
        "q": "Are rush temporary bridge cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Interim protection, matched natural tooth color and shape.",
    "headline": "Temporary bridge, interim spans that protect and preview",
    "whereFits": {
      "title": "Where a temporary bridge fits",
      "items": [
        "Span protection: An interim bridge that holds the space and protects the abutments between visits.",
        "Pontic and tissue shaping: Ovate pontic development to sculpt the ridge before the definitive.",
        "Esthetic preview: A trial of the smile across the span before the final bridge."
      ]
    },
    "featureSection": {
      "title": "Shape the tissue, preview the result",
      "body": "A temporary bridge does more than fill a gap. Its pontics can shape the soft tissue so the definitive bridge emerges naturally, and its form previews the esthetics of the final span. We mill and print the temporary bridge in durable PMMA and resin, finish the margins and connectors for strength, and match the shade so it holds up for the interim period. Approve the provisional, and the definitive follows the same plan."
    },
    "h1": "Temporary Bridge"
  },
  {
    "slug": "screwmentable",
    "code": "SMR · 34",
    "category": "Implant Solutions",
    "categories": [
      "implant",
      "crown"
    ],
    "title": "Screwmentable Restoration",
    "heroHtml": "A custom foundation with <em>retrievable design.</em>",
    "art": "implant",
    "image": "/assets/LDA_product_images/screwmentable-restoration.png",
    "cardDesc": "A custom abutment crown with a controlled screw-access path.",
    "intro": "A screwmentable restoration combines screw retrievability with a cemented restoration's passive fit, across single crowns and multi-unit bridges. We bond the restoration to the abutment or ti-base in the lab, so it reaches you as one unit with an access channel, ready to screw in with no cement at the chair. It suits angled implants and esthetic sites where a facial access channel would compromise the result. Send the implant records, and we confirm the interface before production.",
    "metaTitle": "Screwmentable Restoration | Combined Retention | Laguna Dental Arts",
    "metaDescription": "A screwmentable restoration combining screw retrievability with a cemented restoration's passive fit, across single crowns and multi-unit bridges. Start a case.",
    "breadcrumb": "Home › Lab Services › Screwmentable Restoration",
    "specs": [
      [
        "Turnaround",
        "10–14 days"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Zirconia / Ti Base"
      ],
      [
        "Options",
        "Custom Abutment Crown"
      ]
    ],
    "included": [
      "Design reviewed against your prescription and submitted records",
      "Digital and traditional case submissions supported",
      "Material and workflow guidance before production",
      "Quality-control review completed before delivery",
      "Major scanner workflows and open STL or PLY files accepted",
      "Case-specific technical support from the Laguna team"
    ],
    "faq": [
      {
        "q": "What records should I send for a screwmentable restoration case?",
        "a": "Send a completed prescription, an implant-level scan or scan-body capture, opposing arch, bite record, the implant system and platform, shade, and photographs. Complete records let us confirm the screwmentable restoration before production."
      },
      {
        "q": "Do you accept digital scans for a screwmentable restoration?",
        "a": "Yes. We accept major intraoral scanner workflows and open STL or PLY files, plus scan-body captures. Contact our team if you need help transferring a case."
      },
      {
        "q": "What is the typical turnaround for a screwmentable restoration?",
        "a": "The standard estimate is 10 to 14 days in lab, depending on units. Timing varies with complexity and approvals, so confirm the current schedule when submitting."
      },
      {
        "q": "Can a screwmentable restoration be a bridge, not just a crown?",
        "a": "Yes. The combined-retention approach extends across multi-unit spans, so a screwmentable restoration can be a bridge. For single crowns, see our screwmentable crown page."
      },
      {
        "q": "Are rush screwmentable restoration cases available?",
        "a": "Rush service may be available depending on case type, records and the production schedule. Call before sending so we can confirm feasibility and your requested delivery date."
      }
    ],
    "subtext": "Offering a screw and cement-retained restorations with exceptional performance.",
    "headline": "Screwmentable restoration, combined retention for crowns and bridges",
    "whereFits": {
      "title": "Where a screwmentable restoration fits",
      "items": [
        "Angled implants: Retrievability without a facial access channel, single or multi-unit.",
        "Esthetic zone: Hidden access with a cemented restoration's emergence.",
        "Multi-unit spans: The combined-retention approach extended across a screwmentable bridge."
      ]
    },
    "featureSection": {
      "title": "One approach, single unit to bridge",
      "body": "A screwmentable restoration gives you screw retrievability and cemented passive fit in the same unit, whether it is a single crown or a multi-unit bridge. We bond to the ti-base or abutment under controlled lab conditions, so there is no subgingival cement to chase at delivery, and the restoration still unscrews for service. For single crowns, see our screwmentable crown page; this workflow extends the same benefits across larger spans."
    },
    "h1": "Screwmentable Restoration"
  }
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function buildServiceFaq(service: Service) {
  if (service.faq && service.faq.length > 0) {
    return service.faq;
  }
  const article = /^[aeiou]/i.test(service.title) ? "an" : "a";
  return [
    { q: `What records should I send for ${article} ${service.title} case?`, a: "Send a completed prescription, the final digital scan or impression, opposing arch, bite record and all relevant photographs or component details. Complete records help us confirm the design before production." },
    { q: `Do you accept digital scans for ${service.title}?`, a: "Yes. We accept major intraoral scanner workflows as well as open STL and PLY files. Contact our team if you need help connecting your scanner or transferring a case." },
    { q: `What is the typical turnaround time for ${service.title}?`, a: `The standard estimate for this product is ${service.specs[0][1]}. Timing can vary with complexity, material, records and approval requirements, so confirm the current schedule when submitting.` },
    { q: "Can your team help me select the right material or design?", a: "Yes. Include the clinical indication, restorative space, esthetic goals and occlusal considerations with the case. Our technical team can review the options before production begins." },
    { q: `Are rush ${service.title} cases available?`, a: "Rush service may be available depending on the case type, records and production schedule. Please call before sending the case so we can confirm feasibility and the requested delivery date." },
  ];
}

export const SCANNERS = ["iTero", "3Shape", "Medit", "Carestream", "Dexis", "Sirona", "Planmeca"];

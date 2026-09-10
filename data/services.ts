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
  metaTitle?: string;
  metaDescription?: string;
  breadcrumb?: string;
  specs: ServiceSpec[];
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
    "intro": "High-strength monolithic and layered zirconia crowns are designed for dependable margins, controlled occlusion and a natural finish. Material selection is matched to the restorative zone and clinical demand.",
    "metaTitle": "Zirconia Crowns | Monolithic & Layered | Laguna Dental Arts",
    "metaDescription": "Monolithic and layered zirconia crowns milled for dependable margins, controlled occlusion and a natural finish. Digital or traditional workflow. Start a case today.",
    "breadcrumb": "Home / Lab Services / Zirconia Crowns",
    "specs": [
      [
        "Turnaround",
        "6–9 Days in lab"
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
    "intro": "Full-arch hybrid restorations are planned from approved records, restorative space and implant positions. Our team coordinates design checkpoints before the case moves into final production.",
    "metaTitle": "All-on-X Hybrid Full-Arch Restorations | Laguna Dental Arts",
    "metaDescription": "All-on-X hybrid full-arch restorations planned from your records, restorative space and implant positions. Zirconia or PMMA, All-on-4 or All-on-6. Start a case.",
    "breadcrumb": "Home / Lab Services / All-on-X Hybrids",
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
    "intro": "Lithium-disilicate restorations balance strength with lifelike light transmission for veneers, inlays, onlays and selected crowns. Each case is finished to the prescribed shade and surface character.",
    "metaTitle": "e.max Restorations | Lithium Disilicate | Laguna Dental Arts",
    "metaDescription": "e.max restorations in lithium disilicate for veneers, inlays, onlays and crowns, finished to your shade and surface character. Pressed or milled. Start a case.",
    "breadcrumb": "Home / Lab Services / e.max Restorations",
    "specs": [
      [
        "Turnaround",
        "8 Days in lab"
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
    "intro": "Porcelain-fused-to-metal crowns combine a durable substructure with hand-finished porcelain. They remain a practical choice where strength, conventional preparation and shade control must work together.",
    "metaTitle": "PFM Crowns | Porcelain-Fused-to-Metal | Laguna Dental Arts",
    "metaDescription": "PFM crowns pairing a durable metal substructure with hand-finished porcelain for strength, conventional prep and shade control. Crown or bridge. Start a case.",
    "breadcrumb": "Home / Lab Services / PFM Crowns",
    "specs": [
      [
        "Turnaround",
        "8 Days in lab"
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
    "intro": "Patient-specific surgical guides translate the approved restorative plan into a precise clinical aid. Cases are reviewed for scan alignment, sleeve selection and access before manufacturing.",
    "metaTitle": "Surgical Guides | Guided Implant Placement | Laguna Dental Arts",
    "metaDescription": "Patient-specific surgical guides that translate the approved restorative plan into precise implant placement. Tooth, tissue or bone supported. Start a case today.",
    "breadcrumb": "Home / Lab Services / Surgical Guides",
    "specs": [
      [
        "Turnaround",
        "5 Days in lab"
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
    "intro": "High-resolution printed models and removable dies support restorative design, appliance fabrication and diagnostic communication. Files are prepared for dimensional stability and clear margins.",
    "metaTitle": "Printed Models & Dies | High-Resolution | Laguna Dental Arts",
    "metaDescription": "High-resolution printed models & dies for restorative design, appliances and diagnostics. Solid, sectioned or die, dimensionally stable. Start a case today.",
    "breadcrumb": "Home / Lab Services / Printed Models & Dies",
    "specs": [
      [
        "Turnaround",
        "3–5 Days in lab"
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
    "intro": "A titanium interface provides connection strength while a customized zirconia portion supports esthetics through the tissue zone. The design is reviewed for clearance, emergence and restorative contour.",
    "metaTitle": "Zirconia Hybrid Abutment | Ti-Base | Laguna Dental Arts",
    "metaDescription": "A zirconia hybrid abutment pairing a titanium interface for connection strength with a custom zirconia emergence for natural tissue esthetics. Start a case today.",
    "breadcrumb": "Home / Lab Services / Zirconia Hybrid Custom Abutment",
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
        "Zirconia / Titanium"
      ],
      [
        "Options",
        "Custom Emergence"
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
    "intro": "Diagnostic wax-ups translate restorative objectives into a clear three-dimensional proposal for preparation guidance, provisionalization and patient communication.",
    "metaTitle": "Diagnostic Wax-Up | Treatment Planning | Laguna Dental Arts",
    "metaDescription": "A diagnostic wax-up turning your restorative goals into a clear 3D proposal for prep guidance, provisionals and patient communication. Start a case today.",
    "breadcrumb": "Home / Lab Services / Diagnostic Wax-Up",
    "specs": [
      [
        "Turnaround",
        "3–5 Days in lab"
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
    "intro": "Patient-specific titanium abutments are designed around implant position, tissue profile and restorative space to create a stable, clean foundation for the final restoration.",
    "metaTitle": "Titanium Custom Abutments | Laguna Dental Arts",
    "metaDescription": "Titanium custom abutments designed around implant position, tissue profile and restorative space for a stable, clean foundation. Major platforms. Start a case.",
    "breadcrumb": "Home / Lab Services / Titanium Custom Abutments",
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
        "Titanium"
      ],
      [
        "Options",
        "Major Implant Platforms"
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
    "intro": "Monolithic zirconia restorations provide high fracture resistance with controlled anatomy and polished antagonist contact areas—well suited to demanding posterior indications.",
    "metaTitle": "Full-Contour Zirconia | Monolithic | Laguna Dental Arts",
    "metaDescription": "Full-contour zirconia with high fracture resistance, controlled anatomy and polished antagonist contacts, suited to demanding posterior cases. Start a case today.",
    "breadcrumb": "Home / Lab Services / Full-Contour Zirconia",
    "specs": [
      [
        "Turnaround",
        "6 Days in lab"
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
    "intro": "Complete acrylic dentures are designed for balanced occlusion, natural arrangement and comfortable borders using either a digital or conventional clinical workflow.",
    "metaTitle": "Acrylic Denture | Complete Removable | Laguna Dental Arts",
    "metaDescription": "A complete acrylic denture designed for balanced occlusion, natural arrangement and comfortable borders. Digital or conventional workflow. Start a case today.",
    "breadcrumb": "Home / Lab Services / Acrylic Denture",
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
        "Materials",
        "Acrylic / Composite Teeth"
      ],
      [
        "Options",
        "Digital / Traditional"
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
    "intro": "Acrylic partial dentures provide a serviceable removable option for transitional or definitive indications. Tooth position, clasping and tissue support are planned from the prescription.",
    "metaTitle": "Acrylic Partial Denture | Laguna Dental Arts",
    "metaDescription": "An acrylic partial for transitional or definitive tooth replacement, with tooth position, clasping and tissue support planned to your Rx. Start a case today.",
    "breadcrumb": "Home / Lab Services / Acrylic Partial",
    "specs": [
      [
        "Turnaround",
        "7–8 Days in lab"
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
    "intro": "Cast or digitally produced metal frameworks are designed for stability, hygienic contours and a precise path of insertion before the acrylic and tooth setup stages.",
    "metaTitle": "Partial Metal Framework | Cobalt Chrome | Laguna Dental Arts",
    "metaDescription": "A partial metal framework in cobalt chrome, designed for stability, hygienic contours and a precise path of insertion. Framework or finished partial. Start a case.",
    "breadcrumb": "Home / Lab Services / Partial Metal Framework",
    "specs": [
      [
        "Turnaround",
        "10 Days in lab"
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
    "slug": "temporaries",
    "code": "TEMP · 22",
    "category": "Crown & Bridge",
    "categories": [
      "fixed",
      "crown"
    ],
    "title": "Temporaries",
    "heroHtml": "Interim restorations, <em>clinically ready.</em>",
    "art": "bridge",
    "image": "/assets/LDA_product_images/temporaries.jpeg",
    "cardDesc": "Provisional crowns and bridges for function, tissue support and esthetic review.",
    "intro": "Provisional crowns and bridges support function, tissue management and esthetic evaluation while the definitive restoration is being completed.",
    "metaTitle": "Temporary Restorations | Provisionals | Laguna Dental Arts",
    "metaDescription": "Temporary restorations: provisional crowns and bridges supporting function, tissue management and esthetics while the definitive is made. Start a case today.",
    "breadcrumb": "Home / Lab Services / Temporaries",
    "specs": [
      [
        "Turnaround",
        "3–5 Days in lab"
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
    "intro": "A full-contour zirconia bridge is designed around verified implant positions, restorative space and screw access for a strong, retrievable full-arch solution.",
    "metaTitle": "Screw-Retained Zirconia Bridge | Laguna Dental Arts",
    "metaDescription": "A screw-retained zirconia bridge for the full arch, designed around verified implant positions and screw access for a strong, retrievable definitive. Start a case.",
    "breadcrumb": "Home / Lab Services / Screw-Retained Zirconia Bridge",
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
        "Zirconia / Ti Bases"
      ],
      [
        "Options",
        "Full Arch"
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
    "intro": "Milled PMMA bridges provide an efficient fixed provisional for immediate-load and prototype workflows, allowing the restorative design to be evaluated before finalization.",
    "metaTitle": "Screw-Retained PMMA Bridge | Laguna Dental Arts",
    "metaDescription": "A screw-retained PMMA bridge: a fixed provisional for immediate-load and prototype workflows, to test the design before the definitive. Start a case today.",
    "breadcrumb": "Home / Lab Services / Screw-Retained PMMA Bridge",
    "specs": [
      [
        "Turnaround",
        "5–8 Days in lab"
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
    "intro": "Implant-assisted acrylic dentures combine a removable prosthesis with planned attachment support. The workflow is coordinated around component selection, space and patient hygiene.",
    "metaTitle": "Implant Acrylic Denture | Overdenture | Laguna Dental Arts",
    "metaDescription": "An implant acrylic denture pairing the comfort of an acrylic overdenture with secure implant retention. Locator or bar attachments. Start a case today.",
    "breadcrumb": "Home › Lab Services › Implant Acrylic Denture",
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
        "Materials",
        "Acrylic / Attachments"
      ],
      [
        "Options",
        "Overdenture"
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
    "intro": "A zirconia framework supports hand-layered porcelain for cases that require structural strength with enhanced optical depth and individualized characterization.",
    "metaTitle": "Porcelain Fused to Zirconia | Layered | Laguna Dental Arts",
    "metaDescription": "Porcelain fused to zirconia crowns and bridges: a high-strength zirconia core with hand-layered porcelain for lifelike anterior esthetics. Start a case today.",
    "breadcrumb": "Home › Lab Services › Porcelain Fused to Zirconia",
    "specs": [
      [
        "Turnaround",
        "9 Days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Zirconia / Porcelain"
      ],
      [
        "Options",
        "Layered Ceramic"
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
    "slug": "screwmentable-crown-abutment-with-screw-channel-crown",
    "code": "SCAC · 28",
    "category": "Implant Solutions",
    "categories": [
      "implant",
      "crown"
    ],
    "title": "Screwmentable Crown & Abutment",
    "heroHtml": "Two-piece control with <em>retrievable access.</em>",
    "art": "implant",
    "image": "/assets/LDA_product_images/screwmentable-crown-abutment-reference-enhanced.png",
    "cardDesc": "A two-piece restorative design that combines esthetics and retrievability.",
    "intro": "A custom abutment and separate screw-channel crown combine cementable esthetics with clinical retrievability. Interfaces and access paths are reviewed before production.",
    "metaTitle": "Screwmentable Crown | Screw + Cement | Laguna Dental Arts",
    "metaDescription": "A screwmentable crown combining screw retrievability with a cemented crown's passive fit, lab-bonded to the abutment for a clean, cement-free seat. Start a case.",
    "breadcrumb": "Home › Lab Services › Screwmentable Crown",
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
        "Titanium / Zirconia"
      ],
      [
        "Options",
        "Two-Piece"
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
    "slug": "zirconia-screw-retained-crown-with-ti-base",
    "code": "ZSC · 29",
    "category": "Implant Solutions",
    "categories": [
      "implant",
      "crown"
    ],
    "title": "Zirconia Screw-Retained Crown with Ti-Base",
    "heroHtml": "Zirconia esthetics on a <em>titanium base.</em>",
    "art": "implant",
    "image": "/assets/LDA_product_images/zirconia-screw-retained-crown-ti-base.png",
    "cardDesc": "A retrievable zirconia implant crown supported by a titanium interface.",
    "intro": "A monolithic or layered zirconia crown is bonded to a titanium base for a strong implant interface and retrievable delivery. Emergence and access are tailored to the case.",
    "metaTitle": "Zirconia Screw-Retained Crown | Ti-Base | Laguna Dental Arts",
    "metaDescription": "A zirconia screw-retained crown bonded to a ti-base and screwed directly to the implant, fully retrievable with no cement at the chair. Start a case today.",
    "breadcrumb": "Home › Lab Services › Zirconia Screw-Retained Crown",
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
        "Zirconia / Titanium"
      ],
      [
        "Options",
        "Screw Retained"
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
    "slug": "flexible-partials",
    "code": "FP · 30",
    "category": "Removables",
    "categories": [
      "removable"
    ],
    "title": "Flexible Partials",
    "heroHtml": "Metal-free flexibility with <em>natural comfort.</em>",
    "art": "denture",
    "image": "/assets/LDA_product_images/Flexible Partials.png",
    "cardDesc": "Metal-free removable prosthetics with discreet clasps and comfortable adaptation.",
    "intro": "Flexible partial dentures use resilient, tissue-toned material to create discreet clasps and comfortable adaptation for selected removable indications.",
    "metaTitle": "Flexible Partial | Metal-Free Partial Denture | Laguna Dental Arts",
    "metaDescription": "A flexible partial, a metal-free removable partial denture with tissue-toned clasps that disappear at the gumline. Comfortable and esthetic. Start a case today.",
    "breadcrumb": "Home › Lab Services › Flexible Partial",
    "specs": [
      [
        "Turnaround",
        "9 Days in lab"
      ],
      [
        "Workflow",
        "Digital / Traditional"
      ],
      [
        "Materials",
        "Flexible Resin"
      ],
      [
        "Options",
        "Metal-Free"
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
    "intro": "Full-arch zirconia hybrids are designed for strength, cleansable tissue contours and a natural tooth arrangement. Records and approvals are coordinated through defined checkpoints.",
    "metaTitle": "Zirconia Hybrid | Full-Arch Implant Prosthesis | Laguna Dental Arts",
    "metaDescription": "A zirconia hybrid full-arch prosthesis on a milled titanium bar with zirconia teeth and pink zirconia gingiva. Screw-retained and retrievable. Start a case.",
    "breadcrumb": "Home › Lab Services › Zirconia Hybrid",
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
        "Zirconia / Titanium"
      ],
      [
        "Options",
        "Full Arch"
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
    "intro": "Multi-unit screw-retained bridges are planned around implant position, passive fit and hygienic contours, with restorative material selected for the indication.",
    "metaTitle": "Screw-Retained Bridge | Implant Bridge | Laguna Dental Arts",
    "metaDescription": "A screw-retained bridge for partial-span implant cases, secured with screws for passive fit and clean, retrievable maintenance. Cement-free seating. Start a case.",
    "breadcrumb": "Home › Lab Services › Screw-Retained Bridge",
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
        "Zirconia / PMMA / Metal"
      ],
      [
        "Options",
        "Multi-Unit"
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
    "intro": "Temporary bridges maintain function, contacts and tissue architecture while the definitive case progresses. Designs can also serve as esthetic and occlusal prototypes.",
    "metaTitle": "Temporary Bridge | Provisional Bridge | Laguna Dental Arts",
    "metaDescription": "A temporary bridge that protects the preparations, holds the span and shapes pontic tissue while the definitive bridge is made. Milled or printed. Start a case.",
    "breadcrumb": "Home › Lab Services › Temporary Bridge",
    "specs": [
      [
        "Turnaround",
        "3–5 Days in lab"
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
    "slug": "screwmentable",
    "code": "SCR · 34",
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
    "intro": "A screwmentable restoration combines a custom abutment with a crown engineered for a controlled screw-access path, supporting esthetics, serviceability and fit.",
    "metaTitle": "Screwmentable Restoration | Combined Retention | Laguna Dental Arts",
    "metaDescription": "A screwmentable restoration combining screw retrievability with a cemented restoration's passive fit, across single crowns and multi-unit bridges. Start a case.",
    "breadcrumb": "Home › Lab Services › Screwmentable Restoration",
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
        "Titanium / Zirconia"
      ],
      [
        "Options",
        "Custom Abutment Crown"
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
  }
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function buildServiceFaq(service: Service) {
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



export const SITE = {
  name: "Laguna Dental Arts",
  phone: "+1 (916) 688-1333",
  phoneHref: "tel:+19166881333",
  email: "rx-photos@lagunadentalarts.com",
  addressLine1: "9152 Elkmont Way",
  addressLine2: "Elk Grove, CA 95624",
  // hours: "Monday–Friday · 7:00–18:00 PT",
  hoursNote: "Case pickups until 17:00 PT",
};

export type ServiceLink = {
  title: string;
  desc: string;
  href: string;
  icon: string;
};

export const SERVICE_LINKS: ServiceLink[] = [
  { title: "Crowns", desc: "Zirconia, e.max, PFM & full-contour", href: "/services/crowns", icon: "crown" },
  { title: "Full-Arch Solutions", desc: "All-on-X hybrids & zirconia", href: "/services/full-arch", icon: "bridge" },
  { title: "Night Guards & Appliances", desc: "Splints, retainers & ortho appliances", href: "/services/night-guards", icon: "nightguard" },
  { title: "Implant Restoration", desc: "Custom abutments & screw-retained", href: "/services/implants", icon: "implant" },
  { title: "Removables & Partials", desc: "Dentures, frameworks & flexibles", href: "/services/dentures", icon: "denture" },
  { title: "Guides, Models & Wax-Ups", desc: "Surgical guides & digital planning", href: "/services", icon: "ortho" },
];

export const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Dental Portal", href: "/portal" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_LAB_SERVICES = [
  { label: "Crowns", href: "/services/crowns" },
  { label: "Bridges", href: "/services/bridges" },
  { label: "Implants", href: "/services/implants" },
  { label: "Veneers", href: "/services/veneers" },
  { label: "Dentures", href: "/services/dentures" },
  { label: "View all →", href: "/services" },
];

export const SOCIAL_LINKS = [
  { name: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583964119515#" },
  { name: "instagram", label: "Instagram", href: "https://www.instagram.com/lagunadentalarts?igsi=aHFxbXp2dzg2OGY4" },
  { name: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/laguna-dental-arts/home/" },
  { name: "youtube", label: "YouTube", href: "https://www.youtube.com/@LagunaDentalArts" },
];

export type FooterLink = {
  label: string;
  href: string;
  download?: string;
};

export const FOOTER_COMPANY: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Doctor Portal", href: "/portal" },
  {
    label: "Download Rx Form",
    href: "/downloads/Laguna_Dental_Arts_Lab_Slip.pdf",
    download: "Laguna_Dental_Arts_Lab_Slip.pdf",
  },
  { label: "Contact", href: "/contact" },
  { label: "Become a Partner", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

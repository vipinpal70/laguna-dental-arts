const PATHS: Record<string, string> = {
  check: '<path d="M20 6 9 17l-5-5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chev: '<path d="m6 9 6 6 6-6"/>',
  scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M3 12h18"/>',
  upload: '<path d="M12 15V4M8 8l4-4 4 4M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
  design: '<path d="m12 2 9 5v10l-9 5-9-5V7z"/><path d="m3.3 7 8.7 5 8.7-5M12 12v10"/>',
  mill: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  qc: '<path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z"/><path d="m9 12 2 2 4-4"/>',
  truck: '<path d="M2 7h11v9H2zM13 10h4l3 3v3h-7z"/><circle cx="6.5" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/>',
  usa: '<path d="M4 21V4M4 4c3-2 6 2 9 0s5-2 7-1v10c-2-1-4 1-7 1s-6-2-9 0"/>',
  support: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="2.5" y="13" width="4" height="6" rx="1.4"/><rect x="17.5" y="13" width="4" height="6" rx="1.4"/><path d="M20 19a4 4 0 0 1-4 3h-3"/>',
  craft: '<path d="m6 3 6-1 6 1 3 6-9 12L3 9z"/><path d="M3 9h18M12 2 8 9l4 12 4-12z"/>',
  precision: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.4"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3"/>',
  material: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
  speed: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  shield: '<path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z"/>',
  star: '<path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/>',
  doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  download: '<path d="M12 3v12M8 11l4 4 4-4M5 21h14"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  phone: '<path d="M4 5c0 9 6 15 15 15l1-4-5-2-2 2c-2-1-4-3-5-5l2-2-2-5z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  lock: '<rect x="4.5" y="10" width="15" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  track: '<path d="M3 12h4l2 6 4-14 2 8h6"/>',
  cloud: '<path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 18 18z"/><path d="M12 13v5M9.5 15 12 12.5 14.5 15"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  heart: '<path d="M12 20s-7-4.5-9-9C1.5 7.5 4 4 7.5 4c2 0 3.5 1.3 4.5 3 1-1.7 2.5-3 4.5-3C20 4 22.5 7.5 21 11c-2 4.5-9 9-9 9z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  grid: '<path d="M4 5h6v6H4zM14 5h6v6h-6zM4 15h6v4H4zM14 15h6v4h-6z"/>',
  layers2: '<path d="M4 8h16M4 12h16M6 16h12"/>',
  guard: '<path d="M7 4h10l-1 8H8z"/><path d="M9 12v6a3 3 0 0 0 6 0v-6"/>',
  denture: '<path d="M5 10c0-3 3-5 7-5s7 2 7 5-2 8-4 8-2-3-3-3-1 3-3 3-4-5-4-8z"/>',
  guides: '<path d="M3 7l9-4 9 4-9 4z"/><path d="M3 7v6l9 4 9-4V7"/>',
  implantI: '<path d="M12 3v18M8 7h8M9 11h6M10 15h4"/>',
  fullarch: '<path d="M3 9h18M3 13h18M6 9V6M10 9V6M14 9V6M18 9V6M8 17v-4M12 17v-4M16 17v-4"/>',
  crownI: '<path d="M12 2l3 3-3 3-3-3z"/><path d="M6 8c-1.2 5-1 11 2.5 13 1.5.9 2-2 3.5-2s2 2.9 3.5 2C21 19 21.2 13 20 8"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  compass: '<path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19"/><circle cx="12" cy="12" r="3.4"/>',
  gem: '<path d="M14 3 21 10l-9 9-9-9zM14 3l-4 4M9 14l1.5 1.5M6 6 2.5 9.5a2 2 0 0 0 0 3L6 16"/>',
  list3: '<path d="M4 7h16M4 12h16M4 17h10"/>',
};

export function Icon({
  name,
  size = 20,
  className,
  strokeWidth = 1.9,
}: {
  name: keyof typeof PATHS;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: d }}
    />
  );
}

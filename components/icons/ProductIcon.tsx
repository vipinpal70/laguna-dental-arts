const PATHS: Record<string, string> = {
  crown: '<path d="M42 60c-4-14 0-30 8-38 6 8 14 8 20 0 8 8 12 24 8 38"/><path d="M46 60c8 6 40 6 48 0"/><path d="M50 60c-3 10-2 18 2 24M90 60c3 10 2 18-2 24M70 66v18"/><path d="M30 46l10 4M110 46l-10 4M35 34l9 6M105 34l-9 6" opacity=".5"/>',
  bridge: '<path d="M26 44c-2-10 6-16 12-12 3-8 12-8 15 0 4-3 9 0 9 6"/><path d="M26 44c0 14 4 26 8 30 4-4 6-14 6-24"/><rect x="52" y="40" width="36" height="26" rx="6"/><path d="M64 40v26M76 40v26"/><path d="M114 44c2-10-6-16-12-12-3-8-12-8-15 0-4-3-9 0-9 6"/><path d="M114 44c0 14-4 26-8 30-4-4-6-14-6-24"/>',
  implant: '<path d="M54 20c8-6 24-6 32 0-2 10-4 16-4 22H58c0-6-2-12-4-22z"/><path d="M62 44h16l-2 8h-12z"/><path d="M66 52h8v6h-8z"/><path d="M68 58h4v6l-2 22-2-22z"/><path d="M66 66l6 3M66 72l6 3M66 78l6 3" opacity=".7"/>',
  veneer: '<path d="M46 30c8-4 40-4 48 0 4 20 2 42-4 52-6-6-32-6-40 0-6-10-8-32-4-52z"/><path d="M62 28v52M78 28v52M54 30c-1 18 0 36 3 48M86 30c1 18 0 36-3 48" opacity=".55"/><path d="M40 40l6 2M100 40l-6 2" opacity=".5"/>',
  denture: '<path d="M28 38c0-8 8-12 14-8 4-6 12-6 14 0 4-4 10-4 14 0 2-6 10-6 14 0 6-4 14 0 14 8 0 18-8 30-14 30-4 0-6-6-7-12-1 6-3 10-7 10s-6-4-7-10c-1 6-3 12-7 12-6 0-14-12-14-30z"/><path d="M42 34v16M56 32v18M70 32v18M84 32v18M98 34v16" opacity=".5"/>',
  nightguard: '<path d="M30 46c0-12 12-20 40-20s40 8 40 20c0 10-8 16-14 22-4-6-14-8-26-8s-22 2-26 8c-6-6-14-12-14-22z"/><path d="M30 46c8 4 72 4 80 0" opacity=".6"/><path d="M44 42v10M58 40v12M82 40v12M96 42v10" opacity=".5"/>',
  ortho: '<path d="M18 50c14-8 90-8 104 0"/><path d="M18 58c14 8 90 8 104 0" opacity=".4"/><rect x="34" y="44" width="12" height="12" rx="2"/><rect x="58" y="42" width="12" height="12" rx="2"/><rect x="82" y="42" width="12" height="12" rx="2"/><rect x="100" y="44" width="12" height="12" rx="2"/><path d="M40 50h18M64 48h18M88 48h18"/>',
  sleep: '<path d="M32 38c8-4 68-4 76 0 4 8 2 16-2 20-6-4-18-4-36-4s-30 0-36 4c-4-4-6-12-2-20z"/><path d="M36 58c6 4 12 14 34 14s28-10 34-14" opacity=".7"/><path d="M64 42v12M76 42v12" opacity=".5"/><path d="M96 26c0-4 4-6 7-4-2-1-4 1-4 3s2 3 4 3c-3 2-7 0-7-2z" opacity=".8"/>',
};

export function ProductIcon({
  name,
  className,
  style,
}: {
  name: keyof typeof PATHS;
  className?: string;
  style?: React.CSSProperties;
}) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 140 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: d }}
    />
  );
}

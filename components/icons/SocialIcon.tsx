const SOCIAL: Record<string, { d: string; fill?: boolean; stroke?: boolean }> = {
  linkedin: { d: '<path d="M6.94 8.5H4V20h2.94zM5.47 3.5A1.7 1.7 0 1 0 5.5 6.9 1.7 1.7 0 0 0 5.47 3.5M20 20v-6.3c0-3.4-1.8-5-4.2-5-2 0-2.9 1.1-3.4 1.9V8.5H9.5V20h2.9v-6.1c0-1.6.9-2.5 2.1-2.5s1.9.8 1.9 2.5V20z"/>', fill: true },
  instagram: { d: '<rect x="3.5" y="3.5" width="17" height="17" rx="4.6"/><circle cx="12" cy="12" r="3.7"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/>', stroke: true },
  x: { d: '<path d="M17.5 3h3l-6.6 7.6L21.7 21h-6l-4.7-6-5.3 6H2.6l7-8L2.3 3h6.1l4.2 5.6zm-1 16h1.7L7.6 4.8H5.8z"/>', fill: true },
  facebook: { d: '<path d="M14 8.5V6.9c0-.8.2-1.3 1.4-1.3H17V2.6C16.6 2.5 15.5 2.4 14.3 2.4c-2.6 0-4.3 1.6-4.3 4.4v1.7H7.5V12H10v9.4h3.5V12h2.6l.4-3.5z"/>', fill: true },
  youtube: { d: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>', fill: true },
};

export function SocialIcon({ name }: { name: keyof typeof SOCIAL }) {
  const s = SOCIAL[name];
  if (!s) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill={s.fill ? "currentColor" : "none"}
      stroke={s.stroke ? "currentColor" : undefined}
      strokeWidth={s.stroke ? 1.9 : undefined}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: s.d }}
    />
  );
}

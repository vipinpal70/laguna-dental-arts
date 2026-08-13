import Image, { type ImageProps } from "next/image";

/**
 * Image wrapper for insights.
 * - Lazy-loads by default (native `loading="lazy"`) unless `priority` is set.
 * - Disables the optimizer for `data:` URLs (admin uploads are stored inline),
 *   which the Next image optimizer cannot process.
 */
export function InsightImage({ priority, unoptimized, loading, src, ...rest }: ImageProps) {
  const isDataUrl = typeof src === "string" && src.startsWith("data:");
  return (
    <Image
      src={src}
      {...rest}
      priority={priority}
      loading={priority ? undefined : loading ?? "lazy"}
      unoptimized={unoptimized ?? isDataUrl}
    />
  );
}

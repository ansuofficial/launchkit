/**
 * Encode SVG markup as a data URI for use with Elements <Image>.
 * Prefer encodeURIComponent over base64 - smaller, easier to debug, email-safe.
 */
export function svgToDataUri(svg: string): string {
  const cleaned = svg
    .replace(/\s+/g, " ")
    .replace(/>\s+</g, "><")
    .trim();
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(cleaned)}`;
}

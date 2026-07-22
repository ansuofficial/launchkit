import { cn } from "@/lib/utils";

interface BrandLogoProps {
  /** Outer box size in px (logo fills it). */
  size?: number;
  className?: string;
  /** Kept for call-site compatibility; SVG is always static. */
  priority?: boolean;
}

/**
 * LaunchKit brand mark used in chrome (nav, footer).
 * Matches the mark in email/document templates (`logoMarkSvg`).
 */
export function BrandLogo({ size = 36, className }: BrandLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- SVG brand mark; next/image SVG needs extra config
    <img
      src="/images/logo.svg"
      alt=""
      width={size}
      height={size}
      className={cn("rounded-[10px]", className)}
      aria-hidden
      draggable={false}
    />
  );
}

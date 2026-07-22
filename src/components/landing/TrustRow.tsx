import { brandIconUrl, TRUST_BRANDS } from "@/lib/brands";

export function TrustRow() {
  // Two identical sequences so translateX(-50%) loops seamlessly
  const sequence = [...TRUST_BRANDS, ...TRUST_BRANDS];

  return (
    <section
      aria-label="Trusted by teams"
      className="overflow-hidden bg-[var(--lk-bg-primary)] py-10 md:py-12"
    >
      <p className="mb-8 text-center text-sm font-medium text-white/80">
        Trusted by forward-thinking teams
      </p>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--lk-bg-primary)] to-transparent md:w-28"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--lk-bg-primary)] to-transparent md:w-28"
        />

        <div className="lk-marquee-track flex w-max items-center gap-14 px-8 md:gap-20">
          {sequence.map((brand, index) => (
            <div
              key={`${brand.slug}-${index}`}
              className="flex h-10 shrink-0 items-center gap-2.5 opacity-90 transition-opacity duration-200 hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- Iconic Brands CDN SVGs */}
              <img
                src={brandIconUrl(brand.slug, "default")}
                alt={`${brand.name} logo`}
                width={32}
                height={32}
                className="size-8 shrink-0 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="text-sm font-semibold tracking-wide text-white/90">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

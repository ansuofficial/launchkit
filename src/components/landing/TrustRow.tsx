import {
  TRUST_BRANDS,
  trustBrandLogoSrc,
  trustBrandUsesIconic,
} from "@/lib/brands";

export function TrustRow() {
  // Two identical sequences so translateX(-50%) loops seamlessly
  const sequence = [...TRUST_BRANDS, ...TRUST_BRANDS];

  return (
    <section
      aria-label="Companies that trust Unlayer, the company behind Elements"
      className="overflow-hidden bg-[var(--lk-bg-primary)] py-10 md:py-12"
    >
      <div className="mx-auto mb-8 max-w-2xl px-6 text-center">
        <p className="text-sm font-medium text-white/80">
          Companies that trust Unlayer
        </p>
        <p className="mt-2 text-xs leading-relaxed text-white/45">
          These logos represent public customers and ecosystem brands associated
          with <span className="text-white/60">Unlayer</span> (the company
          behind Elements). They are{" "}
          <span className="text-white/60">
            not verified partners of LaunchKit
          </span>
          , and do not endorse this open-source project.
        </p>
      </div>

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
          {sequence.map((brand, index) => {
            const fromIconic = trustBrandUsesIconic(brand);

            return (
              <div
                key={`${brand.name}-${index}`}
                className="flex h-10 shrink-0 items-center gap-2.5 opacity-90 transition-opacity duration-200 hover:opacity-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- Iconic Brands CDN SVGs or local Unlayer wordmarks */}
                <img
                  src={trustBrandLogoSrc(brand)}
                  alt={brand.name}
                  width={fromIconic ? 32 : 140}
                  height={32}
                  className={
                    fromIconic
                      ? "size-8 shrink-0 object-contain"
                      : "h-8 w-auto max-w-[140px] shrink-0 object-contain object-left"
                  }
                  loading="lazy"
                  decoding="async"
                />
                {fromIconic ? (
                  <span className="text-sm font-semibold tracking-wide text-white/90">
                    {brand.name}
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Container } from "./Container";
import { JellyNetwork } from "./JellyNetwork";

/**
 * Product metrics for LaunchKit. Replaces the old Why LaunchKit value cards
 * (Ship faster / Scale smarter / Stay secure) with concrete product facts.
 */
const stats = [
  {
    value: "12",
    label: "production-ready templates for launches, updates, and proposals",
  },
  {
    value: "8",
    label: "email templates for product, marketing, and lifecycle flows",
  },
  {
    value: "4",
    label: "document templates for briefs, meetings, and roadmaps",
  },
  {
    value: "1",
    label: "shared design system: headers, CTAs, footers, and tokens",
  },
] as const;

/**
 * Primary value section under the hero.
 * Stripe-inspired layout with LaunchKit product messaging + interactive visual.
 */
export function BackboneSection() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative overflow-hidden bg-background"
    >
      {/* Headline */}
      <div className="border-b border-border/60">
        <Container className="py-16 md:py-20 lg:py-24">
          <h2
            id="why-heading"
            className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl md:leading-[1.15] lg:text-[44px] lg:leading-[1.12]"
          >
            Beautiful communication should be effortless
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
            LaunchKit is a cohesive set of email and document templates built
            with Elements, so modern software teams can ship polished
            communication without starting from a blank page.
          </p>
        </Container>
      </div>

      {/* Stats strip */}
      <div className="border-b border-border/60">
        <Container className="py-10 md:py-12">
          <ul className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
            {stats.map((stat, index) => (
              <li
                key={stat.value + stat.label}
                className={
                  index > 0
                    ? "md:border-l md:border-border/60 md:px-6 lg:px-8"
                    : "md:pr-6 lg:pr-8"
                }
              >
                <p className="text-3xl font-semibold tracking-tight text-foreground/80 md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 max-w-[15rem] text-sm leading-snug text-muted-foreground">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* Interactive jelly field */}
      <div className="relative isolate min-h-[320px] overflow-hidden bg-background md:min-h-[420px] lg:min-h-[480px]">
        <div className="absolute inset-0 z-0">
          <JellyNetwork className="h-full w-full" rayCount={100} />
        </div>
        <span className="sr-only">
          Animated network illustration. Move your pointer to interact with the
          strands.
        </span>
      </div>
    </section>
  );
}

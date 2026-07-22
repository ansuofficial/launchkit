import Link from "next/link";
import { ArrowRight, Code2, Rocket, Shield, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { HeroIllustration } from "./HeroIllustration";
import { Section } from "./Section";

const trustPills = [
  { icon: Code2, label: "Open Source" },
  { icon: Rocket, label: "Developer Friendly" },
  { icon: Shield, label: "Production Ready" },
];

export function Hero() {
  return (
    <Section
      variant="light"
      className="overflow-hidden pb-12 pt-10 md:pb-16 md:pt-14 lg:pb-20 lg:pt-16"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* Copy column: stays clear of the illustration */}
          <div className="relative z-10 max-w-xl lg:col-span-5">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              <Zap className="size-3.5 fill-primary/20" aria-hidden />
              Build with Elements Challenge
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl md:leading-[1.1] lg:text-[52px] lg:leading-[1.08]">
              Build beautiful{" "}
              <span className="text-primary">
                email &amp; document templates.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Create production-ready templates with the open source email &amp;
              document engine by Unlayer.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={SITE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 rounded-[12px] px-6 text-[15px]",
                )}
              >
                Start Building
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/templates"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 rounded-[12px] px-6 text-[15px]",
                )}
              >
                View Templates
              </Link>
            </div>

            <ul className="mt-8 flex flex-nowrap items-center gap-x-3 sm:gap-x-4">
              {trustPills.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex shrink-0 items-center gap-1.5 text-[11px] font-medium leading-none text-muted-foreground sm:text-xs"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:size-6">
                    <Icon className="size-2.5 sm:size-3" aria-hidden />
                  </span>
                  <span className="whitespace-nowrap">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Illustration column: fills remaining hero width without covering copy */}
          <div className="relative w-full lg:col-span-7">
            <HeroIllustration className="block w-full max-w-none [&_svg]:h-auto [&_svg]:w-full [&_svg]:max-w-none" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

import Link from "next/link";
import { ArrowRight, Code2, Rocket, Shield, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
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
    <Section variant="light" className="overflow-visible pb-16 pt-12 md:pb-20 md:pt-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-xl">
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
              <Link
                href="/templates"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 rounded-[12px] px-6 text-[15px]",
                )}
              >
                Start Building
                <ArrowRight className="size-4" />
              </Link>
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

            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {trustPills.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-3.5" aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-visible lg:justify-self-end">
            <HeroIllustration />
          </div>
        </div>
      </Container>
    </Section>
  );
}

import Link from "next/link";
import { ArrowRight, Code2, Rocket, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Section } from "./Section";

const trustPills = [
  { icon: Code2, label: "Open Source" },
  { icon: Rocket, label: "Developer Friendly" },
  { icon: Shield, label: "Production Ready" },
];

export function Hero() {
  return (
    <Section variant="light" className="pb-8 pt-16 md:pb-12 md:pt-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6">
            Built with Elements
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl md:leading-[1.1]">
            Beautiful{" "}
            <span className="text-primary">email &amp; document</span>{" "}
            templates.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Production-ready templates for modern software teams. One design
            system, built with Elements, ready to customize and ship.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/templates" className={cn(buttonVariants({ size: "lg" }))}>
              Start Building
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/templates"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              View Templates
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {trustPills.map(({ icon: Icon, label }) => (
              <Badge key={label} variant="outline" className="gap-1.5 px-3 py-1">
                <Icon className="size-3.5" />
                {label}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
import Link from "next/link";
import { Github, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Section } from "./Section";

export function GitHubCTA() {
  return (
    <Section variant="accent" className="py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
              <Star className="size-5 text-primary" />
              <span className="text-sm font-medium text-primary">Open Source</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Star LaunchKit on GitHub
            </h2>
            <p className="mt-3 text-muted-foreground">
              Clone the repo, customize templates with Elements, and ship
              professional communication faster. MIT licensed.
            </p>
          </div>
          <Link
            href={SITE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "shrink-0")}
          >
            <Github className="size-4" />
            View Repository
          </Link>
        </div>
      </Container>
    </Section>
  );
}
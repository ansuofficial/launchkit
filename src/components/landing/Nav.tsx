import Link from "next/link";
import { Layers } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Layers className="size-4" />
            </span>
            <span>{SITE.name}</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/templates"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            >
              Templates
            </Link>
            <Link
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              GitHub
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
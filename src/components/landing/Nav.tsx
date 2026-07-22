import Link from "next/link";
import { Layers } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

/**
 * Global site chrome - mounted once in root layout so it appears on every route
 * (home, /templates/*, etc.).
 */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between md:h-[72px]"
        >
          <Link
            href="/"
            aria-label={`${SITE.name} home`}
            className="flex size-9 items-center justify-center rounded-[10px] bg-primary text-primary-foreground shadow-sm shadow-primary/25 transition-opacity duration-200 hover:opacity-90"
          >
            <Layers className="size-4" aria-hidden />
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/templates"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "hidden rounded-[10px] sm:inline-flex",
              )}
            >
              Templates
            </Link>
            <Link
              href={SITE.elementsDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "rounded-[10px]",
              )}
            >
              Docs
            </Link>
            <Link
              href="/templates"
              className={cn(
                buttonVariants({ size: "sm" }),
                "rounded-[10px] px-3.5",
              )}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}

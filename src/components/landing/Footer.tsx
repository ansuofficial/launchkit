import Link from "next/link";
import { Layers } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/lib/site";
import { Container } from "./Container";

const footerLinks = [
  { label: "Templates", href: "/templates" },
  { label: "GitHub", href: SITE.githubUrl, external: true },
  { label: "Elements Docs", href: SITE.elementsDocsUrl, external: true },
  { label: "Unlayer", href: SITE.unlayerUrl, external: true },
];

export function Footer() {
  return (
    <footer className="border-t bg-background py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <Link
              href="/"
              aria-label={`${SITE.name} home`}
              className="inline-flex size-8 items-center justify-center rounded-[10px] bg-primary text-primary-foreground transition-opacity duration-200 hover:opacity-90"
            >
              <Layers className="size-3.5" aria-hidden />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Built with{" "}
              <a
                href={SITE.elementsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Elements
              </a>{" "}
              by{" "}
              <a
                href={SITE.unlayerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Unlayer
              </a>
              . {SITE.challengeHashtag}
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} {SITE.name}. MIT License.
        </p>
      </Container>
    </footer>
  );
}
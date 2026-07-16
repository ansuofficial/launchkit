import Link from "next/link";
import { Github } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

interface FeaturedSectionHeaderProps {
  title?: string;
  description?: string;
}

export function FeaturedSectionHeader({
  title = "Featured Templates",
  description = "Start with proven layouts built for real business communication. Each template uses Elements and follows the LaunchKit design system.",
}: FeaturedSectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
      <Link
        href={SITE.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants(), "mt-8 inline-flex")}
      >
        <Github className="size-4" />
        View on GitHub
      </Link>
    </div>
  );
}
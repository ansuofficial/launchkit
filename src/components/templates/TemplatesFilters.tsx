import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import type { TemplateCategory, TemplateType } from "@/lib/templates";
import { TEMPLATE_CATEGORIES } from "@/lib/templates";
import { cn } from "@/lib/utils";

interface TemplatesFiltersProps {
  activeCategory: TemplateCategory | "all";
  activeType: TemplateType | "all";
  counts: {
    all: number;
    Product: number;
    Marketing: number;
    Business: number;
    email: number;
    document: number;
  };
}

function buildHref(
  category: TemplateCategory | "all",
  type: TemplateType | "all",
): string {
  const params = new URLSearchParams();
  if (category !== "all") params.set("category", category);
  if (type !== "all") params.set("type", type);
  const query = params.toString();
  return query ? `/templates?${query}` : "/templates";
}

function FilterPill({
  href,
  label,
  count,
  active,
}: {
  href: string;
  label: string;
  count?: number;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant: active ? "default" : "outline",
          size: "sm",
        }),
        "transition-all duration-200",
      )}
      aria-current={active ? "page" : undefined}
    >
      {label}
      {typeof count === "number" ? (
        <span
          className={cn(
            "ml-1 tabular-nums",
            active ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {count}
        </span>
      ) : null}
    </Link>
  );
}

export function TemplatesFilters({
  activeCategory,
  activeType,
  counts,
}: TemplatesFiltersProps) {
  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Category
        </p>
        <div className="flex flex-wrap gap-2">
          <FilterPill
            href={buildHref("all", activeType)}
            label="All"
            count={counts.all}
            active={activeCategory === "all"}
          />
          {TEMPLATE_CATEGORIES.map((category) => (
            <FilterPill
              key={category}
              href={buildHref(category, activeType)}
              label={category}
              count={counts[category]}
              active={activeCategory === category}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Type
        </p>
        <div className="flex flex-wrap gap-2">
          <FilterPill
            href={buildHref(activeCategory, "all")}
            label="All types"
            active={activeType === "all"}
          />
          <FilterPill
            href={buildHref(activeCategory, "email")}
            label="Email"
            count={counts.email}
            active={activeType === "email"}
          />
          <FilterPill
            href={buildHref(activeCategory, "document")}
            label="Document"
            count={counts.document}
            active={activeType === "document"}
          />
        </div>
      </div>
    </div>
  );
}
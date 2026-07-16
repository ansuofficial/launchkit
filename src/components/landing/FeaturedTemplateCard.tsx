import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { TemplateMeta } from "@/lib/templates";
import { TemplatePreview } from "./TemplatePreview";

interface FeaturedTemplateCardProps {
  template: TemplateMeta;
}

export function FeaturedTemplateCard({ template }: FeaturedTemplateCardProps) {
  const href =
    template.status === "ready"
      ? `/preview/${template.type}/${template.slug}`
      : "/templates";

  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-200 hover:ring-primary/30">
        <div className="aspect-[4/3] overflow-hidden border-b">
          <TemplatePreview template={template} />
        </div>
        <CardHeader className="flex-row items-start justify-between space-y-0">
          <div className="space-y-1">
            <CardTitle className="text-lg">{template.name}</CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {template.description}
            </p>
          </div>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </CardHeader>
        <div className="flex gap-2 px-4 pb-4">
          <Badge variant="secondary">{template.category}</Badge>
          {template.status === "planned" && (
            <Badge variant="outline">Coming soon</Badge>
          )}
        </div>
      </Card>
    </Link>
  );
}
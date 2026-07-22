import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TemplatePreview } from "@/components/landing/TemplatePreview";
import { getTemplateHref, type TemplateMeta } from "@/lib/templates";

interface BrowseTemplateCardProps {
  template: TemplateMeta;
}

export function BrowseTemplateCard({ template }: BrowseTemplateCardProps) {
  const href =
    template.status === "ready" ? getTemplateHref(template) : "/templates";

  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-200 hover:ring-primary/30">
        <div className="aspect-[4/3] overflow-hidden border-b bg-muted/40">
          <TemplatePreview template={template} />
        </div>
        <CardHeader className="flex-row items-start justify-between space-y-0 pb-2">
          <div className="space-y-1 pr-2">
            <CardTitle className="text-base">{template.name}</CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {template.description}
            </p>
          </div>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </CardHeader>
        <div className="flex flex-wrap gap-2 px-4 pb-4">
          <Badge variant="secondary">{template.category}</Badge>
          <Badge variant="outline" className="capitalize">
            {template.type}
          </Badge>
        </div>
      </Card>
    </Link>
  );
}
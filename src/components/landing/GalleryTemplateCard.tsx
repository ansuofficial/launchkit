import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TemplateMeta } from "@/lib/templates";
import { TemplatePreview } from "./TemplatePreview";

interface GalleryTemplateCardProps {
  template: TemplateMeta;
}

export function GalleryTemplateCard({ template }: GalleryTemplateCardProps) {
  const href =
    template.status === "ready"
      ? `/preview/${template.type}/${template.slug}`
      : "/templates";

  return (
    <Link href={href} className="group block min-w-[260px] shrink-0 md:min-w-0">
      <Card className="overflow-hidden border-white/10 bg-[var(--lk-bg-surface)] text-white ring-white/10 transition-all duration-200 hover:ring-primary/40">
        <div className="aspect-[3/4] overflow-hidden">
          <TemplatePreview template={template} />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-white">{template.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 pb-4">
          <Badge
            variant="secondary"
            className="bg-white/10 text-white hover:bg-white/15"
          >
            {template.category}
          </Badge>
          <Badge variant="outline" className="border-white/20 text-white/70">
            {template.type}
          </Badge>
        </CardContent>
      </Card>
    </Link>
  );
}
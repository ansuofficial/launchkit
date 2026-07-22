import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { preparePreviewHtml } from "@/lib/preview-html";
import type { TemplateMeta } from "@/lib/templates";

interface TemplatePreviewPanelProps {
  template: TemplateMeta;
  html: string;
}

/** Standard macOS window chrome traffic lights (close / minimize / zoom). */
const PREVIEW_DOTS = [
  { label: "Close", color: "#FF5F57" },
  { label: "Minimize", color: "#FEBC2E" },
  { label: "Zoom", color: "#28C840" },
] as const;

export function TemplatePreviewPanel({
  template,
  html,
}: TemplatePreviewPanelProps) {
  const previewHtml = preparePreviewHtml(html);
  const iframeKey = `${template.type}-${template.slug}`;

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="sticky top-16 z-20 flex h-12 shrink-0 items-center gap-2 border-b bg-background/95 px-4 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80 md:top-[4.5rem]">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-1 h-4!" />
        <nav
          aria-label="Breadcrumb"
          className="flex min-w-0 items-center gap-1.5 text-sm text-muted-foreground"
        >
          <span className="hidden sm:inline">Templates</span>
          <span className="hidden sm:inline" aria-hidden>
            /
          </span>
          <span className="capitalize">{template.type}</span>
          <span aria-hidden>/</span>
          <span className="truncate font-medium text-primary">
            {template.name}
          </span>
        </nav>
      </header>

      <div className="lk-scrollbar flex min-h-0 flex-1 flex-col gap-6 overflow-auto p-4 md:p-6 lg:p-8">
        <div className="mx-auto w-full max-w-4xl space-y-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                {template.name}
              </h1>
              <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                {template.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{template.category}</Badge>
              <Badge variant="outline" className="capitalize">
                {template.type}
              </Badge>
            </div>
          </div>
        </div>

        <div
          className={
            template.type === "page"
              ? "mx-auto w-full max-w-5xl flex-1"
              : "mx-auto w-full max-w-4xl flex-1"
          }
        >
          <div className="overflow-hidden rounded-xl border bg-muted/30 shadow-sm">
            <div className="flex items-center gap-1.5 border-b bg-muted/50 px-4 py-2.5">
              {PREVIEW_DOTS.map((dot) => (
                <span
                  key={dot.label}
                  title={dot.label}
                  className="size-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: dot.color }}
                  aria-hidden
                />
              ))}
              <span className="ml-2 text-xs text-muted-foreground">
                Live preview
              </span>
            </div>
            <iframe
              key={iframeKey}
              title={`${template.name} preview`}
              srcDoc={previewHtml}
              className={
                template.type === "page"
                  ? "lk-scrollbar h-[min(82vh,960px)] w-full border-0 bg-white"
                  : "lk-scrollbar h-[min(72vh,800px)] w-full border-0 bg-white"
              }
              sandbox="allow-same-origin allow-scripts"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

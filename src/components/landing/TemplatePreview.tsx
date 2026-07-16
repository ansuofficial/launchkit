import { renderTemplateToHtml } from "@/lib/render";
import type { TemplateMeta } from "@/lib/templates";
import { cn } from "@/lib/utils";

interface TemplatePreviewProps {
  template: TemplateMeta;
  className?: string;
}

export function TemplatePreview({ template, className }: TemplatePreviewProps) {
  if (template.status === "ready" && template.component) {
    const html = renderTemplateToHtml(template.component());
    return (
      <div
        className={cn(
          "relative h-full w-full overflow-hidden bg-[var(--lk-bg-light-muted)]",
          className,
        )}
      >
        <iframe
          title={`${template.name} preview`}
          srcDoc={html}
          className="pointer-events-none absolute top-0 left-1/2 h-[200%] w-[200%] origin-top -translate-x-1/2 scale-50 border-0"
          sandbox="allow-same-origin"
          tabIndex={-1}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center bg-gradient-to-br p-8",
        template.previewGradient || "from-primary/30 to-primary/10",
        className,
      )}
    >
      <span className="text-lg font-semibold text-white drop-shadow-sm">
        {template.name}
      </span>
      <span className="mt-1 text-sm text-white/70">Coming in Phase 4–5</span>
    </div>
  );
}
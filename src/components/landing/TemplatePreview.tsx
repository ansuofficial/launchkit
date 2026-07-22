import { renderTemplateToHtml } from "@/lib/render";
import type { TemplateMeta } from "@/lib/templates";
import { cn } from "@/lib/utils";

interface TemplatePreviewProps {
  template: TemplateMeta;
  className?: string;
}

/** Hide document scrollbars so card thumbnails never show a side scrollbar. */
function withPreviewChrome(html: string): string {
  const chrome = `<style id="lk-preview-chrome">
html,body{margin:0!important;padding:0!important;overflow:hidden!important;height:100%!important;width:100%!important;scrollbar-width:none!important;-ms-overflow-style:none!important}
html::-webkit-scrollbar,body::-webkit-scrollbar,*::-webkit-scrollbar{display:none!important;width:0!important;height:0!important}
</style>`;

  if (html.includes("</head>")) {
    return html.replace("</head>", `${chrome}</head>`);
  }
  if (html.includes("<body")) {
    return html.replace("<body", `${chrome}<body`);
  }
  return `${chrome}${html}`;
}

export function TemplatePreview({ template, className }: TemplatePreviewProps) {
  if (template.status === "ready" && template.component) {
    const html = withPreviewChrome(renderTemplateToHtml(template.component()));
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
          scrolling="no"
          className="pointer-events-none absolute top-0 left-1/2 h-[200%] w-[200%] max-w-none origin-top -translate-x-1/2 scale-50 border-0 [overflow:hidden]"
          sandbox="allow-same-origin"
          tabIndex={-1}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br p-8",
        template.previewGradient || "from-primary/30 to-primary/10",
        className,
      )}
    >
      <span className="text-lg font-semibold text-white drop-shadow-sm">
        {template.name}
      </span>
      <span className="mt-1 text-sm text-white/70">Coming soon</span>
    </div>
  );
}

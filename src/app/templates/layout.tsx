import { TemplatesSidebar } from "@/components/templates/TemplatesSidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { templates } from "@/lib/templates";

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = templates.map((template) => ({
    slug: template.slug,
    name: template.name,
    type: template.type,
    category: template.category,
  }));

  return (
    <TooltipProvider>
      <SidebarProvider
        className="min-h-[calc(100svh-4rem)]! md:min-h-[calc(100svh-4.5rem)]!"
        style={
          {
            "--header-height": "4rem",
          } as React.CSSProperties
        }
      >
        <TemplatesSidebar items={navItems} />
        <SidebarInset className="min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-4.5rem)]">
          {children}
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

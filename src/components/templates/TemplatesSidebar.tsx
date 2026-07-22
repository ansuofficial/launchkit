"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, LayoutTemplate, Mail } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export type TemplateNavItem = {
  slug: string;
  name: string;
  type: "email" | "document" | "page";
  category: string;
};

interface TemplatesSidebarProps {
  items: TemplateNavItem[];
}

function templateHref(item: Pick<TemplateNavItem, "type" | "slug">) {
  return `/templates/${item.type}/${item.slug}`;
}

function TemplateNavLink({ item }: { item: TemplateNavItem }) {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();
  const href = templateHref(item);
  const isActive =
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={isActive}
        size="sm"
        tooltip={item.name}
        className={cn(
          "relative h-6 rounded-sm py-0.5 transition-colors duration-200",
          "hover:bg-muted/60 hover:text-foreground",
          "data-active:bg-transparent data-active:font-medium data-active:text-primary",
          "data-active:hover:bg-transparent data-active:hover:text-primary",
          isActive &&
            "bg-transparent font-medium text-primary shadow-[inset_1px_0_0_0_var(--color-primary)] hover:bg-transparent hover:text-primary",
        )}
        render={
          <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            onClick={() => {
              if (isMobile) setOpenMobile(false);
            }}
          />
        }
      >
        <span className="truncate">{item.name}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function TemplateTypeGroup({
  label,
  icon: Icon,
  items,
  activeType,
}: {
  label: string;
  icon: typeof Mail;
  items: TemplateNavItem[];
  activeType: TemplateNavItem["type"] | null;
}) {
  if (items.length === 0) return null;

  const isGroupActive = activeType === items[0]?.type;

  return (
    <SidebarGroup>
      <SidebarGroupLabel
        className={cn(
          "gap-2 transition-colors duration-200",
          isGroupActive && "text-primary",
        )}
      >
        <Icon
          className={cn(
            "size-3.5 opacity-70 transition-opacity duration-200",
            isGroupActive && "text-primary opacity-100",
          )}
          aria-hidden
        />
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="gap-1.5">
          {items.map((item) => (
            <TemplateNavLink key={`${item.type}-${item.slug}`} item={item} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function TemplatesSidebar({ items }: TemplatesSidebarProps) {
  const pathname = usePathname();
  const emails = items.filter((item) => item.type === "email");
  const documents = items.filter((item) => item.type === "document");
  const pages = items.filter((item) => item.type === "page");

  const activeType: TemplateNavItem["type"] | null = pathname.includes(
    "/templates/page/",
  )
    ? "page"
    : pathname.includes("/templates/document/")
      ? "document"
      : pathname.includes("/templates/email/")
        ? "email"
        : null;

  return (
    <Sidebar
      collapsible="icon"
      className="top-16! h-[calc(100svh-4rem)]! md:top-[4.5rem]! md:h-[calc(100svh-4.5rem)]!"
    >
      <SidebarHeader className="border-b border-sidebar-border px-3 py-3 group-data-[collapsible=icon]:px-2">
        <div className="flex flex-col gap-0.5 group-data-[collapsible=icon]:hidden">
          <p className="text-sm font-semibold tracking-tight">Templates</p>
          <p className="text-xs text-muted-foreground">
            Browse and preview in one place
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <TemplateTypeGroup
          label="Email"
          icon={Mail}
          items={emails}
          activeType={activeType}
        />
        <TemplateTypeGroup
          label="Documents"
          icon={FileText}
          items={documents}
          activeType={activeType}
        />
        <TemplateTypeGroup
          label="Pages"
          icon={LayoutTemplate}
          items={pages}
          activeType={activeType}
        />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

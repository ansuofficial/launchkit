import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemplatePreviewPanel } from "@/components/templates/TemplatePreviewPanel";
import { renderTemplateToHtml } from "@/lib/render";
import {
  getTemplateBySlug,
  isTemplateType,
  templates,
} from "@/lib/templates";

interface TemplatePageProps {
  params: Promise<{ type: string; slug: string }>;
}

export async function generateStaticParams() {
  return templates.map((template) => ({
    type: template.type,
    slug: template.slug,
  }));
}

export async function generateMetadata({
  params,
}: TemplatePageProps): Promise<Metadata> {
  const { type, slug } = await params;
  if (!isTemplateType(type)) {
    return { title: "Template not found - LaunchKit" };
  }

  const template = getTemplateBySlug(type, slug);
  if (!template) {
    return { title: "Template not found - LaunchKit" };
  }

  return {
    title: `${template.name} - LaunchKit`,
    description: template.description,
  };
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { type, slug } = await params;

  if (!isTemplateType(type)) {
    notFound();
  }

  const template = getTemplateBySlug(type, slug);

  if (!template?.component) {
    notFound();
  }

  const html = renderTemplateToHtml(template.component());

  return <TemplatePreviewPanel template={template} html={html} />;
}

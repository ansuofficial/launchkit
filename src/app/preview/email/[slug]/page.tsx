import { EmailPreviewFrame } from "@/components/preview/EmailPreviewFrame";
import { renderTemplateToHtml } from "@/lib/render";
import { getTemplateBySlug } from "@/lib/templates";
import { notFound } from "next/navigation";

interface EmailPreviewPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EmailPreviewPage({
  params,
}: EmailPreviewPageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug("email", slug);

  if (!template?.component) {
    notFound();
  }

  const html = renderTemplateToHtml(template.component());

  return (
    <EmailPreviewFrame
      name={template.name}
      category={template.category}
      html={html}
    />
  );
}
import { redirect } from "next/navigation";

interface DocumentPreviewPageProps {
  params: Promise<{ slug: string }>;
}

/** @deprecated Prefer `/templates/document/[slug]`. Kept for old links. */
export default async function DocumentPreviewPage({
  params,
}: DocumentPreviewPageProps) {
  const { slug } = await params;
  redirect(`/templates/document/${slug}`);
}

import { redirect } from "next/navigation";

interface EmailPreviewPageProps {
  params: Promise<{ slug: string }>;
}

/** @deprecated Prefer `/templates/email/[slug]`. Kept for old links. */
export default async function EmailPreviewPage({
  params,
}: EmailPreviewPageProps) {
  const { slug } = await params;
  redirect(`/templates/email/${slug}`);
}

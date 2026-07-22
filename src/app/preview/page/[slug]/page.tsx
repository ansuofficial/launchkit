import { redirect } from "next/navigation";

interface PagePreviewPageProps {
  params: Promise<{ slug: string }>;
}

/** @deprecated Prefer `/templates/page/[slug]`. Kept for old links. */
export default async function PagePreviewPage({
  params,
}: PagePreviewPageProps) {
  const { slug } = await params;
  redirect(`/templates/page/${slug}`);
}

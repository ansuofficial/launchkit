import { redirect } from "next/navigation";
import { getReadyTemplates, getTemplateHref } from "@/lib/templates";

export default function TemplatesPage() {
  const first = getReadyTemplates()[0];

  if (!first) {
    redirect("/");
  }

  redirect(getTemplateHref(first));
}

import type { ReactElement } from "react";
import { HelloEmail } from "@/templates/email/hello";

export type TemplateType = "email" | "document";

export type TemplateCategory = "Product" | "Marketing" | "Business";

export interface TemplateMeta {
  slug: string;
  name: string;
  category: TemplateCategory;
  type: TemplateType;
  featured?: boolean;
  description: string;
  component: () => ReactElement;
}

export const templates: TemplateMeta[] = [
  {
    slug: "hello",
    name: "Hello LaunchKit",
    category: "Product",
    type: "email",
    description: "Proof-of-concept welcome email using shared Elements blocks.",
    component: HelloEmail,
  },
];

export function getTemplateBySlug(
  type: TemplateType,
  slug: string,
): TemplateMeta | undefined {
  return templates.find((t) => t.type === type && t.slug === slug);
}

export function getTemplatesByType(type: TemplateType): TemplateMeta[] {
  return templates.filter((t) => t.type === type);
}
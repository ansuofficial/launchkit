export type TemplateType = "email" | "document";

export type TemplateCategory = "Product" | "Marketing" | "Business";

export interface TemplateMeta {
  slug: string;
  name: string;
  category: TemplateCategory;
  type: TemplateType;
  featured?: boolean;
  description: string;
}

export const templates: TemplateMeta[] = [];
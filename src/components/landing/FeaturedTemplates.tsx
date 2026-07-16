import { getFeaturedTemplates } from "@/lib/templates";
import { Container } from "./Container";
import { FeaturedSectionHeader } from "./FeaturedSectionHeader";
import { FeaturedTemplateCard } from "./FeaturedTemplateCard";
import { Section } from "./Section";

export function FeaturedTemplates() {
  const featured = getFeaturedTemplates();

  return (
    <Section variant="muted" id="featured">
      <Container>
        <FeaturedSectionHeader />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {featured.map((template) => (
            <FeaturedTemplateCard key={template.slug} template={template} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
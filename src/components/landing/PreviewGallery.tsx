import { templates } from "@/lib/templates";
import { Container } from "./Container";
import { GalleryTemplateCard } from "./GalleryTemplateCard";
import { Section } from "./Section";

export function PreviewGallery() {
  return (
    <Section variant="dark" id="gallery" className="py-16 md:py-20">
      <Container>
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Built with LaunchKit
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Real templates for email and documents—consistent, practical, and
            ready for production.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-4">
          {templates.map((template) => (
            <GalleryTemplateCard key={`${template.type}-${template.slug}`} template={template} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
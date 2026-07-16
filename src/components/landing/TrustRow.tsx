import { Container } from "./Container";
import { Section } from "./Section";

const brands = ["Google", "Dropbox", "Airbnb", "Spotify", "Microsoft"];

export function TrustRow() {
  return (
    <Section variant="light" className="py-10 md:py-12">
      <Container>
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          Built for teams who value thoughtful communication
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-sm font-semibold tracking-wide text-foreground/40"
            >
              {brand}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
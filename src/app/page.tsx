import {
  BackboneSection,
  FeaturedTemplates,
  Footer,
  GitHubCTA,
  Hero,
  PreviewGallery,
  TrustRow,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <BackboneSection />
        <TrustRow />
        <FeaturedTemplates />
        <PreviewGallery />
        <GitHubCTA />
      </main>
      <Footer />
    </>
  );
}

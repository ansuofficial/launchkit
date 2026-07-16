import {
  FeaturedTemplates,
  Footer,
  GitHubCTA,
  Hero,
  Nav,
  PreviewGallery,
  TrustRow,
  WhyLaunchKit,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedTemplates />
        <WhyLaunchKit />
        <TrustRow />
        <PreviewGallery />
        <GitHubCTA />
      </main>
      <Footer />
    </>
  );
}
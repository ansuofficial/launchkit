import type { AgencyPageProps } from "./index";
import { TEMPLATE_IMAGES } from "@/elements/assets";

export const agencyPreview: AgencyPageProps = {
  brandName: "Studio North",
  headline: "Design systems that feel inevitable",
  subheadline:
    "We partner with software teams to craft brand, product UI, and launch assets that look as considered as the product itself.",
  ctaLabel: "Start a project",
  ctaUrl: "https://studionorth.example/contact",
  heroImageUrl: TEMPLATE_IMAGES.pageAgencyHero,
  services: [
    {
      title: "Brand systems",
      description:
        "Identity, voice, and visual foundations built for digital products, not print decks alone.",
      icon: "spark",
    },
    {
      title: "Product UI",
      description:
        "Interface systems, component libraries, and interaction patterns your eng team can ship.",
      icon: "layers",
    },
    {
      title: "Launch design",
      description:
        "Landing pages, email kits, and docs that make a release feel premium from day one.",
      icon: "rocket",
    },
  ],
  projects: [
    {
      title: "Northwind analytics rebrand",
      category: "Brand + UI",
      imageUrl: TEMPLATE_IMAGES.pageAgencyWork1,
    },
    {
      title: "Atlas developer portal",
      category: "Product design",
      imageUrl: TEMPLATE_IMAGES.pageAgencyWork2,
    },
    {
      title: "Lumen launch system",
      category: "Marketing design",
      imageUrl: TEMPLATE_IMAGES.pageAgencyWork3,
    },
  ],
  process: [
    {
      step: "01",
      title: "Discover",
      detail: "Workshops, audit, and a clear problem framing.",
    },
    {
      step: "02",
      title: "Define",
      detail: "Direction boards, principles, and success metrics.",
    },
    {
      step: "03",
      title: "Design",
      detail: "High-fidelity systems and production-ready assets.",
    },
    {
      step: "04",
      title: "Deliver",
      detail: "Handoff, docs, and a launch-ready kit for your team.",
    },
  ],
};

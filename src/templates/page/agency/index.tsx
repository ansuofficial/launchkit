import {
  Button,
  Column,
  ColumnLayouts,
  Divider,
  Heading,
  Image,
  Page,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import { pageIconDataUri, TEMPLATE_IMAGES } from "@/elements/assets";
import type { PageIconKey } from "@/elements/assets";
import {
  ACCENT_PURPLE,
  BORDER_SUBTLE,
  FONT_FAMILY,
  PAGE_CONTENT_WIDTH,
  PAGE_OUTER_BG,
  PAGE_ROW_BG,
  PAGE_SURFACE,
  PageFooter,
  PageNav,
  TEXT_MUTED,
  TEXT_PRIMARY,
  TEXT_SUBTLE,
} from "@/elements/shared";

export interface AgencyPageProps {
  brandName?: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaUrl: string;
  heroImageUrl?: string;
  services: {
    title: string;
    description: string;
    icon: PageIconKey;
  }[];
  projects: {
    title: string;
    category: string;
    imageUrl: string;
  }[];
  process: { step: string; title: string; detail: string }[];
}

/**
 * Studio / agency landing with editorial spacing and portfolio grid.
 */
export function AgencyPage({
  brandName = "Studio North",
  headline,
  subheadline,
  ctaLabel,
  ctaUrl,
  heroImageUrl = TEMPLATE_IMAGES.pageAgencyHero,
  services,
  projects,
  process,
}: AgencyPageProps) {
  return (
    <Page
      backgroundColor={PAGE_OUTER_BG}
      contentWidth={PAGE_CONTENT_WIDTH}
      fontFamily={FONT_FAMILY}
    >
      <PageNav
        brandName={brandName}
        items={[
          { text: "Work", href: "#work" },
          { text: "Services", href: "#services" },
          { text: "Process", href: "#process" },
          { text: "Contact", href: "#contact" },
        ]}
        ctaLabel={ctaLabel}
        ctaUrl={ctaUrl}
      />

      <Divider borderTopColor={BORDER_SUBTLE} borderTopWidth="1px" width="100%" />

      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={PAGE_ROW_BG}
        padding="64px 48px 48px"
      >
        <Column>
          <Paragraph
            html="Product design studio"
            fontSize="12px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={ACCENT_PURPLE}
            textAlign="left"
            lineHeight="1.4"
          />
          <Heading
            headingType="h1"
            fontSize="40px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.12"
          >
            {headline}
          </Heading>
          <Paragraph
            html={subheadline}
            fontSize="17px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.7"
          />
          <Button
            href={ctaUrl}
            backgroundColor={TEXT_PRIMARY}
            color="#FFFFFF"
            fontSize="14px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            textAlign="left"
            borderRadius="10px"
            padding="13px 22px"
          >
            {ctaLabel}
          </Button>
        </Column>
        <Column>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image src={heroImageUrl} altText="Studio workspace" width="100%" />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PAGE_SURFACE}
        padding="56px 48px 12px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.25"
          >
            Capabilities
          </Heading>
          <Paragraph
            html="Strategy, interface systems, and launch design for software brands that need to look as sharp as they ship."
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.65"
          />
        </Column>
      </Row>

      {chunk(services, 3).map((row) => (
        <Row
          key={row.map((s) => s.title).join("-")}
          layout={ColumnLayouts.ThreeEqual}
          backgroundColor={PAGE_SURFACE}
          padding="16px 40px 40px"
        >
          {row.map((service) => (
            <Column key={service.title}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                src={pageIconDataUri(service.icon)}
                altText={service.title}
                width="44px"
              />
              <Heading
                headingType="h3"
                fontSize="16px"
                fontWeight={600}
                fontFamily={FONT_FAMILY}
                color={TEXT_PRIMARY}
                textAlign="left"
                lineHeight="1.35"
              >
                {service.title}
              </Heading>
              <Paragraph
                html={service.description}
                fontSize="14px"
                fontFamily={FONT_FAMILY}
                color={TEXT_MUTED}
                textAlign="left"
                lineHeight="1.65"
              />
            </Column>
          ))}
        </Row>
      ))}

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PAGE_ROW_BG}
        padding="56px 48px 16px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.25"
          >
            Selected work
          </Heading>
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={PAGE_ROW_BG}
        padding="8px 40px 56px"
      >
        {projects.slice(0, 3).map((project) => (
          <Column key={project.title}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              src={project.imageUrl}
              altText={project.title}
              width="100%"
            />
            <Paragraph
              html={project.category}
              fontSize="11px"
              fontWeight={600}
              fontFamily={FONT_FAMILY}
              color={TEXT_SUBTLE}
              textAlign="left"
              lineHeight="1.4"
            />
            <Heading
              headingType="h3"
              fontSize="16px"
              fontWeight={600}
              fontFamily={FONT_FAMILY}
              color={TEXT_PRIMARY}
              textAlign="left"
              lineHeight="1.35"
            >
              {project.title}
            </Heading>
          </Column>
        ))}
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PAGE_SURFACE}
        padding="56px 48px 20px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="center"
            lineHeight="1.25"
          >
            How we work
          </Heading>
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.FourEqual}
        backgroundColor={PAGE_SURFACE}
        padding="8px 40px 56px"
      >
        {process.slice(0, 4).map((item) => (
          <Column key={item.step}>
            <Paragraph
              html={item.step}
              fontSize="12px"
              fontWeight={700}
              fontFamily={FONT_FAMILY}
              color={TEXT_SUBTLE}
              textAlign="left"
              lineHeight="1.3"
            />
            <Heading
              headingType="h4"
              fontSize="15px"
              fontWeight={600}
              fontFamily={FONT_FAMILY}
              color={TEXT_PRIMARY}
              textAlign="left"
              lineHeight="1.35"
            >
              {item.title}
            </Heading>
            <Paragraph
              html={item.detail}
              fontSize="13px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.55"
            />
          </Column>
        ))}
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={TEXT_PRIMARY}
        padding="56px 48px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color="#FFFFFF"
            textAlign="center"
            lineHeight="1.25"
          >
            Have a product story to tell?
          </Heading>
          <Paragraph
            html="Tell us about your next launch, rebrand, or design system. We reply within two business days."
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color="rgba(255,255,255,0.72)"
            textAlign="center"
            lineHeight="1.65"
          />
          <Button
            href={ctaUrl}
            backgroundColor="#FFFFFF"
            color={TEXT_PRIMARY}
            fontSize="14px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            textAlign="center"
            borderRadius="10px"
            padding="13px 24px"
          >
            {ctaLabel}
          </Button>
        </Column>
      </Row>

      <PageFooter
        brandName={brandName}
        tagline="Design systems and brand experiences for software companies."
      />
    </Page>
  );
}

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

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

export interface ProductLandingPageProps {
  brandName?: string;
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  heroImageUrl?: string;
  logosLabel?: string;
  logos: string;
  stats: { value: string; label: string }[];
  features: {
    title: string;
    description: string;
    icon: PageIconKey;
  }[];
  featureSectionTitle: string;
  featureSectionBody: string;
  featureBullets: string[];
  featureImageUrl?: string;
  testimonial: {
    quote: string;
    name: string;
    role: string;
    avatarUrl?: string;
  };
}

/**
 * Premium SaaS product landing - restrained type, real photography, clear hierarchy.
 */
export function ProductLandingPage({
  brandName = "Flowstack",
  eyebrow = "Product operations",
  headline,
  subheadline,
  primaryCtaLabel,
  primaryCtaUrl,
  secondaryCtaLabel = "Watch demo",
  secondaryCtaUrl = "https://flowstack.io/demo",
  heroImageUrl = TEMPLATE_IMAGES.pageHeroProduct,
  logosLabel = "Trusted by product teams at",
  logos,
  stats,
  features,
  featureSectionTitle,
  featureSectionBody,
  featureBullets,
  featureImageUrl = TEMPLATE_IMAGES.pageFeatureWorkflow,
  testimonial,
}: ProductLandingPageProps) {
  return (
    <Page
      backgroundColor={PAGE_OUTER_BG}
      contentWidth={PAGE_CONTENT_WIDTH}
      fontFamily={FONT_FAMILY}
    >
      <PageNav
        brandName={brandName}
        ctaLabel={primaryCtaLabel}
        ctaUrl={primaryCtaUrl}
      />

      <Divider borderTopColor={BORDER_SUBTLE} borderTopWidth="1px" width="100%" />

      {/* Hero */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={PAGE_ROW_BG}
        padding="64px 48px 40px"
      >
        <Column>
          <Paragraph
            html={eyebrow}
            fontSize="13px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={ACCENT_PURPLE}
            textAlign="left"
            lineHeight="1.4"
          />
          <Heading
            headingType="h1"
            fontSize="42px"
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
            href={primaryCtaUrl}
            backgroundColor={TEXT_PRIMARY}
            color="#FFFFFF"
            fontSize="14px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            textAlign="left"
            borderRadius="10px"
            padding="13px 22px"
          >
            {primaryCtaLabel}
          </Button>
          <Paragraph
            html={`<a href="${secondaryCtaUrl}" style="color:${TEXT_MUTED};text-decoration:none;font-weight:500;font-size:14px;">${secondaryCtaLabel} →</a>`}
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.5"
          />
        </Column>
        <Column>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image src={heroImageUrl} altText="Product overview" width="100%" />
        </Column>
      </Row>

      {/* Logo / trust line */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PAGE_ROW_BG}
        padding="8px 48px 40px"
      >
        <Column>
          <Paragraph
            html={`<span style="color:${TEXT_SUBTLE};font-size:12px;letter-spacing:0.04em;text-transform:uppercase;font-weight:600;">${logosLabel}</span><br/><span style="color:${TEXT_MUTED};font-size:14px;font-weight:500;letter-spacing:0.02em;">${logos}</span>`}
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="center"
            lineHeight="2"
          />
        </Column>
      </Row>

      {/* Stats */}
      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={PAGE_SURFACE}
        padding="40px 48px"
      >
        {stats.slice(0, 3).map((stat) => (
          <Column key={stat.label}>
            <Heading
              headingType="h2"
              fontSize="32px"
              fontWeight={700}
              fontFamily={FONT_FAMILY}
              color={TEXT_PRIMARY}
              textAlign="center"
              lineHeight="1.15"
            >
              {stat.value}
            </Heading>
            <Paragraph
              html={stat.label}
              fontSize="13px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="center"
              lineHeight="1.5"
            />
          </Column>
        ))}
      </Row>

      {/* Features intro */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PAGE_ROW_BG}
        padding="64px 48px 24px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="30px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.2"
          >
            Built for how product teams actually work
          </Heading>
          <Paragraph
            html="One system for planning, launching, and following up. Designed to replace scattered docs, status threads, and one-off emails."
            fontSize="16px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.65"
          />
        </Column>
      </Row>

      {chunk(features, 3).map((row) => (
        <Row
          key={row.map((f) => f.title).join("-")}
          layout={ColumnLayouts.ThreeEqual}
          backgroundColor={PAGE_ROW_BG}
          padding="12px 40px 20px"
        >
          {row.map((feature) => (
            <Column key={feature.title}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                src={pageIconDataUri(feature.icon)}
                altText={feature.title}
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
                {feature.title}
              </Heading>
              <Paragraph
                html={feature.description}
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

      {/* Deep feature */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={PAGE_SURFACE}
        padding="64px 48px"
      >
        <Column>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            src={featureImageUrl}
            altText={featureSectionTitle}
            width="100%"
          />
        </Column>
        <Column>
          <Paragraph
            html="Workflow"
            fontSize="12px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={ACCENT_PURPLE}
            textAlign="left"
            lineHeight="1.4"
          />
          <Heading
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.25"
          >
            {featureSectionTitle}
          </Heading>
          <Paragraph
            html={featureSectionBody}
            fontSize="16px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.7"
          />
          {featureBullets.map((bullet) => (
            <Paragraph
              key={bullet}
              html={`<span style="color:${TEXT_PRIMARY};">✓</span> &nbsp;${bullet}`}
              fontSize="14px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.8"
            />
          ))}
        </Column>
      </Row>

      {/* Testimonial */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PAGE_ROW_BG}
        padding="72px 80px 20px"
      >
        <Column>
          <Paragraph
            html={`“${testimonial.quote}”`}
            fontSize="24px"
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="center"
            lineHeight="1.45"
          />
        </Column>
      </Row>
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PAGE_ROW_BG}
        padding="8px 48px 72px"
      >
        <Column>
          {testimonial.avatarUrl ? (
            // eslint-disable-next-line jsx-a11y/alt-text
            <Image
              src={testimonial.avatarUrl}
              altText={testimonial.name}
              width="48px"
            />
          ) : null}
          <Heading
            headingType="h4"
            fontSize="14px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="center"
            lineHeight="1.4"
          >
            {testimonial.name}
          </Heading>
          <Paragraph
            html={testimonial.role}
            fontSize="13px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="center"
            lineHeight="1.5"
          />
        </Column>
      </Row>

      {/* CTA */}
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={TEXT_PRIMARY}
        padding="64px 48px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="30px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color="#FFFFFF"
            textAlign="center"
            lineHeight="1.25"
          >
            Start shipping with a system
          </Heading>
          <Paragraph
            html="Free for small teams. Upgrade when launches need structure, not more tools."
            fontSize="16px"
            fontFamily={FONT_FAMILY}
            color="rgba(255,255,255,0.72)"
            textAlign="center"
            lineHeight="1.65"
          />
          <Button
            href={primaryCtaUrl}
            backgroundColor="#FFFFFF"
            color={TEXT_PRIMARY}
            fontSize="14px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            textAlign="center"
            borderRadius="10px"
            padding="13px 24px"
          >
            {primaryCtaLabel}
          </Button>
        </Column>
      </Row>

      <PageFooter brandName={brandName} />
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

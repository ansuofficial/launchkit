import {
  Column,
  ColumnLayouts,
  Email,
  Heading,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import { TEMPLATE_IMAGES } from "@/elements/assets";
import {
  BrandHeader,
  CTAButton,
  DividerSection,
  EMAIL_CONTENT_WIDTH,
  EMAIL_OUTER_BG,
  EMAIL_ROW_BG,
  EyebrowLabel,
  FeatureList,
  FONT_FAMILY,
  FooterBlock,
  GraphicBlock,
  SURFACE_MUTED,
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "@/elements/shared";

export interface FeatureAnnouncementEmailProps {
  brandName?: string;
  featureName: string;
  headline: string;
  description: string;
  benefits: { title: string; description: string }[];
  heroImageUrl?: string;
  ctaLabel: string;
  ctaUrl: string;
}

export function FeatureAnnouncementEmail({
  brandName = "Flowstack",
  featureName,
  headline,
  description,
  benefits,
  heroImageUrl = TEMPLATE_IMAGES.featureHero,
  ctaLabel,
  ctaUrl,
}: FeatureAnnouncementEmailProps) {
  return (
    <Email
      backgroundColor={EMAIL_OUTER_BG}
      contentWidth={EMAIL_CONTENT_WIDTH}
      previewText={`New: ${featureName} is now available on all plans.`}
    >
      <BrandHeader brandName={brandName} tagline="Product update" />

      <GraphicBlock
        src={heroImageUrl}
        altText={`${featureName} feature preview`}
        backgroundColor={EMAIL_ROW_BG}
      />

      <EyebrowLabel label="New feature" padding="28px 40px 0" />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={EMAIL_ROW_BG}
        padding="8px 40px 16px"
      >
        <Column>
          <Heading
            headingType="h1"
            fontSize="26px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.3"
          >
            {headline}
          </Heading>
          <Paragraph
            html={description}
            fontSize="16px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.65"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={SURFACE_MUTED}
        padding="24px 40px"
      >
        <Column>
          <Paragraph
            html={`<strong style="color:#1A1A1F;">${featureName}</strong> is live on every plan. No upgrade required. Roll it out to your team today.`}
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.6"
          />
        </Column>
      </Row>

      <GraphicBlock
        src={TEMPLATE_IMAGES.featureDetail}
        altText={`${featureName} detail`}
        backgroundColor={EMAIL_ROW_BG}
        padding="24px 40px 8px"
      />

      <FeatureList
        title={`What ${featureName} unlocks`}
        features={benefits}
      />

      <CTAButton
        href={ctaUrl}
        label={ctaLabel}
        align="left"
        padding="24px 40px 40px"
      />

      <DividerSection />

      <FooterBlock companyName={brandName} />
    </Email>
  );
}

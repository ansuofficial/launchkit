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
  StatRow,
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "@/elements/shared";

export interface ProductLaunchEmailProps {
  brandName?: string;
  productName: string;
  tagline: string;
  headline: string;
  description: string;
  heroImageUrl?: string;
  secondaryImageUrl?: string;
  features: { title: string; description: string }[];
  stats?: { value: string; label: string }[];
  ctaLabel: string;
  ctaUrl: string;
}

export function ProductLaunchEmail({
  brandName = "Flowstack",
  productName,
  tagline,
  headline,
  description,
  heroImageUrl = TEMPLATE_IMAGES.productLaunchHero,
  secondaryImageUrl = TEMPLATE_IMAGES.productLaunchSecondary,
  features,
  stats = [
    { value: "38%", label: "Faster decisions" },
    { value: "12k", label: "Active workspaces" },
    { value: "4.9", label: "Avg. team rating" },
  ],
  ctaLabel,
  ctaUrl,
}: ProductLaunchEmailProps) {
  return (
    <Email
      backgroundColor={EMAIL_OUTER_BG}
      contentWidth={EMAIL_CONTENT_WIDTH}
      previewText={`${productName} is here: ${tagline}`}
    >
      <BrandHeader brandName={brandName} tagline={tagline} />

      <GraphicBlock
        src={heroImageUrl}
        altText={`${productName} product preview`}
        backgroundColor={EMAIL_ROW_BG}
        padding="0 0 8px"
      />

      <EyebrowLabel label="New release" padding="28px 40px 0" />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={EMAIL_ROW_BG}
        padding="8px 40px 20px"
      >
        <Column>
          <Heading
            headingType="h1"
            fontSize="28px"
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

      <CTAButton
        href={ctaUrl}
        label={ctaLabel}
        align="left"
        padding="0 40px 32px"
      />

      <StatRow stats={stats} />

      <FeatureList
        title={`Why teams choose ${productName}`}
        features={features}
      />

      <GraphicBlock
        src={secondaryImageUrl}
        altText={`${productName} in use`}
        backgroundColor={EMAIL_ROW_BG}
        padding="24px 40px 8px"
      />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={EMAIL_ROW_BG}
        padding="16px 40px 8px"
      >
        <Column>
          <Paragraph
            html="Built for product, engineering, and growth teams who need signal, not another dashboard to maintain."
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.6"
          />
        </Column>
      </Row>

      <CTAButton
        href={ctaUrl}
        label={ctaLabel}
        align="left"
        padding="16px 40px 40px"
      />

      <DividerSection />

      <FooterBlock companyName={brandName} />
    </Email>
  );
}

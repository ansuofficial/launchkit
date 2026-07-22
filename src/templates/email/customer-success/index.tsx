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
  FONT_FAMILY,
  FooterBlock,
  GraphicBlock,
  StatRow,
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "@/elements/shared";

export interface CustomerSuccessStat {
  value: string;
  label: string;
}

export interface CustomerSuccessEmailProps {
  brandName?: string;
  customerName: string;
  milestone: string;
  message: string;
  stats: CustomerSuccessStat[];
  heroImageUrl?: string;
  ctaLabel: string;
  ctaUrl: string;
}

export function CustomerSuccessEmail({
  brandName = "Flowstack",
  customerName,
  milestone,
  message,
  stats,
  heroImageUrl = TEMPLATE_IMAGES.successHero,
  ctaLabel,
  ctaUrl,
}: CustomerSuccessEmailProps) {
  return (
    <Email
      backgroundColor={EMAIL_OUTER_BG}
      contentWidth={EMAIL_CONTENT_WIDTH}
      previewText={`Congratulations on ${milestone}, ${customerName}!`}
    >
      <BrandHeader brandName={brandName} tagline="Customer milestone" />

      <GraphicBlock
        src={heroImageUrl}
        altText="Milestone celebration"
        backgroundColor={EMAIL_ROW_BG}
      />

      <EyebrowLabel label="Milestone unlocked" padding="28px 40px 0" />

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
            Congratulations, {customerName}
          </Heading>
          <Paragraph
            html={`<strong style="color:#1A1A1F;">${milestone}</strong>`}
            fontSize="16px"
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.5"
          />
          <Paragraph
            html={message}
            fontSize="16px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.65"
          />
        </Column>
      </Row>

      <StatRow stats={stats} />

      <GraphicBlock
        src={TEMPLATE_IMAGES.successTeam}
        altText="Partnership"
        backgroundColor={EMAIL_ROW_BG}
        padding="24px 40px 8px"
      />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={EMAIL_ROW_BG}
        padding="16px 40px 0"
      >
        <Column>
          <Paragraph
            html="Your success story helps other teams move faster. Share how you got here, or book a session with our customer success team."
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.6"
          />
        </Column>
      </Row>

      <CTAButton href={ctaUrl} label={ctaLabel} padding="24px 40px 40px" />

      <DividerSection />

      <FooterBlock companyName={brandName} />
    </Email>
  );
}

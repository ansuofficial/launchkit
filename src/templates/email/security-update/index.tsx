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
  FeatureList,
  FONT_FAMILY,
  FooterBlock,
  GraphicBlock,
  SURFACE_MUTED,
  TEXT_MUTED,
  TEXT_PRIMARY,
  TEXT_SUBTLE,
} from "@/elements/shared";

export interface SecurityUpdateEmailProps {
  brandName?: string;
  headline: string;
  severity: string;
  summary: string;
  whatHappened: string;
  whatWeDid: string;
  actionRequired: { title: string; description: string }[];
  heroImageUrl?: string;
  ctaLabel: string;
  ctaUrl: string;
}

export function SecurityUpdateEmail({
  brandName = "Flowstack",
  headline,
  severity,
  summary,
  whatHappened,
  whatWeDid,
  actionRequired,
  heroImageUrl = TEMPLATE_IMAGES.securityHero,
  ctaLabel,
  ctaUrl,
}: SecurityUpdateEmailProps) {
  return (
    <Email
      backgroundColor={EMAIL_OUTER_BG}
      contentWidth={EMAIL_CONTENT_WIDTH}
      previewText={`Security update: ${headline}`}
    >
      <BrandHeader brandName={brandName} tagline="Security advisory" />

      <GraphicBlock
        src={heroImageUrl}
        altText="Security update"
        backgroundColor={EMAIL_ROW_BG}
      />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={EMAIL_ROW_BG}
        padding="28px 40px 16px"
      >
        <Column>
          <Paragraph
            html={`<span style="color:${TEXT_SUBTLE};font-weight:600;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">${severity}</span>`}
            fontSize="11px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.5"
          />
          <Heading
            headingType="h1"
            fontSize="24px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.3"
          >
            {headline}
          </Heading>
          <Paragraph
            html={summary}
            fontSize="16px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.65"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={SURFACE_MUTED}
        padding="24px 32px"
      >
        <Column>
          <Heading
            headingType="h3"
            fontSize="15px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.4"
          >
            What happened
          </Heading>
          <Paragraph
            html={whatHappened}
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.65"
          />
        </Column>
        <Column>
          <Heading
            headingType="h3"
            fontSize="15px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.4"
          >
            What we did
          </Heading>
          <Paragraph
            html={whatWeDid}
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.65"
          />
        </Column>
      </Row>

      <FeatureList
        title="Action required"
        features={actionRequired.map((a) => ({
          ...a,
          icon: "shield" as const,
        }))}
      />

      <CTAButton href={ctaUrl} label={ctaLabel} padding="24px 40px 40px" />

      <DividerSection />

      <FooterBlock companyName={brandName} />
    </Email>
  );
}

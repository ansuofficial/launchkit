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
  NumberedSteps,
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "@/elements/shared";

export interface WelcomeEmailProps {
  brandName?: string;
  userName: string;
  headline: string;
  intro: string;
  steps: { title: string; description: string }[];
  heroImageUrl?: string;
  ctaLabel: string;
  ctaUrl: string;
}

export function WelcomeEmail({
  brandName = "LaunchKit",
  userName,
  headline,
  intro,
  steps,
  heroImageUrl = TEMPLATE_IMAGES.welcomeHero,
  ctaLabel,
  ctaUrl,
}: WelcomeEmailProps) {
  return (
    <Email
      backgroundColor={EMAIL_OUTER_BG}
      contentWidth={EMAIL_CONTENT_WIDTH}
      previewText={`Welcome aboard, ${userName}. Let's get you set up.`}
    >
      <BrandHeader brandName={brandName} tagline="Your workspace is ready" />

      <GraphicBlock
        src={heroImageUrl}
        altText="Welcome to your new workspace"
        backgroundColor={EMAIL_ROW_BG}
      />

      <EyebrowLabel label={`Hello, ${userName}`} padding="28px 40px 0" />

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
            html={intro}
            fontSize="16px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.65"
          />
        </Column>
      </Row>

      <NumberedSteps title="Get started in three steps" steps={steps} />

      <GraphicBlock
        src={TEMPLATE_IMAGES.welcomeTeam}
        altText="Teams collaborating in LaunchKit"
        backgroundColor={EMAIL_ROW_BG}
        padding="16px 40px 8px"
      />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={EMAIL_ROW_BG}
        padding="16px 40px 0"
      >
        <Column>
          <Paragraph
            html="Need help? Reply to this email or visit our <a href='https://launchkit.io/docs' style='color:#6D5EF7;text-decoration:none;'>documentation</a> anytime."
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
        padding="24px 40px 40px"
      />

      <DividerSection />

      <FooterBlock companyName={brandName} />
    </Email>
  );
}

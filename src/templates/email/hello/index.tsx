import { Column, ColumnLayouts, Email, Heading, Paragraph, Row } from "@unlayer/react-elements";
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
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "@/elements/shared";

export function HelloEmail() {
  return (
    <Email backgroundColor={EMAIL_OUTER_BG} contentWidth={EMAIL_CONTENT_WIDTH}>
      <BrandHeader tagline="Professional templates for modern teams" />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={EMAIL_ROW_BG}
        padding="8px 40px 16px"
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
            Welcome to LaunchKit
          </Heading>
          <Paragraph
            html="Your foundation for production-ready email and document templates is ready. Built with Elements, styled for modern software teams."
            fontSize="16px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.6"
          />
        </Column>
      </Row>

      <FeatureList
        title="What you get"
        features={[
          {
            title: "Consistent design",
            description: "One visual language across every template.",
          },
          {
            title: "Elements-powered",
            description: "Write once, render to email-safe HTML.",
          },
          {
            title: "Production ready",
            description: "Realistic copy and intentional layouts.",
          },
        ]}
      />

      <CTAButton href="https://github.com" label="Explore Templates" />

      <DividerSection />

      <FooterBlock />
    </Email>
  );
}
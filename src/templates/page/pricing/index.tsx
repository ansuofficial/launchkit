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
import { pageIconDataUri } from "@/elements/assets";
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

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string;
  ctaLabel: string;
  ctaUrl: string;
  highlighted?: boolean;
}

export interface PricingPageProps {
  brandName?: string;
  headline: string;
  subheadline: string;
  tiers: PricingTier[];
  faqTitle?: string;
  faqs: { question: string; answer: string }[];
}

/**
 * Premium pricing page: quiet tiers, clear hierarchy, light FAQ.
 */
export function PricingPage({
  brandName = "Flowstack",
  headline,
  subheadline,
  tiers,
  faqTitle = "Questions, answered",
  faqs,
}: PricingPageProps) {
  return (
    <Page
      backgroundColor={PAGE_OUTER_BG}
      contentWidth={PAGE_CONTENT_WIDTH}
      fontFamily={FONT_FAMILY}
    >
      <PageNav
        brandName={brandName}
        items={[
          { text: "Product", href: "#product" },
          { text: "Pricing", href: "#pricing" },
          { text: "Customers", href: "#customers" },
          { text: "Docs", href: "#docs" },
        ]}
        ctaLabel="Start free"
        ctaUrl="https://flowstack.io/signup"
      />

      <Divider borderTopColor={BORDER_SUBTLE} borderTopWidth="1px" width="100%" />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PAGE_ROW_BG}
        padding="56px 48px 16px"
      >
        <Column>
          <Paragraph
            html="Pricing"
            fontSize="13px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={ACCENT_PURPLE}
            textAlign="center"
            lineHeight="1.4"
          />
          <Heading
            headingType="h1"
            fontSize="36px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="center"
            lineHeight="1.2"
          >
            {headline}
          </Heading>
          <Paragraph
            html={subheadline}
            fontSize="16px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="center"
            lineHeight="1.65"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={PAGE_ROW_BG}
        padding="32px 40px 56px"
      >
        {tiers.slice(0, 3).map((tier) => (
          <Column key={tier.name}>
            <Paragraph
              html={
                tier.highlighted
                  ? `<span style="color:${ACCENT_PURPLE};font-weight:600;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;">Most popular</span>`
                  : `<span style="color:${TEXT_SUBTLE};font-weight:600;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;">${tier.name}</span>`
              }
              fontSize="12px"
              fontFamily={FONT_FAMILY}
              color={TEXT_SUBTLE}
              textAlign="left"
              lineHeight="1.4"
            />
            {tier.highlighted ? (
              <Heading
                headingType="h3"
                fontSize="15px"
                fontWeight={600}
                fontFamily={FONT_FAMILY}
                color={TEXT_PRIMARY}
                textAlign="left"
                lineHeight="1.4"
              >
                {tier.name}
              </Heading>
            ) : null}
            <Heading
              headingType="h2"
              fontSize="40px"
              fontWeight={700}
              fontFamily={FONT_FAMILY}
              color={TEXT_PRIMARY}
              textAlign="left"
              lineHeight="1.05"
            >
              {tier.price}
            </Heading>
            <Paragraph
              html={tier.period}
              fontSize="13px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.4"
            />
            <Paragraph
              html={tier.description}
              fontSize="14px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.55"
            />
            <Paragraph
              html={tier.features}
              fontSize="14px"
              fontFamily={FONT_FAMILY}
              color={TEXT_PRIMARY}
              textAlign="left"
              lineHeight="2"
            />
            <Button
              href={tier.ctaUrl}
              backgroundColor={
                tier.highlighted ? TEXT_PRIMARY : PAGE_SURFACE
              }
              color={tier.highlighted ? "#FFFFFF" : TEXT_PRIMARY}
              fontSize="14px"
              fontWeight={600}
              fontFamily={FONT_FAMILY}
              textAlign="left"
              borderRadius="10px"
              padding="12px 18px"
            >
              {tier.ctaLabel}
            </Button>
          </Column>
        ))}
      </Row>

      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={PAGE_SURFACE}
        padding="40px 48px"
      >
        {(
          [
            {
              icon: "check" as const,
              title: "No credit card",
              body: "Start free. Upgrade when your team is ready.",
            },
            {
              icon: "shield" as const,
              title: "Enterprise-ready",
              body: "SSO, SCIM, and audit logs on Business.",
            },
            {
              icon: "globe" as const,
              title: "Cancel anytime",
              body: "Export your data whenever you leave.",
            },
          ] as const
        ).map((item) => (
          <Column key={item.title}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              src={pageIconDataUri(item.icon)}
              altText={item.title}
              width="44px"
            />
            <Heading
              headingType="h4"
              fontSize="15px"
              fontWeight={600}
              fontFamily={FONT_FAMILY}
              color={TEXT_PRIMARY}
              textAlign="left"
              lineHeight="1.4"
            >
              {item.title}
            </Heading>
            <Paragraph
              html={item.body}
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
        backgroundColor={PAGE_ROW_BG}
        padding="64px 48px 20px"
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
            {faqTitle}
          </Heading>
        </Column>
      </Row>

      {faqs.map((faq, i) => (
        <Row
          key={faq.question}
          layout={ColumnLayouts.OneColumn}
          backgroundColor={PAGE_ROW_BG}
          padding={i === faqs.length - 1 ? "12px 48px 64px" : "12px 48px"}
        >
          <Column>
            <Heading
              headingType="h3"
              fontSize="16px"
              fontWeight={600}
              fontFamily={FONT_FAMILY}
              color={TEXT_PRIMARY}
              textAlign="left"
              lineHeight="1.4"
            >
              {faq.question}
            </Heading>
            <Paragraph
              html={faq.answer}
              fontSize="14px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.7"
            />
          </Column>
        </Row>
      ))}

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PAGE_SURFACE}
        padding="56px 48px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="26px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="center"
            lineHeight="1.25"
          >
            Need a custom plan?
          </Heading>
          <Paragraph
            html="We will map Flowstack to your stack, team size, and launch cadence in a short call."
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="center"
            lineHeight="1.65"
          />
          <Button
            href="https://flowstack.io/contact"
            backgroundColor={TEXT_PRIMARY}
            color="#FFFFFF"
            fontSize="14px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            textAlign="center"
            borderRadius="10px"
            padding="12px 22px"
          >
            Book a walkthrough
          </Button>
        </Column>
      </Row>

      <PageFooter brandName={brandName} />
    </Page>
  );
}

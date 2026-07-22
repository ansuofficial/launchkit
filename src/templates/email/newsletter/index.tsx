import {
  Column,
  ColumnLayouts,
  Email,
  Heading,
  Image,
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
  FONT_FAMILY,
  FooterBlock,
  GraphicBlock,
  SURFACE_MUTED,
  TEXT_MUTED,
  TEXT_PRIMARY,
  TEXT_SUBTLE,
} from "@/elements/shared";

export interface NewsletterArticle {
  title: string;
  summary: string;
  readUrl: string;
  imageUrl?: string;
}

export interface NewsletterEmailProps {
  brandName?: string;
  edition: string;
  intro: string;
  articles: NewsletterArticle[];
  heroImageUrl?: string;
  ctaLabel: string;
  ctaUrl: string;
}

export function NewsletterEmail({
  brandName = "LaunchKit",
  edition,
  intro,
  articles,
  heroImageUrl = TEMPLATE_IMAGES.newsletterHero,
  ctaLabel,
  ctaUrl,
}: NewsletterEmailProps) {
  const [lead, ...rest] = articles;
  const secondaryImages = [
    TEMPLATE_IMAGES.newsletterArticle1,
    TEMPLATE_IMAGES.newsletterArticle2,
  ];

  return (
    <Email
      backgroundColor={EMAIL_OUTER_BG}
      contentWidth={EMAIL_CONTENT_WIDTH}
      previewText={intro}
    >
      <BrandHeader brandName={brandName} tagline={edition} />

      <GraphicBlock
        src={heroImageUrl}
        altText={`${edition} newsletter`}
        backgroundColor={EMAIL_ROW_BG}
      />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={EMAIL_ROW_BG}
        padding="28px 40px 20px"
      >
        <Column>
          <Heading
            headingType="h1"
            fontSize="24px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.3"
          >
            This week at LaunchKit
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

      {lead ? (
        <Row
          layout={ColumnLayouts.OneColumn}
          backgroundColor={SURFACE_MUTED}
          padding="28px 40px"
        >
          <Column>
            <Paragraph
              html={`<span style="color:${TEXT_SUBTLE};font-weight:600;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">Featured story</span>`}
              fontSize="11px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.5"
            />
            <Heading
              headingType="h2"
              fontSize="20px"
              fontWeight={700}
              fontFamily={FONT_FAMILY}
              color={TEXT_PRIMARY}
              textAlign="left"
              lineHeight="1.35"
            >
              {lead.title}
            </Heading>
            <Paragraph
              html={lead.summary}
              fontSize="15px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.65"
            />
            <Paragraph
              html={`<a href="${lead.readUrl}" style="color:#6D5EF7;text-decoration:none;font-weight:600;">Read the story →</a>`}
              fontSize="14px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.6"
            />
          </Column>
        </Row>
      ) : null}

      <DividerSection padding="8px 40px" />

      {rest.length >= 2 ? (
        <Row
          layout={ColumnLayouts.TwoEqual}
          backgroundColor={EMAIL_ROW_BG}
          padding="16px 32px 24px"
        >
          {rest.slice(0, 2).map((article, i) => (
            <Column key={article.title}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                src={article.imageUrl ?? secondaryImages[i] ?? secondaryImages[0]}
                altText={article.title}
                width="100%"
              />
              <Heading
                headingType="h3"
                fontSize="15px"
                fontWeight={600}
                fontFamily={FONT_FAMILY}
                color={TEXT_PRIMARY}
                textAlign="left"
                lineHeight="1.4"
              >
                {article.title}
              </Heading>
              <Paragraph
                html={article.summary}
                fontSize="14px"
                fontFamily={FONT_FAMILY}
                color={TEXT_MUTED}
                textAlign="left"
                lineHeight="1.6"
              />
              <Paragraph
                html={`<a href="${article.readUrl}" style="color:#6D5EF7;text-decoration:none;">Read more</a>`}
                fontSize="13px"
                fontFamily={FONT_FAMILY}
                color={TEXT_MUTED}
                textAlign="left"
                lineHeight="1.6"
              />
            </Column>
          ))}
        </Row>
      ) : null}

      {rest.length === 1 ? (
        <Row
          layout={ColumnLayouts.OneColumn}
          backgroundColor={EMAIL_ROW_BG}
          padding="16px 40px 24px"
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
              {rest[0].title}
            </Heading>
            <Paragraph
              html={rest[0].summary}
              fontSize="14px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.6"
            />
            <Paragraph
              html={`<a href="${rest[0].readUrl}" style="color:#6D5EF7;text-decoration:none;">Read more</a>`}
              fontSize="13px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.6"
            />
          </Column>
        </Row>
      ) : null}

      <CTAButton href={ctaUrl} label={ctaLabel} padding="8px 40px 32px" />

      <DividerSection />

      <FooterBlock companyName={brandName} />
    </Email>
  );
}

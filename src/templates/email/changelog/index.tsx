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
  FONT_FAMILY,
  FooterBlock,
  GraphicBlock,
  SURFACE_MUTED,
  TEXT_MUTED,
  TEXT_PRIMARY,
  TEXT_SUBTLE,
} from "@/elements/shared";

export interface ChangelogSection {
  label: string;
  items: string[];
  tone?: "new" | "improved" | "fixed";
}

export interface ChangelogEmailProps {
  brandName?: string;
  version: string;
  releaseDate: string;
  summary: string;
  sections: ChangelogSection[];
  heroImageUrl?: string;
  ctaLabel: string;
  ctaUrl: string;
}

/** Quiet section labels - text weight, not rainbow badges */
const TONE_PREFIX: Record<NonNullable<ChangelogSection["tone"]>, string> = {
  new: "New",
  improved: "Improved",
  fixed: "Fixed",
};

export function ChangelogEmail({
  brandName = "Flowstack",
  version,
  releaseDate,
  summary,
  sections,
  heroImageUrl = TEMPLATE_IMAGES.changelogHero,
  ctaLabel,
  ctaUrl,
}: ChangelogEmailProps) {
  return (
    <Email
      backgroundColor={EMAIL_OUTER_BG}
      contentWidth={EMAIL_CONTENT_WIDTH}
      previewText={`${version} shipped on ${releaseDate}. ${summary}`}
    >
      <BrandHeader brandName={brandName} tagline="Changelog" />

      <GraphicBlock
        src={heroImageUrl}
        altText={`Release ${version}`}
        backgroundColor={EMAIL_ROW_BG}
      />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={EMAIL_ROW_BG}
        padding="28px 40px 16px"
      >
        <Column>
          <Paragraph
            html={`<span style="color:${TEXT_SUBTLE};font-weight:600;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">Release ${version}</span>`}
            fontSize="11px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.5"
          />
          <Heading
            headingType="h1"
            fontSize="26px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.3"
          >
            {version} is live
          </Heading>
          <Paragraph
            html={`Released ${releaseDate}`}
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.5"
          />
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

      {sections.map((section, index) => {
        const tone =
          section.tone ??
          (["new", "improved", "fixed"] as const)[index % 3];
        const prefix = TONE_PREFIX[tone];

        return (
          <Row
            key={section.label}
            layout={ColumnLayouts.OneColumn}
            backgroundColor={index % 2 === 0 ? SURFACE_MUTED : EMAIL_ROW_BG}
            padding="20px 40px"
          >
            <Column>
              <Heading
                headingType="h3"
                fontSize="14px"
                fontWeight={600}
                fontFamily={FONT_FAMILY}
                color={TEXT_PRIMARY}
                textAlign="left"
                lineHeight="1.4"
              >
                {prefix} · {section.label}
              </Heading>
              {section.items.map((item) => (
                <Paragraph
                  key={item}
                  html={`• ${item}`}
                  fontSize="14px"
                  fontFamily={FONT_FAMILY}
                  color={TEXT_MUTED}
                  textAlign="left"
                  lineHeight="1.65"
                />
              ))}
            </Column>
          </Row>
        );
      })}

      <CTAButton href={ctaUrl} label={ctaLabel} padding="24px 40px 32px" />

      <DividerSection />

      <FooterBlock companyName={brandName} />
    </Email>
  );
}

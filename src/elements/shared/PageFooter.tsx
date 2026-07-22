import {
  Column,
  ColumnLayouts,
  Heading,
  Image,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import { SOCIAL_ICONS_BW } from "@/elements/assets/social-icons";
import {
  BORDER_SUBTLE,
  FONT_FAMILY,
  PAGE_ROW_BG,
  PAGE_SURFACE,
  TEXT_MUTED,
  TEXT_PRIMARY,
  TEXT_SUBTLE,
} from "./constants";

interface PageFooterProps {
  brandName?: string;
  tagline?: string;
  columns?: { title: string; links: string }[];
}

const DEFAULT_COLUMNS = [
  {
    title: "Product",
    links:
      '<a href="#features" style="color:#6B7280;text-decoration:none;">Features</a><br/><a href="#pricing" style="color:#6B7280;text-decoration:none;">Pricing</a><br/><a href="#changelog" style="color:#6B7280;text-decoration:none;">Changelog</a><br/><a href="#integrations" style="color:#6B7280;text-decoration:none;">Integrations</a>',
  },
  {
    title: "Company",
    links:
      '<a href="#about" style="color:#6B7280;text-decoration:none;">About</a><br/><a href="#careers" style="color:#6B7280;text-decoration:none;">Careers</a><br/><a href="#blog" style="color:#6B7280;text-decoration:none;">Blog</a><br/><a href="#contact" style="color:#6B7280;text-decoration:none;">Contact</a>',
  },
  {
    title: "Resources",
    links:
      '<a href="#docs" style="color:#6B7280;text-decoration:none;">Docs</a><br/><a href="#guides" style="color:#6B7280;text-decoration:none;">Guides</a><br/><a href="#community" style="color:#6B7280;text-decoration:none;">Community</a><br/><a href="#support" style="color:#6B7280;text-decoration:none;">Support</a>',
  },
];

const SOCIAL_LINKS = [
  { key: "x" as const, label: "X", href: "https://x.com" },
  { key: "linkedin" as const, label: "LinkedIn", href: "https://linkedin.com" },
  { key: "github" as const, label: "GitHub", href: "https://github.com" },
];

/**
 * Light, minimal footer with monochrome social icons.
 */
export function PageFooter({
  brandName = "LaunchKit",
  tagline = "Professional tools for modern software teams.",
  columns = DEFAULT_COLUMNS,
}: PageFooterProps) {
  return (
    <>
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PAGE_ROW_BG}
        padding="0 48px"
      >
        <Column>
          <Paragraph
            html={`<div style="height:1px;background:${BORDER_SUBTLE};width:100%;"></div>`}
            fontSize="1px"
            color={BORDER_SUBTLE}
            lineHeight="1"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.FourEqual}
        backgroundColor={PAGE_SURFACE}
        padding="48px 48px 32px"
      >
        <Column>
          <Heading
            headingType="h3"
            fontSize="15px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.4"
          >
            {brandName}
          </Heading>
          <Paragraph
            html={tagline}
            fontSize="13px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.6"
          />
        </Column>
        {columns.map((col) => (
          <Column key={col.title}>
            <Heading
              headingType="h4"
              fontSize="12px"
              fontWeight={600}
              fontFamily={FONT_FAMILY}
              color={TEXT_PRIMARY}
              textAlign="left"
              lineHeight="1.4"
            >
              {col.title}
            </Heading>
            <Paragraph
              html={col.links}
              fontSize="13px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="2.05"
            />
          </Column>
        ))}
      </Row>

      {/* Social + copyright bar */}
      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={PAGE_SURFACE}
        padding="8px 48px 40px"
      >
        <Column>
          <Paragraph
            html={`&copy; ${new Date().getFullYear()} ${brandName}. All rights reserved.`}
            fontSize="12px"
            fontFamily={FONT_FAMILY}
            color={TEXT_SUBTLE}
            textAlign="left"
            lineHeight="1.5"
          />
        </Column>
        <Column>
          <Paragraph
            html={SOCIAL_LINKS.map(
              (s) =>
                `<a href="${s.href}" style="display:inline-block;margin-left:14px;vertical-align:middle;" aria-label="${s.label}"><img src="${SOCIAL_ICONS_BW[s.key]}" width="18" height="18" alt="${s.label}" style="display:block;opacity:0.75;" /></a>`,
            ).join("")}
            fontSize="12px"
            fontFamily={FONT_FAMILY}
            color={TEXT_SUBTLE}
            textAlign="right"
            lineHeight="1.5"
          />
        </Column>
      </Row>
    </>
  );
}

/** Optional row of standalone monochrome icons (for custom footers). */
export function SocialIconRow({
  backgroundColor = PAGE_SURFACE,
}: {
  backgroundColor?: string;
}) {
  return (
    <Row
      layout={ColumnLayouts.ThreeEqual}
      backgroundColor={backgroundColor}
      padding="0 48px 24px"
    >
      {SOCIAL_LINKS.map((s) => (
        <Column key={s.key}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image src={SOCIAL_ICONS_BW[s.key]} altText={s.label} width="18px" />
        </Column>
      ))}
    </Row>
  );
}

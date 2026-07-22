import {
  Column,
  ColumnLayouts,
  Heading,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import {
  ACCENT_PURPLE,
  FONT_FAMILY,
  PAGE_ROW_BG,
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "./constants";

export interface PageNavItem {
  text: string;
  href: string;
}

interface PageNavProps {
  brandName?: string;
  items?: PageNavItem[];
  ctaLabel?: string;
  ctaUrl?: string;
  backgroundColor?: string;
}

const DEFAULT_ITEMS: PageNavItem[] = [
  { text: "Product", href: "#product" },
  { text: "Features", href: "#features" },
  { text: "Pricing", href: "#pricing" },
  { text: "Docs", href: "#docs" },
];

/**
 * Minimal site header: wordmark left, text nav + text CTA right.
 * Stripe / Linear style. No stacked logo mark or heavy button chrome.
 */
export function PageNav({
  brandName = "LaunchKit",
  items = DEFAULT_ITEMS,
  ctaLabel = "Start free",
  ctaUrl = "https://launchkit.io/signup",
  backgroundColor = PAGE_ROW_BG,
}: PageNavProps) {
  const links = items
    .map(
      (item) =>
        `<a href="${item.href}" style="color:${TEXT_MUTED};text-decoration:none;font-weight:500;font-size:14px;margin:0 14px;">${item.text}</a>`,
    )
    .join("");

  const navHtml = `${links}<a href="${ctaUrl}" style="color:${ACCENT_PURPLE};text-decoration:none;font-weight:600;font-size:14px;margin-left:18px;">${ctaLabel}</a>`;

  return (
    <Row
      layout={ColumnLayouts.TwoNarrowWide}
      backgroundColor={backgroundColor}
      padding="22px 48px"
    >
      <Column>
        <Heading
          headingType="h2"
          fontSize="17px"
          fontWeight={700}
          fontFamily={FONT_FAMILY}
          color={TEXT_PRIMARY}
          textAlign="left"
          lineHeight="1.2"
        >
          {brandName}
        </Heading>
      </Column>
      <Column>
        <Paragraph
          html={navHtml}
          fontSize="14px"
          fontFamily={FONT_FAMILY}
          color={TEXT_MUTED}
          textAlign="right"
          lineHeight="1.4"
        />
      </Column>
    </Row>
  );
}

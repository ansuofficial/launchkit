import {
  Column,
  ColumnLayouts,
  Heading,
  Image,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import { logoMarkDataUri } from "@/elements/assets";
import {
  EMAIL_ROW_BG,
  FONT_FAMILY,
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "./constants";

interface BrandHeaderProps {
  brandName?: string;
  tagline?: string;
  /** @deprecated Prefer light - dark headers overuse color */
  variant?: "light" | "dark";
  showMark?: boolean;
}

/**
 * Quiet brand bar - logo + name.
 * Unlayer marketplace templates keep headers light and minimal.
 */
export function BrandHeader({
  brandName = "LaunchKit",
  tagline,
  showMark = true,
}: BrandHeaderProps) {
  if (!showMark) {
    return (
      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={EMAIL_ROW_BG}
        padding="32px 40px 16px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="17px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.3"
          >
            {brandName}
          </Heading>
          {tagline ? (
            <Paragraph
              html={tagline}
              fontSize="13px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.5"
            />
          ) : null}
        </Column>
      </Row>
    );
  }

  return (
    <Row
      layout={ColumnLayouts.TwoNarrowWide}
      backgroundColor={EMAIL_ROW_BG}
      padding="28px 40px 16px"
    >
      <Column>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          src={logoMarkDataUri(36)}
          altText={`${brandName} logo`}
          width="36px"
        />
      </Column>
      <Column>
        <Heading
          headingType="h2"
          fontSize="17px"
          fontWeight={700}
          fontFamily={FONT_FAMILY}
          color={TEXT_PRIMARY}
          textAlign="left"
          lineHeight="1.3"
        >
          {brandName}
        </Heading>
        {tagline ? (
          <Paragraph
            html={tagline}
            fontSize="13px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.5"
          />
        ) : null}
      </Column>
    </Row>
  );
}

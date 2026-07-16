import {
  Column,
  ColumnLayouts,
  Heading,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import {
  ACCENT_PURPLE,
  EMAIL_ROW_BG,
  FONT_FAMILY,
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "./constants";

interface BrandHeaderProps {
  brandName?: string;
  tagline?: string;
}

export function BrandHeader({
  brandName = "LaunchKit",
  tagline,
}: BrandHeaderProps) {
  return (
    <Row
      layout={ColumnLayouts.OneColumn}
      backgroundColor={EMAIL_ROW_BG}
      padding="32px 40px 24px"
    >
      <Column>
        <Heading
          headingType="h2"
          fontSize="20px"
          fontWeight={700}
          fontFamily={FONT_FAMILY}
          color={ACCENT_PURPLE}
          textAlign="left"
          lineHeight="1.3"
        >
          {brandName}
        </Heading>
        {tagline ? (
          <Paragraph
            html={tagline}
            fontSize="14px"
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
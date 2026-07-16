import { Button, Column, ColumnLayouts, Row } from "@unlayer/react-elements";
import { ACCENT_PURPLE, FONT_FAMILY } from "./constants";

interface CTAButtonProps {
  href: string;
  label: string;
  align?: "left" | "center" | "right";
  padding?: string;
}

export function CTAButton({
  href,
  label,
  align = "center",
  padding = "8px 40px 40px",
}: CTAButtonProps) {
  return (
    <Row
      layout={ColumnLayouts.OneColumn}
      backgroundColor="#FFFFFF"
      padding={padding}
    >
      <Column>
        <Button
          href={href}
          backgroundColor={ACCENT_PURPLE}
          color="#FFFFFF"
          fontSize="14px"
          fontWeight={600}
          fontFamily={FONT_FAMILY}
          textAlign={align}
          borderRadius="14px"
          padding="14px 28px"
        >
          {label}
        </Button>
      </Column>
    </Row>
  );
}
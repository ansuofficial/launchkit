import { Button, Column, ColumnLayouts, Row } from "@unlayer/react-elements";
import { ACCENT_PURPLE, FONT_FAMILY } from "./constants";

interface CTAButtonProps {
  href: string;
  label: string;
  align?: "left" | "center" | "right";
  padding?: string;
  backgroundColor?: string;
  buttonColor?: string;
  textColor?: string;
}

export function CTAButton({
  href,
  label,
  align = "center",
  padding = "8px 40px 40px",
  backgroundColor = "#FFFFFF",
  buttonColor = ACCENT_PURPLE,
  textColor = "#FFFFFF",
}: CTAButtonProps) {
  return (
    <Row
      layout={ColumnLayouts.OneColumn}
      backgroundColor={backgroundColor}
      padding={padding}
    >
      <Column>
        <Button
          href={href}
          backgroundColor={buttonColor}
          color={textColor}
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

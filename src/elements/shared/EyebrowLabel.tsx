import {
  Column,
  ColumnLayouts,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import { FONT_FAMILY, TEXT_MUTED, TEXT_SUBTLE } from "./constants";

interface EyebrowLabelProps {
  label: string;
  /** Prefer muted gray; accent only when truly needed */
  color?: string;
  backgroundColor?: string;
  padding?: string;
  align?: "left" | "center" | "right";
}

/** Small uppercase label - restrained, not a color splash */
export function EyebrowLabel({
  label,
  color = TEXT_SUBTLE,
  backgroundColor = "#FFFFFF",
  padding = "8px 40px 0",
  align = "left",
}: EyebrowLabelProps) {
  return (
    <Row
      layout={ColumnLayouts.OneColumn}
      backgroundColor={backgroundColor}
      padding={padding}
    >
      <Column>
        <Paragraph
          html={`<span style="color:${color};font-weight:600;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">${label}</span>`}
          fontSize="11px"
          fontFamily={FONT_FAMILY}
          color={TEXT_MUTED}
          textAlign={align}
          lineHeight="1.5"
        />
      </Column>
    </Row>
  );
}

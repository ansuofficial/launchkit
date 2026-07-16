import { Column, ColumnLayouts, Divider, Row } from "@unlayer/react-elements";
import { EMAIL_ROW_BG } from "./constants";

interface DividerSectionProps {
  padding?: string;
}

export function DividerSection({ padding = "16px 40px" }: DividerSectionProps) {
  return (
    <Row
      layout={ColumnLayouts.OneColumn}
      backgroundColor={EMAIL_ROW_BG}
      padding={padding}
    >
      <Column>
        <Divider borderTopColor="#E8EAEF" borderTopWidth="1px" width="100%" />
      </Column>
    </Row>
  );
}
import {
  Column,
  ColumnLayouts,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import { EMAIL_ROW_BG, FONT_FAMILY, TEXT_MUTED } from "./constants";

interface FooterBlockProps {
  companyName?: string;
  address?: string;
  unsubscribeUrl?: string;
}

export function FooterBlock({
  companyName = "LaunchKit",
  address = "123 Product Street, San Francisco, CA",
  unsubscribeUrl = "#",
}: FooterBlockProps) {
  return (
    <Row
      layout={ColumnLayouts.OneColumn}
      backgroundColor={EMAIL_ROW_BG}
      padding="24px 40px 40px"
    >
      <Column>
        <Paragraph
          html={`&copy; ${new Date().getFullYear()} ${companyName}. All rights reserved.`}
          fontSize="12px"
          fontFamily={FONT_FAMILY}
          color={TEXT_MUTED}
          textAlign="center"
          lineHeight="1.6"
        />
        <Paragraph
          html={address}
          fontSize="12px"
          fontFamily={FONT_FAMILY}
          color={TEXT_MUTED}
          textAlign="center"
          lineHeight="1.6"
        />
        <Paragraph
          html={`<a href="${unsubscribeUrl}" style="color:#6D5EF7;text-decoration:none;">Unsubscribe</a>`}
          fontSize="12px"
          fontFamily={FONT_FAMILY}
          color={TEXT_MUTED}
          textAlign="center"
          lineHeight="1.6"
        />
      </Column>
    </Row>
  );
}
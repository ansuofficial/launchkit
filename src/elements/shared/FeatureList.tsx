import {
  Column,
  ColumnLayouts,
  Heading,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import {
  EMAIL_ROW_BG,
  FONT_FAMILY,
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "./constants";

export interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureListProps {
  title?: string;
  features: FeatureItem[];
}

export function FeatureList({ title, features }: FeatureListProps) {
  return (
    <Row
      layout={ColumnLayouts.OneColumn}
      backgroundColor={EMAIL_ROW_BG}
      padding="8px 40px 24px"
    >
      <Column>
        {title ? (
          <Heading
            headingType="h3"
            fontSize="16px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.4"
          >
            {title}
          </Heading>
        ) : null}
        {features.map((feature) => (
          <Paragraph
            key={feature.title}
            html={`<strong>${feature.title}</strong> — ${feature.description}`}
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.6"
          />
        ))}
      </Column>
    </Row>
  );
}
import {
  Column,
  ColumnLayouts,
  Heading,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import {
  FONT_FAMILY,
  SURFACE_MUTED,
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "./constants";

export interface StatItem {
  value: string;
  label: string;
}

interface StatRowProps {
  stats: StatItem[];
  backgroundColor?: string;
  valueColor?: string;
  padding?: string;
}

/** Metric band - quiet surfaces, dark type (not purple numbers) */
export function StatRow({
  stats,
  backgroundColor = SURFACE_MUTED,
  valueColor = TEXT_PRIMARY,
  padding = "28px 40px",
}: StatRowProps) {
  const items = stats.slice(0, 3);
  if (items.length < 2) return null;

  const layout =
    items.length === 2 ? ColumnLayouts.TwoEqual : ColumnLayouts.ThreeEqual;

  return (
    <Row layout={layout} backgroundColor={backgroundColor} padding={padding}>
      {items.map((stat) => (
        <Column key={stat.label}>
          <Heading
            headingType="h2"
            fontSize="26px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={valueColor}
            textAlign="center"
            lineHeight="1.2"
          >
            {stat.value}
          </Heading>
          <Paragraph
            html={stat.label}
            fontSize="13px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="center"
            lineHeight="1.5"
          />
        </Column>
      ))}
    </Row>
  );
}

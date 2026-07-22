import {
  Column,
  ColumnLayouts,
  Heading,
  Image,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import { iconBadgeDataUri } from "@/elements/assets";
import {
  EMAIL_ROW_BG,
  FONT_FAMILY,
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "./constants";

export interface FeatureItem {
  title: string;
  description: string;
  icon?: "chart" | "bolt" | "shield" | "users" | "spark" | "check";
}

interface FeatureListProps {
  title?: string;
  features: FeatureItem[];
  backgroundColor?: string;
  showIcons?: boolean;
}

const DEFAULT_ICONS: FeatureItem["icon"][] = [
  "check",
  "spark",
  "chart",
  "users",
  "bolt",
  "shield",
];

/** Neutral icon chips - gray surface, soft accent stroke (not purple blobs) */
export function FeatureList({
  title,
  features,
  backgroundColor = EMAIL_ROW_BG,
  showIcons = true,
}: FeatureListProps) {
  return (
    <>
      {title ? (
        <Row
          layout={ColumnLayouts.OneColumn}
          backgroundColor={backgroundColor}
          padding="16px 40px 8px"
        >
          <Column>
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
          </Column>
        </Row>
      ) : null}

      {features.map((feature, index) => {
        const icon = feature.icon ?? DEFAULT_ICONS[index % DEFAULT_ICONS.length];
        return (
          <Row
            key={feature.title}
            layout={
              showIcons
                ? ColumnLayouts.TwoNarrowWide
                : ColumnLayouts.OneColumn
            }
            backgroundColor={backgroundColor}
            padding="10px 40px"
          >
            {showIcons ? (
              <Column>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image
                  src={iconBadgeDataUri(icon!, "#F3F4F6", "#4B5563")}
                  altText=""
                  width="40px"
                />
              </Column>
            ) : null}
            <Column>
              <Heading
                headingType="h3"
                fontSize="15px"
                fontWeight={600}
                fontFamily={FONT_FAMILY}
                color={TEXT_PRIMARY}
                textAlign="left"
                lineHeight="1.4"
              >
                {feature.title}
              </Heading>
              <Paragraph
                html={feature.description}
                fontSize="14px"
                fontFamily={FONT_FAMILY}
                color={TEXT_MUTED}
                textAlign="left"
                lineHeight="1.6"
              />
            </Column>
          </Row>
        );
      })}
    </>
  );
}

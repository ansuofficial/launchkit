import {
  Column,
  ColumnLayouts,
  Heading,
  Image,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import {
  EMAIL_ROW_BG,
  FONT_FAMILY,
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "./constants";

export interface FeatureCardItem {
  title: string;
  description: string;
  /** Optional photo or icon data URI */
  imageSrc?: string;
  iconSrc?: string;
}

interface FeatureCardsProps {
  title?: string;
  features: FeatureCardItem[];
  backgroundColor?: string;
}

/**
 * Two-column content cards.
 * Prefer real photos via imageSrc; iconSrc is a quiet fallback.
 */
export function FeatureCards({
  title,
  features,
  backgroundColor = EMAIL_ROW_BG,
}: FeatureCardsProps) {
  const pairs: FeatureCardItem[][] = [];
  for (let i = 0; i < features.length; i += 2) {
    pairs.push(features.slice(i, i + 2));
  }

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

      {pairs.map((pair) =>
        pair.length === 2 ? (
          <Row
            key={pair.map((p) => p.title).join("-")}
            layout={ColumnLayouts.TwoEqual}
            backgroundColor={backgroundColor}
            padding="8px 32px 16px"
          >
            {pair.map((feature) => (
              <Column key={feature.title}>
                {feature.imageSrc ? (
                  // eslint-disable-next-line jsx-a11y/alt-text
                  <Image
                    src={feature.imageSrc}
                    altText={feature.title}
                    width="100%"
                  />
                ) : feature.iconSrc ? (
                  // eslint-disable-next-line jsx-a11y/alt-text
                  <Image src={feature.iconSrc} altText="" width="40px" />
                ) : null}
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
            ))}
          </Row>
        ) : (
          <Row
            key={pair[0].title}
            layout={ColumnLayouts.OneColumn}
            backgroundColor={backgroundColor}
            padding="8px 40px 16px"
          >
            <Column>
              {pair[0].imageSrc ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image
                  src={pair[0].imageSrc}
                  altText={pair[0].title}
                  width="100%"
                />
              ) : pair[0].iconSrc ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image src={pair[0].iconSrc} altText="" width="40px" />
              ) : null}
              <Heading
                headingType="h3"
                fontSize="15px"
                fontWeight={600}
                fontFamily={FONT_FAMILY}
                color={TEXT_PRIMARY}
                textAlign="left"
                lineHeight="1.4"
              >
                {pair[0].title}
              </Heading>
              <Paragraph
                html={pair[0].description}
                fontSize="14px"
                fontFamily={FONT_FAMILY}
                color={TEXT_MUTED}
                textAlign="left"
                lineHeight="1.6"
              />
            </Column>
          </Row>
        ),
      )}
    </>
  );
}

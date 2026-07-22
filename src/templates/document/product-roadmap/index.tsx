import {
  Column,
  ColumnLayouts,
  Document,
  Heading,
  Paragraph,
  Row,
  Table,
} from "@unlayer/react-elements";
import { TEMPLATE_IMAGES } from "@/elements/assets";
import {
  ACCENT_PURPLE,
  BrandHeader,
  DividerSection,
  DOC_CONTENT_WIDTH,
  DOC_OUTER_BG,
  DOC_ROW_BG,
  FONT_FAMILY,
  FooterBlock,
  GraphicBlock,
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "@/elements/shared";

export interface RoadmapTheme {
  title: string;
  description: string;
  items: string[];
}

export interface ProductRoadmapDocumentProps {
  brandName?: string;
  title: string;
  period: string;
  audience: string;
  lastUpdated: string;
  vision: string;
  themes: RoadmapTheme[];
  timeline: string[][];
  principles: string[];
}

export function ProductRoadmapDocument({
  brandName = "LaunchKit",
  title,
  period,
  audience,
  lastUpdated,
  vision,
  themes,
  timeline,
  principles,
}: ProductRoadmapDocumentProps) {
  return (
    <Document
      backgroundColor={DOC_OUTER_BG}
      contentWidth={DOC_CONTENT_WIDTH}
      fontFamily={FONT_FAMILY}
    >
      <BrandHeader brandName={brandName} tagline="Product roadmap" />

      <GraphicBlock
        src={TEMPLATE_IMAGES.docRoadmap}
        altText="Product roadmap"
        backgroundColor={DOC_ROW_BG}
        padding="0 0 8px"
      />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={DOC_ROW_BG}
        padding="8px 48px 8px"
      >
        <Column>
          <Heading
            headingType="h1"
            fontSize="28px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.3"
          >
            {title}
          </Heading>
          <Paragraph
            html={`${period} · For ${audience}`}
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.6"
          />
          <Paragraph
            html={`Last updated ${lastUpdated}`}
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.6"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={DOC_ROW_BG}
        padding="16px 48px 8px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="18px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.4"
          >
            Direction
          </Heading>
          <Paragraph
            html={vision}
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.7"
          />
        </Column>
      </Row>

      {themes.length === 3 ? (
        <Row
          layout={ColumnLayouts.ThreeEqual}
          backgroundColor="#F3F1FF"
          padding="24px 48px"
        >
          {themes.map((theme) => (
            <Column key={theme.title}>
              <Heading
                headingType="h3"
                fontSize="15px"
                fontWeight={600}
                fontFamily={FONT_FAMILY}
                color={ACCENT_PURPLE}
                textAlign="left"
                lineHeight="1.4"
              >
                {theme.title}
              </Heading>
              <Paragraph
                html={theme.description}
                fontSize="13px"
                fontFamily={FONT_FAMILY}
                color={TEXT_MUTED}
                textAlign="left"
                lineHeight="1.5"
              />
              {theme.items.map((item) => (
                <Paragraph
                  key={item}
                  html={`• ${item}`}
                  fontSize="13px"
                  fontFamily={FONT_FAMILY}
                  color={TEXT_PRIMARY}
                  textAlign="left"
                  lineHeight="1.5"
                />
              ))}
            </Column>
          ))}
        </Row>
      ) : (
        themes.map((theme) => (
          <Row
            key={theme.title}
            layout={ColumnLayouts.OneColumn}
            backgroundColor={DOC_ROW_BG}
            padding="12px 48px 8px"
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
                {theme.title}
              </Heading>
              <Paragraph
                html={theme.description}
                fontSize="14px"
                fontFamily={FONT_FAMILY}
                color={TEXT_MUTED}
                textAlign="left"
                lineHeight="1.6"
              />
              {theme.items.map((item) => (
                <Paragraph
                  key={item}
                  html={`• ${item}`}
                  fontSize="14px"
                  fontFamily={FONT_FAMILY}
                  color={TEXT_MUTED}
                  textAlign="left"
                  lineHeight="1.6"
                />
              ))}
            </Column>
          </Row>
        ))
      )}

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={DOC_ROW_BG}
        padding="24px 48px 8px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="18px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.4"
          >
            Quarterly timeline
          </Heading>
          <Table
            headers={["Horizon", "Focus", "Key deliverables"]}
            data={timeline}
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={DOC_ROW_BG}
        padding="16px 48px 32px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="18px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.4"
          >
            How we prioritize
          </Heading>
          {principles.map((item) => (
            <Paragraph
              key={item}
              html={`• ${item}`}
              fontSize="15px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.7"
            />
          ))}
        </Column>
      </Row>

      <DividerSection padding="8px 48px" />

      <FooterBlock companyName={brandName} showUnsubscribe={false} />
    </Document>
  );
}
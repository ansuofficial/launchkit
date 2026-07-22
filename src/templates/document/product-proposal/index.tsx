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
  CTAButton,
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

export interface ProposalDeliverable {
  name: string;
  description: string;
}

export interface ProductProposalDocumentProps {
  brandName?: string;
  title: string;
  clientName: string;
  preparedBy: string;
  date: string;
  validUntil: string;
  executiveSummary: string;
  objectives: string[];
  deliverables: ProposalDeliverable[];
  timeline: string[][];
  investment: string;
  nextSteps: string;
  ctaLabel: string;
  ctaUrl: string;
}

export function ProductProposalDocument({
  brandName = "Flowstack",
  title,
  clientName,
  preparedBy,
  date,
  validUntil,
  executiveSummary,
  objectives,
  deliverables,
  timeline,
  investment,
  nextSteps,
  ctaLabel,
  ctaUrl,
}: ProductProposalDocumentProps) {
  return (
    <Document
      backgroundColor={DOC_OUTER_BG}
      contentWidth={DOC_CONTENT_WIDTH}
      fontFamily={FONT_FAMILY}
    >
      <BrandHeader brandName={brandName} tagline="Product proposal" />

      <GraphicBlock
        src={TEMPLATE_IMAGES.docProposal}
        altText="Product proposal"
        backgroundColor={DOC_ROW_BG}
        padding="0 0 8px"
      />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={DOC_ROW_BG}
        padding="8px 48px 16px"
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
            html={`Prepared for <strong>${clientName}</strong> · ${date}`}
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.6"
          />
          <Paragraph
            html={`Prepared by ${preparedBy} · Valid until ${validUntil}`}
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
            Executive summary
          </Heading>
          <Paragraph
            html={executiveSummary}
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.7"
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
            Objectives
          </Heading>
          {objectives.map((item) => (
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
            Deliverables
          </Heading>
          {deliverables.map((item) => (
            <Paragraph
              key={item.name}
              html={`<strong>${item.name}</strong> - ${item.description}`}
              fontSize="15px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.7"
            />
          ))}
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
            Timeline
          </Heading>
          <Table headers={["Phase", "Duration", "Outcome"]} data={timeline} />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor="#F3F1FF"
        padding="24px 48px"
      >
        <Column>
          <Heading
            headingType="h3"
            fontSize="14px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={ACCENT_PURPLE}
            textAlign="left"
            lineHeight="1.4"
          >
            Investment
          </Heading>
          <Paragraph
            html={investment}
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.6"
          />
        </Column>
        <Column>
          <Heading
            headingType="h3"
            fontSize="14px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={ACCENT_PURPLE}
            textAlign="left"
            lineHeight="1.4"
          >
            Next steps
          </Heading>
          <Paragraph
            html={nextSteps}
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.6"
          />
        </Column>
      </Row>

      <CTAButton href={ctaUrl} label={ctaLabel} padding="32px 48px 32px" />

      <DividerSection padding="8px 48px" />

      <FooterBlock companyName={brandName} showUnsubscribe={false} />
    </Document>
  );
}
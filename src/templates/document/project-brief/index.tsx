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

export interface ProjectBriefDocumentProps {
  brandName?: string;
  projectName: string;
  owner: string;
  status: string;
  lastUpdated: string;
  problem: string;
  goals: string[];
  successMetrics: string[];
  inScope: string[];
  outOfScope: string[];
  stakeholders: string[][];
  milestones: string[][];
  risks: string[];
}

export function ProjectBriefDocument({
  brandName = "LaunchKit",
  projectName,
  owner,
  status,
  lastUpdated,
  problem,
  goals,
  successMetrics,
  inScope,
  outOfScope,
  stakeholders,
  milestones,
  risks,
}: ProjectBriefDocumentProps) {
  return (
    <Document
      backgroundColor={DOC_OUTER_BG}
      contentWidth={DOC_CONTENT_WIDTH}
      fontFamily={FONT_FAMILY}
    >
      <BrandHeader brandName={brandName} tagline="Project brief" />

      <GraphicBlock
        src={TEMPLATE_IMAGES.docBrief}
        altText="Project brief"
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
            {projectName}
          </Heading>
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor="#F3F1FF"
        padding="20px 48px"
      >
        <Column>
          <Heading
            headingType="h3"
            fontSize="12px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={ACCENT_PURPLE}
            textAlign="left"
            lineHeight="1.4"
          >
            Owner
          </Heading>
          <Paragraph
            html={owner}
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.5"
          />
        </Column>
        <Column>
          <Heading
            headingType="h3"
            fontSize="12px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={ACCENT_PURPLE}
            textAlign="left"
            lineHeight="1.4"
          >
            Status
          </Heading>
          <Paragraph
            html={status}
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.5"
          />
        </Column>
        <Column>
          <Heading
            headingType="h3"
            fontSize="12px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={ACCENT_PURPLE}
            textAlign="left"
            lineHeight="1.4"
          >
            Updated
          </Heading>
          <Paragraph
            html={lastUpdated}
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.5"
          />
        </Column>
      </Row>

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
            Problem statement
          </Heading>
          <Paragraph
            html={problem}
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.7"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={DOC_ROW_BG}
        padding="16px 48px 8px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="16px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.4"
          >
            Goals
          </Heading>
          {goals.map((item) => (
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
        <Column>
          <Heading
            headingType="h2"
            fontSize="16px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.4"
          >
            Success metrics
          </Heading>
          {successMetrics.map((item) => (
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

      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={DOC_ROW_BG}
        padding="16px 48px 8px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="16px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.4"
          >
            In scope
          </Heading>
          {inScope.map((item) => (
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
        <Column>
          <Heading
            headingType="h2"
            fontSize="16px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.4"
          >
            Out of scope
          </Heading>
          {outOfScope.map((item) => (
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
            Stakeholders
          </Heading>
          <Table headers={["Role", "Name", "Responsibility"]} data={stakeholders} />
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
            Milestones
          </Heading>
          <Table headers={["Milestone", "Target date", "Owner"]} data={milestones} />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={DOC_ROW_BG}
        padding="16px 48px 24px"
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
            Risks & open questions
          </Heading>
          {risks.map((item) => (
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

      <DividerSection padding="8px 48px" />

      <FooterBlock companyName={brandName} showUnsubscribe={false} />
    </Document>
  );
}
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

export interface MeetingSummaryDocumentProps {
  brandName?: string;
  meetingTitle: string;
  meetingDate: string;
  duration: string;
  facilitator: string;
  attendees: string;
  agenda: string[];
  discussion: string[];
  decisions: string[];
  actionItems: string[][];
  nextMeeting: string;
}

export function MeetingSummaryDocument({
  brandName = "LaunchKit",
  meetingTitle,
  meetingDate,
  duration,
  facilitator,
  attendees,
  agenda,
  discussion,
  decisions,
  actionItems,
  nextMeeting,
}: MeetingSummaryDocumentProps) {
  return (
    <Document
      backgroundColor={DOC_OUTER_BG}
      contentWidth={DOC_CONTENT_WIDTH}
      fontFamily={FONT_FAMILY}
    >
      <BrandHeader brandName={brandName} tagline="Meeting summary" />

      <GraphicBlock
        src={TEMPLATE_IMAGES.docMeeting}
        altText="Meeting summary"
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
            {meetingTitle}
          </Heading>
          <Paragraph
            html={`${meetingDate} · ${duration}`}
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.6"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoEqual}
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
            Facilitator
          </Heading>
          <Paragraph
            html={facilitator}
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
            Attendees
          </Heading>
          <Paragraph
            html={attendees}
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
            Agenda
          </Heading>
          {agenda.map((item, index) => (
            <Paragraph
              key={item}
              html={`${index + 1}. ${item}`}
              fontSize="15px"
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
            Discussion notes
          </Heading>
          {discussion.map((item) => (
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
            Decisions
          </Heading>
          {decisions.map((item) => (
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
            Action items
          </Heading>
          <Table
            headers={["Action", "Owner", "Due date", "Status"]}
            data={actionItems}
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
            Next meeting
          </Heading>
          <Paragraph
            html={nextMeeting}
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.6"
          />
        </Column>
      </Row>

      <DividerSection padding="8px 48px" />

      <FooterBlock companyName={brandName} showUnsubscribe={false} />
    </Document>
  );
}
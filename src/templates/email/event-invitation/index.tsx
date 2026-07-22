import {
  Column,
  ColumnLayouts,
  Email,
  Heading,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import { TEMPLATE_IMAGES } from "@/elements/assets";
import {
  BrandHeader,
  CTAButton,
  DividerSection,
  EMAIL_CONTENT_WIDTH,
  EMAIL_OUTER_BG,
  EMAIL_ROW_BG,
  FONT_FAMILY,
  FooterBlock,
  GraphicBlock,
  SURFACE_MUTED,
  TEXT_MUTED,
  TEXT_PRIMARY,
  TEXT_SUBTLE,
} from "@/elements/shared";

export interface EventInvitationEmailProps {
  brandName?: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  location: string;
  description: string;
  agenda: string[];
  heroImageUrl?: string;
  ctaLabel: string;
  ctaUrl: string;
}

export function EventInvitationEmail({
  brandName = "LaunchKit",
  eventName,
  eventDate,
  eventTime,
  location,
  description,
  agenda,
  heroImageUrl = TEMPLATE_IMAGES.eventHero,
  ctaLabel,
  ctaUrl,
}: EventInvitationEmailProps) {
  return (
    <Email
      backgroundColor={EMAIL_OUTER_BG}
      contentWidth={EMAIL_CONTENT_WIDTH}
      previewText={`You're invited: ${eventName} on ${eventDate}`}
    >
      <BrandHeader brandName={brandName} tagline="You're invited" />

      <GraphicBlock
        src={heroImageUrl}
        altText={`${eventName} event`}
        backgroundColor={EMAIL_ROW_BG}
      />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={EMAIL_ROW_BG}
        padding="28px 40px 16px"
      >
        <Column>
          <Heading
            headingType="h1"
            fontSize="26px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.3"
          >
            {eventName}
          </Heading>
          <Paragraph
            html={description}
            fontSize="16px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.65"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={SURFACE_MUTED}
        padding="24px 40px"
      >
        <Column>
          <Paragraph
            html={`<span style="color:${TEXT_SUBTLE};font-weight:600;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">When</span>`}
            fontSize="11px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.5"
          />
          <Heading
            headingType="h3"
            fontSize="16px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.4"
          >
            {eventDate}
          </Heading>
          <Paragraph
            html={eventTime}
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.5"
          />
        </Column>
        <Column>
          <Paragraph
            html={`<span style="color:${TEXT_SUBTLE};font-weight:600;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">Where</span>`}
            fontSize="11px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.5"
          />
          <Heading
            headingType="h3"
            fontSize="16px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.4"
          >
            Location
          </Heading>
          <Paragraph
            html={location}
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.5"
          />
        </Column>
      </Row>

      <GraphicBlock
        src={TEMPLATE_IMAGES.eventVenue}
        altText="Event venue"
        backgroundColor={EMAIL_ROW_BG}
        padding="24px 40px 8px"
      />

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={EMAIL_ROW_BG}
        padding="20px 40px 8px"
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
            Agenda
          </Heading>
          {agenda.map((item, i) => (
            <Paragraph
              key={item}
              html={`<span style="color:${TEXT_SUBTLE};font-weight:600;min-width:24px;display:inline-block;">${i + 1}.</span> ${item}`}
              fontSize="14px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.7"
            />
          ))}
        </Column>
      </Row>

      <CTAButton href={ctaUrl} label={ctaLabel} padding="24px 40px 40px" />

      <DividerSection />

      <FooterBlock companyName={brandName} />
    </Email>
  );
}

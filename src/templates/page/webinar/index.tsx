import {
  Button,
  Column,
  ColumnLayouts,
  Divider,
  Heading,
  Image,
  Page,
  Paragraph,
  Row,
} from "@unlayer/react-elements";
import { pageIconDataUri, TEMPLATE_IMAGES } from "@/elements/assets";
import {
  ACCENT_PURPLE,
  BORDER_SUBTLE,
  FONT_FAMILY,
  PAGE_CONTENT_WIDTH,
  PAGE_OUTER_BG,
  PAGE_ROW_BG,
  PAGE_SURFACE,
  PageFooter,
  PageNav,
  TEXT_MUTED,
  TEXT_PRIMARY,
  TEXT_SUBTLE,
} from "@/elements/shared";

export interface WebinarPageProps {
  brandName?: string;
  eventLabel?: string;
  headline: string;
  subheadline: string;
  dateLabel: string;
  timeLabel: string;
  locationLabel: string;
  ctaLabel: string;
  ctaUrl: string;
  speakerImageUrl?: string;
  agenda: { time: string; title: string; detail: string }[];
  takeaways: { title: string; description: string }[];
  speaker: { name: string; role: string; bio: string };
}

/**
 * Clean webinar landing: light shell, strong hero photo, scannable agenda.
 */
export function WebinarPage({
  brandName = "LaunchKit",
  eventLabel = "Live webinar",
  headline,
  subheadline,
  dateLabel,
  timeLabel,
  locationLabel,
  ctaLabel,
  ctaUrl,
  speakerImageUrl = TEMPLATE_IMAGES.pageWebinarSpeaker,
  agenda,
  takeaways,
  speaker,
}: WebinarPageProps) {
  return (
    <Page
      backgroundColor={PAGE_OUTER_BG}
      contentWidth={PAGE_CONTENT_WIDTH}
      fontFamily={FONT_FAMILY}
    >
      <PageNav
        brandName={brandName}
        items={[
          { text: "Agenda", href: "#agenda" },
          { text: "Speaker", href: "#speaker" },
          { text: "Register", href: "#register" },
        ]}
        ctaLabel={ctaLabel}
        ctaUrl={ctaUrl}
      />

      <Divider borderTopColor={BORDER_SUBTLE} borderTopWidth="1px" width="100%" />

      <Row
        layout={ColumnLayouts.TwoEqual}
        backgroundColor={PAGE_ROW_BG}
        padding="56px 48px 40px"
      >
        <Column>
          <Paragraph
            html={eventLabel}
            fontSize="12px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={ACCENT_PURPLE}
            textAlign="left"
            lineHeight="1.4"
          />
          <Heading
            headingType="h1"
            fontSize="36px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.18"
          >
            {headline}
          </Heading>
          <Paragraph
            html={subheadline}
            fontSize="16px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.7"
          />
          <Paragraph
            html={`<strong style="color:${TEXT_PRIMARY};">${dateLabel}</strong><br/>${timeLabel}<br/><span style="color:${TEXT_SUBTLE};">${locationLabel}</span>`}
            fontSize="14px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.85"
          />
          <Button
            href={ctaUrl}
            backgroundColor={TEXT_PRIMARY}
            color="#FFFFFF"
            fontSize="14px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            textAlign="left"
            borderRadius="10px"
            padding="13px 22px"
          >
            {ctaLabel}
          </Button>
        </Column>
        <Column>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            src={speakerImageUrl}
            altText={`${speaker.name} speaking`}
            width="100%"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PAGE_SURFACE}
        padding="56px 48px 16px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="26px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.25"
          >
            What you will take away
          </Heading>
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.ThreeEqual}
        backgroundColor={PAGE_SURFACE}
        padding="12px 40px 48px"
      >
        {takeaways.slice(0, 3).map((item, index) => (
          <Column key={item.title}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              src={pageIconDataUri(
                index === 0 ? "spark" : index === 1 ? "chart" : "users",
              )}
              altText={item.title}
              width="44px"
            />
            <Heading
              headingType="h3"
              fontSize="16px"
              fontWeight={600}
              fontFamily={FONT_FAMILY}
              color={TEXT_PRIMARY}
              textAlign="left"
              lineHeight="1.35"
            >
              {item.title}
            </Heading>
            <Paragraph
              html={item.description}
              fontSize="14px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.65"
            />
          </Column>
        ))}
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={PAGE_ROW_BG}
        padding="56px 48px 12px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="26px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.25"
          >
            Agenda
          </Heading>
        </Column>
      </Row>

      {agenda.map((item) => (
        <Row
          key={item.title}
          layout={ColumnLayouts.TwoNarrowWide}
          backgroundColor={PAGE_ROW_BG}
          padding="14px 48px"
        >
          <Column>
            <Paragraph
              html={item.time}
              fontSize="13px"
              fontWeight={600}
              fontFamily={FONT_FAMILY}
              color={TEXT_SUBTLE}
              textAlign="left"
              lineHeight="1.5"
            />
          </Column>
          <Column>
            <Heading
              headingType="h3"
              fontSize="16px"
              fontWeight={600}
              fontFamily={FONT_FAMILY}
              color={TEXT_PRIMARY}
              textAlign="left"
              lineHeight="1.35"
            >
              {item.title}
            </Heading>
            <Paragraph
              html={item.detail}
              fontSize="14px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.6"
            />
          </Column>
        </Row>
      ))}

      <Row
        layout={ColumnLayouts.TwoWideNarrow}
        backgroundColor={PAGE_SURFACE}
        padding="64px 48px"
      >
        <Column>
          <Paragraph
            html="Speaker"
            fontSize="12px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={ACCENT_PURPLE}
            textAlign="left"
            lineHeight="1.4"
          />
          <Heading
            headingType="h2"
            fontSize="26px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color={TEXT_PRIMARY}
            textAlign="left"
            lineHeight="1.25"
          >
            {speaker.name}
          </Heading>
          <Paragraph
            html={speaker.role}
            fontSize="14px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.5"
          />
          <Paragraph
            html={speaker.bio}
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color={TEXT_MUTED}
            textAlign="left"
            lineHeight="1.7"
          />
        </Column>
        <Column>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            src={TEMPLATE_IMAGES.pageWebinarAudience}
            altText="Webinar audience"
            width="100%"
          />
        </Column>
      </Row>

      <Row
        layout={ColumnLayouts.OneColumn}
        backgroundColor={TEXT_PRIMARY}
        padding="56px 48px"
      >
        <Column>
          <Heading
            headingType="h2"
            fontSize="28px"
            fontWeight={700}
            fontFamily={FONT_FAMILY}
            color="#FFFFFF"
            textAlign="center"
            lineHeight="1.25"
          >
            Save your seat
          </Heading>
          <Paragraph
            html={`${dateLabel} · ${timeLabel}. Limited live seats. Recording sent to all registrants.`}
            fontSize="15px"
            fontFamily={FONT_FAMILY}
            color="rgba(255,255,255,0.72)"
            textAlign="center"
            lineHeight="1.65"
          />
          <Button
            href={ctaUrl}
            backgroundColor="#FFFFFF"
            color={TEXT_PRIMARY}
            fontSize="14px"
            fontWeight={600}
            fontFamily={FONT_FAMILY}
            textAlign="center"
            borderRadius="10px"
            padding="13px 24px"
          >
            {ctaLabel}
          </Button>
        </Column>
      </Row>

      <PageFooter brandName={brandName} />
    </Page>
  );
}

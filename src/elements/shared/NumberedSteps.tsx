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
  TEXT_SUBTLE,
} from "./constants";

export interface StepItem {
  title: string;
  description: string;
}

interface NumberedStepsProps {
  title?: string;
  steps: StepItem[];
  backgroundColor?: string;
}

/** Onboarding-style numbered steps with visual rhythm */
export function NumberedSteps({
  title,
  steps,
  backgroundColor = EMAIL_ROW_BG,
}: NumberedStepsProps) {
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

      {steps.map((step, index) => (
        <Row
          key={step.title}
          layout={ColumnLayouts.TwoNarrowWide}
          backgroundColor={backgroundColor}
          padding="12px 40px"
        >
          <Column>
            <Heading
              headingType="h2"
              fontSize="22px"
              fontWeight={600}
              fontFamily={FONT_FAMILY}
              color={TEXT_SUBTLE}
              textAlign="left"
              lineHeight="1.2"
            >
              {String(index + 1).padStart(2, "0")}
            </Heading>
          </Column>
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
              {step.title}
            </Heading>
            <Paragraph
              html={step.description}
              fontSize="14px"
              fontFamily={FONT_FAMILY}
              color={TEXT_MUTED}
              textAlign="left"
              lineHeight="1.6"
            />
          </Column>
        </Row>
      ))}
    </>
  );
}

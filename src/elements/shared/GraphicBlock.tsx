import { Column, ColumnLayouts, Image, Row } from "@unlayer/react-elements";

interface GraphicBlockProps {
  /** Data URI or URL for the graphic */
  src: string;
  altText: string;
  backgroundColor?: string;
  padding?: string;
  width?: string;
}

/**
 * Full-width visual asset row for email/document templates.
 * Use original SVG data URIs from `@/elements/assets` - not stock photos.
 */
export function GraphicBlock({
  src,
  altText,
  backgroundColor = "transparent",
  padding = "0",
  width = "100%",
}: GraphicBlockProps) {
  return (
    <Row
      layout={ColumnLayouts.OneColumn}
      backgroundColor={backgroundColor}
      padding={padding}
    >
      <Column>
        {/* Elements Image uses altText, not the native alt prop */}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image src={src} altText={altText} width={width} />
      </Column>
    </Row>
  );
}

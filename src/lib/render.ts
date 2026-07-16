import { renderToHtml, renderToPlainText } from "@unlayer/react-elements";
import type { ReactElement } from "react";

export function renderTemplateToHtml(element: ReactElement): string {
  return renderToHtml(element);
}

export function renderTemplateToPlainText(element: ReactElement): string {
  return renderToPlainText(element);
}
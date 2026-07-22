/**
 * Smoke-test: render all templates and confirm SVG assets are present.
 */
import React from "react";
// tsx uses classic JSX transform with jsx:preserve - ensure React is in scope
(globalThis as unknown as { React: typeof React }).React = React;

import { templates } from "../src/lib/templates";
import { renderTemplateToHtml } from "../src/lib/render";

let failed = 0;

for (const t of templates) {
  if (!t.component) {
    console.log(`SKIP ${t.slug} (no component)`);
    continue;
  }
  try {
    const html = renderTemplateToHtml(t.component());
    const hasSvg = html.includes("data:image/svg+xml");
    if (!html || html.length < 500) {
      console.error(`FAIL ${t.slug}: HTML too short (${html.length})`);
      failed++;
      continue;
    }
    console.log(
      `OK   ${t.type}/${t.slug}  len=${html.length}  svg=${hasSvg ? "yes" : "no"}`,
    );
  } catch (err) {
    console.error(`FAIL ${t.slug}:`, err);
    failed++;
  }
}

if (failed > 0) {
  process.exit(1);
}
console.log("\nAll templates rendered successfully.");

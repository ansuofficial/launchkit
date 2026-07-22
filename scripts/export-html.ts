/**
 * Batch-export all ready templates to public/exports/.
 *
 * Usage: npm run export-html
 *
 * Output layout:
 *   public/exports/email/<slug>.html
 *   public/exports/document/<slug>.html
 *   public/exports/page/<slug>.html
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import React from "react";

// tsx uses classic JSX transform with jsx:preserve - ensure React is in scope
(globalThis as unknown as { React: typeof React }).React = React;

import { templates } from "../src/lib/templates";
import { renderTemplateToHtml } from "../src/lib/render";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "public", "exports");

let written = 0;
let skipped = 0;
let failed = 0;

for (const template of templates) {
  if (!template.component || template.status !== "ready") {
    console.log(`SKIP ${template.type}/${template.slug}`);
    skipped++;
    continue;
  }

  try {
    const html = renderTemplateToHtml(template.component());
    if (!html || html.length < 100) {
      console.error(
        `FAIL ${template.type}/${template.slug}: HTML too short (${html?.length ?? 0})`,
      );
      failed++;
      continue;
    }

    const typeDir = join(OUT_DIR, template.type);
    mkdirSync(typeDir, { recursive: true });
    const outPath = join(typeDir, `${template.slug}.html`);
    writeFileSync(outPath, html, "utf8");
    console.log(
      `OK   ${template.type}/${template.slug}  ->  public/exports/${template.type}/${template.slug}.html  (${html.length} bytes)`,
    );
    written++;
  } catch (err) {
    console.error(`FAIL ${template.type}/${template.slug}:`, err);
    failed++;
  }
}

console.log(
  `\nExport complete: ${written} written, ${skipped} skipped, ${failed} failed.`,
);

if (failed > 0) {
  process.exit(1);
}

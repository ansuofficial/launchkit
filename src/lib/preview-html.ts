/**
 * Prepare Elements HTML for safe iframe preview.
 *
 * srcDoc documents inherit the parent page as their base URL, so relative
 * links and `href="#"` (e.g. Unsubscribe) navigate the iframe to the full
 * LaunchKit app and nest the site inside the preview.
 */

const PREVIEW_CHROME_STYLES = `
<style id="lk-preview-chrome">
  html {
    scrollbar-width: thin;
    scrollbar-color: rgba(92, 99, 112, 0.28) transparent;
  }
  html::-webkit-scrollbar,
  body::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  html::-webkit-scrollbar-track,
  body::-webkit-scrollbar-track {
    background: transparent;
  }
  html::-webkit-scrollbar-thumb,
  body::-webkit-scrollbar-thumb {
    background-color: rgba(92, 99, 112, 0.28);
    border-radius: 9999px;
    border: 1px solid transparent;
    background-clip: content-box;
  }
  html::-webkit-scrollbar-thumb:hover,
  body::-webkit-scrollbar-thumb:hover {
    background-color: rgba(109, 94, 247, 0.45);
  }
  html::-webkit-scrollbar-corner,
  body::-webkit-scrollbar-corner {
    background: transparent;
  }
  a[data-preview-href] {
    cursor: pointer;
  }
</style>`;

/** Block in-frame navigations/submits so the preview never leaves srcDoc. */
const PREVIEW_GUARD_SCRIPT = `
<script id="lk-preview-nav-guard">
(function () {
  function block(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var link = target.closest("a[href], area[href]");
    if (link) block(event);
  }, true);

  document.addEventListener("auxclick", function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    if (target.closest("a[href], area[href]")) block(event);
  }, true);

  document.addEventListener("submit", block, true);

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    var target = event.target;
    if (!target || !target.closest) return;
    if (target.closest("a[href], area[href]")) block(event);
  }, true);
})();
</script>`;

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Strip navigable hrefs so they cannot resolve against the parent app URL.
 * (srcDoc inherits the parent base URL, so `href="#"` loads the full site.)
 * Original destinations stay on data-preview-href / title for inspection.
 */
function neutralizeLinks(html: string): string {
  return html.replace(/<a\b([^>]*)>/gi, (_match, rawAttrs: string) => {
    const attrs = rawAttrs ?? "";
    const hrefMatch = attrs.match(
      /\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i,
    );
    const href = (
      hrefMatch?.[1] ??
      hrefMatch?.[2] ??
      hrefMatch?.[3] ??
      ""
    ).trim();

    const cleaned = attrs
      .replace(/\s*\bhref\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
      .replace(/\s*\btarget\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
      .replace(/\s*\bdownload\b(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?/gi, "");

    const title =
      href && href !== "#"
        ? `Preview only: ${href}`
        : "Preview only (no navigation)";

    // No href on purpose: any relative/hash href would load the parent app
    // into this iframe because srcDoc uses the parent document base URL.
    return `<a${cleaned} data-preview-href="${escapeAttr(href)}" title="${escapeAttr(title)}" role="link" tabindex="0">`;
  });
}

function injectIntoHead(html: string, snippet: string): string {
  if (/<\/head>/i.test(html)) {
    return html.replace(/<\/head>/i, `${snippet}</head>`);
  }
  if (/<html[^>]*>/i.test(html)) {
    return html.replace(/<html[^>]*>/i, (match) => `${match}${snippet}`);
  }
  if (/<body[^>]*>/i.test(html)) {
    return html.replace(/<body[^>]*>/i, (match) => `${snippet}${match}`);
  }
  return `${snippet}${html}`;
}

export function preparePreviewHtml(html: string): string {
  const neutralized = neutralizeLinks(html);
  return injectIntoHead(
    neutralized,
    `${PREVIEW_CHROME_STYLES}${PREVIEW_GUARD_SCRIPT}`,
  );
}

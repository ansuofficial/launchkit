/**
 * Capture premium README screenshots using system Chrome via puppeteer-core.
 * Usage: node scripts/capture-readme-screenshots.mjs [baseUrl]
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "public", "images", "readme");
const BASE = process.argv[2] || "http://127.0.0.1:3000";

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
].filter(Boolean);

async function findChrome() {
  const { existsSync } = await import("node:fs");
  for (const p of CHROME_CANDIDATES) {
    if (existsSync(p)) return p;
  }
  throw new Error("Chrome/Edge not found. Set CHROME_PATH.");
}

async function waitForServer(url, attempts = 60) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      if (res.status < 500) return;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`Server not ready at ${url}`);
}

async function settle(page) {
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 20000 }).catch(() => {});
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
  // Pause UI motion / marquee for clean frames
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        scroll-behavior: auto !important;
      }
    `,
  });
  await new Promise((r) => setTimeout(r, 400));
}

async function shot(page, name, options = {}) {
  const path = join(OUT, name);
  await page.screenshot({
    path,
    type: "png",
    ...options,
  });
  console.log(`OK  ${name}`);
  return path;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  await waitForServer(BASE);

  const executablePath = await findChrome();
  console.log(`Browser: ${executablePath}`);
  console.log(`Base URL: ${BASE}`);

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    },
    args: [
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--hide-scrollbars",
      "--font-render-hinting=none",
    ],
  });

  const page = await browser.newPage();

  // Landing hero
  await page.goto(`${BASE}/`, { waitUntil: "networkidle2", timeout: 60000 });
  await settle(page);
  await shot(page, "hero.png");

  // Featured section
  await page.evaluate(() =>
    document.getElementById("featured")?.scrollIntoView({ block: "start" }),
  );
  await new Promise((r) => setTimeout(r, 500));
  await shot(page, "featured.png");

  // Dark gallery
  await page.evaluate(() =>
    document.getElementById("gallery")?.scrollIntoView({ block: "start" }),
  );
  await new Promise((r) => setTimeout(r, 600));
  await shot(page, "gallery.png");

  // Browse (redirects to first ready template)
  await page.goto(`${BASE}/templates`, {
    waitUntil: "networkidle2",
    timeout: 60000,
  });
  await settle(page);
  await page.waitForSelector("iframe", { timeout: 10000 }).catch(() => {});
  await new Promise((r) => setTimeout(r, 600));
  await shot(page, "browse.png");

  const previews = [
    { file: "email-product-launch.png", path: "/templates/email/product-launch" },
    { file: "email-newsletter.png", path: "/templates/email/newsletter" },
    {
      file: "document-proposal.png",
      path: "/templates/document/product-proposal",
    },
    {
      file: "page-product-landing.png",
      path: "/templates/page/product-landing",
    },
  ];

  for (const item of previews) {
    await page.goto(`${BASE}${item.path}`, {
      waitUntil: "networkidle2",
      timeout: 60000,
    });
    await settle(page);
    await page.waitForSelector("iframe", { timeout: 10000 }).catch(() => {});
    await new Promise((r) => setTimeout(r, 600));
    await shot(page, item.file);
  }

  // Isolated welcome email frame (iframe clip)
  await page.goto(`${BASE}/templates/email/welcome`, {
    waitUntil: "networkidle2",
    timeout: 60000,
  });
  await settle(page);
  const iframe = await page.$("iframe");
  if (iframe) {
    const box = await iframe.boundingBox();
    if (box) {
      await shot(page, "email-welcome.png", {
        clip: {
          x: Math.max(0, box.x - 8),
          y: Math.max(0, box.y - 8),
          width: Math.min(box.width + 16, 1440),
          height: Math.min(box.height + 16, 900),
        },
      });
    }
  }

  const files = [
    "hero.png",
    "featured.png",
    "gallery.png",
    "browse.png",
    "email-product-launch.png",
    "email-newsletter.png",
    "document-proposal.png",
    "page-product-landing.png",
    "email-welcome.png",
  ];

  writeFileSync(
    join(OUT, "manifest.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        baseUrl: BASE,
        deviceScaleFactor: 2,
        viewport: { width: 1440, height: 900 },
        files,
      },
      null,
      2,
    ),
  );
  console.log("\nAll screenshots written to public/images/readme/");

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

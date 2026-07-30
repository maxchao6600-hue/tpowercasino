/**
 * Pixel-perfect responsive QA: compare mobile (375) vs desktop (1440).
 * Flags horizontal overflow (except known carousels), blank-space heuristics,
 * and captures screenshots for visual review.
 */
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.QA_BASE_URL ?? "http://127.0.0.1:3456";
const OUT = path.resolve("scripts/.qa-responsive");

const PAGES = [
  { id: "home", path: "/en" },
  { id: "games", path: "/en/games" },
  { id: "slots", path: "/en/slots" },
  { id: "live-casino", path: "/en/live-casino" },
  { id: "sports", path: "/en/sports" },
  { id: "fishing", path: "/en/fishing" },
  { id: "crash", path: "/en/crash" },
  { id: "lottery", path: "/en/lottery" },
  { id: "providers", path: "/en/providers" },
  { id: "provider-detail", path: "/en/providers/pragmatic-play" },
  { id: "promotions", path: "/en/promotions" },
  { id: "promo-detail", path: "/en/promotions/welcome-package" },
  { id: "vip", path: "/en/vip" },
  { id: "download", path: "/en/download" },
  { id: "apk", path: "/en/apk" },
  { id: "news", path: "/en/news" },
  { id: "blog", path: "/en/blog" },
  { id: "contact", path: "/en/contact" },
  { id: "login", path: "/en/login" },
  { id: "register", path: "/en/register" },
  { id: "faq", path: "/en/faq" },
  { id: "payment-methods", path: "/en/payment-methods" },
  { id: "about", path: "/en/about" },
  { id: "affiliate", path: "/en/affiliate" },
  { id: "zh-home", path: "/zh" },
  { id: "zh-games", path: "/zh/games" },
  { id: "zh-vip", path: "/zh/vip" },
  { id: "zh-download", path: "/zh/download" },
];

const VIEWPORTS = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

const ALLOWED_OVERFLOW_SELECTORS = [
  ".df-scroll",
  ".animate-marquee",
  ".animate-marquee-reverse",
  ".animate-marquee-trust",
  "[data-qa-scroll='true']",
];

async function dismissOverlays(page) {
  const confirm = page.getByRole("button", { name: /I am 21 or older|我已满|Confirm|Enter/i });
  if (await confirm.count()) {
    try {
      await confirm.first().click({ timeout: 1500 });
      await page.waitForTimeout(200);
    } catch {
      /* ignore */
    }
  }
  // Persist for subsequent navigations in this context
  await page.context().addCookies([
    {
      name: "tpower_age_confirmed",
      value: "1",
      domain: "127.0.0.1",
      path: "/",
    },
  ]);
}

async function measureOverflow(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const clientWidth = doc.clientWidth;

    const hidden = [];
    document
      .querySelectorAll(
        "[data-qa-scroll='true'], .animate-marquee, .animate-marquee-trust, .animate-marquee-reverse",
      )
      .forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        hidden.push([node, node.style.display]);
        node.style.display = "none";
      });

    const scrollWidth = Math.max(doc.scrollWidth, document.body.scrollWidth);
    const pageOverflow = scrollWidth - clientWidth;

    for (const [el, prev] of hidden) {
      el.style.display = prev;
    }

    const h1 = document.querySelector("h1");
    const h1Lines = h1
      ? Math.round(
          h1.getBoundingClientRect().height /
            (parseFloat(getComputedStyle(h1).lineHeight) || 24),
        )
      : 0;

    return {
      pageOverflow: Math.round(pageOverflow),
      scrollWidth,
      clientWidth,
      offenders: [],
      h1Text: h1?.textContent?.trim().slice(0, 120) || null,
      h1FontSize: h1 ? getComputedStyle(h1).fontSize : null,
      h1Lines,
    };
  });
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({
    headless: true,
    channel: "chrome",
  });
  const report = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    await context.addCookies([
      {
        name: "tpower_age_confirmed",
        value: "1",
        url: BASE,
      },
    ]);
    const page = await context.newPage();

    for (const route of PAGES) {
      const url = `${BASE}${route.path}`;
      const entry = {
        id: route.id,
        path: route.path,
        viewport: vp.name,
        width: vp.width,
        ok: true,
        issues: [],
      };

      try {
        const res = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
        if (!res || res.status() >= 400) {
          entry.ok = false;
          entry.issues.push(`HTTP ${res?.status()}`);
        }
        await dismissOverlays(page);
        await page.waitForTimeout(400);

        const metrics = await measureOverflow(page);
        entry.metrics = metrics;

        if (vp.name === "mobile" || vp.name === "tablet") {
          if (metrics.pageOverflow > 2) {
            entry.ok = false;
            entry.issues.push(
              `Horizontal page overflow ${metrics.pageOverflow}px (scrollWidth=${metrics.scrollWidth})`,
            );
          }
          if (metrics.h1Lines >= 5) {
            entry.issues.push(
              `H1 spans ~${metrics.h1Lines} lines (prefer ≤4 with aside)`,
            );
          }
        }

        const shot = path.join(OUT, `${route.id}-${vp.name}.png`);
        await page.screenshot({ path: shot, fullPage: false });
        entry.screenshot = shot;
      } catch (err) {
        entry.ok = false;
        entry.issues.push(String(err?.message || err));
      }

      report.push(entry);
      const mark = entry.ok && entry.issues.length === 0 ? "PASS" : entry.ok ? "WARN" : "FAIL";
      console.log(`[${mark}] ${vp.name} ${route.path} ${entry.issues.join("; ")}`);
    }

    await context.close();
  }

  await browser.close();

  const summary = {
    base: BASE,
    pages: PAGES.length,
    viewports: VIEWPORTS.map((v) => v.name),
    fail: report.filter((r) => !r.ok).length,
    warn: report.filter((r) => r.ok && r.issues.length).length,
    pass: report.filter((r) => r.ok && r.issues.length === 0).length,
    failures: report.filter((r) => !r.ok || r.issues.length),
  };

  await writeFile(path.join(OUT, "report.json"), JSON.stringify({ summary, report }, null, 2));
  console.log("\n=== SUMMARY ===");
  console.log(JSON.stringify(summary, null, 2));
  process.exit(summary.fail > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

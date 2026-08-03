/**
 * Sitewide layout audit — visits routes at 1440 / 768 / 390 and flags
 * desktop-first layout failures (compression, clipped text, broken media, etc.).
 *
 * Intentional horizontal scroll regions (.df-scroll, [data-qa-scroll], marquees)
 * are allowed; crushed columns / one-word-per-line / page overflow are not.
 */
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.QA_BASE_URL ?? "http://127.0.0.1:3000";
const OUT = path.resolve("scripts/.qa-layout-audit");

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
];

const STATIC = [
  "",
  "/download",
  "/apk",
  "/promotions",
  "/games",
  "/providers",
  "/live-casino",
  "/slots",
  "/sports",
  "/fishing",
  "/lottery",
  "/poker",
  "/arcade",
  "/crash",
  "/payment-methods",
  "/deposit-guide",
  "/withdrawal-guide",
  "/fpx-deposit",
  "/duitnow-deposit",
  "/touch-n-go",
  "/grabpay",
  "/online-banking",
  "/instant-deposit",
  "/fast-withdrawal",
  "/payment-security",
  "/deposit-withdrawal-faq",
  "/vip",
  "/affiliate",
  "/about",
  "/why-choose-tpower",
  "/contact",
  "/faq",
  "/blog",
  "/news",
  "/responsible-gaming",
  "/fair-gaming",
  "/security",
  "/privacy-and-data-protection",
  "/aml-kyc",
  "/customer-commitment",
  "/editorial-policy",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cookies",
  "/login",
  "/register",
  "/help",
  "/payments",
  "/privacy",
  "/terms",
];

const PROVIDERS = [
  "pragmatic-play",
  "pg-soft",
  "evolution",
  "jili",
  "jdb",
  "sexy-gaming",
  "dream-gaming",
  "microgaming",
  "playn-go",
  "spribe",
  "spadegaming",
  "habanero",
  "sbo",
];

const PROMOS = [
  "welcome-package",
  "weekly-reload",
  "cashback-calm",
  "vip-accelerated",
  "merdeka-seasonal",
];

const BLOG = [
  "tpower-login-guide",
  "how-to-register-tpower",
  "how-to-download-tpower",
  "tpower-mobile-app",
  "how-to-deposit-tpower",
  "how-to-withdraw-tpower",
  "responsible-play-basics-malaysia",
  "malaysia-payment-rails-explained",
  "how-tpower-selects-game-providers",
  "vip-service-without-noise",
];

const NEWS = [
  "platform-performance-update-july-2026",
  "new-live-casino-tables",
  "vip-host-coverage-expanded",
  "duitnow-and-ewallet-tips",
  "welcome-bonus-refresh-july",
  "weekly-reload-how-to-claim",
  "account-security-best-practices",
  "weekend-sports-odds-boost",
  "official-download-checklist-2026",
  "android-apk-safe-install-guide",
];

/** Representative game detail pages (template coverage — not all 9k). */
const GAMES = [
  "/games/pragmatic-play/sweet-bonanza",
  "/games/pg-soft/fortune-tiger",
  "/games/evolution/lightning-roulette",
  "/games/jili/super-ace",
  "/games/spribe/aviator",
  "/games/habanero/hot-hot-fruit",
  "/games/microgaming/immortal-romance",
  "/games/playn-go/book-of-dead",
];

function buildRoutes() {
  const routes = [];
  for (const locale of ["en", "zh"]) {
    for (const p of STATIC) {
      routes.push({ id: `${locale}${p || "-home"}`, path: `/${locale}${p}` });
    }
    for (const slug of PROVIDERS) {
      routes.push({
        id: `${locale}-provider-${slug}`,
        path: `/${locale}/providers/${slug}`,
      });
      routes.push({
        id: `${locale}-provider-games-${slug}`,
        path: `/${locale}/providers/${slug}/games`,
      });
    }
    for (const slug of PROMOS) {
      routes.push({
        id: `${locale}-promo-${slug}`,
        path: `/${locale}/promotions/${slug}`,
      });
    }
    for (const slug of BLOG) {
      routes.push({
        id: `${locale}-blog-${slug}`,
        path: `/${locale}/blog/${slug}`,
      });
    }
    for (const slug of NEWS) {
      routes.push({
        id: `${locale}-news-${slug}`,
        path: `/${locale}/news/${slug}`,
      });
    }
    for (const g of GAMES) {
      routes.push({
        id: `${locale}-game-${g.split("/").slice(-1)[0]}`,
        path: `/${locale}${g}`,
      });
    }
  }
  return routes;
}

async function dismissOverlays(page) {
  try {
    const btn = page
      .getByRole("button", {
        name: /I am 21 or older|我已满|Confirm|Enter|同意/i,
      })
      .first();
    if (await btn.count()) await btn.click({ timeout: 1200 });
  } catch {
    /* ignore */
  }
}

async function auditPage(page, viewportName) {
  return page.evaluate((vp) => {
    const issues = [];
    const vw = document.documentElement.clientWidth;

    const isAllowedScroll = (el) => {
      if (!(el instanceof Element)) return false;
      return Boolean(
        el.closest(
          ".df-scroll, .df-row-2, .df-row-3, .df-row-4, .df-grid-2, .df-grid-3, .df-grid-4, .df-news-grid, [data-qa-scroll='true'], .animate-marquee, .animate-marquee-reverse, .animate-marquee-trust",
        ),
      );
    };

    // --- 1) Page-level overflow ---
    // Intentional desktop-first scroll tracks + marquees must not count as page overflow.
    const restorers = [];
    const stashStyle = (node, patch) => {
      if (!(node instanceof HTMLElement)) return;
      const prev = {};
      for (const key of Object.keys(patch)) prev[key] = node.style.getPropertyValue(key) || "";
      restorers.push(() => {
        for (const key of Object.keys(prev)) {
          if (prev[key]) node.style.setProperty(key, prev[key]);
          else node.style.removeProperty(key);
        }
      });
      for (const [key, value] of Object.entries(patch)) node.style.setProperty(key, value);
    };

    document
      .querySelectorAll(
        ".animate-marquee, .animate-marquee-reverse, .animate-marquee-trust",
      )
      .forEach((node) => {
        stashStyle(node, { display: "none" });
        if (node.parentElement) stashStyle(node.parentElement, { display: "none" });
      });

    document
      .querySelectorAll(
        ".df-scroll, .df-row-2, .df-row-3, .df-row-4, .df-grid-2, .df-grid-3, .df-grid-4, .df-news-grid, [data-qa-scroll='true']",
      )
      .forEach((node) => {
        stashStyle(node, {
          "overflow-x": "hidden",
          "max-width": "100%",
          width: "100%",
          "min-width": "0",
        });
      });

    // Zero Tailwind min-width utilities on scroll-track children only (not every
    // grid-cols-* on the page — that permanently polluted footer measurements).
    document
      .querySelectorAll(
        ".df-scroll [class], .df-row-2 [class], .df-row-3 [class], .df-row-4 [class], .df-grid-2, .df-grid-3, .df-grid-4, .df-news-grid",
      )
      .forEach((node) => {
        const c = String(node.className || "");
        if (c.includes("min-w-[") || c.includes("w-max") || c.includes("df-grid-") || c.includes("df-news-grid")) {
          stashStyle(node, {
            "min-width": "0",
            "max-width": "100%",
            ...(c.includes("w-max") ? { display: "none" } : {}),
          });
        }
        if (c.includes("grid-cols-[") || c.includes("df-news-grid") || c.includes("df-grid-")) {
          stashStyle(node, {
            "grid-template-columns": "minmax(0, 1fr)",
            "min-width": "0",
          });
        }
      });

    // Footer bottom legal row uses whitespace-nowrap links — contain while measuring
    document.querySelectorAll("footer .df-scroll").forEach((node) => {
      stashStyle(node, { display: "none" });
    });

    const scrollWidth = Math.max(
      document.documentElement.scrollWidth,
      document.body?.scrollWidth || 0,
    );
    const pageOverflow = scrollWidth - vw;

    while (restorers.length) restorers.pop()();

    if (pageOverflow > 8) {
      issues.push({
        type: "page-overflow",
        detail: `Horizontal page overflow ${Math.round(pageOverflow)}px`,
      });
    }

    // --- 2) Narrow cards / columns causing one-word-per-line ---
    const candidates = document.querySelectorAll(
      "article, .card, [class*='rounded-'], footer .col-span-2, footer .col-span-4, .df-grid-2 > *, .df-grid-3 > *, .df-grid-4 > *, form, table, aside, [class*='PremiumCta'], section .grid > *",
    );

    const seen = new Set();
    for (const el of candidates) {
      if (!(el instanceof HTMLElement)) continue;
      if (seen.has(el)) continue;
      seen.add(el);

      const rect = el.getBoundingClientRect();
      if (rect.width < 8 || rect.height < 8) continue;
      // skip offscreen / tiny decorative
      if (rect.bottom < 0 || rect.top > window.innerHeight * 3) continue;

      const cs = getComputedStyle(el);
      const inScroll = isAllowedScroll(el);

      // Measure text line density
      const text = (el.innerText || "").trim();
      if (text.length < 12) continue;

      // Sample headings + links inside
      const textNodes = el.querySelectorAll("h1,h2,h3,h4,p,a,li,button,label,td,th");
      let oneWordLines = 0;
      let checked = 0;
      for (const node of textNodes) {
        if (!(node instanceof HTMLElement)) continue;
        const t = (node.innerText || "").trim();
        if (t.length < 4) continue;
        const r = node.getBoundingClientRect();
        if (r.width < 4) continue;
        const lh = parseFloat(getComputedStyle(node).lineHeight) || 18;
        const lines = Math.max(1, Math.round(r.height / lh));
        const words = t.split(/\s+/).filter(Boolean);
        const isCjk = /[\u4e00-\u9fff]/.test(t);
        checked++;

        // One English word per line across many lines, or CJK 1-char columns
        if (!isCjk && words.length >= 2 && lines >= words.length && r.width < 100) {
          oneWordLines++;
        }
        if (isCjk && t.length >= 4 && r.width < 28 && lines >= 3) {
          oneWordLines++;
        }

        // Mid-word clipping: scrollWidth much larger than clientWidth with hidden overflow
        const ncs = getComputedStyle(node);
        if (
          node.scrollWidth > node.clientWidth + 6 &&
          (ncs.overflowX === "hidden" || ncs.overflow === "hidden" || ncs.textOverflow === "ellipsis") &&
          r.width < 120 &&
          t.length > 8
        ) {
          // Intentional truncate / line-clamp / screen-reader-only
          if (
            node.classList.contains("sr-only") ||
            node.classList.contains("truncate") ||
            [...node.classList].some((c) => c.startsWith("line-clamp")) ||
            node.closest(".truncate, [class*='line-clamp']")
          ) {
            continue;
          }
          if (r.width < 90) {
            issues.push({
              type: "clipped-text",
              detail: `Clipped text (~${Math.round(r.width)}px): "${t.slice(0, 40)}"`,
            });
          }
        }
      }

      // Crushed card outside scroll region
      const minCard = vp === "desktop" ? 180 : 140;
      if (!inScroll && rect.width > 0 && rect.width < minCard && checked >= 2) {
        // ignore nav icons / chips
        if (rect.height > 80 && text.length > 24) {
          issues.push({
            type: "narrow-card",
            detail: `Narrow block ${Math.round(rect.width)}px outside scroll region`,
          });
        }
      }

      // Inside scroll region but still crushed (min-width too small)
      if (inScroll && rect.width > 0 && rect.width < 90 && oneWordLines >= 3) {
        issues.push({
          type: "crushed-in-scroll",
          detail: `Scroll-track child only ${Math.round(rect.width)}px with one-word wrapping`,
        });
      }

      if (oneWordLines >= 4 && rect.width < 100 && !inScroll) {
        issues.push({
          type: "one-word-per-line",
          detail: `One-word-per-line pattern in ${Math.round(rect.width)}px block`,
        });
      }
    }

    // --- 3) Missing / broken images (visible + finished loading only) ---
    for (const img of document.querySelectorAll("img")) {
      const r = img.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      // Skip off-screen lazy images
      if (r.bottom < 0 || r.top > innerHeight) continue;
      if (img.loading === "lazy" && !img.complete) continue;
      if (img.complete && img.naturalWidth === 0) {
        issues.push({
          type: "missing-image",
          detail: `Broken/missing image: ${img.getAttribute("src")?.slice(0, 80) || "(no src)"}`,
        });
      }
    }

    // --- 4) Overlapping interactive elements (pairwise sample) ---
    // Overlap: only flag same-layer non-nested controls (skip fixed header/nav)
    const interactive = [
      ...document.querySelectorAll("main a, main button, main input, main select, main textarea"),
    ].filter((el) => {
      const r = el.getBoundingClientRect();
      const pos = getComputedStyle(el).position;
      if (pos === "fixed" || pos === "sticky") return false;
      if (el.closest("header, nav, [class*='sticky']")) return false;
      return r.width > 10 && r.height > 10 && r.top < innerHeight && r.bottom > 0;
    });
    const sample = interactive.slice(0, 60);
    let overlapHits = 0;
    for (let i = 0; i < sample.length && overlapHits < 3; i++) {
      const a = sample[i].getBoundingClientRect();
      for (let j = i + 1; j < Math.min(sample.length, i + 8); j++) {
        const b = sample[j].getBoundingClientRect();
        const overlapX = Math.max(
          0,
          Math.min(a.right, b.right) - Math.max(a.left, b.left),
        );
        const overlapY = Math.max(
          0,
          Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top),
        );
        const area = overlapX * overlapY;
        if (area > 1200 && overlapX > 40 && overlapY > 24) {
          if (
            sample[i].contains(sample[j]) ||
            sample[j].contains(sample[i])
          ) {
            continue;
          }
          issues.push({
            type: "overlap",
            detail: `Overlapping controls (~${Math.round(area)}px²)`,
          });
          overlapHits++;
          break;
        }
      }
    }

    // --- 5) Overflowing buttons ---
    for (const btn of document.querySelectorAll("button, a[class*='button'], [role='button']")) {
      if (!(btn instanceof HTMLElement)) continue;
      const r = btn.getBoundingClientRect();
      if (r.width < 4) continue;
      if (btn.classList.contains("sr-only")) continue;
      if (btn.scrollWidth > btn.clientWidth + 12) {
        const label = (btn.innerText || "").trim().slice(0, 40);
        // Ignore intentionally truncated / icon-only
        if (!label || label.length < 4) continue;
        // Inside a desktop-first scroll track, label may be measured mid-layout
        if (isAllowedScroll(btn) && r.width >= 200) continue;
        // Full-width CTAs: if the control itself is reasonably wide, skip
        // (whitespace-nowrap + icon can exceed by a few px from gaps)
        if (r.width >= 160 && btn.scrollWidth - btn.clientWidth < 24) continue;
        issues.push({
          type: "overflow-button",
          detail: `Button overflow: "${label}"`,
        });
      }
    }

    // --- 6) Footer columns ---
    const footer = document.querySelector("footer");
    if (footer) {
      const footerCols = footer.querySelectorAll(".col-span-2, .col-span-4");
      if (footerCols.length >= 4) {
        for (const col of footerCols) {
          const w = col.getBoundingClientRect().width;
          if (w > 0 && w < 100 && !isAllowedScroll(col)) {
            issues.push({
              type: "broken-footer",
              detail: `Footer column crushed to ${Math.round(w)}px`,
            });
          }
        }
      }
      const footerScroll = footer.querySelector(".df-scroll");
      if (footerScroll && footerScroll.scrollWidth <= footerScroll.clientWidth + 2) {
        // On mobile, footer track should overflow if desktop composition kept
        if (vp !== "desktop" && vw < 1100) {
          const grid = footer.querySelector(".grid.grid-cols-12, [class*='grid-cols-12']");
          if (grid) {
            const cls = String(grid.className || "");
            const hasDesktopMin =
              cls.includes("min-w-[1200px]") ||
              cls.includes("min-w-[1100px]") ||
              cls.includes("min-w-[1000px]");
            const minW = parseFloat(getComputedStyle(grid).minWidth) || 0;
            if (!hasDesktopMin && minW < 900) {
              issues.push({
                type: "broken-footer",
                detail: `Footer grid min-width too small (${minW}px)`,
              });
            }
          }
        }
      }
    }

    // --- 7) Forms ---
    for (const form of document.querySelectorAll("form")) {
      const r = form.getBoundingClientRect();
      if (r.width > 0 && r.width < 200 && !isAllowedScroll(form)) {
        issues.push({
          type: "broken-form",
          detail: `Form only ${Math.round(r.width)}px wide`,
        });
      }
      for (const input of form.querySelectorAll("input, textarea, select")) {
        const type = (input.getAttribute("type") || "").toLowerCase();
        if (["checkbox", "radio", "hidden", "file"].includes(type)) continue;
        const ir = input.getBoundingClientRect();
        if (ir.width > 0 && ir.width < 60) {
          issues.push({
            type: "broken-form",
            detail: `Form control only ${Math.round(ir.width)}px`,
          });
        }
      }
    }

    // --- 8) Tables ---
    for (const table of document.querySelectorAll("table")) {
      const parent = table.parentElement;
      const inScroll =
        parent &&
        (getComputedStyle(parent).overflowX === "auto" ||
          getComputedStyle(parent).overflowX === "scroll" ||
          isAllowedScroll(table));
      const r = table.getBoundingClientRect();
      if (table.scrollWidth > vw + 4 && !inScroll) {
        issues.push({
          type: "broken-table",
          detail: `Table overflows page without scroll wrapper (${Math.round(table.scrollWidth)}px)`,
        });
      }
      if (r.width > 0 && r.width < 180 && !inScroll) {
        issues.push({
          type: "broken-table",
          detail: `Table crushed to ${Math.round(r.width)}px`,
        });
      }
    }

    // --- 9) Hero / CTA: detect stacked flex-col when grid expected ---
    const heroes = document.querySelectorAll(
      "[class*='Atmosphere'], section:first-of-type, .container-page > section:first-child",
    );
    // Premium CTA two-column check
    for (const cta of document.querySelectorAll(
      "[class*='from-[#141414]'][class*='grid']",
    )) {
      const cs = getComputedStyle(cta);
      if (cs.display === "grid") {
        const cols = cs.gridTemplateColumns.split(" ").filter((c) => c && c !== "none");
        if (cols.length === 1 && cta.getBoundingClientRect().width > 300) {
          // single column CTA grid — fail on desktop-first expectation if it has two major children
          if (cta.children.length >= 2) {
            issues.push({
              type: "broken-cta",
              detail: "CTA grid collapsed to 1 column",
            });
          }
        }
      }
    }

    // Deduplicate similar issues
    const uniq = [];
    const keys = new Set();
    for (const issue of issues) {
      const key = `${issue.type}:${issue.detail.slice(0, 60)}`;
      if (keys.has(key)) continue;
      keys.add(key);
      uniq.push(issue);
      if (uniq.length >= 25) break;
    }

    return {
      pageOverflow: Math.round(pageOverflow),
      issues: uniq,
    };
  }, viewportName);
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const routes = buildRoutes();
  console.log(`Auditing ${routes.length} routes × ${VIEWPORTS.length} viewports @ ${BASE}`);

  const browser = await chromium.launch({ headless: true });
  const report = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    await context.addCookies([
      { name: "tpower_age_confirmed", value: "1", url: BASE },
    ]);
    const page = await context.newPage();
    page.setDefaultTimeout(45000);

    for (const route of routes) {
      const entry = {
        id: route.id,
        path: route.path,
        viewport: vp.name,
        width: vp.width,
        status: "PASS",
        issues: [],
        http: null,
      };

      try {
        const res = await page.goto(`${BASE}${route.path}`, {
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });
        entry.http = res?.status() ?? null;
        if (!res || res.status() >= 400) {
          entry.status = "FAIL";
          entry.issues.push({ type: "http", detail: `HTTP ${res?.status()}` });
        } else {
          await dismissOverlays(page);
          await page.waitForTimeout(250);
          const result = await auditPage(page, vp.name);
          entry.pageOverflow = result.pageOverflow;
          entry.issues = result.issues;
          if (result.issues.length) entry.status = "FAIL";
        }
      } catch (err) {
        entry.status = "FAIL";
        entry.issues.push({
          type: "error",
          detail: String(err?.message || err).slice(0, 200),
        });
      }

      report.push(entry);
      const detail = entry.issues.map((i) => i.detail).join(" | ");
      console.log(
        `[${entry.status}] ${vp.name.padEnd(7)} ${route.path}${detail ? " — " + detail : ""}`,
      );
    }

    await context.close();
  }

  await browser.close();

  // Aggregate by route (any viewport FAIL => route FAIL)
  const byRoute = new Map();
  for (const row of report) {
    const cur = byRoute.get(row.path) || {
      path: row.path,
      status: "PASS",
      viewports: {},
      issues: [],
    };
    cur.viewports[row.viewport] = row.status;
    if (row.status === "FAIL") {
      cur.status = "FAIL";
      cur.issues.push(
        ...row.issues.map((i) => ({ ...i, viewport: row.viewport })),
      );
    }
    byRoute.set(row.path, cur);
  }

  const routesSummary = [...byRoute.values()].sort((a, b) =>
    a.path.localeCompare(b.path),
  );
  const failRoutes = routesSummary.filter((r) => r.status === "FAIL");
  const passRoutes = routesSummary.filter((r) => r.status === "PASS");

  const summary = {
    base: BASE,
    routes: routesSummary.length,
    viewports: VIEWPORTS.map((v) => `${v.name}:${v.width}`),
    pass: passRoutes.length,
    fail: failRoutes.length,
    failPaths: failRoutes.map((r) => r.path),
  };

  const md = [
    `# Layout Audit Report`,
    ``,
    `Base: ${BASE}`,
    `Viewports: 1440 / 768 / 390`,
    `Routes: ${summary.routes}`,
    `PASS: ${summary.pass}`,
    `FAIL: ${summary.fail}`,
    ``,
    `## Results`,
    ``,
    ...routesSummary.map(
      (r) =>
        `- **${r.status}** \`${r.path}\`${
          r.issues.length
            ? " — " +
              r.issues
                .slice(0, 5)
                .map((i) => `[${i.viewport}] ${i.detail}`)
                .join("; ")
            : ""
        }`,
    ),
  ].join("\n");

  await writeFile(path.join(OUT, "report.json"), JSON.stringify({ summary, routesSummary, report }, null, 2));
  await writeFile(path.join(OUT, "report.md"), md);

  console.log("\n=== SUMMARY ===");
  console.log(`PASS ${summary.pass} / FAIL ${summary.fail} / TOTAL ${summary.routes}`);
  if (failRoutes.length) {
    console.log("\nFAIL routes:");
    for (const r of failRoutes) {
      console.log(`  FAIL ${r.path}`);
      for (const i of r.issues.slice(0, 8)) {
        console.log(`    - [${i.viewport}] ${i.type}: ${i.detail}`);
      }
    }
  }

  process.exit(summary.fail > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

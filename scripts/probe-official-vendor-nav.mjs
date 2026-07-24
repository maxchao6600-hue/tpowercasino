/**
 * Discover how to open vendor/provider shelves on official TPOWER SPA,
 * and extract rendered game-card thumbnail URLs from the DOM.
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "scripts/.tmp-live-scrape");
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath:
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});
const context = await browser.newContext({
  viewport: { width: 420, height: 900 },
  userAgent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
});
const page = await context.newPage();
page.setDefaultTimeout(90000);

const networkGames = [];
page.on("response", async (res) => {
  const u = res.url();
  if (!/lobby\/(games|vendors)|myGames|getGames/i.test(u)) return;
  try {
    const json = await res.json();
    networkGames.push({ url: u, code: json.code, keys: Object.keys(json), sample: json });
  } catch {
    networkGames.push({ url: u, status: res.status() });
  }
});

async function dismiss() {
  for (const name of [/21/, /agree/i, /accept/i, /enter/i, /确认/, /同意/]) {
    const btn = page.getByRole("button", { name }).first();
    if (await btn.count()) await btn.click().catch(() => {});
  }
}

await page.goto("https://www.tpower3.com/", { waitUntil: "networkidle" });
await page.waitForTimeout(3000);
await dismiss();

// Scroll to load more lobby content / vendors
for (let i = 0; i < 8; i++) {
  await page.mouse.wheel(0, 1200);
  await page.waitForTimeout(800);
}
await page.screenshot({ path: path.join(OUT, "home-scrolled.png"), fullPage: true });

const vendorTexts = await page.evaluate(() => {
  const nodes = [...document.querySelectorAll("*")];
  const hits = [];
  for (const el of nodes) {
    const t = (el.textContent || "").trim().replace(/\s+/g, " ");
    if (!t || t.length > 32) continue;
    if (
      /^(PG Soft|PG电子|Pragmatic|Evolution|JILI|JDB|Dream Gaming|Sexy|Microgaming|Habanero|Spribe|Spade|Play.?n.?Go|AE Sexy)$/i.test(
        t,
      )
    ) {
      const r = el.getBoundingClientRect();
      if (r.width > 10 && r.height > 10) {
        hits.push({
          text: t,
          tag: el.tagName,
          className: String(el.className || "").slice(0, 80),
          x: Math.round(r.x),
          y: Math.round(r.y),
        });
      }
    }
  }
  return hits.slice(0, 50);
});
fs.writeFileSync(path.join(OUT, "vendor-texts.json"), JSON.stringify(vendorTexts, null, 2));
console.log("vendorTexts", vendorTexts);

// Extract all visible game cards currently on page
const cards = await page.evaluate(() => {
  const imgs = [...document.querySelectorAll("img")];
  return imgs
    .filter((img) => img.naturalWidth >= 60 && img.naturalHeight >= 60)
    .map((img) => {
      const parent = img.closest("div, a, li, button") || img.parentElement;
      const label =
        parent?.innerText?.trim()?.split("\n").slice(0, 3).join(" | ") || "";
      return {
        src: img.currentSrc || img.src,
        alt: img.alt || "",
        w: img.naturalWidth,
        h: img.naturalHeight,
        label: label.slice(0, 120),
      };
    })
    .filter((c) => /game_pic|thumb|cdn|icon|square|bucket/i.test(c.src));
});
fs.writeFileSync(path.join(OUT, "home-game-cards.json"), JSON.stringify(cards, null, 2));
console.log("home cards", cards.length, cards.slice(0, 5));

// Click hamburger / find vendors section
const menuBtn = page.locator("button, div, a").filter({ hasText: /^$/ }).first();
// try click bottom menu last icon (hamburger often last)
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);

// Look for vendor logos grid — click first matching PG Soft image/alt
const clicked = await page.evaluate(() => {
  const target = [...document.querySelectorAll("img, span, div, a, button")].find((el) => {
    const t = `${el.alt || ""} ${el.textContent || ""} ${el.getAttribute("aria-label") || ""}`;
    return /pg\s*soft|pg电子/i.test(t);
  });
  if (!target) return null;
  target.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
  return {
    tag: target.tagName,
    text: (target.textContent || "").trim().slice(0, 40),
    alt: target.alt || "",
  };
});
console.log("clicked PG", clicked);
await page.waitForTimeout(4000);
await page.screenshot({ path: path.join(OUT, "after-pg-click.png") });
console.log("url after click", page.url());

const afterCards = await page.evaluate(() =>
  [...document.querySelectorAll("img")]
    .filter((img) => img.naturalWidth >= 60)
    .map((img) => ({
      src: img.currentSrc || img.src,
      alt: img.alt || "",
      label: (img.closest("div,a,li")?.innerText || "").trim().slice(0, 100),
    }))
    .filter((c) => /game_pic|thumb|cdn|icon|square|bucket|png|jpg|webp/i.test(c.src))
    .slice(0, 40),
);
fs.writeFileSync(path.join(OUT, "after-pg-cards.json"), JSON.stringify(afterCards, null, 2));
console.log("after pg cards", afterCards.length);

// Dump lobby API payloads captured
fs.writeFileSync(
  path.join(OUT, "network-lobby.json"),
  JSON.stringify(
    networkGames.map((n) => ({
      url: n.url,
      code: n.code,
      dataType: Array.isArray(n.sample?.data)
        ? `array(${n.sample.data.length})`
        : typeof n.sample?.data,
      first: Array.isArray(n.sample?.data) ? n.sample.data[0] : n.sample?.data,
    })),
    null,
    2,
  ),
);

await browser.close();
console.log("done");

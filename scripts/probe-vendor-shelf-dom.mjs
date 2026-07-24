/**
 * Deep probe: click official vendor tile and scrape ONLY rendered game-card thumbs.
 * Usage: node scripts/probe-vendor-shelf-dom.mjs JILI
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const TARGET = process.argv[2] || "JILI";
const OUT = path.join(process.cwd(), "scripts/.tmp-live-scrape");
fs.mkdirSync(OUT, { recursive: true });

const vendors = JSON.parse(
  fs.readFileSync("src/data/tpower-vendors.json", "utf8"),
);
const match = vendors.find((v) =>
  String(v.name).toUpperCase().includes(TARGET.toUpperCase()),
);
console.log("vendor", match?.id, match?.name);

const browser = await chromium.launch({
  headless: true,
  executablePath:
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});
const page = await browser.newPage({
  viewport: { width: 420, height: 900 },
  userAgent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
});

const net = [];
page.on("response", async (res) => {
  const u = res.url();
  if (!/apit\.5t1p6|game\/list|lobby\/games/i.test(u)) return;
  try {
    const json = await res.json();
    const data = json?.data;
    const arr = Array.isArray(data) ? data : data?.games || data?.list || [];
    net.push({
      url: u.replace(/^https?:\/\/[^/]+/, ""),
      code: json.code,
      count: Array.isArray(arr) ? arr.length : 0,
      sample: Array.isArray(arr)
        ? arr.slice(0, 3).map((g) => ({
            id: g.id,
            name: g.name,
            image: g.image,
            vendor: g.vendor_name,
          }))
        : null,
    });
  } catch {
    // ignore
  }
});

await page.goto("https://www.tpower3.com/", { waitUntil: "networkidle" });
await page.waitForTimeout(2000);

// Dismiss PC banner / overlays if present
await page.locator("text=Continue").first().click({ timeout: 2000 }).catch(() => {});
await page.keyboard.press("Escape").catch(() => {});

for (let i = 0; i < 10; i++) {
  await page.mouse.wheel(0, 1000);
  await page.waitForTimeout(400);
}

const needle = String(match?.image || "")
  .split("/")
  .pop()
  ?.split("?")[0];

const clicked = await page.evaluate((n) => {
  const imgs = [...document.querySelectorAll("img")];
  const el = imgs.find((img) => n && (img.src || "").includes(n));
  if (!el) return { ok: false };
  const clickable = el.closest("a,button,div") || el;
  clickable.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true, view: window }),
  );
  return { ok: true, src: el.src.slice(0, 120) };
}, needle);

console.log("clicked", clicked);
await page.waitForTimeout(4000);

// Try hash routes commonly used by this SPA
const hashTries = [
  `#/vendor/${match?.id}`,
  `#/games?vendor_id=${match?.id}`,
  `#/game/list?vendor_id=${match?.id}`,
  `#/lobby/vendor/${match?.id}`,
];
for (const hash of hashTries) {
  await page.evaluate((h) => {
    location.hash = h;
  }, hash);
  await page.waitForTimeout(2500);
  const cards = await scrapeCards(page);
  console.log("hash", hash, "cards", cards.length, "url", page.url());
  if (cards.length >= 8) {
    fs.writeFileSync(
      path.join(OUT, `shelf-${TARGET}.json`),
      JSON.stringify({ match, hash, cards, net }, null, 2),
    );
    await page.screenshot({
      path: path.join(OUT, `shelf-${TARGET}.png`),
      fullPage: true,
    });
    console.log("sample", cards.slice(0, 5));
    await browser.close();
    process.exit(0);
  }
}

// Scroll inside any dialog/drawer
for (let i = 0; i < 8; i++) {
  await page.mouse.wheel(0, 1200);
  await page.waitForTimeout(500);
}

const cards = await scrapeCards(page);
await page.screenshot({
  path: path.join(OUT, `shelf-${TARGET}-fallback.png`),
  fullPage: true,
});
fs.writeFileSync(
  path.join(OUT, `shelf-${TARGET}-fallback.json`),
  JSON.stringify({ match, cards, net, url: page.url() }, null, 2),
);
console.log("fallback cards", cards.length);
console.log("net", net);
console.log("sample", cards.slice(0, 8));
await browser.close();

async function scrapeCards(page) {
  return page.evaluate(() => {
    const out = [];
    const seen = new Set();
    for (const img of document.querySelectorAll("img")) {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      if (w < 90 || h < 90) continue;
      if (w > 600 || h > 600) continue; // exclude banners / full-bleed
      const src = img.currentSrc || img.src || "";
      if (!src || seen.has(src)) continue;
      if (/UsePc|logo|icon_tab|static\/img\/nav|avatar|flag/i.test(src))
        continue;
      if (
        !/\.(png|jpe?g|webp)(\?|$)/i.test(src) &&
        !/cdn-bet|game_pic|square|thumb|bucket|hugedolphin|eptech|mega999|prerelease|tcdl|kz344|pgs_/i.test(
          src,
        )
      ) {
        continue;
      }
      seen.add(src);
      const root =
        img.closest("[class*='game'],[class*='card'],a,li,button,div") || img;
      const text = (root.innerText || "")
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 120);
      out.push({ src, w, h, text });
    }
    return out;
  });
}

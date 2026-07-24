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
const page = await browser.newPage({
  viewport: { width: 420, height: 900 },
  userAgent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
});

const apis = [];
page.on("response", async (res) => {
  const u = res.url();
  if (!/apit\.5t1p6\.com/i.test(u)) return;
  try {
    const json = await res.json();
    const data = json?.data;
    apis.push({
      path: u.replace(/^https?:\/\/[^/]+/, ""),
      code: json.code,
      len: Array.isArray(data) ? data.length : null,
      first: Array.isArray(data) ? data[0] : null,
    });
  } catch {
    // ignore
  }
});

async function closeLogin() {
  if (!(await page.getByText("Members Sign In").count())) return;
  await page.keyboard.press("Escape").catch(() => {});
  // modal X is typically top-right of the dialog
  const dialog = page.locator("text=Members Sign In").first();
  const box = await dialog.boundingBox().catch(() => null);
  if (box) {
    await page.mouse.click(box.x + box.width + 40, box.y - 10).catch(() => {});
  }
  // try common close icon
  const candidates = page.locator("img, button, span, div");
  const count = await candidates.count();
  for (let i = 0; i < Math.min(count, 80); i++) {
    const el = candidates.nth(i);
    const src = (await el.getAttribute("src").catch(() => "")) || "";
    const text = ((await el.textContent().catch(() => "")) || "").trim();
    if (/close|modalClose/i.test(src) || text === "×" || text === "X") {
      await el.click({ force: true }).catch(() => {});
      break;
    }
  }
  await page.waitForTimeout(500);
}

async function dumpCards(label) {
  await page.waitForTimeout(1500);
  await closeLogin();
  await page.screenshot({
    path: path.join(OUT, `${label}.png`),
    fullPage: true,
  });
  const cards = await page.evaluate(() => {
    return [...document.querySelectorAll("img")]
      .filter((img) => img.naturalWidth >= 70 && img.naturalWidth <= 900)
      .filter((img) => img.naturalHeight >= 70 && img.naturalHeight <= 900)
      .map((img) => {
        const root = img.closest("a,button,li,div");
        const text = (root?.innerText || "")
          .trim()
          .replace(/\s+/g, " ")
          .slice(0, 140);
        return {
          src: img.currentSrc || img.src,
          w: img.naturalWidth,
          h: img.naturalHeight,
          text,
        };
      })
      .filter((c) =>
        /game_pic|square|thumb|cdn-bet|bucket|mega999|icon|hugedolphin|eptech|kz344|sminnov|tcdl|prerelease/i.test(
          c.src,
        ),
      );
  });
  fs.writeFileSync(
    path.join(OUT, `${label}-cards.json`),
    JSON.stringify({ url: page.url(), cards, apis: [...apis] }, null, 2),
  );
  console.log(label, "->", page.url(), "cards", cards.length);
  return cards;
}

const routes = [
  "https://www.tpower3.com/#/games",
  "https://www.tpower3.com/#/game/tag/list",
  "https://www.tpower3.com/#/games?vendor_id=54",
  "https://www.tpower3.com/#/vendor/54",
];

for (const url of routes) {
  apis.length = 0;
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(2500);
  const label = "route_" + url.replace(/[^a-z0-9]+/gi, "_").slice(0, 40);
  await dumpCards(label);
  console.log(
    "  game apis",
    apis
      .filter((a) => /game|vendor|lobby/i.test(a.path))
      .map((a) => `${a.path} (${a.len})`)
      .slice(0, 10),
  );
}

// Real click vendor after dismissing overlays
apis.length = 0;
await page.goto("https://www.tpower3.com/", { waitUntil: "networkidle" });
await page.waitForTimeout(2000);
for (let i = 0; i < 6; i++) {
  await page.mouse.wheel(0, 900);
  await page.waitForTimeout(400);
}

const vendors = JSON.parse(
  fs.readFileSync("src/data/tpower-vendors.json", "utf8"),
);
const pragmatic = vendors.find((v) => v.name === "PRAGMATIC-SLOT");
const needle = pragmatic.image.split("/").pop().split("?")[0];
const img = page.locator(`img[src*="${needle}"]`).first();
console.log("pragmatic img count", await img.count());
if (await img.count()) {
  await img.scrollIntoViewIfNeeded();
  await img.click({ force: true });
  await page.waitForTimeout(3000);
  await closeLogin();
  await page.waitForTimeout(3000);
  await dumpCards("click_pragmatic_real");
  console.log(
    "after click apis",
    apis
      .filter((a) => /game|vendor|lobby|myGames/i.test(a.path))
      .map((a) => `${a.path} (${a.len})`),
  );
}

await browser.close();
console.log("done");

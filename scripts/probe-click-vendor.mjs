/**
 * Click a vendor tile on official lobby and dump resulting game cards + network.
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const TARGET = process.argv[2] || "PRAGMATIC";
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

const apiBodies = [];
page.on("response", async (res) => {
  const u = res.url();
  if (!/apit\.5t1p6\.com/i.test(u)) return;
  try {
    const json = await res.json();
    const data = json?.data;
    apiBodies.push({
      url: u.replace(/^https?:\/\/[^/]+/, ""),
      code: json.code,
      len: Array.isArray(data) ? data.length : data ? 1 : 0,
      first: Array.isArray(data) ? data[0] : null,
    });
  } catch {
    // ignore
  }
});

await page.goto("https://www.tpower3.com/", { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

// scroll until vendor grid visible
for (let i = 0; i < 6; i++) {
  await page.mouse.wheel(0, 900);
  await page.waitForTimeout(600);
}

// Find clickable vendor tiles by image src / nearby text from lobby vendors payload
const vendors = JSON.parse(
  fs.readFileSync("src/data/tpower-vendors.json", "utf8"),
);
const match = vendors.find((v) =>
  String(v.name).toUpperCase().includes(TARGET.toUpperCase()),
);
console.log("match vendor", match?.id, match?.name, match?.image?.slice(0, 80));

const clickResult = await page.evaluate((vendor) => {
  if (!vendor) return { ok: false, reason: "no-vendor" };
  const imgs = [...document.querySelectorAll("img")];
  // match by image URL fragment
  const needle = String(vendor.image || "").split("/").pop()?.split("?")[0];
  let el =
    imgs.find((img) => needle && (img.src || "").includes(needle)) ||
    imgs.find((img) =>
      new RegExp(vendor.name.replace(/[-_\s]/g, ".*"), "i").test(
        `${img.alt} ${img.src}`,
      ),
    );

  // fallback: front_page_image
  if (!el && vendor.front_page_image) {
    const n2 = vendor.front_page_image.split("/").pop()?.split("?")[0];
    el = imgs.find((img) => n2 && (img.src || "").includes(n2));
  }
  if (!el && vendor.app_icon) {
    const n3 = vendor.app_icon.split("/").pop()?.split("?")[0];
    el = imgs.find((img) => n3 && (img.src || "").includes(n3));
  }

  if (!el) {
    return {
      ok: false,
      reason: "img-not-found",
      sampleSrcs: imgs.slice(0, 20).map((i) => i.src.slice(0, 100)),
    };
  }
  const clickable = el.closest("a,button,div") || el;
  clickable.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
  return { ok: true, src: el.src.slice(0, 120), tag: clickable.tagName };
}, match);

console.log("click", clickResult);
await page.waitForTimeout(5000);
await page.screenshot({
  path: path.join(OUT, `vendor-${TARGET}.png`),
  fullPage: true,
});
console.log("url", page.url());

const cards = await page.evaluate(() => {
  const imgs = [...document.querySelectorAll("img")];
  return imgs
    .filter((img) => img.naturalWidth >= 80 && img.naturalHeight >= 80)
    .filter((img) => img.naturalWidth < 2000) // exclude banners
    .map((img) => {
      const box = img.closest("div,a,li,button");
      const text = (box?.innerText || "").trim().replace(/\s+/g, " ").slice(0, 160);
      return {
        src: img.currentSrc || img.src,
        w: img.naturalWidth,
        h: img.naturalHeight,
        text,
      };
    })
    .filter((c) =>
      /game_pic|thumb|square|cdn|bucket|icon|png|jpg|webp|jpeg/i.test(c.src),
    );
});

fs.writeFileSync(
  path.join(OUT, `vendor-${TARGET}-cards.json`),
  JSON.stringify({ clickResult, cards, apiBodies }, null, 2),
);
console.log("cards", cards.length);
console.log("sample", cards.slice(0, 8));
console.log(
  "api",
  apiBodies.filter((a) => /game|vendor/i.test(a.url)).slice(-10),
);

await browser.close();

/**
 * Probe official TPOWER site to find provider lobby URLs + game card DOM.
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
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
page.setDefaultTimeout(60000);

const apiHits = [];
page.on("response", (res) => {
  const u = res.url();
  if (/api|game|vendor|lobby|myGames/i.test(u)) {
    apiHits.push({ status: res.status(), url: u.slice(0, 220) });
  }
});

async function dismissOverlays() {
  for (const name of [
    /21 or older/i,
    /i am 21/i,
    /agree/i,
    /accept/i,
    /enter/i,
    /确认/,
    /同意/,
    /进入/,
  ]) {
    const btn = page.getByRole("button", { name }).first();
    if (await btn.count()) {
      await btn.click().catch(() => {});
      await page.waitForTimeout(400);
    }
  }
  // generic close
  for (const sel of [".close", "[aria-label=Close]", "button:has-text('×')"]) {
    const el = page.locator(sel).first();
    if (await el.count()) await el.click().catch(() => {});
  }
}

await page.goto("https://www.tpower3.com/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(4000);
await dismissOverlays();
await page.screenshot({ path: path.join(OUT, "home.png") });

const links = await page.evaluate(() =>
  [...document.querySelectorAll("a")]
    .map((a) => ({
      href: a.href,
      text: (a.textContent || "").trim().replace(/\s+/g, " ").slice(0, 60),
    }))
    .filter((x) => x.href && !x.href.startsWith("javascript:")),
);

fs.writeFileSync(path.join(OUT, "home-links.json"), JSON.stringify(links, null, 2));
fs.writeFileSync(path.join(OUT, "api-hits-home.json"), JSON.stringify(apiHits, null, 2));
console.log("home", page.url(), await page.title());
console.log(
  "sample links",
  links.filter((l) => /game|slot|vendor|provider|pg|evol/i.test(l.href + l.text)).slice(0, 40),
);

// Try common SPA hashes / paths
const candidates = [
  "https://www.tpower3.com/#/game",
  "https://www.tpower3.com/#/games",
  "https://www.tpower3.com/#/casino",
  "https://www.tpower3.com/#/home",
  "https://www.tpower3.com/en/games",
  "https://www.tpower3.com/#/vendor",
];

for (const url of candidates) {
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForTimeout(2500);
    await dismissOverlays();
    const slug = url.replace(/[^a-z0-9]+/gi, "_").slice(0, 40);
    await page.screenshot({ path: path.join(OUT, `${slug}.png`) });
    const info = await page.evaluate(() => ({
      title: document.title,
      url: location.href,
      hash: location.hash,
      imgs: [...document.querySelectorAll("img")]
        .slice(0, 30)
        .map((img) => ({
          src: img.currentSrc || img.src,
          alt: img.alt,
          w: img.naturalWidth,
          h: img.naturalHeight,
        })),
      texts: [...document.querySelectorAll("button, a, div")]
        .map((el) => (el.textContent || "").trim().replace(/\s+/g, " "))
        .filter((t) => t && t.length < 40)
        .filter((t) =>
          /PG|Pragmatic|Evolution|Jili|JDB|Dream|Sexy|Micro|Habanero|Spribe|Spade/i.test(
            t,
          ),
        )
        .slice(0, 40),
    }));
    fs.writeFileSync(path.join(OUT, `${slug}.json`), JSON.stringify(info, null, 2));
    console.log("candidate", url, "->", info.url, "providerTexts", info.texts.slice(0, 10));
  } catch (e) {
    console.log("candidate fail", url, e.message);
  }
}

fs.writeFileSync(path.join(OUT, "api-hits-all.json"), JSON.stringify(apiHits.slice(0, 200), null, 2));
await browser.close();
console.log("done", OUT);

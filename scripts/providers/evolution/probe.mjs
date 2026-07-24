/**
 * Evolution-specific TPOWER probe.
 * Discovers how (if at all) Evolution thumbs appear on the official lobby.
 *
 * Run: node scripts/providers/evolution/probe.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import { apiPost, fetchVendorShelf } from "../lib/tpower-api.mjs";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "scripts/providers/evolution");
const EVO_MARKERS = [
  "evolution",
  "evo-games",
  "evolutiongaming",
  "lightning roulette",
  "crazy time",
  "dream catcher",
  "monopoly live",
  "immersive roulette",
  "lightning baccarat",
  "mega ball",
  "funky time",
  "gonzo",
  "stock market",
  "first person",
];

function norm(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isEvolutionLike(game) {
  const blob = `${game.name} ${game.image} ${game.vendor_name || ""}`.toLowerCase();
  return EVO_MARKERS.some((m) => blob.includes(m));
}

fs.mkdirSync(OUT, { recursive: true });

console.log("=== Evolution provider probe ===\n");

// 1) Vendor list
const vendorsRes = await apiPost("api/newVendorsByDomain", {
  domain: "www.tpower3.com",
});
const vendors = vendorsRes.data || [];
const vendorHits = vendors.filter((v) => /evol/i.test(v.name));
console.log("Vendors with 'evol' in name:", vendorHits.length ? vendorHits : "(none)");

// 2) Scan every vendor shelf for Evolution-like games (name or CDN URL)
const shelfHits = [];
let totalIndexed = 0;
for (const v of vendors) {
  try {
    const games = await fetchVendorShelf(v.id);
    totalIndexed += games.length;
    const hits = games.filter(isEvolutionLike);
    if (hits.length) {
      shelfHits.push({
        vendor_id: v.id,
        vendor_name: v.name,
        hitCount: hits.length,
        sample: hits.slice(0, 8).map((g) => ({
          id: g.id,
          name: g.name,
          image: g.image,
        })),
      });
      console.log(`  SHELF HIT ${v.name} (${v.id}): ${hits.length} games`);
    }
  } catch (err) {
    console.log(`  shelf fail ${v.name}:`, err.message);
  }
}

// 3) Exact name scan for classic Evolution seed titles across all shelves
const SEED_TITLES = [
  "Lightning Roulette",
  "Crazy Time",
  "Dream Catcher",
  "Monopoly Live",
  "Blackjack VIP",
  "Lightning Baccarat",
  "Speed Baccarat A",
  "Immersive Roulette",
  "Auto Roulette",
  "Mega Ball",
  "Sic Bo",
  "Dragon Tiger",
  "Funky Time",
  "XXXtreme Lightning Roulette",
];

const exactMatches = [];
const allGames = [];
for (const v of vendors) {
  try {
    const games = await fetchVendorShelf(v.id);
    for (const g of games) {
      allGames.push({ ...g, vendor_id: v.id, vendor_name: v.name });
    }
  } catch {
    // skip
  }
}

for (const title of SEED_TITLES) {
  const n = norm(title);
  const hits = allGames.filter((g) => norm(g.name) === n);
  if (hits.length) {
    exactMatches.push({
      title,
      hits: hits.map((g) => ({
        id: g.id,
        name: g.name,
        vendor: g.vendor_name,
        image: g.image,
      })),
    });
  }
}

console.log("\nExact seed-title matches on official shelves:", exactMatches.length);
for (const m of exactMatches) {
  console.log(`  ${m.title} →`, m.hits.map((h) => `${h.vendor}/${h.name}`).join(", "));
}

// 4) Browser: capture network + DOM thumb patterns on lobby
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

const net = { apis: [], images: [] };
page.on("response", async (res) => {
  const u = res.url();
  if (/apit\.5t1p6\.com/i.test(u)) {
    try {
      const json = await res.json();
      net.apis.push({
        path: u.replace(/^https?:\/\/[^/]+/, ""),
        code: json.code,
        dataLen: Array.isArray(json.data)
          ? json.data.length
          : json.data?.games?.length || 0,
        hasEvo: JSON.stringify(json).toLowerCase().includes("evolution"),
      });
    } catch {
      // ignore
    }
  }
  if (/evol|lightning|crazy.?time|monopoly/i.test(u) && /\.(png|jpe?g|webp|gif)/i.test(u)) {
    net.images.push(u.slice(0, 200));
  }
});

await page.goto("https://www.tpower3.com/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2000);
for (let i = 0; i < 8; i++) {
  await page.mouse.wheel(0, 900);
  await page.waitForTimeout(350);
}

const domProbe = await page.evaluate(() => {
  const imgs = [...document.querySelectorAll("img")];
  const bgEls = [...document.querySelectorAll("[style*='background-image']")];
  return {
    evoImgs: imgs
      .filter(
        (img) =>
          /evol|lightning|crazy|monopoly/i.test(img.src + img.alt) &&
          img.naturalWidth >= 80,
      )
      .map((img) => ({
        src: img.currentSrc || img.src,
        alt: img.alt,
        w: img.naturalWidth,
        loading: img.loading,
        lazy: img.loading === "lazy",
      })),
    bgImages: bgEls
      .filter((el) => /evol|lightning|crazy/i.test(el.style.backgroundImage || ""))
      .slice(0, 10)
      .map((el) => ({
        bg: el.style.backgroundImage?.slice(0, 120),
        text: (el.innerText || "").trim().slice(0, 80),
      })),
    bodyHasEvolution: /evolution/i.test(document.body?.innerText || ""),
  };
});

await page.screenshot({ path: path.join(OUT, "lobby-probe.png"), fullPage: false });
await browser.close();

const report = {
  generatedAt: new Date().toISOString(),
  officialDomain: "www.tpower3.com",
  vendorCount: vendors.length,
  vendorsWithEvolInName: vendorHits,
  totalGamesIndexed: totalIndexed,
  shelfHits,
  exactSeedTitleMatches: exactMatches,
  browser: { domProbe, netApis: net.apis.slice(0, 30), netEvoImages: net.images },
  conclusion:
    shelfHits.filter((h) =>
      /^(ninja evolution|mewtwo)/i.test(h.sample?.[0]?.name || ""),
    ).length === shelfHits.length
      ? "No Evolution vendor and no real Evolution live-game titles on official playable lobby shelves."
      : "Evolution content found on non-Evolution vendor shelves — resolver must target those shelves.",
};

fs.writeFileSync(path.join(OUT, "probe-report.json"), JSON.stringify(report, null, 2));
console.log("\nWrote", path.join(OUT, "probe-report.json"));
console.log("Conclusion:", report.conclusion);

export default async function probe() {
  return report;
}

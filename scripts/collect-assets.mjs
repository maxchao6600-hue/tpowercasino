/**
 * Collect production visual assets for the TPOWER marketing site.
 * Sources: official tpower3.com static files + GCS CDN + provider brand sites.
 */
import https from "node:https";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import sharp from "sharp";

const ROOT = process.cwd();
const SITE = "https://www.tpower3.com";
const CDN =
  "https://storage.googleapis.com/cdn-betmonsters-com-cdn-bucket-online";

function fetchBuf(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith("https") ? https : http;
    const req = mod.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36",
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
          Referer: SITE + "/",
        },
        timeout: 45000,
      },
      (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location &&
          redirects < 6
        ) {
          res.resume();
          resolve(fetchBuf(new URL(res.headers.location, url).href, redirects + 1));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () =>
          resolve({
            status: res.statusCode || 0,
            type: res.headers["content-type"] || "",
            body: Buffer.concat(chunks),
            url,
          }),
        );
      },
    );
    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("timeout"));
    });
  });
}

function isImage(type, body) {
  if (body.length < 64) return false;
  if (type.includes("text/html")) return false;
  const sig = body.subarray(0, 12);
  if (sig[0] === 0x89 && sig[1] === 0x50) return true; // png
  if (sig[0] === 0xff && sig[1] === 0xd8) return true; // jpg
  if (sig.toString("ascii", 0, 4) === "RIFF" && sig.toString("ascii", 8, 12) === "WEBP")
    return true;
  if (sig.toString("ascii", 0, 3) === "GIF") return true;
  if (sig.toString("utf8", 0, 5).includes("<svg") || sig.toString("utf8", 0, 5) === "<?xml")
    return true;
  if (sig[0] === 0x00 && sig[1] === 0x00) return type.includes("image"); // ico-ish
  return type.startsWith("image/");
}

async function downloadFirst(urls) {
  for (const url of urls) {
    try {
      const r = await fetchBuf(url);
      if (r.status === 200 && isImage(r.type, r.body)) {
        return { ...r, url };
      }
    } catch {
      /* try next */
    }
  }
  return null;
}

async function writeWebp(buf, dest, { width, height, fit = "cover", background } = {}) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  let pipeline = sharp(buf, { failOn: "none" }).rotate();
  if (width || height) {
    pipeline = pipeline.resize({
      width,
      height,
      fit,
      withoutEnlargement: true,
      background: background || { r: 0, g: 0, b: 0, alpha: 0 },
    });
  }
  await pipeline.webp({ quality: 82, effort: 4 }).toFile(dest);
  return dest;
}

async function writePng(buf, dest, { width, height, fit = "contain", pad = 0 } = {}) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  let pipeline = sharp(buf, { failOn: "none" }).rotate();
  if (width || height) {
    const targetW = width || height;
    const targetH = height || width;
    const innerW = Math.max(1, targetW - pad * 2);
    const innerH = Math.max(1, targetH - pad * 2);
    const resized = await pipeline
      .resize({
        width: innerW,
        height: innerH,
        fit,
        withoutEnlargement: true,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();
    await sharp({
      create: {
        width: targetW,
        height: targetH,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite([{ input: resized, gravity: "centre" }])
      .png()
      .toFile(dest);
    return dest;
  }
  await pipeline.png().toFile(dest);
  return dest;
}

// Ensure sharp is available
try {
  await import("sharp");
} catch {
  console.log("Installing sharp...");
  execFileSync("npm", ["install", "-D", "sharp"], {
    cwd: ROOT,
    stdio: "inherit",
    shell: true,
  });
}

const report = { ok: [], miss: [], notes: [] };

for (const dir of [
  "public/logo",
  "public/icons",
  "public/providers",
  "public/games",
  "public/blog",
  "public/og",
  "public/images",
  "public/images/categories",
  "public/images/providers",
  "public/images/promotions",
  "public/images/games",
  "public/images/payments",
  "public/images/download",
]) {
  fs.mkdirSync(path.join(ROOT, dir), { recursive: true });
}

// ---------- Official TPOWER brand ----------
const brandIcon = await downloadFirst([
  `${SITE}/static/img/icon/tpower.png`,
  `${SITE}/static/img/v_world/custom_icon.png`,
]);
if (!brandIcon) throw new Error("Failed to fetch official TPOWER icon");
report.ok.push(brandIcon.url);

await writePng(brandIcon.body, path.join(ROOT, "public/logo/tpower-mark.png"), {
  width: 256,
  height: 256,
  fit: "contain",
  pad: 24,
});
await writePng(brandIcon.body, path.join(ROOT, "public/icons/favicon-32.png"), {
  width: 32,
  height: 32,
  fit: "contain",
  pad: 2,
});
await writePng(brandIcon.body, path.join(ROOT, "public/icons/apple-touch-icon.png"), {
  width: 180,
  height: 180,
  fit: "contain",
  pad: 16,
});
// Keep SVG mark as a simple brand-colored tile referencing official mark via PNG usage in UI
fs.writeFileSync(
  path.join(ROOT, "public/icons/favicon.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#D71920"/><image href="/logo/tpower-mark.png" x="10" y="10" width="44" height="44"/></svg>`,
);

// Favicon.ico from official
const fav = await downloadFirst([`${SITE}/static/img/v_world/favicon.ico`]);
if (fav) {
  fs.writeFileSync(path.join(ROOT, "public/icons/favicon.ico"), fav.body);
  report.ok.push(fav.url);
}

// ---------- Download / app imagery from official SPA ----------
const downloadPairs = [
  ["public/images/download/android.webp", `${SITE}/static/img/Android.fcecf56.png`],
  ["public/images/download/ios.webp", `${SITE}/static/img/IOS.b118c2f.png`],
  ["public/images/download/use-app-en.webp", `${SITE}/static/img/UseAppEN.9ef35ae.png`],
  ["public/images/download/use-pc-en.webp", `${SITE}/static/img/UsePcEN.16f4854.png`],
  ["public/images/download/lobby-bg-1.webp", `${SITE}/static/img/LobbyBg1.a5c6de5.png`],
  ["public/images/download/lobby-bg-2.webp", `${SITE}/static/img/LobbyBg2.f4961f1.png`],
];

for (const [dest, url] of downloadPairs) {
  const r = await downloadFirst([url]);
  if (!r) {
    report.miss.push(url);
    continue;
  }
  await writeWebp(r.body, path.join(ROOT, dest), { width: 1200 });
  report.ok.push(url);
}

// App preview / hero from lobby backgrounds + brand
const lobby = await downloadFirst([
  `${SITE}/static/img/LobbyBg1.a5c6de5.png`,
  `${SITE}/static/img/LobbyBg2.f4961f1.png`,
]);
if (lobby) {
  await writeWebp(lobby.body, path.join(ROOT, "public/images/app-preview.webp"), {
    width: 720,
    height: 1280,
    fit: "cover",
  });
}

// Premium hero: composite official mark on red/white abstract (generated, not low-quality scrape)
{
  const base = await sharp({
    create: {
      width: 1600,
      height: 1000,
      channels: 3,
      background: { r: 250, g: 250, b: 250 },
    },
  })
    .png()
    .toBuffer();

  const accent = await sharp({
    create: {
      width: 900,
      height: 1000,
      channels: 4,
      background: { r: 215, g: 25, b: 32, alpha: 1 },
    },
  })
    .png()
    .toBuffer();

  const mark = await sharp(brandIcon.body)
    .resize(280, 280, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const heroBuf = await sharp(base)
    .composite([
      { input: accent, left: 700, top: 0 },
      {
        input: Buffer.from(
          `<svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1180" cy="220" r="180" fill="white" fill-opacity="0.08"/>
            <circle cx="1400" cy="780" r="220" fill="white" fill-opacity="0.06"/>
            <text x="96" y="420" font-family="Arial,sans-serif" font-size="84" font-weight="800" fill="#111111">TPOWER</text>
            <text x="96" y="500" font-family="Arial,sans-serif" font-size="36" fill="#525252">Premium Online Gaming · Malaysia</text>
          </svg>`,
        ),
        left: 0,
        top: 0,
      },
      { input: mark, left: 1080, top: 340 },
    ])
    .webp({ quality: 85 })
    .toFile(path.join(ROOT, "public/images/hero.webp"));
  report.notes.push("hero.webp generated from official mark + brand palette");
}

// OG image
await sharp(path.join(ROOT, "public/images/hero.webp"))
  .resize(1200, 630, { fit: "cover" })
  .webp({ quality: 85 })
  .toFile(path.join(ROOT, "public/og/default.webp"));
// Keep png og as well for crawlers that dislike webp occasionally
await sharp(path.join(ROOT, "public/images/hero.webp"))
  .resize(1200, 630, { fit: "cover" })
  .png()
  .toFile(path.join(ROOT, "public/og/default.png"));

// Lottery / promo-style official CDN art
const promoOfficial = await downloadFirst([
  `${CDN}/TPower/event/lottery/lottery_button_en.jpg`,
]);
if (promoOfficial) {
  await writeWebp(
    promoOfficial.body,
    path.join(ROOT, "public/images/promotions/seasonal.webp"),
    { width: 1200, height: 675, fit: "cover" },
  );
  report.ok.push(promoOfficial.url);
}

// ---------- Provider logos (official / clearbit / wikipedia commons style CDNs) ----------
const providers = [
  {
    slug: "pragmatic-play",
    urls: [
      "https://www.pragmaticplay.com/wp-content/themes/pragmaticplay/assets/images/logo.svg",
      "https://logo.clearbit.com/pragmaticplay.com",
      "https://www.google.com/s2/favicons?domain=pragmaticplay.com&sz=128",
    ],
  },
  {
    slug: "pg-soft",
    urls: [
      "https://logo.clearbit.com/pgsoft.com",
      "https://www.google.com/s2/favicons?domain=pgsoft.com&sz=128",
    ],
  },
  {
    slug: "evolution",
    urls: [
      "https://logo.clearbit.com/evolution.com",
      "https://www.google.com/s2/favicons?domain=evolution.com&sz=128",
    ],
  },
  {
    slug: "jili",
    urls: [
      "https://logo.clearbit.com/jiligames.com",
      "https://www.google.com/s2/favicons?domain=jiligames.com&sz=128",
    ],
  },
  {
    slug: "jdb",
    urls: [
      "https://logo.clearbit.com/jdb168.com",
      "https://www.google.com/s2/favicons?domain=jdb168.com&sz=128",
    ],
  },
  {
    slug: "ae-sexy",
    urls: [
      "https://logo.clearbit.com/sexybaccarat.com",
      "https://www.google.com/s2/favicons?domain=aeinteractive.asia&sz=128",
    ],
  },
  {
    slug: "dream-gaming",
    urls: [
      "https://logo.clearbit.com/dg.com",
      "https://www.google.com/s2/favicons?domain=dreamgaming.com&sz=128",
    ],
  },
  {
    slug: "microgaming",
    urls: [
      "https://logo.clearbit.com/microgaming.co.uk",
      "https://www.google.com/s2/favicons?domain=microgaming.co.uk&sz=128",
    ],
  },
  {
    slug: "playn-go",
    urls: [
      "https://logo.clearbit.com/playngo.com",
      "https://www.google.com/s2/favicons?domain=playngo.com&sz=128",
    ],
  },
  {
    slug: "spribe",
    urls: [
      "https://logo.clearbit.com/spribe.co",
      "https://www.google.com/s2/favicons?domain=spribe.co&sz=128",
    ],
  },
  {
    slug: "spadegaming",
    urls: [
      "https://logo.clearbit.com/spadegaming.com",
      "https://www.google.com/s2/favicons?domain=spadegaming.com&sz=128",
    ],
  },
  {
    slug: "habanero",
    urls: [
      "https://logo.clearbit.com/habanerosystems.com",
      "https://www.google.com/s2/favicons?domain=habanero.com&sz=128",
    ],
  },
  {
    slug: "sbo",
    urls: [
      "https://logo.clearbit.com/sbobet.com",
      "https://www.google.com/s2/favicons?domain=sbobet.com&sz=128",
    ],
  },
];

for (const p of providers) {
  const r = await downloadFirst(p.urls);
  const dest = path.join(ROOT, `public/providers/${p.slug}.png`);
  if (!r) {
    // Brand-tile fallback that is NOT a text placeholder wordmark of the old generator —
    // still better as a solid mark; log miss
    report.miss.push(p.slug);
    const tile = await sharp({
      create: {
        width: 320,
        height: 160,
        channels: 4,
        background: { r: 250, g: 250, b: 250, alpha: 1 },
      },
    })
      .composite([
        {
          input: Buffer.from(
            `<svg width="320" height="160" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="318" height="158" rx="16" fill="#fff" stroke="#ececec"/><text x="160" y="88" text-anchor="middle" font-family="Arial" font-size="22" font-weight="700" fill="#111">${p.slug.replace(/-/g, " ").toUpperCase()}</text></svg>`,
          ),
        },
      ])
      .png()
      .toFile(dest);
    continue;
  }
  await writePng(r.body, dest, { width: 320, height: 160, fit: "contain", pad: 28 });
  // also webp copy under images/providers
  await writeWebp(r.body, path.join(ROOT, `public/images/providers/${p.slug}.webp`), {
    width: 320,
    height: 160,
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 0 },
  });
  report.ok.push(`${p.slug} <= ${r.url}`);
}

// ---------- Category images ----------
const categories = [
  ["slots", "#111111", "#D71920", "SLOTS"],
  ["live-casino", "#0f172a", "#b91c1c", "LIVE"],
  ["sports", "#052e16", "#D71920", "SPORTS"],
  ["fishing", "#0c4a6e", "#D71920", "FISHING"],
  ["lottery", "#3b0764", "#D71920", "LOTTERY"],
  ["poker", "#1c1917", "#D71920", "TABLES"],
  ["arcade", "#431407", "#D71920", "ARCADE"],
  ["crash", "#450a0a", "#D71920", "CRASH"],
];

for (const [slug, c1, c2, label] of categories) {
  const svg = Buffer.from(`<svg width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1200" y2="750">
      <stop stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="1200" height="750" fill="url(#g)"/>
    <circle cx="980" cy="160" r="200" fill="white" fill-opacity="0.08"/>
    <circle cx="180" cy="620" r="240" fill="white" fill-opacity="0.06"/>
    <text x="80" y="640" font-family="Arial" font-size="72" font-weight="800" fill="white">${label}</text>
  </svg>`);
  // Prefer overlaying official mark for brand cohesion
  const composed = await sharp(svg)
    .composite([
      {
        input: await sharp(brandIcon.body).resize(120, 120).png().toBuffer(),
        left: 80,
        top: 80,
      },
    ])
    .webp({ quality: 84 })
    .toFile(path.join(ROOT, `public/images/categories/${slug}.webp`));
}

// ---------- Game cards: category-styled with title (production quality, not SVG text placeholders in /games) ----------
const games = [
  ["gates-of-olympus", "slots", "Gates of Olympus"],
  ["sweet-bonanza", "slots", "Sweet Bonanza"],
  ["mahjong-ways-2", "slots", "Mahjong Ways 2"],
  ["hot-hot-fruit", "slots", "Hot Hot Fruit"],
  ["lightning-baccarat", "live-casino", "Lightning Baccarat"],
  ["crazy-time", "live-casino", "Crazy Time"],
  ["ae-sexy-baccarat", "live-casino", "AE Sexy Baccarat"],
  ["live-blackjack", "live-casino", "Live Blackjack"],
  ["football-markets", "sports", "Football Markets"],
  ["fishing-war", "fishing", "Fishing War"],
  ["mega-fishing", "fishing", "Mega Fishing"],
  ["lucky-numbers", "lottery", "Lucky Numbers"],
  ["daily-draw", "lottery", "Daily Draw"],
  ["crash-x", "crash", "Crash X"],
  ["arcade-blast", "arcade", "Arcade Blast"],
];

const catColor = Object.fromEntries(categories.map(([s, a, b]) => [s, [a, b]]));

for (const [slug, cat, title] of games) {
  const [c1, c2] = catColor[cat] || ["#111", "#D71920"];
  const svg = Buffer.from(`<svg width="800" height="500" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g" x1="0" y1="0" x2="800" y2="500">
      <stop stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="800" height="500" fill="url(#g)"/>
    <circle cx="640" cy="120" r="140" fill="white" fill-opacity="0.08"/>
    <text x="48" y="420" font-family="Arial" font-size="34" font-weight="700" fill="white">${title}</text>
  </svg>`);
  const out = path.join(ROOT, `public/images/games/${slug}.webp`);
  await sharp(svg)
    .composite([
      {
        input: await sharp(brandIcon.body).resize(64, 64).png().toBuffer(),
        left: 48,
        top: 40,
      },
    ])
    .webp({ quality: 84 })
    .toFile(out);
  // also write to legacy /public/games path as webp for simpler migration
  await sharp(out).toFile(path.join(ROOT, `public/games/${slug}.webp`));
}

// ---------- Payments ----------
const payments = [
  {
    slug: "fpx",
    urls: [
      "https://logo.clearbit.com/paynet.my",
      "https://www.google.com/s2/favicons?domain=paynet.my&sz=128",
    ],
  },
  {
    slug: "touch-n-go",
    urls: [
      "https://logo.clearbit.com/touchngo.com.my",
      "https://www.google.com/s2/favicons?domain=touchngo.com.my&sz=128",
    ],
  },
  {
    slug: "grabpay",
    urls: [
      "https://logo.clearbit.com/grab.com",
      "https://www.google.com/s2/favicons?domain=grab.com&sz=128",
    ],
  },
  {
    slug: "duitnow",
    urls: [
      "https://logo.clearbit.com/paynet.my",
      "https://www.google.com/s2/favicons?domain=duitnow.my&sz=128",
    ],
  },
  {
    slug: "bank-transfer",
    urls: [
      "https://logo.clearbit.com/maybank2u.com.my",
      "https://www.google.com/s2/favicons?domain=maybank.com&sz=128",
    ],
  },
  {
    slug: "usdt",
    urls: [
      "https://logo.clearbit.com/tether.to",
      "https://www.google.com/s2/favicons?domain=tether.to&sz=128",
    ],
  },
];

for (const p of payments) {
  const r = await downloadFirst(p.urls);
  const dest = path.join(ROOT, `public/images/payments/${p.slug}.png`);
  if (r) {
    await writePng(r.body, dest, { width: 240, height: 120, fit: "contain", pad: 20 });
    report.ok.push(p.slug + " payment");
  } else {
    report.miss.push("payment:" + p.slug);
    await sharp({
      create: {
        width: 240,
        height: 120,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      },
    })
      .composite([
        {
          input: Buffer.from(
            `<svg width="240" height="120"><text x="120" y="68" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#111">${p.slug}</text></svg>`,
          ),
        },
      ])
      .png()
      .toFile(dest);
  }
}

// ---------- Promotions ----------
// Commercial promo banners are produced by scripts/finalize-promo-banners.mjs
// (original key visuals). Do not overwrite with logo/text placeholders.
const promoBanners = [
  "tpower-welcome-package.webp",
  "tpower-weekly-reload.webp",
  "tpower-cashback.webp",
  "tpower-vip-rewards.webp",
  "tpower-merdeka-seasonal.webp",
];
for (const file of promoBanners) {
  const dest = path.join(ROOT, "public/images/promotions", file);
  if (!fs.existsSync(dest)) {
    console.warn("missing promo banner (run finalize-promo-banners.mjs):", file);
  }
}

// ---------- Blog / news ----------
const editorial = [
  "tpower-login-guide",
  "how-to-register-tpower",
  "how-to-download-tpower",
  "tpower-mobile-app",
  "how-to-deposit-tpower",
  "how-to-withdraw-tpower",
  "responsible-play",
  "payments",
  "providers",
  "vip",
];
for (const slug of editorial) {
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const svg = Buffer.from(`<svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="675" fill="#FAFAFA"/>
    <rect x="0" y="0" width="16" height="675" fill="#D71920"/>
    <text x="80" y="340" font-family="Arial" font-size="48" font-weight="800" fill="#111111">${title}</text>
    <text x="80" y="400" font-family="Arial" font-size="24" fill="#525252">TPOWER Guide</text>
  </svg>`);
  await sharp(svg)
    .composite([
      {
        input: await sharp(brandIcon.body).resize(72, 72).png().toBuffer(),
        left: 80,
        top: 72,
      },
    ])
    .webp({ quality: 84 })
    .toFile(path.join(ROOT, `public/blog/${slug}.webp`));
}

// News covers: unique commercial banners from scripts/finalize-news-covers.mjs
const newsCovers = [
  "tpower-platform-performance-update.webp",
  "tpower-live-casino-tables.webp",
  "tpower-vip-host-coverage.webp",
  "tpower-duitnow-ewallet-tips.webp",
];
for (const file of newsCovers) {
  const dest = path.join(ROOT, "public/images/news", file);
  if (!fs.existsSync(dest)) {
    console.warn("missing news cover (run finalize-news-covers.mjs):", file);
  }
}

// 404
await sharp({
  create: { width: 1200, height: 750, channels: 3, background: { r: 250, g: 250, b: 250 } },
})
  .composite([
    {
      input: Buffer.from(
        `<svg width="1200" height="750"><text x="600" y="360" text-anchor="middle" font-family="Arial" font-size="120" font-weight="800" fill="#D71920">404</text><text x="600" y="440" text-anchor="middle" font-family="Arial" font-size="32" fill="#525252">Page not found</text></svg>`,
      ),
    },
    {
      input: await sharp(brandIcon.body).resize(80, 80).png().toBuffer(),
      left: 560,
      top: 160,
    },
  ])
  .webp({ quality: 84 })
  .toFile(path.join(ROOT, "public/images/404.webp"));

fs.writeFileSync(
  path.join(ROOT, ".asset-cache/collect-report.json"),
  JSON.stringify(report, null, 2),
);
console.log("DONE ok", report.ok.length, "miss", report.miss.length);
console.log(report.miss);

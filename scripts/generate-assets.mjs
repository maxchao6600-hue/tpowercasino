import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function ensure(dir) {
  fs.mkdirSync(path.join(root, dir), { recursive: true });
}

[
  "public/logo",
  "public/icons",
  "public/providers",
  "public/games",
  "public/blog",
  "public/images",
  "public/og",
].forEach(ensure);

const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#D71920"/><path d="M18 20h28v6H36v22h-8V26H18v-6z" fill="white"/></svg>`;
fs.writeFileSync("public/logo/tpower-mark.svg", mark);
fs.writeFileSync("public/icons/favicon.svg", mark);
fs.writeFileSync("public/icons/apple-touch-icon.svg", mark);

function wordmark(name) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" fill="none"><rect width="200" height="48" rx="10" fill="#FAFAFA"/><text x="100" y="30" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="16" font-weight="700" fill="#111111">${name}</text></svg>`;
}

const providers = [
  ["pragmatic-play", "Pragmatic Play"],
  ["evolution", "Evolution"],
  ["pg-soft", "PG Soft"],
  ["spadegaming", "Spadegaming"],
  ["jili", "JILI"],
  ["ae-sexy", "AE Sexy"],
  ["habanero", "Habanero"],
  ["sbo", "SBO Sports"],
];

for (const [slug, name] of providers) {
  fs.writeFileSync(`public/providers/${slug}.svg`, wordmark(name));
}

function art(title, c1 = "#111111", c2 = "#D71920") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none"><defs><linearGradient id="g" x1="0" y1="0" x2="800" y2="500"><stop stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="800" height="500" fill="url(#g)"/><circle cx="640" cy="120" r="140" fill="white" fill-opacity="0.08"/><circle cx="160" cy="420" r="180" fill="white" fill-opacity="0.06"/><text x="56" y="420" font-family="Inter,Arial,sans-serif" font-size="36" font-weight="700" fill="white">${title}</text></svg>`;
}

const games = [
  ["gates-of-olympus", "Gates of Olympus"],
  ["sweet-bonanza", "Sweet Bonanza"],
  ["mahjong-ways-2", "Mahjong Ways 2"],
  ["lightning-baccarat", "Lightning Baccarat"],
  ["crazy-time", "Crazy Time"],
  ["ae-sexy-baccarat", "AE Sexy Baccarat"],
  ["football-markets", "Football Markets"],
  ["fishing-war", "Fishing War"],
  ["mega-fishing", "Mega Fishing"],
  ["live-blackjack", "Live Blackjack"],
  ["crash-x", "Crash X"],
  ["hot-hot-fruit", "Hot Hot Fruit"],
];

games.forEach(([slug, name], i) => {
  fs.writeFileSync(
    `public/games/${slug}.svg`,
    art(name, i % 2 ? "#1a1a1a" : "#141414", i % 3 ? "#D71920" : "#7f1d1d"),
  );
});

for (const [slug, name] of [
  ["promo-welcome", "Welcome"],
  ["promo-reload", "Reload"],
  ["promo-cashback", "Cashback"],
  ["promo-vip", "VIP"],
]) {
  fs.writeFileSync(`public/images/${slug}.svg`, art(name));
}

for (const [slug, name] of [
  ["responsible-play", "Responsible Play"],
  ["payments", "Payments"],
  ["providers", "Providers"],
  ["vip", "VIP Service"],
]) {
  fs.writeFileSync(`public/blog/${slug}.svg`, art(name, "#0f0f0f", "#b91c1c"));
}

const og = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" fill="none"><defs><linearGradient id="og" x1="0" y1="0" x2="1200" y2="630"><stop stop-color="#ffffff"/><stop offset="0.55" stop-color="#fafafa"/><stop offset="1" stop-color="#ffe8e8"/></linearGradient></defs><rect width="1200" height="630" fill="url(#og)"/><rect x="80" y="80" width="88" height="88" rx="24" fill="#D71920"/><text x="106" y="138" font-family="Inter,Arial,sans-serif" font-size="36" font-weight="800" fill="white">TP</text><text x="80" y="260" font-family="Inter,Arial,sans-serif" font-size="72" font-weight="800" fill="#111111">TPOWER Casino</text><text x="80" y="340" font-family="Inter,Arial,sans-serif" font-size="34" fill="#525252">Premium Online Gaming Platform · Malaysia</text></svg>`;
fs.writeFileSync("public/og/default.svg", og);

const hero = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none"><rect width="800" height="800" rx="80" fill="#FAFAFA"/><circle cx="400" cy="400" r="220" fill="#111111"/><circle cx="400" cy="400" r="150" fill="#D71920" fill-opacity="0.9"/><rect x="300" y="300" width="200" height="200" rx="40" fill="white" fill-opacity="0.12"/><text x="400" y="420" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="48" font-weight="800" fill="white">TP</text></svg>`;
fs.writeFileSync("public/images/hero-illustration.svg", hero);

const phone = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 844" fill="none"><rect width="390" height="844" fill="#111111"/><rect x="20" y="60" width="350" height="724" rx="24" fill="#FAFAFA"/><rect x="40" y="100" width="140" height="28" rx="8" fill="#D71920"/><rect x="40" y="160" width="310" height="120" rx="16" fill="#ECECEC"/><rect x="40" y="310" width="145" height="100" rx="16" fill="#fff"/><rect x="205" y="310" width="145" height="100" rx="16" fill="#fff"/><rect x="40" y="430" width="310" height="80" rx="16" fill="#111111"/></svg>`;
fs.writeFileSync("public/images/app-preview.svg", phone);

const nf = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none"><rect width="800" height="500" fill="#FAFAFA"/><text x="400" y="230" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="120" font-weight="800" fill="#D71920">404</text><text x="400" y="310" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="28" fill="#525252">Page not found</text></svg>`;
fs.writeFileSync("public/images/404.svg", nf);
fs.writeFileSync("public/images/promo-seasonal.svg", art("Seasonal"));

for (const [slug, name] of [
  ["news-platform", "Platform"],
  ["news-live", "Live"],
  ["news-vip", "VIP"],
  ["news-payments", "Payments"],
]) {
  fs.writeFileSync(`public/images/${slug}.svg`, art(name, "#0f0f0f", "#b91c1c"));
}

fs.writeFileSync("public/games/lucky-numbers.svg", art("Lucky Numbers"));
fs.writeFileSync("public/games/daily-draw.svg", art("Daily Draw"));

console.log("Generated TPOWER visual assets");

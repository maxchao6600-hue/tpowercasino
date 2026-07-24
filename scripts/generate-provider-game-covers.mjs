/**
 * Per-game artwork pipeline for provider seed libraries.
 *
 * Priority for each seed title:
 * 1) Copy an existing local catalogue thumb with a matching game name
 * 2) Generate a unique theme-aware cover (never shared lobby/CTA art)
 *
 * Output: public/images/games/{providerFolder}/{slug}.webp
 *
 * Run: node scripts/generate-provider-game-covers.mjs
 *      node scripts/generate-provider-game-covers.mjs --force
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";
// Game thumbnails must never receive a TPOWER logo watermark.

const FORCE = process.argv.includes("--force");

const ROOT = process.cwd();
const W = 480;
const H = 640;

const catalogue = JSON.parse(
  fs.readFileSync(path.join(ROOT, "src/data/games-catalogue.json"), "utf8"),
);

/** Keep in sync with src/data/provider-games.ts folder helper */
const PROVIDER_FOLDERS = {
  "pragmatic-play": "pragmatic",
  "pg-soft": "pgsoft",
  evolution: "evolution",
  jili: "jili",
  jdb: "jdb",
  "sexy-baccarat": "sexy-gaming",
  "sexy-gaming": "sexy-gaming",
  "dream-gaming": "dream-gaming",
  microgaming: "microgaming",
  "playn-go": "playngo",
  spribe: "spribe",
  spadegaming: "spadegaming",
  habanero: "habanero",
  sbo: "sbo",
};

async function writeFileRetry(abs, data, attempts = 10) {
  let lastError;
  for (let i = 0; i < attempts; i++) {
    try {
      try {
        fs.chmodSync(abs, 0o666);
      } catch {
        // new file
      }
      fs.writeFileSync(abs, data);
      return;
    } catch (error) {
      lastError = error;
      try {
        fs.unlinkSync(abs);
      } catch {
        // still locked
      }
      await new Promise((r) => setTimeout(r, 300 * (i + 1)));
    }
  }
  throw lastError;
}

/** Reject catalogue donors that still have unstamp corner rectangles. */
async function sourceHasCornerPatch(filePath) {
  try {
    const { data, info } = await sharp(filePath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const { width: w, height: h, channels: ch } = info;
    if (w < 40 || h < 40) return false;
    const at = (x, y) => {
      const i = (y * w + x) * ch;
      return [data[i], data[i + 1], data[i + 2]];
    };
    const same = (a, b, tol = 6) =>
      Math.abs(a[0] - b[0]) <= tol &&
      Math.abs(a[1] - b[1]) <= tol &&
      Math.abs(a[2] - b[2]) <= tol;
    const c0 = at(2, 2);
    let sw = 0;
    while (sw < w && same(at(Math.min(w - 1, sw), 2), c0)) sw += 1;
    let sh = 0;
    while (sh < h && same(at(2, Math.min(h - 1, sh)), c0)) sh += 1;
    const side = Math.min(sw, sh);
    const minDim = Math.min(w, h);
    if (side < Math.max(28, Math.round(minDim * 0.14))) return false;
    if (side > Math.round(minDim * 0.8)) return false;
    let match = 0;
    for (let y = 0; y < side; y++) {
      for (let x = 0; x < side; x++) {
        if (same(at(x, y), c0)) match += 1;
      }
    }
    if (match / (side * side) < 0.97) return false;
    let jumps = 0;
    let n = 0;
    const step = Math.max(1, Math.floor(side / 16));
    for (let i = 0; i < side; i += step) {
      const a = at(Math.max(0, side - 3), i);
      const b = at(Math.min(w - 1, side + 2), i);
      jumps +=
        Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
      n += 1;
    }
    return n ? jumps / n >= 15 : false;
  } catch {
    return true;
  }
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrap(title, max = 15) {
  const words = String(title).split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (next.length > max && cur) {
      lines.push(cur);
      cur = w;
    } else cur = next;
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 3);
}

function hashHue(input) {
  const hex = crypto.createHash("md5").update(input).digest("hex");
  return parseInt(hex.slice(0, 6), 16) % 360;
}

function themeFor(name, category) {
  const n = name.toLowerCase();

  if (category === "sports" || /football|soccer|nba|basketball|tennis|esport|cricket|badminton|parlay|handicap|premier|champions|golf|rugby|volleyball|boxing|mma|motor/.test(n)) {
    return {
      c0: "#0b1f12",
      c1: "#14532d",
      c2: "#052e16",
      accent: "#4ade80",
      motif: "sports",
      label: "SPORTS",
    };
  }
  if (category === "crash" || /aviator|jet|crash|mines|plinko|limbo|balloon|dice|spaceman/.test(n)) {
    return {
      c0: "#0c1424",
      c1: "#1d4ed8",
      c2: "#082f49",
      accent: "#38bdf8",
      motif: "crash",
      label: "CRASH",
    };
  }
  if (category === "live-casino" || category === "table" || /baccarat|roulette|blackjack|dragon tiger|crazy time|dream catcher|monopoly|sic ?bo|fan tan|andar/.test(n)) {
    return {
      c0: "#14080c",
      c1: "#7f1d1d",
      c2: "#1a0a0c",
      accent: "#E50914",
      motif: "live",
      label: "LIVE",
    };
  }
  if (category === "fishing" || /fish|ocean|hook|mermaid|bombing/.test(n)) {
    return {
      c0: "#041526",
      c1: "#0369a1",
      c2: "#0c4a6e",
      accent: "#22d3ee",
      motif: "fishing",
      label: "FISHING",
    };
  }
  if (/mahjong|麻将/.test(n)) {
    return { c0: "#052e16", c1: "#166534", c2: "#14532d", accent: "#fbbf24", motif: "mahjong", label: "SLOTS" };
  }
  if (/tiger|虎|neko|cat|猫|rabbit|兔|ox|牛|dragon|龙|phoenix|麒麟|qilin/.test(n)) {
    return { c0: "#431407", c1: "#c2410c", c2: "#7c2d12", accent: "#fbbf24", motif: "fortune", label: "SLOTS" };
  }
  if (/bonanza|candy|sugar|fruit|sweet|honey|gem|diamond|gold|treasure|aztec|olympus|princess|joker|dead|book|wolf|bass|dog house|fire|mask/.test(n)) {
    return { c0: "#2a0a1f", c1: "#9d174d", c2: "#4a044e", accent: "#f472b6", motif: "slots", label: "SLOTS" };
  }
  if (category === "poker" || category === "arcade" || category === "lottery") {
    return { c0: "#1e1b4b", c1: "#6d28d9", c2: "#312e81", accent: "#a78bfa", motif: "arcade", label: category.toUpperCase() };
  }

  const hue = hashHue(name);
  return {
    c0: `hsl(${hue} 40% 8%)`,
    c1: `hsl(${(hue + 28) % 360} 65% 32%)`,
    c2: `hsl(${(hue + 50) % 360} 45% 14%)`,
    accent: `hsl(${(hue + 12) % 360} 85% 55%)`,
    motif: "slots",
    label: "SLOTS",
  };
}

function motifSvg(motif, accent) {
  if (motif === "sports") {
    return `
      <circle cx="340" cy="180" r="78" fill="none" stroke="${accent}" stroke-width="10" opacity="0.55"/>
      <path d="M340 102 v156 M262 180 h156" stroke="${accent}" stroke-width="6" opacity="0.4"/>
      <ellipse cx="140" cy="220" rx="54" ry="34" fill="${accent}" opacity="0.22"/>`;
  }
  if (motif === "crash") {
    return `
      <path d="M80 420 C180 300, 260 240, 400 120" fill="none" stroke="${accent}" stroke-width="10" stroke-linecap="round" opacity="0.7"/>
      <circle cx="400" cy="120" r="16" fill="${accent}"/>
      <path d="M360 140 l50 -30 l-10 40 z" fill="${accent}" opacity="0.85"/>`;
  }
  if (motif === "live") {
    return `
      <circle cx="340" cy="170" r="70" fill="#0a0a0a" stroke="${accent}" stroke-width="8"/>
      <circle cx="340" cy="170" r="8" fill="${accent}"/>
      <rect x="90" y="250" width="70" height="95" rx="10" fill="${accent}" opacity="0.35"/>
      <rect x="175" y="250" width="70" height="95" rx="10" fill="#111" stroke="${accent}" stroke-width="3" opacity="0.7"/>
      <rect x="260" y="250" width="70" height="95" rx="10" fill="${accent}" opacity="0.2"/>`;
  }
  if (motif === "fishing") {
    return `
      <path d="M90 210 C160 140, 250 140, 320 210 C250 280, 160 280, 90 210 Z" fill="${accent}" opacity="0.35"/>
      <circle cx="280" cy="200" r="10" fill="#fff" opacity="0.8"/>
      <path d="M60 420 Q180 300 420 360" fill="none" stroke="${accent}" stroke-width="5" opacity="0.45"/>`;
  }
  if (motif === "mahjong") {
    return `
      <rect x="100" y="140" width="70" height="95" rx="8" fill="#f8fafc" opacity="0.9"/>
      <rect x="185" y="155" width="70" height="95" rx="8" fill="#fef3c7" opacity="0.9"/>
      <rect x="270" y="140" width="70" height="95" rx="8" fill="#f8fafc" opacity="0.9"/>
      <text x="118" y="200" font-size="34" fill="#166534">中</text>
      <text x="203" y="215" font-size="34" fill="#b45309">發</text>
      <text x="288" y="200" font-size="34" fill="#b91c1c">白</text>`;
  }
  if (motif === "fortune") {
    return `
      <circle cx="330" cy="170" r="78" fill="${accent}" opacity="0.25"/>
      <path d="M290 200 q40 -90 80 0 q-40 50 -80 0" fill="${accent}" opacity="0.55"/>
      <circle cx="140" cy="240" r="36" fill="${accent}" opacity="0.35"/>`;
  }
  // slots / default
  return `
    <rect x="95" y="140" width="72" height="110" rx="12" fill="#111" stroke="${accent}" stroke-width="4"/>
    <rect x="185" y="140" width="72" height="110" rx="12" fill="#111" stroke="${accent}" stroke-width="4"/>
    <rect x="275" y="140" width="72" height="110" rx="12" fill="#111" stroke="${accent}" stroke-width="4"/>
    <circle cx="131" cy="195" r="16" fill="${accent}" opacity="0.85"/>
    <circle cx="221" cy="195" r="16" fill="${accent}" opacity="0.55"/>
    <circle cx="311" cy="195" r="16" fill="${accent}" opacity="0.85"/>`;
}

async function makeUniqueCover({ title, provider, category, seedKey }) {
  const theme = themeFor(title, category);
  const lines = wrap(title);
  const titleSvg = lines
    .map(
      (line, i) =>
        `<text x="36" y="${430 + i * 38}" font-family="Arial Black, Arial, sans-serif" font-size="28" font-weight="900" fill="#fff">${escapeXml(line)}</text>`,
    )
    .join("");
  const hueShift = hashHue(seedKey) % 40;
  const svg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1" gradientTransform="rotate(${hueShift})">
      <stop offset="0%" stop-color="${theme.c0}"/>
      <stop offset="55%" stop-color="${theme.c1}"/>
      <stop offset="100%" stop-color="${theme.c2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="72%" cy="22%" r="55%">
      <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${theme.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${motifSvg(theme.motif, theme.accent)}
  <rect x="28" y="28" rx="999" height="28" width="${Math.min(210, 48 + theme.label.length * 10)}" fill="rgba(0,0,0,0.55)" stroke="${theme.accent}" stroke-opacity="0.55"/>
  <text x="42" y="47" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#fff">${theme.label}</text>
  <rect x="28" y="330" rx="999" height="26" width="${Math.min(240, 48 + provider.length * 8)}" fill="rgba(0,0,0,0.55)" stroke="${theme.accent}" stroke-opacity="0.45"/>
  <text x="42" y="348" font-family="Arial, sans-serif" font-size="11" font-weight="800" fill="#fff">${escapeXml(provider.toUpperCase())}</text>
  ${titleSvg}
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="${theme.accent}"/>
</svg>`);

  return sharp(svg).webp({ quality: 88 }).toBuffer();
}

function findCatalogueThumb(gameName) {
  const needle = slugify(gameName);
  if (!needle) return null;

  let best = null;
  for (const game of catalogue) {
    const en = slugify(game.name?.en || "");
    const slug = slugify(game.slug || "");
    const exact = en === needle || slug === needle;
    const soft =
      en.includes(needle) ||
      needle.includes(en) ||
      slug.includes(needle) ||
      needle.includes(slug);
    if (!exact && !soft) continue;
    if (en.length < 4 && !exact) continue;

    const abs = path.join(ROOT, "public", String(game.image || "").replace(/^\//, ""));
    if (!fs.existsSync(abs)) continue;
    // Prefer exact matches; skip shared CTA placeholders.
    if (String(game.image).includes("/cta/")) continue;
    if (exact) return abs;
    if (!best) best = abs;
  }
  return best;
}

/** Minimal inline seed list (mirrors src/data/provider-game-seeds.ts keys + titles). */
function loadSeedsFromSource() {
  const src = fs.readFileSync(
    path.join(ROOT, "src/data/provider-game-seeds.ts"),
    "utf8",
  );
  const providers = {};
  // Supports both "pg-soft": [ and evolution: [
  const blockRe =
    /(?:^|\n)\s*(?:"([^"]+)"|([a-z0-9-]+)):\s*\[([\s\S]*?)\n\s*\],/g;
  let match;
  while ((match = blockRe.exec(src))) {
    const slug = match[1] || match[2];
    if (!slug || slug === "ProviderGameSeed") continue;
    const body = match[3];
    const names = [...body.matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]);
    const categories = [...body.matchAll(/category:\s*"([^"]+)"/g)].map(
      (m) => m[1],
    );
    if (names.length === 0) continue;
    providers[slug] = names.map((name, i) => ({
      name,
      category: categories[i] || "slots",
    }));
  }
  return providers;
}

const providerMeta = {
  "pragmatic-play": { id: "pragmatic-play", name: "Pragmatic Play" },
  "pg-soft": { id: "pg-soft", name: "PG Soft" },
  evolution: { id: "evolution", name: "Evolution" },
  jili: { id: "jili", name: "JILI" },
  jdb: { id: "jdb", name: "JDB" },
  "sexy-gaming": { id: "sexy-baccarat", name: "Sexy Gaming" },
  "dream-gaming": { id: "dream-gaming", name: "Dream Gaming" },
  microgaming: { id: "microgaming", name: "Microgaming" },
  "playn-go": { id: "playn-go", name: "Play'n GO" },
  spribe: { id: "spribe", name: "Spribe" },
  spadegaming: { id: "spadegaming", name: "Spadegaming" },
  habanero: { id: "habanero", name: "Habanero" },
  sbo: { id: "sbo", name: "SBO Sports" },
};

async function ensureProviderPlaceholders() {
  const dir = path.join(ROOT, "public/images/games/_providers");
  fs.mkdirSync(dir, { recursive: true });
  for (const [slug, meta] of Object.entries(providerMeta)) {
    const dest = path.join(dir, `${slug}.webp`);
    if (fs.existsSync(dest) && !FORCE) continue;
    const buf = await makeUniqueCover({
      title: meta.name,
      provider: meta.name,
      category: slug === "sbo" ? "sports" : "slots",
      seedKey: `placeholder-${slug}`,
    });
    fs.writeFileSync(dest, buf);
    console.log("placeholder", slug);
  }
}

async function main() {
  const seeds = loadSeedsFromSource();
  let copied = 0;
  let generated = 0;
  let skipped = 0;

  await ensureProviderPlaceholders();

  for (const [slug, titles] of Object.entries(seeds)) {
    const meta = providerMeta[slug];
    if (!meta) continue;
    const folder = PROVIDER_FOLDERS[slug] || slugify(slug);
    const outDir = path.join(ROOT, "public/images/games", folder);
    fs.mkdirSync(outDir, { recursive: true });

    for (const item of titles) {
      const fileSlug = slugify(item.name);
      const dest = path.join(outDir, `${fileSlug}.webp`);
      if (fs.existsSync(dest) && !FORCE) {
        skipped += 1;
        continue;
      }

      const matched = findCatalogueThumb(item.name);
      // Prefer sibling original under the matched catalogue path when available.
      // Never copy thumbs that still have baked corner-patch rectangles.
      if (matched && !(await sourceHasCornerPatch(matched))) {
        const dir = path.dirname(matched);
        const base = path.basename(matched, path.extname(matched));
        let source = matched;
        for (const ext of [".jpg", ".jpeg", ".png"]) {
          const candidate = path.join(dir, `${base}${ext}`);
          if (fs.existsSync(candidate) && !(await sourceHasCornerPatch(candidate))) {
            source = candidate;
            break;
          }
        }
        if (!(await sourceHasCornerPatch(source))) {
          const clean = await sharp(source).webp({ quality: 90 }).toBuffer();
          await writeFileRetry(dest, clean);
          copied += 1;
          console.log("copy", folder, fileSlug);
          continue;
        }
      }

      const buf = await makeUniqueCover({
        title: item.name,
        provider: meta.name,
        category: item.category,
        seedKey: `${slug}:${fileSlug}`,
      });
      await writeFileRetry(dest, buf);
      generated += 1;
      console.log("gen", folder, fileSlug);
    }
  }

  // Repair catalogue rows that still point at shared CTA artwork.
  let repaired = 0;
  for (const game of catalogue) {
    if (!String(game.image || "").includes("/cta/")) continue;
    const rel = String(game.image).replace(/^\//, "");
    const dest = path.join(ROOT, "public", rel);
    // Rewrite image path conceptually by writing a unique file beside provider folder
    const folder = game.providerFolder || game.providerId || "misc";
    const fileSlug = slugify(game.slug || game.name?.en || game.id);
    const uniqueRel = path.join("images/games", folder, `${fileSlug}.webp`);
    const uniqueAbs = path.join(ROOT, "public", uniqueRel);
    fs.mkdirSync(path.dirname(uniqueAbs), { recursive: true });
    if (!fs.existsSync(uniqueAbs)) {
      const buf = await makeUniqueCover({
        title: game.name?.en || fileSlug,
        provider: game.providerName || game.providerId || folder,
        category: game.category || "slots",
        seedKey: `catalogue:${game.id}`,
      });
      fs.writeFileSync(uniqueAbs, buf);
    }
    game.image = `/${uniqueRel.replace(/\\/g, "/")}`;
    repaired += 1;
  }
  if (repaired > 0) {
    fs.writeFileSync(
      path.join(ROOT, "src/data/games-catalogue.json"),
      JSON.stringify(catalogue, null, 2) + "\n",
    );
  }

  console.log(
    JSON.stringify({ copied, generated, skipped, repaired }, null, 2),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

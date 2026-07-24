import fs from "node:fs";
import path from "node:path";

const files = [
  "src/data/providers.ts",
  "src/data/games.ts",
  "src/data/promotions.ts",
  "src/data/blog.ts",
  "src/data/news.ts",
  "src/data/payments.ts",
  "src/config/site.ts",
];

const refs = new Set([
  "/logo/tpower-mark.png",
  "/logo/tpower-logo.png",
  "/images/hero.webp",
  "/images/app-preview.webp",
  "/images/404.webp",
  "/icons/favicon.ico",
  "/icons/favicon-32.png",
  "/icons/apple-touch-icon.png",
  "/og/default.webp",
]);

for (const f of files) {
  const s = fs.readFileSync(f, "utf8");
  for (const m of s.matchAll(/["'](\/(?:logo|icons|providers|games|blog|images|og)\/[^"']+)["']/g)) {
    refs.add(m[1]);
  }
}

const missing = [];
for (const r of [...refs].sort()) {
  const p = path.join("public", r.replace(/^\//, ""));
  if (!fs.existsSync(p)) missing.push(r);
}

console.log("refs", refs.size);
console.log("missing", missing.length);
for (const m of missing) console.log("MISS", m);

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else if (ent.name.endsWith(".svg")) acc.push(full);
  }
  return acc;
}

const svgs = walk("public");
console.log("svg leftovers", svgs.length);
process.exit(missing.length ? 1 : 0);

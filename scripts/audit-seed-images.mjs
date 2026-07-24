import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

const src = fs.readFileSync("src/data/provider-game-seeds.ts", "utf8");
const folders = {
  "pg-soft": "pgsoft",
  "dream-gaming": "dream-gaming",
  spribe: "spribe",
  microgaming: "microgaming",
  "playn-go": "playngo",
  habanero: "habanero",
  sbo: "sbo",
};

async function classify(abs) {
  if (!fs.existsSync(abs)) return "MISSING";
  const meta = await sharp(abs).metadata();
  const size = fs.statSync(abs).size;
  if (meta.width === 480 && meta.height === 640 && size < 20000) {
    return "GENERATED";
  }
  return `REAL ${meta.width}x${meta.height}`;
}

for (const [prov, folder] of Object.entries(folders)) {
  const key = prov.includes("-") ? `"${prov}"` : `\n  ${prov}:`;
  const idx = src.indexOf(key);
  if (idx < 0) {
    console.log("no block", prov);
    continue;
  }
  const slice = src.slice(idx, idx + 3500);
  const names = [...slice.matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]);
  console.log(`\n## ${prov}`);
  let miss = 0;
  let gen = 0;
  let real = 0;
  for (const name of names) {
    // stop if we accidentally walked into next provider block names that look wrong
    const file = `${slugify(name)}.webp`;
    const abs = path.join("public/images/games", folder, file);
    const c = await classify(abs);
    if (c === "MISSING") miss += 1;
    else if (c === "GENERATED") gen += 1;
    else real += 1;
    if (c === "MISSING" || c === "GENERATED") {
      console.log(" ", c.padEnd(10), name, "->", file);
    }
  }
  console.log({ real, gen, miss, total: names.length });
}

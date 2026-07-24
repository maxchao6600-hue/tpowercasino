/**
 * Sexy Gaming resolver — AE SEXY vendor shelf (API JSON image field).
 *
 * Official: AE SEXY vendor_id=25 → Baccarat Classic, DragonTiger, Roulette.
 * Name matching is exact against shelf rows only (no cross-vendor reuse).
 */
import fs from "node:fs";
import path from "node:path";
import { fetchVendors, fetchVendorShelf } from "../lib/tpower-api.mjs";
import { downloadImage, writeWebp } from "../lib/download.mjs";
import { slugify } from "../lib/slug.mjs";
import { writeSeedsBlock, setSeedOverrides } from "../lib/seeds.mjs";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "scripts/providers/sexy-gaming");
const VENDOR_NAME = "AE SEXY";

const NAME_ZH = {
  "Baccarat Classic": "经典百家乐",
  DragonTiger: "龙虎",
  Roulette: "轮盘",
};

export default async function resolve() {
  fs.mkdirSync(OUT, { recursive: true });
  const vendors = await fetchVendors();
  const vendor = vendors.find((v) => v.name === VENDOR_NAME);
  if (!vendor) throw new Error(`${VENDOR_NAME} missing from vendor list`);

  const shelf = await fetchVendorShelf(vendor.id);
  const withImage = shelf.filter((g) => g.image);
  const games = [];

  for (const g of withImage) {
    const slug = slugify(g.name);
    const rel = `/images/games/sexy-gaming/${slug}.webp`;
    const abs = path.join(ROOT, "public", rel.replace(/^\//, ""));
    const dl = await downloadImage(g.image);
    if (!dl) throw new Error(`Download failed: ${g.name} ${g.image}`);
    await writeWebp(abs, dl.buf);
    games.push({
      seedName: g.name,
      slug,
      officialId: g.id,
      imageUrl: g.image,
      localPath: rel,
    });
  }

  const officialSeeds = games.map((g, i) => ({
    name: g.seedName,
    nameZh: NAME_ZH[g.seedName] || g.seedName,
    category: "live-casino",
    featured: i === 0,
  }));

  writeSeedsBlock("sexy-gaming", officialSeeds, [
    "Sexy Gaming maps to official AE SEXY vendor shelf on www.tpower3.com.",
    "Only games returned by frontend/api/game/list with image URLs are shown.",
  ]);

  setSeedOverrides(
    "sexy-gaming",
    "sexy-gaming",
    Object.fromEntries(games.map((g) => [g.slug, g.localPath])),
  );

  const manifest = {
    provider: "sexy-gaming",
    resolvedAt: new Date().toISOString(),
    sourceType: "api-shelf-json",
    officialVendors: [{ name: VENDOR_NAME, id: vendor.id }],
    thumbnailMechanism:
      "frontend/api/game/list → data.games[].image (GCS CDN PNG)",
    games,
    accuracy: games.length === withImage.length ? "100%" : "FAIL",
  };

  fs.writeFileSync(path.join(OUT, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  console.log("Sexy Gaming resolver:", manifest.accuracy, `(${games.length} games)`);
  return manifest;
}

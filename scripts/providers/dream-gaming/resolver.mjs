/**
 * Dream Gaming resolver — single-game vendor shelf (API JSON image field).
 *
 * Official: DREAMGAMING vendor_id=29 → one row "DG Live" with GCS PNG thumb.
 * Per-table invented seeds are NOT on the official shelf.
 */
import fs from "node:fs";
import path from "node:path";
import { fetchVendors, fetchVendorShelf } from "../lib/tpower-api.mjs";
import { downloadImage, writeWebp } from "../lib/download.mjs";
import { slugify } from "../lib/slug.mjs";
import { writeSeedsBlock, setSeedOverrides } from "../lib/seeds.mjs";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "scripts/providers/dream-gaming");
const FOLDER = path.join(ROOT, "public/images/games/dream-gaming");
const VENDOR_NAME = "DREAMGAMING";

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
    const rel = `/images/games/dream-gaming/${slug}.webp`;
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

  const officialSeeds = games.map((g) => ({
    name: g.seedName,
    nameZh:
      g.seedName === "DG Live" ? "DG 真人大厅" : g.seedName,
    category: "live-casino",
    featured: true,
    new: true,
  }));

  writeSeedsBlock("dream-gaming", officialSeeds, [
    "Dream Gaming on TPOWER exposes a single lobby card (DG Live), not per-table shelves.",
    `Synced from ${VENDOR_NAME} frontend/api/game/list JSON image URLs.`,
  ]);

  const overrides = Object.fromEntries(
    games.map((g) => [g.slug, g.localPath]),
  );
  setSeedOverrides("dream-gaming", "dream-gaming", overrides);

  const manifest = {
    provider: "dream-gaming",
    resolvedAt: new Date().toISOString(),
    sourceType: "api-shelf-json",
    officialVendors: [{ name: VENDOR_NAME, id: vendor.id }],
    thumbnailMechanism:
      "frontend/api/game/list → data.games[].image (direct HTTPS URL, not lazy DOM)",
    games,
    accuracy: games.length === withImage.length ? "100%" : "FAIL",
  };

  fs.writeFileSync(path.join(OUT, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  console.log("Dream Gaming resolver:", manifest.accuracy, `(${games.length} games)`);
  return manifest;
}

/**
 * Microgaming-specific TPOWER probe.
 * Microgaming is NOT a vendor on the playable lobby — scan all shelves for seed titles.
 *
 * Run: node scripts/providers/run.mjs microgaming probe
 */
import fs from "node:fs";
import path from "node:path";
import { fetchVendors, fetchVendorShelf } from "../lib/tpower-api.mjs";
import { readSeedNames } from "../lib/seeds.mjs";
import { normName } from "../lib/slug.mjs";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "scripts/providers/microgaming");

fs.mkdirSync(OUT, { recursive: true });

const seedTitles = readSeedNames("microgaming");
console.log("=== Microgaming probe ===");
console.log("Local seed titles:", seedTitles.length);

const vendors = await fetchVendors();
const mgVendor = vendors.find((v) => /microgaming/i.test(v.name));
console.log(
  "Vendor named Microgaming:",
  mgVendor ? `${mgVendor.name} (id ${mgVendor.id})` : "NOT FOUND",
);

const exactMatches = [];
const partialMatches = [];
let totalGames = 0;

for (const v of vendors) {
  try {
    const games = await fetchVendorShelf(v.id);
    totalGames += games.length;
    for (const title of seedTitles) {
      const n = normName(title);
      for (const g of games) {
        const gn = normName(g.name);
        if (gn === n) {
          exactMatches.push({
            seed: title,
            vendor: v.name,
            vendor_id: v.id,
            id: g.id,
            name: g.name,
            image: g.image,
          });
        } else if (gn.includes(n) || n.includes(gn)) {
          partialMatches.push({
            seed: title,
            vendor: v.name,
            name: g.name,
            image: g.image,
          });
        }
      }
    }
  } catch (err) {
    console.log("  shelf error", v.name, err.message);
  }
}

// PLAYTECH-SLOT often hosts third-party slots — check image URL for microgaming hints
const pt = vendors.find((v) => v.name === "PLAYTECH-SLOT");
let ptMgUrls = 0;
if (pt) {
  const games = await fetchVendorShelf(pt.id);
  ptMgUrls = games.filter((g) => /microgaming|mgaming|mg_/i.test(`${g.image}${g.name}`))
    .length;
}

const report = {
  generatedAt: new Date().toISOString(),
  officialDomain: "www.tpower3.com",
  seedTitleCount: seedTitles.length,
  microgamingVendor: mgVendor || null,
  vendorsScanned: vendors.length,
  totalGamesIndexed: totalGames,
  playtechSlotMgUrlHints: ptMgUrls,
  exactSeedMatches: exactMatches,
  partialNameCollisions: partialMatches.slice(0, 20),
  sourceType:
    mgVendor || exactMatches.length
      ? "api-shelf-json"
      : "none",
  conclusion:
    mgVendor || exactMatches.length
      ? "Microgaming titles found on official shelves — resolver can target those vendor IDs."
      : "No Microgaming vendor and zero exact seed-title matches across all 53 official shelves.",
};

fs.writeFileSync(path.join(OUT, "probe-report.json"), JSON.stringify(report, null, 2));

console.log("Exact matches:", exactMatches.length);
console.log("Partial collisions (ignored):", partialMatches.length);
console.log("PLAYTECH-SLOT MG URL hints:", ptMgUrls);
console.log("Conclusion:", report.conclusion);
console.log("Wrote", path.join(OUT, "probe-report.json"));

export default async function probe() {
  return report;
}

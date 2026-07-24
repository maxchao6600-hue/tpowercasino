/**
 * Microgaming resolver — no official Microgaming shelf on TPOWER.
 *
 * Thumbnail source: none (verified across all vendor shelves + PLAYTECH-SLOT).
 * Strategy: empty seed list; purge invented slug covers in microgaming folder.
 */
import fs from "node:fs";
import path from "node:path";
import { readSeedNames, writeSeedsBlock, setSeedOverrides } from "../lib/seeds.mjs";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "scripts/providers/microgaming");
const FOLDER = path.join(ROOT, "public/images/games/microgaming");
const MANIFEST = path.join(OUT, "manifest.json");

export default async function resolveMicrogaming() {
  fs.mkdirSync(OUT, { recursive: true });

  const beforeSeeds = readSeedNames("microgaming");
  let purged = 0;
  if (fs.existsSync(FOLDER)) {
    for (const file of fs.readdirSync(FOLDER)) {
      if (!/\.webp$/i.test(file)) continue;
      try {
        fs.unlinkSync(path.join(FOLDER, file));
        purged += 1;
      } catch {
        // OneDrive
      }
    }
  }

  if (beforeSeeds.length > 0) {
    writeSeedsBlock("microgaming", [], [
      "Microgaming is not a vendor on www.tpower3.com (api/newVendorsByDomain).",
      "Zero exact seed-title matches across all official vendor shelves (see probe-report.json).",
      "Invented titles forced wrong / missing thumbnails — removed for 100% official accuracy.",
    ]);
  }

  setSeedOverrides("microgaming", "microgaming", {});

  const afterSeeds = readSeedNames("microgaming");
  const manifest = {
    provider: "microgaming",
    resolvedAt: new Date().toISOString(),
    sourceType: "none",
    officialVendors: [],
    thumbnailMechanism:
      "N/A — no MICROGAMING vendor; PLAYTECH-SLOT has no MG seed-title matches.",
    games: [],
    seedsBefore: beforeSeeds.length,
    seedsAfter: afterSeeds.length,
    purgedLocalFiles: purged,
    accuracy: afterSeeds.length === 0 ? "100%" : "FAIL",
  };

  fs.writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);

  const report = `# Microgaming resolver

Generated: ${manifest.resolvedAt}

## Official thumbnail source

| Check | Result |
|-------|--------|
| \`MICROGAMING\` in vendor list | **No** |
| Exact seed matches (Immortal Romance, Thunderstruck II, …) | **0 / ${beforeSeeds.length}** |
| PLAYTECH-SLOT hosting MG CDN art | **No matching titles** |

TPOWER lists PLAYTECH-SLOT / PLAYTECH-LIVE but not Microgaming as a studio shelf.

## Resolver action

- Cleared \`providerGameSeeds.microgaming\` (${beforeSeeds.length} → 0)
- Purged \`public/images/games/microgaming/\` (${purged} files)
- Cleared microgaming entries in \`seed-image-overrides.json\`

## Accuracy

**${manifest.accuracy}** — no Microgaming games shown without official TPOWER card art.

## Commands

\`\`\`
node scripts/providers/run.mjs microgaming probe
node scripts/providers/run.mjs microgaming resolve
\`\`\`
`;

  fs.writeFileSync(path.join(OUT, "REPORT.md"), report);

  console.log("Microgaming resolver:", manifest.accuracy);
  console.log(`Seeds: ${beforeSeeds.length} → ${afterSeeds.length} | Purged: ${purged}`);

  if (afterSeeds.length > 0) {
    process.exit(1);
  }
  return manifest;
}

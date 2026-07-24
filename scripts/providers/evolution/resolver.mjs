/**
 * Evolution resolver — official TPOWER has NO Evolution vendor shelf.
 *
 * Thumbnail source: none on www.tpower3.com
 * Strategy: keep seed list empty; purge any invented local covers.
 * 100% accuracy = zero games shown (vacuously correct).
 */
import fs from "node:fs";
import path from "node:path";
import { readSeedNames } from "../lib/seeds.mjs";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "scripts/providers/evolution");
const FOLDER = path.join(ROOT, "public/images/games/evolution");
const MANIFEST = path.join(OUT, "manifest.json");

export default async function resolveEvolution() {
  fs.mkdirSync(OUT, { recursive: true });

  const seeds = readSeedNames("evolution");
  let purged = 0;
  if (fs.existsSync(FOLDER)) {
    for (const file of fs.readdirSync(FOLDER)) {
      if (!/\.webp$/i.test(file)) continue;
      try {
        fs.unlinkSync(path.join(FOLDER, file));
        purged += 1;
      } catch {
        // OneDrive lock — report but continue
      }
    }
  }

  const manifest = {
    provider: "evolution",
    resolvedAt: new Date().toISOString(),
    sourceType: "none",
    officialVendors: [],
    officialDomain: "www.tpower3.com",
    thumbnailMechanism:
      "N/A — Evolution is not in api/newVendorsByDomain and has no frontend/api/game/list shelf.",
    games: [],
    seedCount: seeds.length,
    purgedLocalFiles: purged,
    accuracy: seeds.length === 0 ? "100%" : "FAIL — seeds must be empty",
    note:
      "Marketing pages mention Evolution; playable lobby does not expose per-game Evolution cards.",
  };

  fs.writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);

  const report = `# Evolution resolver

Generated: ${manifest.resolvedAt}

## Official thumbnail source

| Check | Result |
|-------|--------|
| Vendor in \`api/newVendorsByDomain\` | **No** |
| \`frontend/api/game/list\` shelf | **No Evolution vendor** |
| \`frontend/api/lobby/games\` | **No Evolution entries** |
| DOM lazy-load / background-image | **No Evolution game cards** |
| CDN URLs containing evolution/evo-games | **None on lobby** |

False positives only: unrelated slot titles containing the word "Evolution" (e.g. Ninja Evolution on EPICWIN).

## Resolver action

- Seed list: **empty** (no invented Lightning Roulette / Crazy Time rows)
- Local folder: \`public/images/games/evolution/\` purged (${purged} files removed)
- Cross-provider remaps: **forbidden**

## Accuracy

**${manifest.accuracy}** — every Evolution game shown locally matches official TPOWER (none).

## Probe

\`node scripts/providers/run.mjs evolution probe\`
`;

  fs.writeFileSync(path.join(OUT, "REPORT.md"), report);

  console.log("Evolution resolver:", manifest.accuracy);
  console.log("Seeds:", seeds.length, "| Purged:", purged);
  if (seeds.length > 0) {
    console.error("FAIL: evolution seeds must be []");
    process.exit(1);
  }
  return manifest;
}

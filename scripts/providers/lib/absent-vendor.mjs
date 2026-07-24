/**
 * Providers with no official TPOWER vendor shelf — shared purge helper only.
 * Each resolver still owns its own probe + matching rules.
 */
import fs from "node:fs";
import path from "node:path";
import { readSeedNames, writeSeedsBlock, setSeedOverrides } from "./seeds.mjs";

export async function resolveAbsentVendor({
  providerSlug,
  providerId,
  imageFolder,
  outDir,
  commentLines,
  sourceNote,
}) {
  fs.mkdirSync(outDir, { recursive: true });
  const folder = path.join(process.cwd(), "public/images/games", imageFolder);
  const beforeSeeds = readSeedNames(providerSlug);
  let purged = 0;
  if (fs.existsSync(folder)) {
    for (const file of fs.readdirSync(folder)) {
      if (!/\.webp$/i.test(file)) continue;
      try {
        fs.unlinkSync(path.join(folder, file));
        purged += 1;
      } catch {
        // OneDrive
      }
    }
  }
  if (beforeSeeds.length > 0) {
    writeSeedsBlock(providerSlug, [], commentLines);
  }
  setSeedOverrides(providerSlug, providerId, {});
  const afterSeeds = readSeedNames(providerSlug);
  const manifest = {
    provider: providerSlug,
    resolvedAt: new Date().toISOString(),
    sourceType: "none",
    officialVendors: [],
    thumbnailMechanism: sourceNote,
    games: [],
    seedsBefore: beforeSeeds.length,
    seedsAfter: afterSeeds.length,
    purgedLocalFiles: purged,
    accuracy: afterSeeds.length === 0 ? "100%" : "FAIL",
  };
  fs.writeFileSync(
    path.join(outDir, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  return manifest;
}

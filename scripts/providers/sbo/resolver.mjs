import path from "node:path";
import { resolveAbsentVendor } from "../lib/absent-vendor.mjs";

const OUT = path.join(process.cwd(), "scripts/providers/sbo");

export default async function resolve() {
  const manifest = await resolveAbsentVendor({
    providerSlug: "sbo",
    providerId: "sbo",
    imageFolder: "sbo",
    outDir: OUT,
    commentLines: [
      "SBO Sports is not a vendor on www.tpower3.com (sports books use M9BET, WBET, etc.).",
    ],
    sourceNote: "N/A — no SBO vendor shelf with per-game thumbnails.",
  });
  console.log("SBO resolver:", manifest.accuracy);
  console.log(`Seeds: ${manifest.seedsBefore} → ${manifest.seedsAfter}`);
  if (manifest.seedsAfter > 0) process.exit(1);
  return manifest;
}

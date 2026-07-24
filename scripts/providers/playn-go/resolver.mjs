import path from "node:path";
import { resolveAbsentVendor } from "../lib/absent-vendor.mjs";

const OUT = path.join(process.cwd(), "scripts/providers/playn-go");

export default async function resolve() {
  const manifest = await resolveAbsentVendor({
    providerSlug: "playn-go",
    providerId: "playn-go",
    imageFolder: "playngo",
    outDir: OUT,
    commentLines: [
      "Play'n GO is not a vendor on www.tpower3.com.",
      "Book of Dead and other seed titles have zero exact matches on official shelves.",
    ],
    sourceNote: "N/A — no PLAYNGO / PLAY'N GO vendor in api/newVendorsByDomain.",
  });
  console.log("Play'n GO resolver:", manifest.accuracy);
  console.log(`Seeds: ${manifest.seedsBefore} → ${manifest.seedsAfter}`);
  if (manifest.seedsAfter > 0) process.exit(1);
  return manifest;
}

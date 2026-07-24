import path from "node:path";
import { resolveAbsentVendor } from "../lib/absent-vendor.mjs";

const OUT = path.join(process.cwd(), "scripts/providers/spribe");

export default async function resolve() {
  const manifest = await resolveAbsentVendor({
    providerSlug: "spribe",
    providerId: "spribe",
    imageFolder: "spribe",
    outDir: OUT,
    commentLines: [
      "Spribe is not a vendor on www.tpower3.com.",
      "Aviator and other Spribe crash titles are not on official shelves.",
    ],
    sourceNote: "N/A — no SPRIBE vendor in api/newVendorsByDomain.",
  });
  console.log("Spribe resolver:", manifest.accuracy);
  console.log(`Seeds: ${manifest.seedsBefore} → ${manifest.seedsAfter}`);
  if (manifest.seedsAfter > 0) process.exit(1);
  return manifest;
}

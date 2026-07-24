import path from "node:path";
import { resolveAbsentVendor } from "../lib/absent-vendor.mjs";

const OUT = path.join(process.cwd(), "scripts/providers/habanero");

export default async function resolve() {
  const manifest = await resolveAbsentVendor({
    providerSlug: "habanero",
    providerId: "habanero",
    imageFolder: "habanero",
    outDir: OUT,
    commentLines: [
      "Habanero is not a vendor on www.tpower3.com.",
    ],
    sourceNote: "N/A — no HABANERO vendor in api/newVendorsByDomain.",
  });
  console.log("Habanero resolver:", manifest.accuracy);
  console.log(`Seeds: ${manifest.seedsBefore} → ${manifest.seedsAfter}`);
  if (manifest.seedsAfter > 0) process.exit(1);
  return manifest;
}

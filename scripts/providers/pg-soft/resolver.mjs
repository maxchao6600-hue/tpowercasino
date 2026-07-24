import path from "node:path";
import { resolveAbsentVendor } from "../lib/absent-vendor.mjs";

const OUT = path.join(process.cwd(), "scripts/providers/pg-soft");

export default async function resolve() {
  const manifest = await resolveAbsentVendor({
    providerSlug: "pg-soft",
    providerId: "pg-soft",
    imageFolder: "pgsoft",
    outDir: OUT,
    commentLines: [
      "PG Soft is not a vendor on www.tpower3.com.",
      "Same-named titles on V-POWER / Pxplay are different providers — cannot reuse their thumbnails.",
    ],
    sourceNote:
      "N/A — no PG SOFT vendor; clone titles on other shelves are not PG Soft art.",
  });
  console.log("PG Soft resolver:", manifest.accuracy);
  console.log(`Seeds: ${manifest.seedsBefore} → ${manifest.seedsAfter}`);
  if (manifest.seedsAfter > 0) process.exit(1);
  return manifest;
}

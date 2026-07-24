/**
 * Run a provider-specific probe / resolver / verify pass.
 *
 *   node scripts/providers/run.mjs evolution probe
 *   node scripts/providers/run.mjs evolution resolve
 *   node scripts/providers/run.mjs evolution verify
 *
 * Do NOT use games:pipeline — each provider is independent.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const provider = process.argv[2];
const action = process.argv[3] || "resolve";

const PRIORITY = [
  "evolution",
  "microgaming",
  "playn-go",
  "pg-soft",
  "habanero",
  "sbo",
  "spribe",
  "dream-gaming",
  "sexy-gaming",
];

if (!provider) {
  console.error("Usage: node scripts/providers/run.mjs <provider> [probe|resolve|verify]");
  console.error("Priority order:", PRIORITY.join(" → "));
  process.exit(1);
}

const dir = path.join(ROOT, "scripts/providers", provider);
const probePath = path.join(dir, "probe.mjs");
const resolverPath = path.join(dir, "resolver.mjs");
const verifyPath = path.join(dir, "verify.mjs");

async function runModule(modPath, label) {
  if (!fs.existsSync(modPath)) {
    console.error(`Missing ${label}: ${modPath}`);
    process.exit(1);
  }
  const mod = await import(`file:///${modPath.replace(/\\/g, "/")}`);
  const fn = mod.default;
  if (typeof fn !== "function") {
    console.error(`${label} must export default async function`);
    process.exit(1);
  }
  return fn();
}

if (action === "probe") {
  await runModule(probePath, "probe.mjs");
} else if (action === "resolve") {
  await runModule(resolverPath, "resolver.mjs");
} else if (action === "verify") {
  if (fs.existsSync(verifyPath)) {
    await runModule(verifyPath, "verify.mjs");
  } else {
    await runModule(resolverPath, "resolver.mjs (verify mode)");
  }
} else {
  console.error("Unknown action:", action);
  process.exit(1);
}

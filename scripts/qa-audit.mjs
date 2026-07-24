import { readdirSync, existsSync, readFileSync, statSync } from "fs";
import { join, extname } from "path";

const root = process.cwd();
const publicDir = join(root, "public");
const srcDir = join(root, "src");
const issues = [];

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const sourceFiles = walk(srcDir).filter((f) =>
  [".ts", ".tsx"].includes(extname(f)),
);

const assetExt = /\.(svg|png|jpg|jpeg|webp|gif|ico|webmanifest)$/i;
const assetRefs = new Set();

const badPatterns = [
  { re: /console\.(log|error|warn|debug)\(/, label: "console.*" },
  { re: /\bTODO\b/, label: "TODO" },
  { re: /\bFIXME\b/, label: "FIXME" },
  { re: /Lorem Ipsum/i, label: "Lorem Ipsum" },
  { re: /Coming Soon/i, label: "Coming Soon" },
  { re: /href=["']#["']/, label: 'href="#"' },
];

for (const file of sourceFiles) {
  const content = readFileSync(file, "utf8");
  const rel = file.slice(root.length + 1);

  for (const { re, label } of badPatterns) {
    if (re.test(content)) issues.push(`${rel}: ${label}`);
  }

  for (const match of content.matchAll(
    /["'`](\/(?:games|providers|blog|images|og|icons|logo|manifest)[^"'`]+)["'`]/g,
  )) {
    const value = match[1].split("?")[0];
    if (assetExt.test(value) && !value.includes("${")) assetRefs.add(value);
  }
}

for (const asset of [...assetRefs].sort()) {
  if (!existsSync(join(publicDir, asset.replace(/^\//, "")))) {
    issues.push(`Missing asset: ${asset}`);
  }
}

const requiredPublic = [
  "robots would be generated",
  "manifest.webmanifest",
  "icons/favicon.svg",
  "icons/apple-touch-icon.svg",
  "og/default.svg",
  "_headers",
];

for (const file of requiredPublic.slice(1)) {
  if (!existsSync(join(publicDir, file))) {
    issues.push(`Missing required public file: ${file}`);
  }
}

if (issues.length) {
  console.error("QA audit failed:\n" + issues.map((i) => `- ${i}`).join("\n"));
  process.exit(1);
}

console.log(
  `QA audit passed. Sources=${sourceFiles.length} assets=${assetRefs.size}`,
);

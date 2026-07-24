import fs from "node:fs";
import path from "node:path";

const dir = "src/data/payments-center";
const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".ts") && !["types.ts", "shared.ts", "index.ts"].includes(f));

function extractEn(s) {
  return [...s.matchAll(/en:\s*`([^`]*)`/gs)].map((x) => x[1]).join("\n");
}

for (const f of files) {
  const t = extractEn(fs.readFileSync(path.join(dir, f), "utf8"));
  console.log(f, t.trim().split(/\s+/).filter(Boolean).length);
}

const sec = extractEn(fs.readFileSync("src/data/authority/security.ts", "utf8"));
console.log("authority/security.ts", sec.trim().split(/\s+/).filter(Boolean).length);

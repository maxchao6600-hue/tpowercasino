import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "scripts/.tmp-tpower3");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".js"));
const routeHits = new Set();
const apiHits = new Set();

for (const f of files) {
  const t = fs.readFileSync(path.join(dir, f), "utf8");
  for (const m of t.matchAll(/path:\s*"([^"]+)"/g)) {
    if (/game|vendor|lobby|slot|casino|list/i.test(m[1])) routeHits.add(m[1]);
  }
  for (const m of t.matchAll(/path:\s*'([^']+)'/g)) {
    if (/game|vendor|lobby|slot|casino|list/i.test(m[1])) routeHits.add(m[1]);
  }
  for (const m of t.matchAll(/#\/[A-Za-z0-9_\-\/\?=]+/g)) {
    if (/game|vendor|lobby|slot|casino/i.test(m[0])) routeHits.add(m[0]);
  }
  for (const m of t.matchAll(/api\/[A-Za-z0-9_\-\/]+/g)) {
    if (/game|vendor|lobby|myGames|thumb|icon/i.test(m[0])) apiHits.add(m[0]);
  }
  for (const m of t.matchAll(/frontend\/api\/[A-Za-z0-9_\-\/]+/g)) {
    if (/game|vendor|lobby|myGames|thumb|icon/i.test(m[0])) apiHits.add(m[0]);
  }
}

console.log("ROUTES", [...routeHits].sort().join("\n"));
console.log("\nAPIS", [...apiHits].sort().join("\n"));

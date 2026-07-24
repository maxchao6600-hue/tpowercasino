import fs from "node:fs";
import path from "node:path";
import manifest from "../src/data/provider-logos.manifest.json" with { type: "json" };

const ids = [
  "pragmatic-play",
  "pg-soft",
  "evolution",
  "jili",
  "spadegaming",
  "cq9",
  "playtech",
  "netent",
  "microgaming",
  "habanero",
  "spribe",
  "sbo",
  "live22",
  "sexy-gaming",
  "dream-gaming",
  "wm-casino",
  "sa-gaming",
  "asia-gaming",
  "kingmaker",
  "yggdrasil",
];

let files = 0;
let text = 0;
let missing = 0;

for (const id of ids) {
  const mapped = manifest[id];
  if (!mapped) {
    console.log("TEXT ", id);
    text += 1;
    continue;
  }
  const abs = path.join(process.cwd(), "public", mapped.replace(/^\//, ""));
  if (fs.existsSync(abs)) {
    console.log("FILE ", id, mapped);
    files += 1;
  } else {
    console.log("404  ", id, mapped);
    missing += 1;
  }
}

console.log({ files, textFallback: text, missingFiles: missing });
if (missing > 0) process.exit(1);

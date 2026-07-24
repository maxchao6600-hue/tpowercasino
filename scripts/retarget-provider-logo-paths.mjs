import fs from "node:fs";

const path = "src/data/providers.ts";
let src = fs.readFileSync(path, "utf8");
src = src.replaceAll('logo: "/providers/', 'logo: "/images/providers/');
fs.writeFileSync(path, src);

const logos = [...src.matchAll(/logo:\s*"([^"]+)"/g)].map((m) => m[1]);
for (const logo of logos) {
  const exists = fs.existsSync(`public${logo}`);
  console.log(exists ? "OK" : "MISS", logo);
}

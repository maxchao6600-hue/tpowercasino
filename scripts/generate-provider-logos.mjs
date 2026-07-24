import fs from "node:fs";

function wordmark(name) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" fill="none"><rect width="200" height="48" rx="10" fill="#FAFAFA"/><text x="100" y="30" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="14" font-weight="700" fill="#111111">${name}</text></svg>`;
}

for (const [slug, name] of [
  ["jdb", "JDB"],
  ["dream-gaming", "Dream Gaming"],
  ["microgaming", "Microgaming"],
  ["playn-go", "Play'n GO"],
  ["spribe", "Spribe"],
]) {
  fs.writeFileSync(`public/providers/${slug}.svg`, wordmark(name));
}

for (const [slug, name] of [
  ["tpower-login-guide", "Login Guide"],
  ["how-to-download-tpower", "Download"],
  ["how-to-register-tpower", "Register"],
  ["tpower-mobile-app", "Mobile App"],
  ["how-to-deposit-tpower", "Deposit"],
  ["how-to-withdraw-tpower", "Withdraw"],
]) {
  const art = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none"><defs><linearGradient id="g" x1="0" y1="0" x2="800" y2="500"><stop stop-color="#111111"/><stop offset="1" stop-color="#D71920"/></linearGradient></defs><rect width="800" height="500" fill="url(#g)"/><text x="56" y="420" font-family="Inter,Arial,sans-serif" font-size="36" font-weight="700" fill="white">${name}</text></svg>`;
  fs.writeFileSync(`public/blog/${slug}.svg`, art);
}

console.log("provider + blog assets ok");

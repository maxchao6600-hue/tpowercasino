import fs from "node:fs";

const text = fs.readFileSync(
  "scripts/.tmp-tpower3/app.77bb835a63600bc9d583.js",
  "utf8",
);

const needles = [
  "AES.encrypt",
  "AES.decrypt",
  "CryptoJS",
  "md5(",
  "$API_MD5_KEY",
  "Encrypt",
  "decrypt",
  "ciphertext",
  "Utf8",
  "Base64",
  "sign",
  "timestamp",
  "payload",
  "key=",
  "data=",
];

for (const n of needles) {
  let count = 0;
  let idx = 0;
  const firstFew = [];
  while ((idx = text.indexOf(n, idx)) !== -1) {
    count += 1;
    if (firstFew.length < 3) firstFew.push(idx);
    idx += n.length;
  }
  console.log(n, "count", count, "at", firstFew);
  for (const i of firstFew) {
    console.log("---", n, i);
    console.log(text.slice(Math.max(0, i - 180), i + 420));
    console.log();
  }
}

// Also search vendor for axios interceptor encrypt
const vendor = fs.readFileSync(
  "scripts/.tmp-tpower3/vendor.a144d440594fe1e8e06c.js",
  "utf8",
);
for (const n of ["AES.encrypt", "$API_AES_KEY", "Invalid key", "DecryptRequest"]) {
  const i = vendor.indexOf(n);
  console.log("vendor", n, i);
  if (i >= 0) console.log(vendor.slice(i - 200, i + 500));
}

// Look for chunk files that might contain API layer
const manifest = fs.readFileSync(
  "scripts/.tmp-tpower3/manifest.d50f4ac43dbedf25fff5.js",
  "utf8",
);
fs.writeFileSync("scripts/.tmp-tpower3/manifest.txt", manifest);
console.log("manifest len", manifest.length);
console.log(manifest.slice(0, 2000));

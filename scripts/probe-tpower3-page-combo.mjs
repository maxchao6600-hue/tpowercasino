import fs from "node:fs";
import CryptoJS from "crypto-js";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const API = "https://d5y9.apit.5t1p6.com/";
const DOMAIN = "www.tpower3.com";
const KEYS = {
  md5: "&W7e1vRWRH02jZIB",
  aes: "M53B?gQhkRtSeQZ^",
  iv: "4339794120398193",
};

function encrypt(plain) {
  const key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(KEYS.aes).toString());
  const iv = CryptoJS.enc.Utf8.parse(KEYS.iv);
  return CryptoJS.AES.encrypt(String(plain), key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
}

async function apiPost(endpoint, payload) {
  const plain = JSON.stringify(payload);
  const params = encrypt(plain);
  const key = CryptoJS.MD5(params + KEYS.md5).toString();
  const res = await fetch(new URL(endpoint, API), {
    method: "POST",
    headers: {
      "user-agent": UA,
      "content-type": "application/json",
      "accept-language": "en",
      origin: "https://www.tpower3.com",
      referer: "https://www.tpower3.com/",
    },
    body: JSON.stringify({ params, key }),
  });
  return res.json();
}

const combos = [
  { domain: DOMAIN, page: 1, number: 50 },
  { domain: DOMAIN, page: 1, per_page: 50 },
  { domain: DOMAIN, page: "1", number: "50" },
  { domain: DOMAIN, page: 1, number: 50, vendor_id: 54 },
  { domain: DOMAIN, page: 1, number: 50, vendor_ids: [54] },
  { domain: DOMAIN, page: 1, number: 50, type_id: 2 },
  { domain: DOMAIN, page: 1, number: 50, type_ids: [2] },
  { domain: DOMAIN, page: 1, per_page: 50, vendor_ids: [54], type_ids: [2] },
  { domain: DOMAIN, page: 1, number: 100, key: "" },
];

for (const body of combos) {
  for (const ep of ["api/myGamesByDomain", "frontend/api/game/list"]) {
    const json = await apiPost(ep, body);
    const count = Array.isArray(json.data)
      ? json.data.length
      : Array.isArray(json.data?.games)
        ? json.data.games.length
        : null;
    console.log(
      ep,
      JSON.stringify(body),
      "=>",
      json.code,
      json.message,
      count,
      json.pagination ? JSON.stringify(json.pagination) : "",
    );
    if (json.code === 1000 || json.code === 200) {
      fs.writeFileSync(
        "scripts/.tmp-tpower3/sample-games-page.json",
        JSON.stringify(json, null, 2),
      );
      const sample = Array.isArray(json.data)
        ? json.data[0]
        : json.data?.games?.[0];
      console.log("SAMPLE", JSON.stringify(sample, null, 2)?.slice(0, 1200));
    }
  }
}

// also new tag variants
for (const tag of ["new", "New", "NEW", "hot", "jackpot", "Jackpot", "JP"]) {
  const json = await apiPost("frontend/api/lobby/games", {
    domain: DOMAIN,
    tag,
  });
  console.log(
    "lobby tag",
    tag,
    json.code,
    Array.isArray(json.data) ? json.data.length : json.message,
  );
}

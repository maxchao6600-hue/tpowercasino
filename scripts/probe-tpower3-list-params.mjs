import fs from "node:fs";
import CryptoJS from "crypto-js";

const chunk0 = fs.readFileSync("scripts/.tmp-tpower3/chunk-0.js", "utf8");

for (const needle of [
  "myGamesByDomain",
  "frontend/api/game/list",
  "getGamesByTagByDomain",
  "page_number",
  "pageNumber",
  "page_size",
  "pageSize",
  "type_counts",
  "typeCounts",
  "lobby/games",
]) {
  let idx = 0;
  let n = 0;
  while ((idx = chunk0.indexOf(needle, idx)) !== -1 && n < 2) {
    console.log("\n---", needle, idx);
    console.log(chunk0.slice(Math.max(0, idx - 200), idx + 500));
    idx += needle.length;
    n += 1;
  }
}

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

const bodies = [
  { domain: DOMAIN, page: 1, page_size: 50 },
  { domain: DOMAIN, page_number: 1, page_size: 50 },
  { domain: DOMAIN, pageNumber: 1, pageSize: 50 },
  { domain: DOMAIN, page_num: 1, page_size: 50 },
  { domain: DOMAIN, page: 1, size: 50 },
  { domain: DOMAIN, page_number: 1, number: 50 },
  { domain: DOMAIN, page_number: 1, page_count: 50 },
  { domain: DOMAIN, page_number: "1", number: "50" },
  { domain: DOMAIN, page_number: 1, per_page: 50 },
  { domain: DOMAIN, vendor_id: 54, page_number: 1, number: 50 },
  { domain: DOMAIN, vendor_id: 54, page_number: 1, page_size: 50 },
  { domain: DOMAIN, type_id: 2, page_number: 1, number: 50 },
];

for (const body of bodies) {
  for (const ep of ["frontend/api/game/list", "api/myGamesByDomain"]) {
    const json = await apiPost(ep, body);
    console.log(
      ep,
      JSON.stringify(body),
      "=>",
      json.code,
      json.message,
      Array.isArray(json.data)
        ? `arr ${json.data.length}`
        : typeof json.data,
    );
    if (json.code === 1000 || json.code === 200) {
      fs.writeFileSync(
        "scripts/.tmp-tpower3/sample-games.json",
        JSON.stringify(json, null, 2),
      );
      console.log(JSON.stringify(json.data?.[0] || json.data).slice(0, 500));
      process.exit(0);
    }
  }
}

// tags
for (const tag of ["hot", "new", "HOT", "NEW", "jackpot", "Jackpot", "1", "2"]) {
  const json = await apiPost("api/getGamesByTagByDomain", {
    domain: DOMAIN,
    tag,
  });
  console.log(
    "tag",
    tag,
    json.code,
    Array.isArray(json.data) ? json.data.length : json.message,
  );
}

const lobby = await apiPost("frontend/api/lobby/games", {
  domain: DOMAIN,
  tag: "hot",
});
console.log("lobby hot", lobby.code, Array.isArray(lobby.data) ? lobby.data.length : lobby.message);
fs.writeFileSync("scripts/.tmp-tpower3/lobby-hot.json", JSON.stringify(lobby, null, 2));

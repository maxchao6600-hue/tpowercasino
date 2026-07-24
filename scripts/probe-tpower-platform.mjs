const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const seeds = [
  "https://www.tpower3.com/",
  "https://www.tpower3.com/login",
  "https://tpower3.com/",
  "https://tpowerlogin2.com/",
  "https://www.tpowerlogin2.com/",
  "https://m.tpower3.com/",
  "https://api.tpower3.com/",
  "https://www.tpowermy.com.my/",
  "https://tpowermy.com.my/",
];

async function probe(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent": UA,
      accept: "text/html,application/json,*/*",
    },
    redirect: "follow",
  });
  const ct = res.headers.get("content-type") || "";
  const text = await res.text();
  const scripts = [...text.matchAll(/src=["']([^"']+)["']/gi)].map((m) => m[1]);
  const absScripts = scripts
    .map((s) => {
      try {
        return new URL(s, res.url).href;
      } catch {
        return s;
      }
    })
    .filter((s) => /\.js(\?|$)/i.test(s));
  const urls = [
    ...text.matchAll(/https?:\/\/[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+/g),
  ].map((m) => m[0]);
  const interesting = [...new Set(urls)].filter((u) =>
    /api|cdn|static|img|game|lobby|provider|slot|graphql|websocket|wss/i.test(u),
  );
  return {
    requested: url,
    final: res.url,
    status: res.status,
    ct,
    len: text.length,
    title: ((text.match(/<title[^>]*>([^<]+)/i) || [])[1] || "").trim(),
    scripts: absScripts.slice(0, 40),
    interesting: interesting.slice(0, 60),
    sample: text.slice(0, 800).replace(/\s+/g, " "),
  };
}

for (const url of seeds) {
  console.log("\n====", url, "====");
  try {
    console.log(JSON.stringify(await probe(url), null, 2));
  } catch (e) {
    console.log("ERR", String(e));
  }
}

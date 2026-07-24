import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true, channel: "chrome" });
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));

await page.goto("http://localhost:3000/en", {
  waitUntil: "networkidle",
  timeout: 90000,
}).catch(() => page.goto("http://localhost:3000/en", { waitUntil: "load" }));
await page.waitForTimeout(4000);

const info = await page.evaluate(() => {
  const btn = [...document.querySelectorAll("button")].find((b) =>
    /How do I create a TPOWER account/i.test(b.textContent || ""),
  );
  const menuBtn = document.querySelector('button[aria-expanded][aria-label], button[aria-label*="Menu"], button[aria-label*="menu"]');
  const anyBtn = document.querySelector("header button");

  function reactInfo(el) {
    if (!el) return null;
    const keys = Object.keys(el);
    const fiberKeys = keys.filter(
      (k) =>
        k.startsWith("__reactFiber") ||
        k.startsWith("__reactInternalInstance") ||
        k.startsWith("__reactProps") ||
        k.includes("react"),
    );
    return {
      keys: keys.slice(0, 30),
      fiberKeys,
      hasListener:
        typeof el.onclick === "function" ||
        (el.getEventListeners
          ? Object.keys(el.getEventListeners() || {}).length > 0
          : null),
    };
  }

  // Next.js flight / scripts
  const scripts = [...document.scripts].map((s) => ({
    src: s.src || null,
    type: s.type || null,
    len: (s.textContent || "").length,
  }));

  return {
    faq: reactInfo(btn),
    headerBtn: reactInfo(anyBtn),
    menuBtn: reactInfo(menuBtn),
    scriptCount: scripts.length,
    scriptSrcs: scripts.filter((s) => s.src).map((s) => s.src).slice(0, 20),
    nextRoot: !!document.querySelector("nextjs-portal") || !!document.querySelector("#__next"),
    bodyChild: document.body.firstElementChild?.tagName,
  };
});

console.log(JSON.stringify({ errors, info }, null, 2));
await browser.close();

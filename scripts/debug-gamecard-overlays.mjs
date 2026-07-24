/**
 * Inspect live GameCard DOM for overlay layers above thumbnails.
 * Run with: node scripts/debug-gamecard-overlays.mjs
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const URL = process.env.URL || "http://localhost:3000/en/providers/pg-soft/games";
const OUT = path.join(process.cwd(), "scripts/_gamecard-overlay-debug.json");
const SHOT = path.join(process.cwd(), "scripts/_gamecard-overlay-debug.png");

function styleDump(el) {
  const cs = getComputedStyle(el);
  return {
    tag: el.tagName.toLowerCase(),
    className: el.className?.toString?.() || "",
    id: el.id || "",
    position: cs.position,
    inset: `${cs.top}/${cs.right}/${cs.bottom}/${cs.left}`,
    zIndex: cs.zIndex,
    opacity: cs.opacity,
    mixBlendMode: cs.mixBlendMode,
    backdropFilter: cs.backdropFilter,
    background: cs.backgroundImage !== "none" ? cs.backgroundImage : cs.backgroundColor,
    backgroundColor: cs.backgroundColor,
    backgroundImage: cs.backgroundImage,
    width: cs.width,
    height: cs.height,
    pointerEvents: cs.pointerEvents,
    display: cs.display,
    visibility: cs.visibility,
  };
}

function pseudoDump(el, which) {
  const cs = getComputedStyle(el, which);
  const content = cs.content;
  if (!content || content === "none" || content === '""' || content === "normal") {
    return null;
  }
  return {
    pseudo: which,
    content,
    position: cs.position,
    inset: `${cs.top}/${cs.right}/${cs.bottom}/${cs.left}`,
    zIndex: cs.zIndex,
    opacity: cs.opacity,
    background: cs.backgroundImage !== "none" ? cs.backgroundImage : cs.backgroundColor,
    width: cs.width,
    height: cs.height,
    display: cs.display,
  };
}

const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.CHROME_PATH ||
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1000);
// Dismiss age gate if present so thumbnails are fully visible.
const ageBtn = page.getByRole("button", { name: /21 or older/i });
if (await ageBtn.count()) {
  await ageBtn.first().click().catch(() => {});
  await page.waitForTimeout(500);
}

const articles = page.locator("article.group");
const count = await articles.count();
const cards = [];

for (let i = 0; i < Math.min(count, 12); i++) {
  const article = articles.nth(i);
  const info = await article.evaluate((root) => {
    const dump = (el) => {
      const cs = getComputedStyle(el);
      return {
        tag: el.tagName.toLowerCase(),
        className: (el.className && el.className.toString && el.className.toString()) || "",
        position: cs.position,
        inset: `${cs.top} ${cs.right} ${cs.bottom} ${cs.left}`,
        zIndex: cs.zIndex,
        opacity: cs.opacity,
        mixBlendMode: cs.mixBlendMode,
        backdropFilter: cs.backdropFilter || cs.webkitBackdropFilter || "none",
        backgroundColor: cs.backgroundColor,
        backgroundImage: cs.backgroundImage,
        width: cs.width,
        height: cs.height,
        display: cs.display,
        visibility: cs.visibility,
        src: el.getAttribute?.("src") || el.currentSrc || null,
      };
    };
    const pseudo = (el, which) => {
      const cs = getComputedStyle(el, which);
      const content = cs.content;
      const hasBox =
        content &&
        content !== "none" &&
        content !== "normal" &&
        ((cs.width !== "auto" && cs.width !== "0px") ||
          cs.backgroundColor !== "rgba(0, 0, 0, 0)" ||
          cs.backgroundImage !== "none");
      if (!hasBox && (!content || content === "none" || content === "normal")) return null;
      return {
        pseudo: which,
        content,
        position: cs.position,
        backgroundColor: cs.backgroundColor,
        backgroundImage: cs.backgroundImage,
        width: cs.width,
        height: cs.height,
        opacity: cs.opacity,
        zIndex: cs.zIndex,
        display: cs.display,
      };
    };

    const thumb =
      root.querySelector("a > div.relative") ||
      root.querySelector("div.relative.aspect-\\[3\\/4\\]") ||
      root.querySelector("div.relative");

    const nodes = [];
    if (thumb) {
      nodes.push({ role: "thumb", ...dump(thumb) });
      for (const which of ["::before", "::after"]) {
        const p = pseudo(thumb, which);
        if (p) nodes.push({ role: "thumb-pseudo", ...p });
      }
      thumb.querySelectorAll("*").forEach((el, idx) => {
        nodes.push({ role: `child-${idx}`, ...dump(el) });
        for (const which of ["::before", "::after"]) {
          const p = pseudo(el, which);
          if (p) nodes.push({ role: `child-${idx}-pseudo`, ...p });
        }
      });
    }

    // Any absolute descendants anywhere in card
    const absolutes = [...root.querySelectorAll("*")].filter(
      (el) => getComputedStyle(el).position === "absolute" || getComputedStyle(el).position === "fixed",
    ).map((el) => dump(el));

    const title = root.querySelector("h3")?.textContent?.trim() || "";
    return { title, thumbHtml: thumb?.outerHTML?.slice(0, 2000) || null, nodes, absolutes };
  });
  cards.push(info);
}

await page.screenshot({ path: SHOT, fullPage: false });
fs.writeFileSync(
  OUT,
  JSON.stringify({ url: URL, articleCount: count, cards }, null, 2),
  "utf8",
);
console.log(JSON.stringify({ url: URL, articleCount: count, sampled: cards.length, out: OUT, shot: SHOT }, null, 2));
await browser.close();

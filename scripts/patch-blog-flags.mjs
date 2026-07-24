import fs from "node:fs";

const path = "src/data/blog.ts";
let s = fs.readFileSync(path, "utf8");

const meta = {
  "tpower-login-guide": {
    difficulty: "beginner",
    featured: true,
    editorsPick: true,
    trending: true,
    mostRead: true,
  },
  "how-to-register-tpower": {
    difficulty: "beginner",
    editorsPick: true,
    mostRead: true,
  },
  "how-to-download-tpower": {
    difficulty: "beginner",
    featured: true,
    trending: true,
    mostRead: true,
    isNew: true,
    hot: true,
  },
  "tpower-mobile-app": {
    difficulty: "beginner",
    trending: true,
    hot: true,
  },
  "how-to-deposit-tpower": {
    difficulty: "intermediate",
    editorsPick: true,
    mostRead: true,
  },
  "how-to-withdraw-tpower": {
    difficulty: "intermediate",
    mostRead: true,
  },
  "responsible-play-basics-malaysia": {
    difficulty: "beginner",
    editorsPick: true,
  },
  "malaysia-payment-rails-explained": {
    difficulty: "intermediate",
  },
  "how-tpower-selects-game-providers": {
    difficulty: "advanced",
  },
  "vip-service-without-noise": {
    difficulty: "intermediate",
    editorsPick: true,
    trending: true,
    isNew: true,
    hot: true,
  },
};

for (const [slug, m] of Object.entries(meta)) {
  const needle = `slug: "${slug}"`;
  const idx = s.indexOf(needle);
  if (idx < 0) {
    console.log("MISS", slug);
    continue;
  }
  const rm = s.indexOf("readingMinutes:", idx);
  const lineEnd = s.indexOf("\n", rm);
  const insertAt = lineEnd + 1;
  // Skip if already patched
  if (s.slice(insertAt, insertAt + 40).includes("difficulty:")) continue;
  const lines = [
    `    difficulty: "${m.difficulty}",`,
    m.featured ? "    featured: true," : null,
    m.trending ? "    trending: true," : null,
    m.hot ? "    hot: true," : null,
    m.isNew ? "    isNew: true," : null,
    m.editorsPick ? "    editorsPick: true," : null,
    m.mostRead ? "    mostRead: true," : null,
  ]
    .filter(Boolean)
    .join("\n");
  s = s.slice(0, insertAt) + lines + "\n" + s.slice(insertAt);
  console.log("patched", slug);
}

fs.writeFileSync(path, s);
console.log("done");

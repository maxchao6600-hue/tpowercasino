/**
 * @deprecated Do not use.
 *
 * The previous unstamp approach painted solid rectangles over the logo corner
 * and damaged artwork. Prefer:
 *   npm run games:restore
 *   npm run games:covers:force
 */
console.error(
  [
    "games:unstamp is disabled.",
    "It previously painted solid corner rectangles onto game artwork.",
    "Use instead:",
    "  npm run games:restore",
    "  npm run games:covers:force",
  ].join("\n"),
);
process.exit(1);

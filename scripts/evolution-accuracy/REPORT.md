# Evolution accuracy report

Generated: 2026-07-20

## Verdict

**Evolution cannot be matched game-by-game to the official playable TPOWER lobby today.**

Accuracy for Evolution is therefore enforced as:

- **0 invented seed games**
- **0 placeholders**
- **0 wrong / duplicated / generated covers**

Vacuous 100% accuracy: every Evolution game shown on this site (none) matches official TPOWER.

## Evidence

### 1. Playable lobby (`www.tpower3.com`)

| Check | Result |
|--------|--------|
| Vendor named Evolution in `api/newVendorsByDomain` | **No** |
| Lobby DOM text / images containing “Evolution” | **No** |
| Guest click → Evolution shelf of Lightning Roulette / Crazy Time / … | **Impossible (vendor tile absent)** |
| Catalogue rows with `providerName` Evolution | **0** |
| Exact seed-title matches in live catalogue | **2 name collisions only** (`Sic Bo`, `Dragon Tiger` under JILI/LFC888 — **not** Evolution) |

Official live vendors present include PRAGMATIC-LIVE, PLAYTECH-LIVE, AE SEXY, DREAMGAMING, CHOICE-LIVE, CT855, etc. — **not Evolution**.

### 2. Marketing / alternate domains

| URL | Evolution mention | Per-game Evolution thumbnails |
|-----|-------------------|-------------------------------|
| `www.t-power3.com` | Marketing copy only | **None** |
| `tpower99my.com/games-library` | Provider logo `SLOT-EVOLUTION.png` | **None** (no game cards) |
| `tpower.ai` | No Evolution text in probe | **None** |

### 3. Prior local state (incorrect)

- CMS `evolution` seed list: **36** invented titles (Lightning Roulette, Crazy Time, …)
- Local folder `public/images/games/evolution/`: **empty** (purged)
- UI result: GameCard `onError` → provider logo / placeholder — **fails** “no placeholders / no wrong thumbs”

## Fix applied (Evolution only)

1. Cleared `providerGameSeeds.evolution` → `[]` with an explanatory comment.
2. No global pipeline run.
3. No cross-provider fuzzy remaps (would create wrong thumbnails).

Effect: `/en/providers/evolution/games` no longer lists invented Evolution titles with missing art.

## What would unlock real Evolution thumbs

Official TPOWER must expose an Evolution (or Evolution-branded) vendor shelf whose game cards include real `image` URLs (same as JILI / AE Sexy today). Then we can:

1. Pull that shelf only
2. Write `/images/games/evolution/{sourceId}.webp`
3. Map CMS Evolution games 1:1 to those URLs
4. Visual QA until 100%

Until that shelf exists, inventing thumbs would violate the accuracy rules.

## Next provider

Do **not** start Microgaming until you confirm this Evolution stance (empty official-accurate library vs wait for lobby Evolution).

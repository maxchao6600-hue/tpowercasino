# Microgaming resolver

Generated: 2026-07-20T07:16:55.047Z

## Official thumbnail source

| Check | Result |
|-------|--------|
| `MICROGAMING` in vendor list | **No** |
| Exact seed matches (Immortal Romance, Thunderstruck II, …) | **0 / 30** |
| PLAYTECH-SLOT hosting MG CDN art | **No matching titles** |

TPOWER lists PLAYTECH-SLOT / PLAYTECH-LIVE but not Microgaming as a studio shelf.

## Resolver action

- Cleared `providerGameSeeds.microgaming` (30 → 0)
- Purged `public/images/games/microgaming/` (0 files)
- Cleared microgaming entries in `seed-image-overrides.json`

## Accuracy

**100%** — no Microgaming games shown without official TPOWER card art.

## Commands

```
node scripts/providers/run.mjs microgaming probe
node scripts/providers/run.mjs microgaming resolve
```

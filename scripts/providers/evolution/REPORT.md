# Evolution resolver

Generated: 2026-07-20T07:18:14.034Z

## Official thumbnail source

| Check | Result |
|-------|--------|
| Vendor in `api/newVendorsByDomain` | **No** |
| `frontend/api/game/list` shelf | **No Evolution vendor** |
| `frontend/api/lobby/games` | **No Evolution entries** |
| DOM lazy-load / background-image | **No Evolution game cards** |
| CDN URLs containing evolution/evo-games | **None on lobby** |

False positives only: unrelated slot titles containing the word "Evolution" (e.g. Ninja Evolution on EPICWIN).

## Resolver action

- Seed list: **empty** (no invented Lightning Roulette / Crazy Time rows)
- Local folder: `public/images/games/evolution/` purged (0 files removed)
- Cross-provider remaps: **forbidden**

## Accuracy

**100%** — every Evolution game shown locally matches official TPOWER (none).

## Probe

`node scripts/providers/run.mjs evolution probe`

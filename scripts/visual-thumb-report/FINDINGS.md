# Visual thumbnail comparison findings

Generated: 2026-07-20T06:19:56.100Z

Prior pipeline reports ignored.

**Visual match: INCOMPLETE** — aggregate download statistics withheld.

### Post-sync asset cleanup
- Force-purged **93** incorrect seed covers for providers not on the official lobby: `pgsoft`, `evolution`, `microgaming`, `playngo`, `habanero`, `spribe`, `sbo`.
- Local screenshots re-captured after dismissing the age gate.

## Why previous reports were wrong

- `api/myGamesByDomain` is not how the official provider shelf renders cards.
- Guest users cannot open vendor game grids — Sign In modal appears.
- CMS pages for **PG Soft, Evolution, Microgaming, Play'n GO, Habanero, Spribe, SBO** have **no official lobby counterpart**; local seed libraries invent games/thumbnails.
- Dream Gaming / AE Sexy official shelves are tiny; local seeds inflate them.

## Official lobby vendors

- WUDI
- Fuma
- QQPK
- TPOWER4D
- BWG
- PRAGMATIC-SLOT
- PRAGMATIC-LIVE
- DREAMGAMING
- VPLUS
- PLAYTECH-SLOT
- PLAYTECH-LIVE
- AE SEXY
- LFC888
- V-POWER
- ASTAR
- CT855
- UU SLOT
- BESOFT
- OPPO
- CHOICE-LIVE
- WF Gaming
- PEGASUS
- Rectangle 
- AFB Gaming
- Pxplay
- GFG
- JILI
- ACEWIN
- EPICWIN
- JDB-SLOT
- JDB-FISHING
- CHOICE-SLOT
- Kiss H5
- MEGA H5
- Rich Gaming
- 918KISS
- SPADEGAMING
- RG Slot
- ACE333
- MEGA888
- PUSSY888
- LIVE22
- M9BET
- OneBX
- SV388
- RCB988
- WBET
- MAXBET
- OBET33
- E88 Sport
- FumaSW free
- WudiSW free

## Per provider

### Pragmatic Play
- On official: yes
- Login gate on click: true
- Official card URLs: 700
- Replaced: 0
- Seed files removed: 0
- Differences:
  - Guest click on PRAGMATIC-SLOT opens Sign In — full shelf DOM is login-gated.
  - Guest click on PRAGMATIC-LIVE opens Sign In — full shelf DOM is login-gated.

### Pg Soft
- On official: **NO**
- Login gate on click: false
- Official card URLs: 0
- Replaced: 0
- Seed files removed: 0
- Differences:
  - Provider does not exist on official TPOWER lobby (www.tpower3.com). Every local seed thumbnail is an incorrect mapping.

### Evolution
- On official: **NO**
- Login gate on click: false
- Official card URLs: 0
- Replaced: 0
- Seed files removed: 0
- Differences:
  - Provider does not exist on official TPOWER lobby (www.tpower3.com). Every local seed thumbnail is an incorrect mapping.

### Jili
- On official: yes
- Login gate on click: true
- Official card URLs: 221
- Replaced: 0
- Seed files removed: 0
- Differences:
  - Guest click on JILI opens Sign In — full shelf DOM is login-gated.

### Jdb
- On official: yes
- Login gate on click: true
- Official card URLs: 78
- Replaced: 0
- Seed files removed: 0
- Differences:
  - Guest click on JDB-SLOT opens Sign In — full shelf DOM is login-gated.
  - Guest click on JDB-FISHING opens Sign In — full shelf DOM is login-gated.

### Sexy Baccarat
- On official: yes
- Login gate on click: true
- Official card URLs: 3
- Replaced: 0
- Seed files removed: 0
- Differences:
  - Guest click on AE SEXY opens Sign In — full shelf DOM is login-gated.
  - Alias write failed for dragontiger: UNKNOWN: unknown error, copyfile 'C:\Users\maxch\OneDrive\Desktop\tpcsnmy\public\images\games\sexy-gaming\dragontiger.webp.46068.1784528250596.tmp' -> 'C:\Users\maxch\OneDrive\Desktop\tpcsnmy\public\images\games\sexy-gaming\dragontiger.webp'
  - Alias write failed for roulette: UNKNOWN: unknown error, copyfile 'C:\Users\maxch\OneDrive\Desktop\tpcsnmy\public\images\games\sexy-gaming\roulette.webp.46068.1784528250621.tmp' -> 'C:\Users\maxch\OneDrive\Desktop\tpcsnmy\public\images\games\sexy-gaming\roulette.webp'
  - Alias write failed for baccarat-classic: UNKNOWN: unknown error, copyfile 'C:\Users\maxch\OneDrive\Desktop\tpcsnmy\public\images\games\sexy-gaming\baccarat-classic.webp.46068.1784528250623.tmp' -> 'C:\Users\maxch\OneDrive\Desktop\tpcsnmy\public\images\games\sexy-gaming\baccarat-classic.webp'

### Sexy Gaming
- On official: yes
- Login gate on click: true
- Official card URLs: 3
- Replaced: 0
- Seed files removed: 0
- Differences:
  - Guest click on AE SEXY opens Sign In — full shelf DOM is login-gated.
  - Alias write failed for baccarat-classic: UNKNOWN: unknown error, copyfile 'C:\Users\maxch\OneDrive\Desktop\tpcsnmy\public\images\games\sexy-gaming\baccarat-classic.webp.46068.1784528293456.tmp' -> 'C:\Users\maxch\OneDrive\Desktop\tpcsnmy\public\images\games\sexy-gaming\baccarat-classic.webp'
  - Alias write failed for dragontiger: UNKNOWN: unknown error, copyfile 'C:\Users\maxch\OneDrive\Desktop\tpcsnmy\public\images\games\sexy-gaming\dragontiger.webp.46068.1784528293459.tmp' -> 'C:\Users\maxch\OneDrive\Desktop\tpcsnmy\public\images\games\sexy-gaming\dragontiger.webp'
  - Alias write failed for roulette: UNKNOWN: unknown error, copyfile 'C:\Users\maxch\OneDrive\Desktop\tpcsnmy\public\images\games\sexy-gaming\roulette.webp.46068.1784528293472.tmp' -> 'C:\Users\maxch\OneDrive\Desktop\tpcsnmy\public\images\games\sexy-gaming\roulette.webp'
  - 17 local cards failed to load images (missing → fallback).
  - Local page shows ~40 cards vs 3 official shelf games — seed/catalogue inflation.

### Dream Gaming
- On official: yes
- Login gate on click: true
- Official card URLs: 1
- Replaced: 0
- Seed files removed: 0
- Differences:
  - Guest click on DREAMGAMING opens Sign In — full shelf DOM is login-gated.
  - Local page shows ~40 cards vs 1 official shelf games — seed/catalogue inflation.

### Microgaming
- On official: **NO**
- Login gate on click: false
- Official card URLs: 0
- Replaced: 0
- Seed files removed: 0
- Differences:
  - Provider does not exist on official TPOWER lobby (www.tpower3.com). Every local seed thumbnail is an incorrect mapping.

### Playn Go
- On official: **NO**
- Login gate on click: false
- Official card URLs: 0
- Replaced: 0
- Seed files removed: 0
- Differences:
  - Provider does not exist on official TPOWER lobby (www.tpower3.com). Every local seed thumbnail is an incorrect mapping.

### Spribe
- On official: **NO**
- Login gate on click: false
- Official card URLs: 0
- Replaced: 0
- Seed files removed: 0
- Differences:
  - Provider does not exist on official TPOWER lobby (www.tpower3.com). Every local seed thumbnail is an incorrect mapping.

### Spadegaming
- On official: yes
- Login gate on click: true
- Official card URLs: 113
- Replaced: 112
- Seed files removed: 0
- Differences:
  - Guest click on SPADEGAMING opens Sign In — full shelf DOM is login-gated.
  - Download failed: Wong Choy SA

### Habanero
- On official: **NO**
- Login gate on click: false
- Official card URLs: 0
- Replaced: 0
- Seed files removed: 0
- Differences:
  - Provider does not exist on official TPOWER lobby (www.tpower3.com). Every local seed thumbnail is an incorrect mapping.
  - 12 local cards failed to load images (missing → fallback).

### Sbo
- On official: **NO**
- Login gate on click: false
- Official card URLs: 0
- Replaced: 0
- Seed files removed: 0
- Differences:
  - Provider does not exist on official TPOWER lobby (www.tpower3.com). Every local seed thumbnail is an incorrect mapping.


Open screenshot report: `scripts\visual-thumb-report\index.html`

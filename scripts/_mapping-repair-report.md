# Image mapping repair report (exact-stem only)

Generated: 2026-07-20T06:41:48.287Z

No downloads. Fuzzy remaps were reverted.

## React lookup

1. `GameCard` renders `game.image`
2. If load fails → `onError` → provider logo / `_providers` placeholder
3. `game-thumbnail-map.json` is **not** read by any React component
4. Seeds resolve via `providerGameImagePath()` + `seed-image-overrides.json`

## Example: Thunderstruck II (Microgaming)

| Field | Value |
|---|---|
| Provider | microgaming |
| sourceId | _(seed — none)_ |
| Expected | `/images/games/microgaming/thunderstruck-ii.webp` |
| Map entry | **absent** (seeds never written to map) |
| Exists? | **no** |
| Local exact stem | none |
| Reason | Seed maps to slug path; folder purged / never downloaded; React falls back to placeholder |

## Summary

| Metric | Count |
|---|---:|
| Exact remaps applied | 73 |
| Seed overrides | 67 games |
| Still missing (no file to map to) | 405 |

## Failures

| Game | Expected image file | Actual mapped file | Exists? | Reason |
|---|---|---|---|---|
| 5 Dragon Kings | `/images/games/afbgaming/19993.webp` | `/images/games/afbgaming/19993.webp` | no | canonical file missing; no exact-stem local match |
| Alice | `/images/games/afbgaming/20052.webp` | `/images/games/afbgaming/20052.webp` | no | canonical file missing; no exact-stem local match |
| Avengers | `/images/games/afbgaming/20050.webp` | `/images/games/afbgaming/20050.webp` | no | canonical file missing; no exact-stem local match |
| Big Boss | `/images/games/afbgaming/20010.webp` | `/images/games/afbgaming/20010.webp` | no | canonical file missing; no exact-stem local match |
| Buffalo Gold | `/images/games/afbgaming/20027.webp` | `/images/games/afbgaming/20027.webp` | no | canonical file missing; no exact-stem local match |
| Burger King | `/images/games/afbgaming/20076.webp` | `/images/games/afbgaming/20076.webp` | no | canonical file missing; no exact-stem local match |
| Christmas Carnivals | `/images/games/afbgaming/20008.webp` | `/images/games/afbgaming/20008.webp` | no | canonical file missing; no exact-stem local match |
| Crazy Bomb | `/images/games/afbgaming/20021.webp` | `/images/games/afbgaming/20021.webp` | no | canonical file missing; no exact-stem local match |
| Crazy Fishing | `/images/games/afbgaming/19988.webp` | `/images/games/afbgaming/19988.webp` | no | canonical file missing; no exact-stem local match |
| Crazy Gold | `/images/games/afbgaming/19984.webp` | `/images/games/afbgaming/19984.webp` | no | canonical file missing; no exact-stem local match |
| Dancing Drums | `/images/games/afbgaming/20034.webp` | `/images/games/afbgaming/20034.webp` | no | canonical file missing; no exact-stem local match |
| Deep Loot | `/images/games/afbgaming/20013.webp` | `/images/games/afbgaming/20013.webp` | no | canonical file missing; no exact-stem local match |
| Delicious Dessert | `/images/games/afbgaming/20017.webp` | `/images/games/afbgaming/20017.webp` | no | canonical file missing; no exact-stem local match |
| Demon Boy's Treasure Hunt | `/images/games/afbgaming/20032.webp` | `/images/games/afbgaming/20032.webp` | no | canonical file missing; no exact-stem local match |
| Dragon Slayer | `/images/games/afbgaming/20069.webp` | `/images/games/afbgaming/20069.webp` | no | canonical file missing; no exact-stem local match |
| Dragon's Fortune | `/images/games/afbgaming/20003.webp` | `/images/games/afbgaming/20003.webp` | no | canonical file missing; no exact-stem local match |
| Dwarf Tavern | `/images/games/afbgaming/20046.webp` | `/images/games/afbgaming/20046.webp` | no | canonical file missing; no exact-stem local match |
| dynamite jackpot | `/images/games/afbgaming/19992.webp` | `/images/games/afbgaming/19992.webp` | no | canonical file missing; no exact-stem local match |
| Elephant King | `/images/games/afbgaming/19994.webp` | `/images/games/afbgaming/19994.webp` | no | canonical file missing; no exact-stem local match |
| Fighting Cock | `/images/games/afbgaming/20058.webp` | `/images/games/afbgaming/20058.webp` | no | canonical file missing; no exact-stem local match |
| Finding Atlantis | `/images/games/afbgaming/20066.webp` | `/images/games/afbgaming/20066.webp` | no | canonical file missing; no exact-stem local match |
| Fortune Thai | `/images/games/afbgaming/20007.webp` | `/images/games/afbgaming/20007.webp` | no | canonical file missing; no exact-stem local match |
| Fortunes | `/images/games/afbgaming/20018.webp` | `/images/games/afbgaming/20018.webp` | no | canonical file missing; no exact-stem local match |
| Franken experiment | `/images/games/afbgaming/19998.webp` | `/images/games/afbgaming/19998.webp` | no | canonical file missing; no exact-stem local match |
| frenzy777 | `/images/games/afbgaming/19980.webp` | `/images/games/afbgaming/19980.webp` | no | canonical file missing; no exact-stem local match |
| Frozen Miracle | `/images/games/afbgaming/20025.webp` | `/images/games/afbgaming/20025.webp` | no | canonical file missing; no exact-stem local match |
| Fruit Ripe | `/images/games/afbgaming/20009.webp` | `/images/games/afbgaming/20009.webp` | no | canonical file missing; no exact-stem local match |
| Gems Rush | `/images/games/afbgaming/20055.webp` | `/images/games/afbgaming/20055.webp` | no | canonical file missing; no exact-stem local match |
| God of Wealth | `/images/games/afbgaming/20019.webp` | `/images/games/afbgaming/20019.webp` | no | canonical file missing; no exact-stem local match |
| gold volcano | `/images/games/afbgaming/19974.webp` | `/images/games/afbgaming/19974.webp` | no | canonical file missing; no exact-stem local match |
| Gold Volcano 2 | `/images/games/afbgaming/19991.webp` | `/images/games/afbgaming/19991.webp` | no | canonical file missing; no exact-stem local match |
| Golden Moon | `/images/games/afbgaming/20030.webp` | `/images/games/afbgaming/20030.webp` | no | canonical file missing; no exact-stem local match |
| Gong Xi Fa Cai | `/images/games/afbgaming/19985.webp` | `/images/games/afbgaming/19985.webp` | no | canonical file missing; no exact-stem local match |
| Halloween | `/images/games/afbgaming/20068.webp` | `/images/games/afbgaming/20068.webp` | no | canonical file missing; no exact-stem local match |
| Happy Animal Park | `/images/games/afbgaming/20011.webp` | `/images/games/afbgaming/20011.webp` | no | canonical file missing; no exact-stem local match |
| Happy Animal Park ULTRA | `/images/games/afbgaming/19997.webp` | `/images/games/afbgaming/19997.webp` | no | canonical file missing; no exact-stem local match |
| Happy Fruits | `/images/games/afbgaming/20035.webp` | `/images/games/afbgaming/20035.webp` | no | canonical file missing; no exact-stem local match |
| High Road King | `/images/games/afbgaming/20004.webp` | `/images/games/afbgaming/20004.webp` | no | canonical file missing; no exact-stem local match |
| High Rollers | `/images/games/afbgaming/20047.webp` | `/images/games/afbgaming/20047.webp` | no | canonical file missing; no exact-stem local match |
| Hunting Time | `/images/games/afbgaming/20072.webp` | `/images/games/afbgaming/20072.webp` | no | canonical file missing; no exact-stem local match |
| Invite Caishen | `/images/games/afbgaming/20014.webp` | `/images/games/afbgaming/20014.webp` | no | canonical file missing; no exact-stem local match |
| Jelly Colorful | `/images/games/afbgaming/20029.webp` | `/images/games/afbgaming/20029.webp` | no | canonical file missing; no exact-stem local match |
| Jump for Richness | `/images/games/afbgaming/20006.webp` | `/images/games/afbgaming/20006.webp` | no | canonical file missing; no exact-stem local match |
| King Arthur's Excalibur | `/images/games/afbgaming/19987.webp` | `/images/games/afbgaming/19987.webp` | no | canonical file missing; no exact-stem local match |
| King Of Arena | `/images/games/afbgaming/20043.webp` | `/images/games/afbgaming/20043.webp` | no | canonical file missing; no exact-stem local match |
| Kirin Mahjong ULTRA | `/images/games/afbgaming/19968.webp` | `/images/games/afbgaming/19968.webp` | no | canonical file missing; no exact-stem local match |
| Kungfu Panda | `/images/games/afbgaming/20054.webp` | `/images/games/afbgaming/20054.webp` | no | canonical file missing; no exact-stem local match |
| Labubu Party | `/images/games/afbgaming/19976.webp` | `/images/games/afbgaming/19976.webp` | no | canonical file missing; no exact-stem local match |
| Lamp Aladdin | `/images/games/afbgaming/20067.webp` | `/images/games/afbgaming/20067.webp` | no | canonical file missing; no exact-stem local match |
| Las Vegas Night | `/images/games/afbgaming/20015.webp` | `/images/games/afbgaming/20015.webp` | no | canonical file missing; no exact-stem local match |
| Legend of the Deep | `/images/games/afbgaming/20060.webp` | `/images/games/afbgaming/20060.webp` | no | canonical file missing; no exact-stem local match |
| Lights Bring Blessings | `/images/games/afbgaming/20037.webp` | `/images/games/afbgaming/20037.webp` | no | canonical file missing; no exact-stem local match |
| Lucky Clover | `/images/games/afbgaming/20022.webp` | `/images/games/afbgaming/20022.webp` | no | canonical file missing; no exact-stem local match |
| Lucky Frog | `/images/games/afbgaming/19977.webp` | `/images/games/afbgaming/19977.webp` | no | canonical file missing; no exact-stem local match |
| Lucky Frog ULTRA | `/images/games/afbgaming/19970.webp` | `/images/games/afbgaming/19970.webp` | no | canonical file missing; no exact-stem local match |
| Lucky777 | `/images/games/afbgaming/19979.webp` | `/images/games/afbgaming/19979.webp` | no | canonical file missing; no exact-stem local match |
| Magic Academy | `/images/games/afbgaming/20051.webp` | `/images/games/afbgaming/20051.webp` | no | canonical file missing; no exact-stem local match |
| Magic Legend | `/images/games/afbgaming/20074.webp` | `/images/games/afbgaming/20074.webp` | no | canonical file missing; no exact-stem local match |
| Maneki Neko | `/images/games/afbgaming/19995.webp` | `/images/games/afbgaming/19995.webp` | no | canonical file missing; no exact-stem local match |
| Maneki Neko ULTRA | `/images/games/afbgaming/19972.webp` | `/images/games/afbgaming/19972.webp` | no | canonical file missing; no exact-stem local match |
| Maya Treasure Hunt | `/images/games/afbgaming/20062.webp` | `/images/games/afbgaming/20062.webp` | no | canonical file missing; no exact-stem local match |
| Mewtwo's Revenge Evolution | `/images/games/afbgaming/19965.webp` | `/images/games/afbgaming/19965.webp` | no | canonical file missing; no exact-stem local match |
| Millionaire | `/images/games/afbgaming/20042.webp` | `/images/games/afbgaming/20042.webp` | no | canonical file missing; no exact-stem local match |
| Millionaire | `/images/games/afbgaming/19982.webp` | `/images/games/afbgaming/19982.webp` | no | canonical file missing; no exact-stem local match |
| Money Tree | `/images/games/afbgaming/19973.webp` | `/images/games/afbgaming/19973.webp` | no | canonical file missing; no exact-stem local match |
| moneyTree2 | `/images/games/afbgaming/19990.webp` | `/images/games/afbgaming/19990.webp` | no | canonical file missing; no exact-stem local match |
| Mysterious Pyramid | `/images/games/afbgaming/20039.webp` | `/images/games/afbgaming/20039.webp` | no | canonical file missing; no exact-stem local match |
| Nezha Rebirth | `/images/games/afbgaming/19989.webp` | `/images/games/afbgaming/19989.webp` | no | canonical file missing; no exact-stem local match |
| Nezha Rebirth ULTRA | `/images/games/afbgaming/19966.webp` | `/images/games/afbgaming/19966.webp` | no | canonical file missing; no exact-stem local match |
| Oil Tycoon | `/images/games/afbgaming/20059.webp` | `/images/games/afbgaming/20059.webp` | no | canonical file missing; no exact-stem local match |
| Olympian Zeus | `/images/games/afbgaming/19986.webp` | `/images/games/afbgaming/19986.webp` | no | canonical file missing; no exact-stem local match |
| Olympian Zeus ULTRA | `/images/games/afbgaming/19969.webp` | `/images/games/afbgaming/19969.webp` | no | canonical file missing; no exact-stem local match |
| Panda Fortune | `/images/games/afbgaming/20045.webp` | `/images/games/afbgaming/20045.webp` | no | canonical file missing; no exact-stem local match |
| Pegasus Blessing | `/images/games/afbgaming/19962.webp` | `/images/games/afbgaming/19962.webp` | no | canonical file missing; no exact-stem local match |
| Pirate King Riches | `/images/games/afbgaming/19964.webp` | `/images/games/afbgaming/19964.webp` | no | canonical file missing; no exact-stem local match |
| Pirate Treasure | `/images/games/afbgaming/20038.webp` | `/images/games/afbgaming/20038.webp` | no | canonical file missing; no exact-stem local match |
| Pokemon Ball Master | `/images/games/afbgaming/19963.webp` | `/images/games/afbgaming/19963.webp` | no | canonical file missing; no exact-stem local match |
| popsicle Paradise | `/images/games/afbgaming/20001.webp` | `/images/games/afbgaming/20001.webp` | no | canonical file missing; no exact-stem local match |
| Richest Witch | `/images/games/afbgaming/19999.webp` | `/images/games/afbgaming/19999.webp` | no | canonical file missing; no exact-stem local match |
| Richest Witch ULTRA | `/images/games/afbgaming/19967.webp` | `/images/games/afbgaming/19967.webp` | no | canonical file missing; no exact-stem local match |
| Rock Time | `/images/games/afbgaming/20040.webp` | `/images/games/afbgaming/20040.webp` | no | canonical file missing; no exact-stem local match |
| Royal Mahjong | `/images/games/afbgaming/20026.webp` | `/images/games/afbgaming/20026.webp` | no | canonical file missing; no exact-stem local match |
| Safari | `/images/games/afbgaming/20033.webp` | `/images/games/afbgaming/20033.webp` | no | canonical file missing; no exact-stem local match |
| Sakura Ninja | `/images/games/afbgaming/20036.webp` | `/images/games/afbgaming/20036.webp` | no | canonical file missing; no exact-stem local match |
| Sobek’s Treasure | `/images/games/afbgaming/20023.webp` | `/images/games/afbgaming/20023.webp` | no | canonical file missing; no exact-stem local match |
| Special Action | `/images/games/afbgaming/20049.webp` | `/images/games/afbgaming/20049.webp` | no | canonical file missing; no exact-stem local match |
| Spookiz | `/images/games/afbgaming/20063.webp` | `/images/games/afbgaming/20063.webp` | no | canonical file missing; no exact-stem local match |
| Summer Paradise | `/images/games/afbgaming/20065.webp` | `/images/games/afbgaming/20065.webp` | no | canonical file missing; no exact-stem local match |
| Super Double | `/images/games/afbgaming/19983.webp` | `/images/games/afbgaming/19983.webp` | no | canonical file missing; no exact-stem local match |
| Super Flame | `/images/games/afbgaming/20048.webp` | `/images/games/afbgaming/20048.webp` | no | canonical file missing; no exact-stem local match |
| Sweet love | `/images/games/afbgaming/20016.webp` | `/images/games/afbgaming/20016.webp` | no | canonical file missing; no exact-stem local match |
| Texas Wind | `/images/games/afbgaming/19981.webp` | `/images/games/afbgaming/19981.webp` | no | canonical file missing; no exact-stem local match |
| Three Kingdoms | `/images/games/afbgaming/20061.webp` | `/images/games/afbgaming/20061.webp` | no | canonical file missing; no exact-stem local match |
| Vice City | `/images/games/afbgaming/20057.webp` | `/images/games/afbgaming/20057.webp` | no | canonical file missing; no exact-stem local match |
| Voyage of Venice | `/images/games/afbgaming/20071.webp` | `/images/games/afbgaming/20071.webp` | no | canonical file missing; no exact-stem local match |
| Wallow In Money | `/images/games/afbgaming/20005.webp` | `/images/games/afbgaming/20005.webp` | no | canonical file missing; no exact-stem local match |
| Wallow In Money ULTRA | `/images/games/afbgaming/19971.webp` | `/images/games/afbgaming/19971.webp` | no | canonical file missing; no exact-stem local match |
| War of Gods | `/images/games/afbgaming/20044.webp` | `/images/games/afbgaming/20044.webp` | no | canonical file missing; no exact-stem local match |
| Wheel of Wealth | `/images/games/afbgaming/20041.webp` | `/images/games/afbgaming/20041.webp` | no | canonical file missing; no exact-stem local match |
| Wild West | `/images/games/afbgaming/20056.webp` | `/images/games/afbgaming/20056.webp` | no | canonical file missing; no exact-stem local match |
| Wong Choy SA | `/images/games/spadegaming/13215.webp` | `/images/games/spadegaming/13215.webp` | no | canonical file missing; no exact-stem local match |
| Zhao Cai Jin Bao | `/images/games/afbgaming/20064.webp` | `/images/games/afbgaming/20064.webp` | no | canonical file missing; no exact-stem local match |
| Mahjong Ways | `/images/games/pgsoft/mahjong-ways.webp` | `/images/games/pgsoft/mahjong-ways.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Mahjong Ways 2 | `/images/games/pgsoft/mahjong-ways-2.webp` | `/images/games/pgsoft/mahjong-ways-2.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Lucky Neko | `/images/games/pgsoft/lucky-neko.webp` | `/images/games/pgsoft/lucky-neko.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Wild Bandito | `/images/games/pgsoft/wild-bandito.webp` | `/images/games/pgsoft/wild-bandito.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Treasures of Aztec | `/images/games/pgsoft/treasures-of-aztec.webp` | `/images/games/pgsoft/treasures-of-aztec.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Fortune Tiger | `/images/games/pgsoft/fortune-tiger.webp` | `/images/games/pgsoft/fortune-tiger.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Fortune Rabbit | `/images/games/pgsoft/fortune-rabbit.webp` | `/images/games/pgsoft/fortune-rabbit.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Fortune Ox | `/images/games/pgsoft/fortune-ox.webp` | `/images/games/pgsoft/fortune-ox.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Captain's Bounty | `/images/games/pgsoft/captains-bounty.webp` | `/images/games/pgsoft/captains-bounty.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Candy Burst | `/images/games/pgsoft/candy-burst.webp` | `/images/games/pgsoft/candy-burst.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Ganesha Fortune | `/images/games/pgsoft/ganesha-fortune.webp` | `/images/games/pgsoft/ganesha-fortune.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Ganesha Gold | `/images/games/pgsoft/ganesha-gold.webp` | `/images/games/pgsoft/ganesha-gold.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Dragon Hatch | `/images/games/pgsoft/dragon-hatch.webp` | `/images/games/pgsoft/dragon-hatch.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Dragon Hatch 2 | `/images/games/pgsoft/dragon-hatch-2.webp` | `/images/games/pgsoft/dragon-hatch-2.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Ways of the Qilin | `/images/games/pgsoft/ways-of-the-qilin.webp` | `/images/games/pgsoft/ways-of-the-qilin.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Legend of Perseus | `/images/games/pgsoft/legend-of-perseus.webp` | `/images/games/pgsoft/legend-of-perseus.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Wild Bounty Showdown | `/images/games/pgsoft/wild-bounty-showdown.webp` | `/images/games/pgsoft/wild-bounty-showdown.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Speed Winner | `/images/games/pgsoft/speed-winner.webp` | `/images/games/pgsoft/speed-winner.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Pinata Wins | `/images/games/pgsoft/pinata-wins.webp` | `/images/games/pgsoft/pinata-wins.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Cocktail Nights | `/images/games/pgsoft/cocktail-nights.webp` | `/images/games/pgsoft/cocktail-nights.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Queen of Bounty | `/images/games/pgsoft/queen-of-bounty.webp` | `/images/games/pgsoft/queen-of-bounty.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Jurassic Kingdom | `/images/games/pgsoft/jurassic-kingdom.webp` | `/images/games/pgsoft/jurassic-kingdom.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Bali Vacation | `/images/games/pgsoft/bali-vacation.webp` | `/images/games/pgsoft/bali-vacation.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Crypto Gold | `/images/games/pgsoft/crypto-gold.webp` | `/images/games/pgsoft/crypto-gold.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Egypt's Book of Mystery | `/images/games/pgsoft/egypts-book-of-mystery.webp` | `/images/games/pgsoft/egypts-book-of-mystery.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Opera Dynasty | `/images/games/pgsoft/opera-dynasty.webp` | `/images/games/pgsoft/opera-dynasty.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Mask Carnival | `/images/games/pgsoft/mask-carnival.webp` | `/images/games/pgsoft/mask-carnival.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Rise of Apollo | `/images/games/pgsoft/rise-of-apollo.webp` | `/images/games/pgsoft/rise-of-apollo.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Shaolin Soccer | `/images/games/pgsoft/shaolin-soccer.webp` | `/images/games/pgsoft/shaolin-soccer.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Songkran Splash | `/images/games/pgsoft/songkran-splash.webp` | `/images/games/pgsoft/songkran-splash.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Asgardian Rising | `/images/games/pgsoft/asgardian-rising.webp` | `/images/games/pgsoft/asgardian-rising.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Wild Heist Cashout | `/images/games/pgsoft/wild-heist-cashout.webp` | `/images/games/pgsoft/wild-heist-cashout.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Midas Fortune | `/images/games/pgsoft/midas-fortune.webp` | `/images/games/pgsoft/midas-fortune.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Ultimate Striker | `/images/games/pgsoft/ultimate-striker.webp` | `/images/games/pgsoft/ultimate-striker.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Forge of Wealth | `/images/games/pgsoft/forge-of-wealth.webp` | `/images/games/pgsoft/forge-of-wealth.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Lightning Roulette | `/images/games/pgsoft/lightning-roulette.webp` | `/images/games/pgsoft/lightning-roulette.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Crazy Time | `/images/games/pgsoft/crazy-time.webp` | `/images/games/pgsoft/crazy-time.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Dream Catcher | `/images/games/pgsoft/dream-catcher.webp` | `/images/games/pgsoft/dream-catcher.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Monopoly Live | `/images/games/pgsoft/monopoly-live.webp` | `/images/games/pgsoft/monopoly-live.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Blackjack VIP | `/images/games/pgsoft/blackjack-vip.webp` | `/images/games/pgsoft/blackjack-vip.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Lightning Baccarat | `/images/games/pgsoft/lightning-baccarat.webp` | `/images/games/pgsoft/lightning-baccarat.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Speed Baccarat A | `/images/games/pgsoft/speed-baccarat-a.webp` | `/images/games/pgsoft/speed-baccarat-a.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Speed Baccarat B | `/images/games/pgsoft/speed-baccarat-b.webp` | `/images/games/pgsoft/speed-baccarat-b.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Baccarat Control Squeeze | `/images/games/pgsoft/baccarat-control-squeeze.webp` | `/images/games/pgsoft/baccarat-control-squeeze.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Immersive Roulette | `/images/games/pgsoft/immersive-roulette.webp` | `/images/games/pgsoft/immersive-roulette.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Auto Roulette | `/images/games/pgsoft/auto-roulette.webp` | `/images/games/pgsoft/auto-roulette.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Football Studio | `/images/games/pgsoft/football-studio.webp` | `/images/games/pgsoft/football-studio.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Crazy Coin Flip | `/images/games/pgsoft/crazy-coin-flip.webp` | `/images/games/pgsoft/crazy-coin-flip.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Mega Ball | `/images/games/pgsoft/mega-ball.webp` | `/images/games/pgsoft/mega-ball.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Gonzo's Treasure Hunt | `/images/games/pgsoft/gonzos-treasure-hunt.webp` | `/images/games/pgsoft/gonzos-treasure-hunt.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Cash or Crash | `/images/games/pgsoft/cash-or-crash.webp` | `/images/games/pgsoft/cash-or-crash.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Power Ball | `/images/games/pgsoft/power-ball.webp` | `/images/games/pgsoft/power-ball.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Fan Tan | `/images/games/pgsoft/fan-tan.webp` | `/images/games/pgsoft/fan-tan.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Caribbean Stud Poker | `/images/games/pgsoft/caribbean-stud-poker.webp` | `/images/games/pgsoft/caribbean-stud-poker.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Casino Hold'em | `/images/games/pgsoft/casino-holdem.webp` | `/images/games/pgsoft/casino-holdem.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Two Way Royal | `/images/games/pgsoft/two-way-royal.webp` | `/images/games/pgsoft/two-way-royal.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Infinite Blackjack | `/images/games/pgsoft/infinite-blackjack.webp` | `/images/games/pgsoft/infinite-blackjack.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Free Bet Blackjack | `/images/games/pgsoft/free-bet-blackjack.webp` | `/images/games/pgsoft/free-bet-blackjack.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Lightning Dice | `/images/games/pgsoft/lightning-dice.webp` | `/images/games/pgsoft/lightning-dice.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| XXXtreme Lightning Roulette | `/images/games/pgsoft/xxxtreme-lightning-roulette.webp` | `/images/games/pgsoft/xxxtreme-lightning-roulette.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Crazy Pachinko | `/images/games/pgsoft/crazy-pachinko.webp` | `/images/games/pgsoft/crazy-pachinko.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Funky Time | `/images/games/pgsoft/funky-time.webp` | `/images/games/pgsoft/funky-time.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Stock Market | `/images/games/pgsoft/stock-market.webp` | `/images/games/pgsoft/stock-market.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| First Person Lightning Roulette | `/images/games/pgsoft/first-person-lightning-roulette.webp` | `/images/games/pgsoft/first-person-lightning-roulette.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| First Person Blackjack | `/images/games/pgsoft/first-person-blackjack.webp` | `/images/games/pgsoft/first-person-blackjack.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Baccarat Baruto | `/images/games/pgsoft/baccarat-baruto.webp` | `/images/games/pgsoft/baccarat-baruto.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Peek Baccarat | `/images/games/pgsoft/peek-baccarat.webp` | `/images/games/pgsoft/peek-baccarat.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Super Andar Bahar | `/images/games/pgsoft/super-andar-bahar.webp` | `/images/games/pgsoft/super-andar-bahar.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Teen Patti Live | `/images/games/pgsoft/teen-patti-live.webp` | `/images/games/pgsoft/teen-patti-live.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Crazy Seven | `/images/games/pgsoft/crazy-seven.webp` | `/images/games/pgsoft/crazy-seven.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Roma X | `/images/games/pgsoft/roma-x.webp` | `/images/games/pgsoft/roma-x.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| SevenUpDown | `/images/games/pgsoft/sevenupdown.webp` | `/images/games/pgsoft/sevenupdown.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Callbreak | `/images/games/pgsoft/callbreak.webp` | `/images/games/pgsoft/callbreak.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Tongits Go | `/images/games/pgsoft/tongits-go.webp` | `/images/games/pgsoft/tongits-go.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Baccarat | `/images/games/pgsoft/baccarat.webp` | `/images/games/pgsoft/baccarat.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Cai Shen Fishing | `/images/games/pgsoft/cai-shen-fishing.webp` | `/images/games/pgsoft/cai-shen-fishing.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Shade Dragons Fishing | `/images/games/pgsoft/shade-dragons-fishing.webp` | `/images/games/pgsoft/shade-dragons-fishing.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Lucky Diamond | `/images/games/pgsoft/lucky-diamond.webp` | `/images/games/pgsoft/lucky-diamond.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Formosa Bear | `/images/games/pgsoft/formosa-bear.webp` | `/images/games/pgsoft/formosa-bear.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Lucky Seven | `/images/games/pgsoft/lucky-seven.webp` | `/images/games/pgsoft/lucky-seven.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Orient Animals | `/images/games/pgsoft/orient-animals.webp` | `/images/games/pgsoft/orient-animals.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Monkey King | `/images/games/pgsoft/monkey-king.webp` | `/images/games/pgsoft/monkey-king.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Flirting Scholar Tang | `/images/games/pgsoft/flirting-scholar-tang.webp` | `/images/games/pgsoft/flirting-scholar-tang.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Winning Mask | `/images/games/pgsoft/winning-mask.webp` | `/images/games/pgsoft/winning-mask.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Open Sesame | `/images/games/pgsoft/open-sesame.webp` | `/images/games/pgsoft/open-sesame.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Open Sesame II | `/images/games/pgsoft/open-sesame-ii.webp` | `/images/games/pgsoft/open-sesame-ii.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Dragon Warrior | `/images/games/pgsoft/dragon-warrior.webp` | `/images/games/pgsoft/dragon-warrior.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Moonlight Treasure | `/images/games/pgsoft/moonlight-treasure.webp` | `/images/games/pgsoft/moonlight-treasure.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Mjolnir | `/images/games/pgsoft/mjolnir.webp` | `/images/games/pgsoft/mjolnir.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Spindrift | `/images/games/pgsoft/spindrift.webp` | `/images/games/pgsoft/spindrift.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Spindrift 2 | `/images/games/pgsoft/spindrift-2.webp` | `/images/games/pgsoft/spindrift-2.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Birds Party | `/images/games/pgsoft/birds-party.webp` | `/images/games/pgsoft/birds-party.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Beer Tycoon | `/images/games/pgsoft/beer-tycoon.webp` | `/images/games/pgsoft/beer-tycoon.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Galaxy Burst | `/images/games/pgsoft/galaxy-burst.webp` | `/images/games/pgsoft/galaxy-burst.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Lucky Racing | `/images/games/pgsoft/lucky-racing.webp` | `/images/games/pgsoft/lucky-racing.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Mine Sweeper | `/images/games/pgsoft/mine-sweeper.webp` | `/images/games/pgsoft/mine-sweeper.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Firework Burst | `/images/games/pgsoft/firework-burst.webp` | `/images/games/pgsoft/firework-burst.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Joker Treasure | `/images/games/pgsoft/joker-treasure.webp` | `/images/games/pgsoft/joker-treasure.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Triple King Kong | `/images/games/pgsoft/triple-king-kong.webp` | `/images/games/pgsoft/triple-king-kong.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Sexy Baccarat Classic | `/images/games/sexy-gaming/sexy-baccarat-classic.webp` | `/images/games/sexy-gaming/sexy-baccarat-classic.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Sexy Baccarat Speed | `/images/games/sexy-gaming/sexy-baccarat-speed.webp` | `/images/games/sexy-gaming/sexy-baccarat-speed.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Sexy Baccarat Squeeze | `/images/games/sexy-gaming/sexy-baccarat-squeeze.webp` | `/images/games/sexy-gaming/sexy-baccarat-squeeze.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| AE Sexy Baccarat 1 | `/images/games/sexy-gaming/ae-sexy-baccarat-1.webp` | `/images/games/sexy-gaming/ae-sexy-baccarat-1.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| AE Sexy Baccarat 2 | `/images/games/sexy-gaming/ae-sexy-baccarat-2.webp` | `/images/games/sexy-gaming/ae-sexy-baccarat-2.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| AE Sexy Baccarat 3 | `/images/games/sexy-gaming/ae-sexy-baccarat-3.webp` | `/images/games/sexy-gaming/ae-sexy-baccarat-3.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| AE Sexy Dragon Tiger | `/images/games/sexy-gaming/ae-sexy-dragon-tiger.webp` | `/images/games/sexy-gaming/ae-sexy-dragon-tiger.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| AE Sexy Roulette | `/images/games/sexy-gaming/ae-sexy-roulette.webp` | `/images/games/sexy-gaming/ae-sexy-roulette.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| AE Sexy Sicbo | `/images/games/sexy-gaming/ae-sexy-sicbo.webp` | `/images/games/sexy-gaming/ae-sexy-sicbo.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Extra Baccarat | `/images/games/sexy-gaming/extra-baccarat.webp` | `/images/games/sexy-gaming/extra-baccarat.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Insurance Baccarat | `/images/games/sexy-gaming/insurance-baccarat.webp` | `/images/games/sexy-gaming/insurance-baccarat.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Teen Patti Sexy | `/images/games/sexy-gaming/teen-patti-sexy.webp` | `/images/games/sexy-gaming/teen-patti-sexy.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Andar Bahar Sexy | `/images/games/sexy-gaming/andar-bahar-sexy.webp` | `/images/games/sexy-gaming/andar-bahar-sexy.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Thai Hi Lo | `/images/games/sexy-gaming/thai-hi-lo.webp` | `/images/games/sexy-gaming/thai-hi-lo.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Extra Andar Bahar | `/images/games/sexy-gaming/extra-andar-bahar.webp` | `/images/games/sexy-gaming/extra-andar-bahar.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Sedie | `/images/games/sexy-gaming/sedie.webp` | `/images/games/sexy-gaming/sedie.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Pok Deng | `/images/games/sexy-gaming/pok-deng.webp` | `/images/games/sexy-gaming/pok-deng.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Baccarat VIP 1 | `/images/games/sexy-gaming/baccarat-vip-1.webp` | `/images/games/sexy-gaming/baccarat-vip-1.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Baccarat VIP 2 | `/images/games/sexy-gaming/baccarat-vip-2.webp` | `/images/games/sexy-gaming/baccarat-vip-2.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Baccarat VIP 3 | `/images/games/sexy-gaming/baccarat-vip-3.webp` | `/images/games/sexy-gaming/baccarat-vip-3.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Speed Dragon Tiger | `/images/games/sexy-gaming/speed-dragon-tiger.webp` | `/images/games/sexy-gaming/speed-dragon-tiger.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Lucky Roulette | `/images/games/sexy-gaming/lucky-roulette.webp` | `/images/games/sexy-gaming/lucky-roulette.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Multiplay Baccarat | `/images/games/sexy-gaming/multiplay-baccarat.webp` | `/images/games/sexy-gaming/multiplay-baccarat.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Baccarat 1 | `/images/games/dream-gaming/dg-baccarat-1.webp` | `/images/games/dream-gaming/dg-baccarat-1.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Baccarat 2 | `/images/games/dream-gaming/dg-baccarat-2.webp` | `/images/games/dream-gaming/dg-baccarat-2.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Speed Baccarat | `/images/games/dream-gaming/dg-speed-baccarat.webp` | `/images/games/dream-gaming/dg-speed-baccarat.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Roulette | `/images/games/dream-gaming/dg-roulette.webp` | `/images/games/dream-gaming/dg-roulette.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Dragon Tiger | `/images/games/dream-gaming/dg-dragon-tiger.webp` | `/images/games/dream-gaming/dg-dragon-tiger.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Sic Bo | `/images/games/dream-gaming/dg-sic-bo.webp` | `/images/games/dream-gaming/dg-sic-bo.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Fan Tan | `/images/games/dream-gaming/dg-fan-tan.webp` | `/images/games/dream-gaming/dg-fan-tan.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Blackjack | `/images/games/dream-gaming/dg-blackjack.webp` | `/images/games/dream-gaming/dg-blackjack.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Three Card Poker | `/images/games/dream-gaming/dg-three-card-poker.webp` | `/images/games/dream-gaming/dg-three-card-poker.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Bull Bull | `/images/games/dream-gaming/dg-bull-bull.webp` | `/images/games/dream-gaming/dg-bull-bull.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Casino War | `/images/games/dream-gaming/dg-casino-war.webp` | `/images/games/dream-gaming/dg-casino-war.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Baccarat Insurance | `/images/games/dream-gaming/dg-baccarat-insurance.webp` | `/images/games/dream-gaming/dg-baccarat-insurance.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Bid Baccarat | `/images/games/dream-gaming/dg-bid-baccarat.webp` | `/images/games/dream-gaming/dg-bid-baccarat.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG VIP Baccarat | `/images/games/dream-gaming/dg-vip-baccarat.webp` | `/images/games/dream-gaming/dg-vip-baccarat.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Disco Baccarat | `/images/games/dream-gaming/dg-disco-baccarat.webp` | `/images/games/dream-gaming/dg-disco-baccarat.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Lucky 5 | `/images/games/dream-gaming/dg-lucky-5.webp` | `/images/games/dream-gaming/dg-lucky-5.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Sicbo High Roller | `/images/games/dream-gaming/dg-sicbo-high-roller.webp` | `/images/games/dream-gaming/dg-sicbo-high-roller.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Wheel Roulette | `/images/games/dream-gaming/dg-wheel-roulette.webp` | `/images/games/dream-gaming/dg-wheel-roulette.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Fish Prawn Crab | `/images/games/dream-gaming/dg-fish-prawn-crab.webp` | `/images/games/dream-gaming/dg-fish-prawn-crab.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Andar Bahar | `/images/games/dream-gaming/dg-andar-bahar.webp` | `/images/games/dream-gaming/dg-andar-bahar.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Teen Patti | `/images/games/dream-gaming/dg-teen-patti.webp` | `/images/games/dream-gaming/dg-teen-patti.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Sedie | `/images/games/dream-gaming/dg-sedie.webp` | `/images/games/dream-gaming/dg-sedie.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Extreme Baccarat | `/images/games/dream-gaming/dg-extreme-baccarat.webp` | `/images/games/dream-gaming/dg-extreme-baccarat.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| DG Classic Roulette | `/images/games/dream-gaming/dg-classic-roulette.webp` | `/images/games/dream-gaming/dg-classic-roulette.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Immortal Romance | `/images/games/dream-gaming/immortal-romance.webp` | `/images/games/dream-gaming/immortal-romance.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Thunderstruck II | `/images/games/dream-gaming/thunderstruck-ii.webp` | `/images/games/dream-gaming/thunderstruck-ii.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Avalon | `/images/games/dream-gaming/avalon.webp` | `/images/games/dream-gaming/avalon.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Break da Bank Again | `/images/games/dream-gaming/break-da-bank-again.webp` | `/images/games/dream-gaming/break-da-bank-again.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Mega Moolah | `/images/games/dream-gaming/mega-moolah.webp` | `/images/games/dream-gaming/mega-moolah.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Playboy | `/images/games/dream-gaming/playboy.webp` | `/images/games/dream-gaming/playboy.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Game of Thrones | `/images/games/dream-gaming/game-of-thrones.webp` | `/images/games/dream-gaming/game-of-thrones.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Titans of the Sun Hyperion | `/images/games/dream-gaming/titans-of-the-sun-hyperion.webp` | `/images/games/dream-gaming/titans-of-the-sun-hyperion.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Lara Croft Temples and Tombs | `/images/games/dream-gaming/lara-croft-temples-and-tombs.webp` | `/images/games/dream-gaming/lara-croft-temples-and-tombs.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| 9 Masks of Fire | `/images/games/dream-gaming/9-masks-of-fire.webp` | `/images/games/dream-gaming/9-masks-of-fire.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| 9 Pots of Gold | `/images/games/dream-gaming/9-pots-of-gold.webp` | `/images/games/dream-gaming/9-pots-of-gold.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Fishin' Frenzy | `/images/games/dream-gaming/fishin-frenzy.webp` | `/images/games/dream-gaming/fishin-frenzy.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Book of Mr Gold | `/images/games/dream-gaming/book-of-mr-gold.webp` | `/images/games/dream-gaming/book-of-mr-gold.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Agent Jane Blonde | `/images/games/dream-gaming/agent-jane-blonde.webp` | `/images/games/dream-gaming/agent-jane-blonde.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Pure Platinum | `/images/games/dream-gaming/pure-platinum.webp` | `/images/games/dream-gaming/pure-platinum.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Reel Spinner | `/images/games/dream-gaming/reel-spinner.webp` | `/images/games/dream-gaming/reel-spinner.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Sterling Silver | `/images/games/dream-gaming/sterling-silver.webp` | `/images/games/dream-gaming/sterling-silver.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Cash Crazy | `/images/games/dream-gaming/cash-crazy.webp` | `/images/games/dream-gaming/cash-crazy.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Lucky Firecracker | `/images/games/dream-gaming/lucky-firecracker.webp` | `/images/games/dream-gaming/lucky-firecracker.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Western Gold | `/images/games/dream-gaming/western-gold.webp` | `/images/games/dream-gaming/western-gold.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Hypernova Megaways | `/images/games/dream-gaming/hypernova-megaways.webp` | `/images/games/dream-gaming/hypernova-megaways.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Shooting Star | `/images/games/dream-gaming/shooting-star.webp` | `/images/games/dream-gaming/shooting-star.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Starlite Fruits | `/images/games/dream-gaming/starlite-fruits.webp` | `/images/games/dream-gaming/starlite-fruits.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Wacky Panda | `/images/games/dream-gaming/wacky-panda.webp` | `/images/games/dream-gaming/wacky-panda.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Basketball Star Wilds | `/images/games/dream-gaming/basketball-star-wilds.webp` | `/images/games/dream-gaming/basketball-star-wilds.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Football Star Deluxe | `/images/games/dream-gaming/football-star-deluxe.webp` | `/images/games/dream-gaming/football-star-deluxe.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Treasure Palace | `/images/games/dream-gaming/treasure-palace.webp` | `/images/games/dream-gaming/treasure-palace.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Dragon Dance | `/images/games/dream-gaming/dragon-dance.webp` | `/images/games/dream-gaming/dragon-dance.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Emoti-Conga | `/images/games/dream-gaming/emoti-conga.webp` | `/images/games/dream-gaming/emoti-conga.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Deco Diamonds Deluxe | `/images/games/dream-gaming/deco-diamonds-deluxe.webp` | `/images/games/dream-gaming/deco-diamonds-deluxe.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Book of Dead | `/images/games/playngo/book-of-dead.webp` | `/images/games/playngo/book-of-dead.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Reactoonz | `/images/games/playngo/reactoonz.webp` | `/images/games/playngo/reactoonz.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Reactoonz 2 | `/images/games/playngo/reactoonz-2.webp` | `/images/games/playngo/reactoonz-2.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Moon Princess | `/images/games/playngo/moon-princess.webp` | `/images/games/playngo/moon-princess.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Moon Princess Trinity | `/images/games/playngo/moon-princess-trinity.webp` | `/images/games/playngo/moon-princess-trinity.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Fire Joker | `/images/games/playngo/fire-joker.webp` | `/images/games/playngo/fire-joker.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Rise of Olympus | `/images/games/playngo/rise-of-olympus.webp` | `/images/games/playngo/rise-of-olympus.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Rise of Olympus 100 | `/images/games/playngo/rise-of-olympus-100.webp` | `/images/games/playngo/rise-of-olympus-100.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Tome of Madness | `/images/games/playngo/tome-of-madness.webp` | `/images/games/playngo/tome-of-madness.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Legacy of Dead | `/images/games/playngo/legacy-of-dead.webp` | `/images/games/playngo/legacy-of-dead.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Gemix | `/images/games/playngo/gemix.webp` | `/images/games/playngo/gemix.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Gemix 2 | `/images/games/playngo/gemix-2.webp` | `/images/games/playngo/gemix-2.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Honey Rush | `/images/games/playngo/honey-rush.webp` | `/images/games/playngo/honey-rush.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Honey Rush 100 | `/images/games/playngo/honey-rush-100.webp` | `/images/games/playngo/honey-rush-100.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Disco Diamonds | `/images/games/playngo/disco-diamonds.webp` | `/images/games/playngo/disco-diamonds.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Charlie Chance | `/images/games/playngo/charlie-chance.webp` | `/images/games/playngo/charlie-chance.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Mirror Joker | `/images/games/playngo/mirror-joker.webp` | `/images/games/playngo/mirror-joker.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Wild Falls | `/images/games/playngo/wild-falls.webp` | `/images/games/playngo/wild-falls.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Banquet of Dead | `/images/games/playngo/banquet-of-dead.webp` | `/images/games/playngo/banquet-of-dead.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Dawn of Egypt | `/images/games/playngo/dawn-of-egypt.webp` | `/images/games/playngo/dawn-of-egypt.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Inferno Joker | `/images/games/playngo/inferno-joker.webp` | `/images/games/playngo/inferno-joker.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Cat Wilde and the Pyramids of Dead | `/images/games/playngo/cat-wilde-and-the-pyramids-of-dead.webp` | `/images/games/playngo/cat-wilde-and-the-pyramids-of-dead.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Rich Wilde and the Tome of Dead | `/images/games/playngo/rich-wilde-and-the-tome-of-dead.webp` | `/images/games/playngo/rich-wilde-and-the-tome-of-dead.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Scroll of Dead | `/images/games/playngo/scroll-of-dead.webp` | `/images/games/playngo/scroll-of-dead.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Perfect Pair Poker | `/images/games/playngo/perfect-pair-poker.webp` | `/images/games/playngo/perfect-pair-poker.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| European Blackjack | `/images/games/playngo/european-blackjack.webp` | `/images/games/playngo/european-blackjack.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| European Roulette Pro | `/images/games/playngo/european-roulette-pro.webp` | `/images/games/playngo/european-roulette-pro.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Mini Roulette | `/images/games/playngo/mini-roulette.webp` | `/images/games/playngo/mini-roulette.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| House of Doom | `/images/games/playngo/house-of-doom.webp` | `/images/games/playngo/house-of-doom.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Aviator | `/images/games/playngo/aviator.webp` | `/images/games/playngo/aviator.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Dice | `/images/games/playngo/dice.webp` | `/images/games/playngo/dice.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Goal | `/images/games/playngo/goal.webp` | `/images/games/playngo/goal.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Hi Lo | `/images/games/playngo/hi-lo.webp` | `/images/games/playngo/hi-lo.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Mini Roulette | `/images/games/playngo/mini-roulette.webp` | `/images/games/playngo/mini-roulette.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Hotline | `/images/games/playngo/hotline.webp` | `/images/games/playngo/hotline.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Balloon | `/images/games/playngo/balloon.webp` | `/images/games/playngo/balloon.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Trading Dice | `/images/games/playngo/trading-dice.webp` | `/images/games/playngo/trading-dice.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Keno Multi | `/images/games/playngo/keno-multi.webp` | `/images/games/playngo/keno-multi.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Crash X | `/images/games/playngo/crash-x.webp` | `/images/games/playngo/crash-x.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| JetX Style | `/images/games/playngo/jetx-style.webp` | `/images/games/playngo/jetx-style.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Turbo Mines | `/images/games/playngo/turbo-mines.webp` | `/images/games/playngo/turbo-mines.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Goal Rush | `/images/games/playngo/goal-rush.webp` | `/images/games/playngo/goal-rush.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Rock Paper Scissors | `/images/games/playngo/rock-paper-scissors.webp` | `/images/games/playngo/rock-paper-scissors.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Crypto Aviator | `/images/games/playngo/crypto-aviator.webp` | `/images/games/playngo/crypto-aviator.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Double Dice | `/images/games/playngo/double-dice.webp` | `/images/games/playngo/double-dice.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Stairs | `/images/games/playngo/stairs.webp` | `/images/games/playngo/stairs.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Fishing God | `/images/games/playngo/fishing-god.webp` | `/images/games/playngo/fishing-god.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Fishing War | `/images/games/playngo/fishing-war.webp` | `/images/games/playngo/fishing-war.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Alien Hunter | `/images/games/playngo/alien-hunter.webp` | `/images/games/playngo/alien-hunter.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Zombie Party | `/images/games/playngo/zombie-party.webp` | `/images/games/playngo/zombie-party.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Ocean Emperor | `/images/games/playngo/ocean-emperor.webp` | `/images/games/playngo/ocean-emperor.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Golden Hook | `/images/games/playngo/golden-hook.webp` | `/images/games/playngo/golden-hook.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Legacy of Kong | `/images/games/playngo/legacy-of-kong.webp` | `/images/games/playngo/legacy-of-kong.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Dragon Gate | `/images/games/playngo/dragon-gate.webp` | `/images/games/playngo/dragon-gate.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Magic Bean | `/images/games/playngo/magic-bean.webp` | `/images/games/playngo/magic-bean.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Lucky Lucky | `/images/games/playngo/lucky-lucky.webp` | `/images/games/playngo/lucky-lucky.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Mermaid | `/images/games/playngo/mermaid.webp` | `/images/games/playngo/mermaid.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Wow Beauty | `/images/games/playngo/wow-beauty.webp` | `/images/games/playngo/wow-beauty.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Three Kingdoms | `/images/games/playngo/three-kingdoms.webp` | `/images/games/playngo/three-kingdoms.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Muay Thai Champion | `/images/games/playngo/muay-thai-champion.webp` | `/images/games/playngo/muay-thai-champion.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Hot Hot Fruit | `/images/games/playngo/hot-hot-fruit.webp` | `/images/games/playngo/hot-hot-fruit.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Hot Hot Summer | `/images/games/playngo/hot-hot-summer.webp` | `/images/games/playngo/hot-hot-summer.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Koi Gate | `/images/games/playngo/koi-gate.webp` | `/images/games/playngo/koi-gate.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Fa Cai Shen | `/images/games/playngo/fa-cai-shen.webp` | `/images/games/playngo/fa-cai-shen.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Fa Cai Shen Deluxe | `/images/games/playngo/fa-cai-shen-deluxe.webp` | `/images/games/playngo/fa-cai-shen-deluxe.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Wealth Inn | `/images/games/playngo/wealth-inn.webp` | `/images/games/playngo/wealth-inn.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Lucky Fortune Cat | `/images/games/playngo/lucky-fortune-cat.webp` | `/images/games/playngo/lucky-fortune-cat.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Panda Panda | `/images/games/playngo/panda-panda.webp` | `/images/games/playngo/panda-panda.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Jumpin Pot | `/images/games/playngo/jumpin-pot.webp` | `/images/games/playngo/jumpin-pot.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Wicked Witch | `/images/games/playngo/wicked-witch.webp` | `/images/games/playngo/wicked-witch.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Scopa | `/images/games/playngo/scopa.webp` | `/images/games/playngo/scopa.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| The Dead Escape | `/images/games/playngo/the-dead-escape.webp` | `/images/games/playngo/the-dead-escape.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Knockout Football | `/images/games/playngo/knockout-football.webp` | `/images/games/playngo/knockout-football.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Knockout Football Rush | `/images/games/playngo/knockout-football-rush.webp` | `/images/games/playngo/knockout-football-rush.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Egyptian Dreams Deluxe | `/images/games/playngo/egyptian-dreams-deluxe.webp` | `/images/games/playngo/egyptian-dreams-deluxe.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Rome: The Golden Age | `/images/games/playngo/rome-the-golden-age.webp` | `/images/games/playngo/rome-the-golden-age.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Lucky Lucky | `/images/games/playngo/lucky-lucky.webp` | `/images/games/playngo/lucky-lucky.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| 5 Lucky Lions | `/images/games/playngo/5-lucky-lions.webp` | `/images/games/playngo/5-lucky-lions.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Golden Unicorn Deluxe | `/images/games/playngo/golden-unicorn-deluxe.webp` | `/images/games/playngo/golden-unicorn-deluxe.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Magic Oak | `/images/games/playngo/magic-oak.webp` | `/images/games/playngo/magic-oak.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Taberna De Los Muertos | `/images/games/playngo/taberna-de-los-muertos.webp` | `/images/games/playngo/taberna-de-los-muertos.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Laughing Buddha | `/images/games/playngo/laughing-buddha.webp` | `/images/games/playngo/laughing-buddha.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Orbs of Atlantis | `/images/games/playngo/orbs-of-atlantis.webp` | `/images/games/playngo/orbs-of-atlantis.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Ride 'em Cowboy | `/images/games/playngo/ride-em-cowboy.webp` | `/images/games/playngo/ride-em-cowboy.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Nuwa | `/images/games/playngo/nuwa.webp` | `/images/games/playngo/nuwa.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Legendary Beasts | `/images/games/playngo/legendary-beasts.webp` | `/images/games/playngo/legendary-beasts.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Christmas Gift Rush | `/images/games/playngo/christmas-gift-rush.webp` | `/images/games/playngo/christmas-gift-rush.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Happy Ape | `/images/games/playngo/happy-ape.webp` | `/images/games/playngo/happy-ape.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Soju Bomb | `/images/games/playngo/soju-bomb.webp` | `/images/games/playngo/soju-bomb.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Dragon Tiger Gate | `/images/games/playngo/dragon-tiger-gate.webp` | `/images/games/playngo/dragon-tiger-gate.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Football Markets | `/images/games/playngo/football-markets.webp` | `/images/games/playngo/football-markets.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Premier League Hub | `/images/games/playngo/premier-league-hub.webp` | `/images/games/playngo/premier-league-hub.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Champions League | `/images/games/playngo/champions-league.webp` | `/images/games/playngo/champions-league.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| NBA Markets | `/images/games/playngo/nba-markets.webp` | `/images/games/playngo/nba-markets.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| NBA Live Betting | `/images/games/playngo/nba-live-betting.webp` | `/images/games/playngo/nba-live-betting.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Badminton Malaysia Open | `/images/games/playngo/badminton-malaysia-open.webp` | `/images/games/playngo/badminton-malaysia-open.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Tennis Grand Slam | `/images/games/playngo/tennis-grand-slam.webp` | `/images/games/playngo/tennis-grand-slam.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Cricket World Markets | `/images/games/playngo/cricket-world-markets.webp` | `/images/games/playngo/cricket-world-markets.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Esports CS2 | `/images/games/playngo/esports-cs2.webp` | `/images/games/playngo/esports-cs2.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Esports Dota 2 | `/images/games/playngo/esports-dota-2.webp` | `/images/games/playngo/esports-dota-2.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Virtual Football | `/images/games/playngo/virtual-football.webp` | `/images/games/playngo/virtual-football.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Virtual Basketball | `/images/games/playngo/virtual-basketball.webp` | `/images/games/playngo/virtual-basketball.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Parlay Builder | `/images/games/playngo/parlay-builder.webp` | `/images/games/playngo/parlay-builder.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Asian Handicap Desk | `/images/games/playngo/asian-handicap-desk.webp` | `/images/games/playngo/asian-handicap-desk.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Over Under Hub | `/images/games/playngo/over-under-hub.webp` | `/images/games/playngo/over-under-hub.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Live Football Corner | `/images/games/playngo/live-football-corner.webp` | `/images/games/playngo/live-football-corner.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Boxing & MMA | `/images/games/playngo/boxing-mma.webp` | `/images/games/playngo/boxing-mma.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Golf Majors | `/images/games/playngo/golf-majors.webp` | `/images/games/playngo/golf-majors.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Motor Sports | `/images/games/playngo/motor-sports.webp` | `/images/games/playngo/motor-sports.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Table Tennis | `/images/games/playngo/table-tennis.webp` | `/images/games/playngo/table-tennis.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Volleyball Markets | `/images/games/playngo/volleyball-markets.webp` | `/images/games/playngo/volleyball-markets.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Rugby Markets | `/images/games/playngo/rugby-markets.webp` | `/images/games/playngo/rugby-markets.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| SBO Specials | `/images/games/playngo/sbo-specials.webp` | `/images/games/playngo/sbo-specials.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Outright Winners | `/images/games/playngo/outright-winners.webp` | `/images/games/playngo/outright-winners.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Live Blackjack Lobby | `/images/games/pragmatic/live-blackjack-lobby.webp` | `/images/games/pragmatic/live-blackjack-lobby.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Live Roulette Lobby | `/images/games/pragmatic/live-roulette-lobby.webp` | `/images/games/pragmatic/live-roulette-lobby.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Mega Wheel | `/images/games/pragmatic/mega-wheel.webp` | `/images/games/pragmatic/mega-wheel.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| ONE Blackjack | `/images/games/pragmatic/one-blackjack.webp` | `/images/games/pragmatic/one-blackjack.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Sweet Bonanza Candyland | `/images/games/pragmatic/sweet-bonanza-candyland.webp` | `/images/games/pragmatic/sweet-bonanza-candyland.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Boom City | `/images/games/pragmatic/boom-city.webp` | `/images/games/pragmatic/boom-city.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Snakes & Ladders Live | `/images/games/pragmatic/snakes-ladders-live.webp` | `/images/games/pragmatic/snakes-ladders-live.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| PowerUP Roulette | `/images/games/pragmatic/powerup-roulette.webp` | `/images/games/pragmatic/powerup-roulette.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Blackjack 14 - Azure | `/images/games/pragmatic/blackjack-14-azure.webp` | `/images/games/pragmatic/blackjack-14-azure.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Roulette 1 - Azure | `/images/games/pragmatic/roulette-1-azure.webp` | `/images/games/pragmatic/roulette-1-azure.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Baccarat 1 | `/images/games/pragmatic/baccarat-1.webp` | `/images/games/pragmatic/baccarat-1.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Mega Baccarat | `/images/games/pragmatic/mega-baccarat.webp` | `/images/games/pragmatic/mega-baccarat.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |
| Spaceman | `/images/games/pragmatic/spaceman.webp` | `/images/games/pragmatic/spaceman.webp` | no | seed path missing; no exact-stem file on disk (cannot repair mapping without an asset) |

## Exact remaps

| Game | Expected | Mapped to | Reason |
|---|---|---|---|
| Fishing Legend | `/images/games/afbgaming/20073.webp` | `/images/games/jdb/fishing-legend.webp` | canonical-id-file-missing; exact stem found elsewhere |
| Journey to the West | `/images/games/afbgaming/20053.webp` | `/images/games/pragmatic/journey-to-the-west.webp` | canonical-id-file-missing; exact stem found elsewhere |
| Lucky panda | `/images/games/afbgaming/19978.webp` | `/images/games/pragmatic/lucky-panda.webp` | canonical-id-file-missing; exact stem found elsewhere |
| Super Rich | `/images/games/afbgaming/20031.webp` | `/images/games/jili/super-rich.webp` | canonical-id-file-missing; exact stem found elsewhere |
| Fortune Dragon | `/images/games/pgsoft/fortune-dragon.webp` | `/images/games/pragmatic/fortune-dragon.webp` | seed slug path missing; exact stem found on disk |
| Sic Bo | `/images/games/pgsoft/sic-bo.webp` | `/images/games/jili/sic-bo.webp` | seed slug path missing; exact stem found on disk |
| Dragon Tiger | `/images/games/pgsoft/dragon-tiger.webp` | `/images/games/jili/dragon-tiger.webp` | seed slug path missing; exact stem found on disk |
| Super Ace | `/images/games/pgsoft/super-ace.webp` | `/images/games/jili/super-ace.webp` | seed slug path missing; exact stem found on disk |
| Fortune Gems | `/images/games/pgsoft/fortune-gems.webp` | `/images/games/jili/fortune-gems.webp` | seed slug path missing; exact stem found on disk |
| Fortune Gems 2 | `/images/games/pgsoft/fortune-gems-2.webp` | `/images/games/jili/fortune-gems-2.webp` | seed slug path missing; exact stem found on disk |
| Golden Empire | `/images/games/pgsoft/golden-empire.webp` | `/images/games/jili/golden-empire.webp` | seed slug path missing; exact stem found on disk |
| Money Coming | `/images/games/pgsoft/money-coming.webp` | `/images/games/jili/money-coming.webp` | seed slug path missing; exact stem found on disk |
| Boxing King | `/images/games/pgsoft/boxing-king.webp` | `/images/games/jili/boxing-king.webp` | seed slug path missing; exact stem found on disk |
| Charge Buffalo | `/images/games/pgsoft/charge-buffalo.webp` | `/images/games/jili/charge-buffalo.webp` | seed slug path missing; exact stem found on disk |
| Mega Ace | `/images/games/pgsoft/mega-ace.webp` | `/images/games/jili/mega-ace.webp` | seed slug path missing; exact stem found on disk |
| Ali Baba | `/images/games/pgsoft/ali-baba.webp` | `/images/games/jili/ali-baba.webp` | seed slug path missing; exact stem found on disk |
| Xiyangyang | `/images/games/pgsoft/xiyangyang.webp` | `/images/games/jdb/xiyangyang.webp` | seed slug path missing; exact stem found on disk |
| Pharaoh Treasure | `/images/games/pgsoft/pharaoh-treasure.webp` | `/images/games/jili/pharaoh-treasure.webp` | seed slug path missing; exact stem found on disk |
| Book of Gold | `/images/games/pgsoft/book-of-gold.webp` | `/images/games/jili/book-of-gold.webp` | seed slug path missing; exact stem found on disk |
| Chin Shi Huang | `/images/games/pgsoft/chin-shi-huang.webp` | `/images/games/jili/chin-shi-huang.webp` | seed slug path missing; exact stem found on disk |
| Bombing Fishing | `/images/games/pgsoft/bombing-fishing.webp` | `/images/games/jili/bombing-fishing.webp` | seed slug path missing; exact stem found on disk |
| Dinosaur Tycoon | `/images/games/pgsoft/dinosaur-tycoon.webp` | `/images/games/jili/dinosaur-tycoon.webp` | seed slug path missing; exact stem found on disk |
| Jackpot Fishing | `/images/games/pgsoft/jackpot-fishing.webp` | `/images/games/jili/jackpot-fishing.webp` | seed slug path missing; exact stem found on disk |
| Happy Fishing | `/images/games/pgsoft/happy-fishing.webp` | `/images/games/jili/happy-fishing.webp` | seed slug path missing; exact stem found on disk |
| All-star Fishing | `/images/games/pgsoft/all-star-fishing.webp` | `/images/games/jili/all-star-fishing.webp` | seed slug path missing; exact stem found on disk |
| Mega Fishing | `/images/games/pgsoft/mega-fishing.webp` | `/images/games/jili/mega-fishing.webp` | seed slug path missing; exact stem found on disk |
| Ocean King Jackpot | `/images/games/pgsoft/ocean-king-jackpot.webp` | `/images/games/jili/ocean-king-jackpot.webp` | seed slug path missing; exact stem found on disk |
| Go Rush | `/images/games/pgsoft/go-rush.webp` | `/images/games/jili/go-rush.webp` | seed slug path missing; exact stem found on disk |
| Mines | `/images/games/pgsoft/mines.webp` | `/images/games/jdb/mines.webp` | seed slug path missing; exact stem found on disk |
| Tower | `/images/games/pgsoft/tower.webp` | `/images/games/jili/tower.webp` | seed slug path missing; exact stem found on disk |
| Crash Bonus | `/images/games/pgsoft/crash-bonus.webp` | `/images/games/jili/crash-bonus.webp` | seed slug path missing; exact stem found on disk |
| Number King | `/images/games/pgsoft/number-king.webp` | `/images/games/jili/number-king.webp` | seed slug path missing; exact stem found on disk |
| TeenPatti | `/images/games/pgsoft/teenpatti.webp` | `/images/games/jili/teenpatti.webp` | seed slug path missing; exact stem found on disk |
| AK47 | `/images/games/pgsoft/ak47.webp` | `/images/games/jili/ak47.webp` | seed slug path missing; exact stem found on disk |
| Andar Bahar | `/images/games/pgsoft/andar-bahar.webp` | `/images/games/jili/andar-bahar.webp` | seed slug path missing; exact stem found on disk |
| Pool Rummy | `/images/games/pgsoft/pool-rummy.webp` | `/images/games/jili/pool-rummy.webp` | seed slug path missing; exact stem found on disk |
| Poker King | `/images/games/pgsoft/poker-king.webp` | `/images/games/jili/poker-king.webp` | seed slug path missing; exact stem found on disk |
| Fishing Disco | `/images/games/pgsoft/fishing-disco.webp` | `/images/games/jdb/fishing-disco.webp` | seed slug path missing; exact stem found on disk |
| Dragon Fishing | `/images/games/pgsoft/dragon-fishing.webp` | `/images/games/jdb/dragon-fishing.webp` | seed slug path missing; exact stem found on disk |
| Dragon Fishing II | `/images/games/pgsoft/dragon-fishing-ii.webp` | `/images/games/jdb/dragon-fishing-ii.webp` | seed slug path missing; exact stem found on disk |
| Fishing YiLuFa | `/images/games/pgsoft/fishing-yilufa.webp` | `/images/games/jdb/fishing-yilufa.webp` | seed slug path missing; exact stem found on disk |
| Fighter Fire | `/images/games/pgsoft/fighter-fire.webp` | `/images/games/jdb/fighter-fire.webp` | seed slug path missing; exact stem found on disk |
| Ocean King Jackpot | `/images/games/pgsoft/ocean-king-jackpot.webp` | `/images/games/jili/ocean-king-jackpot.webp` | seed slug path missing; exact stem found on disk |
| Super Niubi | `/images/games/pgsoft/super-niubi.webp` | `/images/games/jdb/super-niubi.webp` | seed slug path missing; exact stem found on disk |
| Super Niubi Deluxe | `/images/games/pgsoft/super-niubi-deluxe.webp` | `/images/games/jdb/super-niubi-deluxe.webp` | seed slug path missing; exact stem found on disk |
| XiYangYang | `/images/games/pgsoft/xiyangyang.webp` | `/images/games/jdb/xiyangyang.webp` | seed slug path missing; exact stem found on disk |
| Treasure Bowl | `/images/games/pgsoft/treasure-bowl.webp` | `/images/games/jdb/treasure-bowl.webp` | seed slug path missing; exact stem found on disk |
| Fortune Neko | `/images/games/pgsoft/fortune-neko.webp` | `/images/games/jdb/fortune-neko.webp` | seed slug path missing; exact stem found on disk |
| Caishen Coming | `/images/games/pgsoft/caishen-coming.webp` | `/images/games/jdb/caishen-coming.webp` | seed slug path missing; exact stem found on disk |
| Anaconda Gold | `/images/games/playngo/anaconda-gold.webp` | `/images/games/pragmatic/anaconda-gold.webp` | seed slug path missing; exact stem found on disk |
| Plinko | `/images/games/playngo/plinko.webp` | `/images/games/jili/plinko.webp` | seed slug path missing; exact stem found on disk |
| Mines | `/images/games/playngo/mines.webp` | `/images/games/jdb/mines.webp` | seed slug path missing; exact stem found on disk |
| Keno | `/images/games/playngo/keno.webp` | `/images/games/jili/keno.webp` | seed slug path missing; exact stem found on disk |
| Lucky Dice | `/images/games/playngo/lucky-dice.webp` | `/images/games/pragmatic/lucky-dice.webp` | seed slug path missing; exact stem found on disk |
| Color Game | `/images/games/playngo/color-game.webp` | `/images/games/jili/color-game.webp` | seed slug path missing; exact stem found on disk |
| Limbo | `/images/games/playngo/limbo.webp` | `/images/games/jili/limbo.webp` | seed slug path missing; exact stem found on disk |
| Wheel | `/images/games/playngo/wheel.webp` | `/images/games/jili/wheel.webp` | seed slug path missing; exact stem found on disk |
| Brothers Kingdom | `/images/games/playngo/brothers-kingdom.webp` | `/images/games/spadegaming/brothers-kingdom.webp` | seed slug path missing; exact stem found on disk |
| Caishen | `/images/games/playngo/caishen.webp` | `/images/games/spadegaming/caishen.webp` | seed slug path missing; exact stem found on disk |
| Gold Panther | `/images/games/playngo/gold-panther.webp` | `/images/games/spadegaming/gold-panther.webp` | seed slug path missing; exact stem found on disk |
| Gold Panther Maxways | `/images/games/playngo/gold-panther-maxways.webp` | `/images/games/spadegaming/gold-panther-maxways.webp` | seed slug path missing; exact stem found on disk |
| Sugar Party | `/images/games/playngo/sugar-party.webp` | `/images/games/spadegaming/sugar-party.webp` | seed slug path missing; exact stem found on disk |
| Royale House | `/images/games/playngo/royale-house.webp` | `/images/games/spadegaming/royale-house.webp` | seed slug path missing; exact stem found on disk |
| Tiger Dance | `/images/games/playngo/tiger-dance.webp` | `/images/games/spadegaming/tiger-dance.webp` | seed slug path missing; exact stem found on disk |
| Golden Chicken | `/images/games/playngo/golden-chicken.webp` | `/images/games/spadegaming/golden-chicken.webp` | seed slug path missing; exact stem found on disk |
| Jungle King | `/images/games/playngo/jungle-king.webp` | `/images/games/jili/jungle-king.webp` | seed slug path missing; exact stem found on disk |
| Double Flame | `/images/games/playngo/double-flame.webp` | `/images/games/spadegaming/double-flame.webp` | seed slug path missing; exact stem found on disk |
| Big Prosperity | `/images/games/playngo/big-prosperity.webp` | `/images/games/spadegaming/big-prosperity.webp` | seed slug path missing; exact stem found on disk |
| 5 Fortune | `/images/games/playngo/5-fortune.webp` | `/images/games/spadegaming/5-fortune.webp` | seed slug path missing; exact stem found on disk |
| Space Conquest | `/images/games/playngo/space-conquest.webp` | `/images/games/spadegaming/space-conquest.webp` | seed slug path missing; exact stem found on disk |
| Poker Ways | `/images/games/playngo/poker-ways.webp` | `/images/games/spadegaming/poker-ways.webp` | seed slug path missing; exact stem found on disk |
| Lucky Koi | `/images/games/playngo/lucky-koi.webp` | `/images/games/spadegaming/lucky-koi.webp` | seed slug path missing; exact stem found on disk |
| Heroes | `/images/games/playngo/heroes.webp` | `/images/games/spadegaming/heroes.webp` | seed slug path missing; exact stem found on disk |

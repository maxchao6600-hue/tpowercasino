/**
 * Build 250–300 game catalogue + premium cover WebPs.
 * Run: node scripts/build-games-catalogue.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
const ROOT = process.cwd();
const OUT_IMG = path.join(ROOT, "public/images/games");
const OUT_LEGACY = path.join(ROOT, "public/games");
const OUT_DATA = path.join(ROOT, "src/data/games-catalogue.json");

const W = 480;
const H = 640;

const CATEGORY_PALETTES = {
  slots: ["#1a0a12", "#E50914", "#f59e0b", "#7c2d12"],
  "live-casino": ["#0c1220", "#dc2626", "#f8fafc", "#1e3a5f"],
  sports: ["#07140c", "#16a34a", "#a3e635", "#14532d"],
  fishing: ["#061525", "#0ea5e9", "#38bdf8", "#075985"],
  table: ["#120a18", "#a855f7", "#e9d5ff", "#4c1d95"],
  crash: ["#14080a", "#f97316", "#fdba74", "#7c2d12"],
  lottery: ["#101018", "#eab308", "#fde047", "#713f12"],
  poker: ["#0a0f14", "#22c55e", "#bbf7d0", "#14532d"],
  arcade: ["#120816", "#ec4899", "#f9a8d4", "#9d174d"],
};

/** @type {Array<[string, string, string, string, string?, boolean?, boolean?]>} */
// [enName, zhName, category, providerId, rtp?, featured?, isNew?]
const SEED = [
  // Pragmatic Play slots
  ["Gates of Olympus", "奥林匹斯之门", "slots", "pragmatic-play", "96.50%", true, false],
  ["Sweet Bonanza", "甜入心扉", "slots", "pragmatic-play", "96.48%", true, false],
  ["Starlight Princess", "星光公主", "slots", "pragmatic-play", "96.50%", true, true],
  ["Sugar Rush", "糖果冲刺", "slots", "pragmatic-play", "96.50%", false, true],
  ["The Dog House", "狗舍", "slots", "pragmatic-play", "96.51%", false, false],
  ["Wolf Gold", "野狼黄金", "slots", "pragmatic-play", "96.01%", false, false],
  ["Great Rhino Megaways", "巨大犀牛超级路", "slots", "pragmatic-play", "96.58%", false, false],
  ["Fruit Party", "水果派对", "slots", "pragmatic-play", "96.47%", false, false],
  ["Madame Destiny Megaways", "命运夫人超级路", "slots", "pragmatic-play", "96.32%", false, false],
  ["Aztec Gems", "阿兹特克宝石", "slots", "pragmatic-play", "96.52%", false, false],
  ["John Hunter and the Tomb", "约翰猎人与古墓", "slots", "pragmatic-play", "96.50%", false, false],
  ["Wild West Gold", "狂野西部黄金", "slots", "pragmatic-play", "96.51%", false, false],
  ["Big Bass Bonanza", "巨型鲈鱼盛宴", "slots", "pragmatic-play", "96.71%", true, false],
  ["Floating Dragon", "游龙戏凤", "slots", "pragmatic-play", "96.53%", false, false],
  ["Hot to Burn", "燃烧热浪", "slots", "pragmatic-play", "96.07%", false, false],
  ["Pyramid Bonanza", "金字塔盛宴", "slots", "pragmatic-play", "96.13%", false, false],
  ["Release the Kraken", "释放海妖", "slots", "pragmatic-play", "96.50%", false, false],
  ["Buffalo King Megaways", "野牛之王超级路", "slots", "pragmatic-play", "96.52%", false, false],
  ["Candy Village", "糖果村落", "slots", "pragmatic-play", "96.53%", false, true],
  ["Power of Thor Megaways", "雷神之力超级路", "slots", "pragmatic-play", "96.50%", false, false],
  ["Gems Bonanza", "宝石盛宴", "slots", "pragmatic-play", "96.51%", false, false],
  ["Chilli Heat", "辣椒热浪", "slots", "pragmatic-play", "96.50%", false, false],
  ["Peaky Blinders", "浴血黑帮", "slots", "pragmatic-play", "96.50%", false, false],
  ["Juicy Fruits", "多汁水果", "slots", "pragmatic-play", "96.51%", false, false],
  ["Pirate Gold", "海盗黄金", "slots", "pragmatic-play", "96.50%", false, false],
  ["Super Joker", "超级小丑", "slots", "pragmatic-play", "96.48%", false, false],
  ["Extra Juicy", "加倍多汁", "slots", "pragmatic-play", "96.50%", false, false],
  ["Fire Strike", "火焰打击", "slots", "pragmatic-play", "96.51%", false, false],
  ["Mustang Gold", "野马黄金", "slots", "pragmatic-play", "96.53%", false, false],
  ["Cowboys Gold", "牛仔黄金", "slots", "pragmatic-play", "96.50%", false, false],

  // PG Soft
  ["Mahjong Ways 2", "麻将胡了2", "slots", "pg-soft", "96.95%", true, true],
  ["Mahjong Ways", "麻将胡了", "slots", "pg-soft", "96.92%", true, false],
  ["Fortune Tiger", "虎虎生财", "slots", "pg-soft", "96.81%", true, true],
  ["Fortune Ox", "十倍金牛", "slots", "pg-soft", "96.75%", false, false],
  ["Fortune Mouse", "鼠鼠福福", "slots", "pg-soft", "96.75%", false, false],
  ["Fortune Rabbit", "金钱兔", "slots", "pg-soft", "96.75%", true, true],
  ["Lucky Neko", "招财喵", "slots", "pg-soft", "96.73%", false, false],
  ["Ways of the Qilin", "麒麟送宝", "slots", "pg-soft", "96.71%", false, false],
  ["Treasures of Aztec", "寻宝黄金城", "slots", "pg-soft", "96.71%", true, false],
  ["Wild Bandito", "墨西哥狂欢", "slots", "pg-soft", "96.74%", false, false],
  ["Candy Burst", "糖果连连爆", "slots", "pg-soft", "96.70%", false, false],
  ["Caishen Wins", "赢财神", "slots", "pg-soft", "96.93%", false, false],
  ["Dragon Hatch", "寻龙探宝", "slots", "pg-soft", "96.78%", false, false],
  ["Ganesha Fortune", "象财神", "slots", "pg-soft", "96.76%", false, false],
  ["Jungle Delight", "水果丛林", "slots", "pg-soft", "96.71%", false, false],
  ["Leprechaun Riches", "爱尔兰精灵", "slots", "pg-soft", "96.77%", false, false],
  ["Captains Bounty", "赏金船长", "slots", "pg-soft", "96.73%", false, false],
  ["Phoenix Rises", "凤凰传奇", "slots", "pg-soft", "96.74%", false, false],
  ["Queen of Bounty", "赏金女王", "slots", "pg-soft", "96.72%", false, false],
  ["Double Fortune", "双喜发财", "slots", "pg-soft", "96.90%", false, false],
  ["Egypts Book of Mystery", "埃及探秘宝典", "slots", "pg-soft", "96.75%", false, false],
  ["Masked Carnival", "假面嘉年华", "slots", "pg-soft", "96.70%", false, false],
  ["Speed Winner", "极速赢家", "slots", "pg-soft", "96.75%", false, true],
  ["Wild Fireworks", "火树赢花", "slots", "pg-soft", "96.72%", false, false],
  ["Oriental Prosperity", "东方繁华", "slots", "pg-soft", "96.71%", false, false],

  // JILI
  ["Hot Hot Fruit", "热火水果", "slots", "jili", "97.00%", true, false],
  ["Super Ace", "超级王牌", "slots", "jili", "97.00%", true, true],
  ["Money Coming", "钱来也", "slots", "jili", "97.00%", false, false],
  ["Golden Empire", "黄金帝国", "slots", "jili", "97.00%", false, false],
  ["Boxing King", "拳王", "slots", "jili", "97.00%", false, false],
  ["Charge Buffalo", "冲锋野牛", "slots", "jili", "97.00%", false, false],
  ["Fortune Gems", "宝石财富", "slots", "jili", "97.00%", true, false],
  ["Fortune Gems 2", "宝石财富2", "slots", "jili", "97.00%", false, true],
  ["Crazy Hunter", "疯狂猎人", "slots", "jili", "97.00%", false, false],
  ["Pirate Queen", "海盗女王", "slots", "jili", "97.00%", false, false],
  ["Roma X", "罗马X", "slots", "jili", "97.00%", false, false],
  ["Ali Baba", "阿里巴巴", "slots", "jili", "97.00%", false, false],
  ["Book of Gold", "黄金之书", "slots", "jili", "97.00%", false, false],
  ["Chin Shi Huang", "秦皇传说", "slots", "jili", "97.00%", false, false],
  ["Jungle King", "丛林之王", "slots", "jili", "97.00%", false, false],
  ["Mega Ace", "百万王牌", "slots", "jili", "97.00%", false, true],
  ["Lucky Coming", "幸运来了", "slots", "jili", "97.00%", false, false],
  ["SevenSevenSeven", "777经典", "slots", "jili", "97.00%", false, false],
  ["Shanghai Beauty", "上海美人", "slots", "jili", "97.00%", false, false],
  ["Twin Wins", "双子赢", "slots", "jili", "97.00%", false, false],

  // Habanero / Playn GO / Microgaming / Spadegaming slots
  ["Hot Hot Summer", "炎炎夏日", "slots", "habanero", "96.70%", false, false],
  ["Koi Gate", "鲤鱼门", "slots", "habanero", "96.70%", false, false],
  ["Fa Cai Shen", "发财神", "slots", "habanero", "96.70%", false, false],
  ["Lucky Fortune Cat", "幸运招财猫", "slots", "habanero", "96.70%", false, false],
  ["Wild Trucks", "狂野卡车", "slots", "habanero", "96.70%", false, false],
  ["Carnival Cash", "嘉年华现金", "slots", "habanero", "96.70%", false, false],
  ["Panda Panda", "熊猫熊猫", "slots", "habanero", "96.70%", false, false],
  ["Scarab Treasure", "圣甲虫宝藏", "slots", "habanero", "96.70%", false, false],
  ["Fire Rooster", "火焰雄鸡", "slots", "habanero", "96.70%", false, false],
  ["Ocean Overdrive", "海洋超速", "slots", "habanero", "96.70%", false, false],
  ["Reactoonz", "反应堆", "slots", "playn-go", "96.51%", true, false],
  ["Book of Dead", "亡者书籍", "slots", "playn-go", "96.21%", true, false],
  ["Moon Princess", "月之公主", "slots", "playn-go", "96.50%", false, false],
  ["Fire Joker", "火焰小丑", "slots", "playn-go", "96.15%", false, false],
  ["Rise of Olympus", "奥林匹斯崛起", "slots", "playn-go", "96.50%", false, false],
  ["Tome of Madness", "疯狂典籍", "slots", "playn-go", "96.50%", false, false],
  ["Disco Diamonds", "迪斯科钻石", "slots", "playn-go", "96.50%", false, true],
  ["Gemix", "宝石迷阵", "slots", "playn-go", "96.50%", false, false],
  ["Legacy of Dead", "亡者遗产", "slots", "playn-go", "96.50%", false, false],
  ["Cat Wilde and the Doom", "猫女威尔德", "slots", "playn-go", "96.50%", false, false],
  ["Immortal Romance", "不朽情缘", "slots", "microgaming", "96.86%", true, false],
  ["Thunderstruck II", "雷霆万钧2", "slots", "microgaming", "96.65%", false, false],
  ["Avalon", "阿瓦隆", "slots", "microgaming", "96.00%", false, false],
  ["Break da Bank Again", "再破金库", "slots", "microgaming", "95.97%", false, false],
  ["Playboy", "花花公子", "slots", "microgaming", "96.15%", false, false],
  ["Jokerizer", "小丑制造", "slots", "microgaming", "96.50%", false, false],
  ["9 Masks of Fire", "九火面具", "slots", "microgaming", "96.23%", false, false],
  ["Book of Kings", "帝王之书", "slots", "microgaming", "96.50%", false, false],
  ["Lucky Leprechaun", "幸运小妖精", "slots", "microgaming", "96.00%", false, false],
  ["Starlight Kiss", "星光之吻", "slots", "microgaming", "96.00%", false, false],
  ["Brother Wild", "兄弟狂野", "slots", "spadegaming", "96.50%", false, false],
  ["Golden Journey", "黄金之旅", "slots", "spadegaming", "96.50%", false, false],
  ["Sugar Party", "糖果派对", "slots", "spadegaming", "96.50%", false, false],
  ["Tiger Warrior", "虎战士", "slots", "spadegaming", "96.50%", false, false],
  ["Royale House", "皇家别墅", "slots", "spadegaming", "96.50%", false, false],
  ["Fiery Sevens", "烈焰777", "slots", "spadegaming", "96.50%", false, false],
  ["Money Mouse", "金钱鼠", "slots", "spadegaming", "96.50%", false, false],
  ["Legacy of Heroes", "英雄遗产", "slots", "spadegaming", "96.50%", false, false],
  ["Dancing Lion", "醒狮", "slots", "spadegaming", "96.50%", false, false],
  ["Golden Whale", "黄金巨鲸", "slots", "spadegaming", "96.50%", false, false],
  ["Jungle Treasure", "丛林宝藏", "slots", "jdb", "96.50%", false, false],
  ["Dragon Rising", "龙腾", "slots", "jdb", "96.50%", false, false],
  ["Lucky Phoenix", "幸运凤凰", "slots", "jdb", "96.50%", false, false],
  ["Formosa Bear", "福尔摩沙熊", "slots", "jdb", "96.50%", false, false],
  ["Moonlight Treasure", "月光宝藏", "slots", "jdb", "96.50%", false, false],
  ["Open Sesame", "芝麻开门", "slots", "jdb", "96.50%", false, false],
  ["XiYangYang", "喜洋洋", "slots", "jdb", "96.50%", false, false],
  ["Flirting Scholar", "唐伯虎点秋香", "slots", "jdb", "96.50%", false, false],
  ["Winning Mask", "胜利面具", "slots", "jdb", "96.50%", false, false],
  ["Lucky Qilin", "幸运麒麟", "slots", "jdb", "96.50%", false, false],

  // Live casino
  ["Lightning Baccarat", "闪电百家乐", "live-casino", "evolution", undefined, true, false],
  ["Crazy Time", "疯狂时光", "live-casino", "evolution", undefined, true, false],
  ["Lightning Roulette", "闪电轮盘", "live-casino", "evolution", undefined, true, false],
  ["Immersive Roulette", "沉浸式轮盘", "live-casino", "evolution", undefined, false, false],
  ["Blackjack VIP", "VIP二十一点", "live-casino", "evolution", undefined, true, false],
  ["Speed Baccarat A", "极速百家乐A", "live-casino", "evolution", undefined, false, false],
  ["Speed Baccarat B", "极速百家乐B", "live-casino", "evolution", undefined, false, false],
  ["Baccarat Control Squeeze", "控牌咪牌百家乐", "live-casino", "evolution", undefined, false, false],
  ["Monopoly Live", "大富翁真人", "live-casino", "evolution", undefined, true, false],
  ["Dream Catcher", "追梦转盘", "live-casino", "evolution", undefined, false, false],
  ["Mega Ball", "超级球", "live-casino", "evolution", undefined, false, false],
  ["Funky Time", "放克时光", "live-casino", "evolution", undefined, false, true],
  ["XXXtreme Lightning Roulette", "极限闪电轮盘", "live-casino", "evolution", undefined, false, true],
  ["Football Studio", "足球工作室", "live-casino", "evolution", undefined, false, false],
  ["Casino Hold Em", "赌场德州", "live-casino", "evolution", undefined, false, false],
  ["Power Blackjack", "强力二十一点", "live-casino", "evolution", undefined, false, false],
  ["Infinite Blackjack", "无限二十一点", "live-casino", "evolution", undefined, false, false],
  ["Dragon Tiger", "龙虎", "live-casino", "evolution", undefined, false, false],
  ["Craps Live", "真人骰宝", "live-casino", "evolution", undefined, false, false],
  ["Stock Market", "股市游戏", "live-casino", "evolution", undefined, false, false],
  ["AE Sexy Baccarat", "AE Sexy 百家乐", "live-casino", "sexy-baccarat", undefined, true, false],
  ["Sexy Baccarat Privé", "Sexy 贵宾百家乐", "live-casino", "sexy-baccarat", undefined, false, false],
  ["Sexy Roulette", "Sexy 轮盘", "live-casino", "sexy-baccarat", undefined, false, false],
  ["Sexy Dragon Tiger", "Sexy 龙虎", "live-casino", "sexy-baccarat", undefined, false, false],
  ["Sexy Sic Bo", "Sexy 骰宝", "live-casino", "sexy-baccarat", undefined, false, false],
  ["Sexy Blackjack", "Sexy 二十一点", "live-casino", "sexy-baccarat", undefined, false, false],
  ["DG Baccarat 1", "DG 百家乐1", "live-casino", "dream-gaming", undefined, true, false],
  ["DG Baccarat 2", "DG 百家乐2", "live-casino", "dream-gaming", undefined, false, false],
  ["DG Speed Baccarat", "DG 极速百家乐", "live-casino", "dream-gaming", undefined, false, false],
  ["DG Roulette", "DG 轮盘", "live-casino", "dream-gaming", undefined, false, false],
  ["DG Dragon Tiger", "DG 龙虎", "live-casino", "dream-gaming", undefined, false, false],
  ["DG Sic Bo", "DG 骰宝", "live-casino", "dream-gaming", undefined, false, false],
  ["DG Fantan", "DG 番摊", "live-casino", "dream-gaming", undefined, false, false],
  ["PP Live Baccarat 1", "PP 真人百家乐1", "live-casino", "pragmatic-play", undefined, false, false],
  ["PP Mega Wheel", "PP 超级轮盘", "live-casino", "pragmatic-play", undefined, false, true],
  ["PP Sweet Bonanza CandyLand", "PP 糖果乐园", "live-casino", "pragmatic-play", undefined, true, false],
  ["PP Blackjack 1", "PP 二十一点1", "live-casino", "pragmatic-play", undefined, false, false],
  ["PP ONE Blackjack", "PP ONE 二十一点", "live-casino", "pragmatic-play", undefined, false, false],
  ["PP Roulette Lobby", "PP 轮盘大厅", "live-casino", "pragmatic-play", undefined, false, false],
  ["PP Andar Bahar", "PP 安达巴哈尔", "live-casino", "pragmatic-play", undefined, false, false],
  ["PP Mega Sic Bo", "PP 超级骰宝", "live-casino", "pragmatic-play", undefined, false, false],
  ["Live Blackjack Deluxe", "豪华真人二十一点", "live-casino", "evolution", undefined, false, false],
  ["Salon Privé Baccarat", "私人厅百家乐", "live-casino", "evolution", undefined, true, false],
  ["First Person Roulette", "第一人称轮盘", "live-casino", "evolution", undefined, false, false],
  ["First Person Blackjack", "第一人称二十一点", "live-casino", "evolution", undefined, false, false],
  ["Ice Fishing Live", "冰钓真人秀", "live-casino", "evolution", undefined, false, false],
  ["Baccarat Squeeze VIP", "VIP 咪牌百家乐", "live-casino", "sexy-baccarat", undefined, false, false],

  // Fishing
  ["Fishing War", "捕鱼大战", "fishing", "jili", undefined, true, false],
  ["Mega Fishing", "巨型捕鱼", "fishing", "jili", undefined, true, false],
  ["Bombing Fishing", "轰炸捕鱼", "fishing", "jili", undefined, false, false],
  ["Dinosaur Tycoon", "恐龙帝国", "fishing", "jili", undefined, false, true],
  ["All-star Fishing", "全明星捕鱼", "fishing", "jili", undefined, false, false],
  ["Happy Fishing", "开心捕鱼", "fishing", "jili", undefined, false, false],
  ["Ocean King Jackpot", "海洋之王彩金", "fishing", "spadegaming", undefined, true, false],
  ["Fishing God", "捕鱼之神", "fishing", "spadegaming", undefined, false, false],
  ["Alien Hunter", "外星人猎手", "fishing", "spadegaming", undefined, false, false],
  ["Zombie Party", "僵尸派对", "fishing", "spadegaming", undefined, false, false],
  ["Fishing Legend", "捕鱼传说", "fishing", "jdb", undefined, true, false],
  ["Dragon Fishing", "神龙捕鱼", "fishing", "jdb", undefined, false, false],
  ["Shade Dragons Fishing", "暗影龙捕鱼", "fishing", "jdb", undefined, false, false],
  ["Birds and Animals", "飞禽走兽", "fishing", "jdb", undefined, false, false],
  ["Cai Shen Fishing", "财神捕鱼", "fishing", "jdb", undefined, false, false],
  ["Ocean Lord", "海洋领主", "fishing", "jili", undefined, false, false],
  ["Royal Fishing", "皇家捕鱼", "fishing", "jili", undefined, false, false],
  ["Jackpot Fishing", "彩金捕鱼", "fishing", "jili", undefined, false, true],
  ["Deep Sea Hunter", "深海猎人", "fishing", "spadegaming", undefined, false, false],
  ["Mermaid Hunter", "人鱼猎人", "fishing", "spadegaming", undefined, false, false],
  ["Phoenix Fishing", "凤凰捕鱼", "fishing", "jdb", undefined, false, false],
  ["Lucky Fishing", "幸运捕鱼", "fishing", "jdb", undefined, false, false],
  ["Star Hunter", "星际猎人", "fishing", "jili", undefined, false, false],
  ["Boom Legend", "轰炸传说", "fishing", "jili", undefined, false, false],
  ["Monkey King Fishing", "大圣捕鱼", "fishing", "spadegaming", undefined, false, false],
  ["Dragon Gate Fishing", "龙门捕鱼", "fishing", "jdb", undefined, false, false],
  ["Golden Toad Fishing", "金蟾捕鱼", "fishing", "jdb", undefined, false, false],
  ["Poseidon Fishing", "波塞冬捕鱼", "fishing", "jili", undefined, false, false],
  ["Laser Fishing", "激光捕鱼", "fishing", "spadegaming", undefined, false, false],
  ["Treasure Fishing", "宝藏捕鱼", "fishing", "jili", undefined, false, false],

  // Sports
  ["Football Markets", "足球盘口", "sports", "sbo", undefined, true, false],
  ["Premier League Hub", "英超中心", "sports", "sbo", undefined, true, false],
  ["Champions League Desk", "欧冠专区", "sports", "sbo", undefined, true, false],
  ["NBA Markets", "NBA 盘口", "sports", "sbo", undefined, false, false],
  ["Badminton Live", "羽毛球滚球", "sports", "sbo", undefined, false, false],
  ["Tennis In-Play", "网球滚球", "sports", "sbo", undefined, false, false],
  ["Esports Arena", "电竞竞技场", "sports", "sbo", undefined, false, true],
  ["Asian Handicap Desk", "亚洲盘专区", "sports", "sbo", undefined, true, false],
  ["Parlay Builder", "过关组合", "sports", "sbo", undefined, false, false],
  ["Virtual Football", "虚拟足球", "sports", "sbo", undefined, false, false],
  ["Cricket Markets", "板球盘口", "sports", "sbo", undefined, false, false],
  ["MMA Night Card", "综合格斗夜卡", "sports", "sbo", undefined, false, false],
  ["Golf Majors", "高尔夫大赛", "sports", "sbo", undefined, false, false],
  ["Motorsport Desk", "赛车专区", "sports", "sbo", undefined, false, false],
  ["Outright Specials", "优胜冠军盘", "sports", "sbo", undefined, false, false],

  // Lottery
  ["Lucky Numbers", "幸运号码", "lottery", "jili", undefined, true, false],
  ["Daily Draw", "每日开奖", "lottery", "jili", undefined, true, false],
  ["Keno Rapid", "极速基诺", "lottery", "jili", undefined, false, false],
  ["Number King", "数字之王", "lottery", "jili", undefined, false, false],
  ["Lucky 5D", "幸运5D", "lottery", "jili", undefined, false, true],
  ["Bingo Carnival", "宾果嘉年华", "lottery", "jili", undefined, false, false],
  ["Happy 5", "快乐5", "lottery", "spadegaming", undefined, false, false],
  ["Mega Toto", "超级多多", "lottery", "spadegaming", undefined, false, false],
  ["Color Game", "颜色游戏", "lottery", "jili", undefined, false, false],
  ["Dice Duels", "骰子对决", "lottery", "jili", undefined, false, false],
  ["Lucky Ball", "幸运球", "lottery", "jdb", undefined, false, false],
  ["Power Draw", "强力开奖", "lottery", "jdb", undefined, false, false],
  ["Euro Style Lotto", "欧式彩票", "lottery", "spadegaming", undefined, false, false],
  ["Asia 6/49", "亚洲6/49", "lottery", "spadegaming", undefined, false, false],
  ["Mini Lotto", "迷你彩票", "lottery", "jili", undefined, false, false],
  ["Gold Ball Draw", "金球开奖", "lottery", "jili", undefined, false, false],
  ["Twin Digits", "双位数字", "lottery", "jdb", undefined, false, false],
  ["Night Draw", "夜间开奖", "lottery", "jili", undefined, false, false],
  ["Lucky Tickets", "幸运彩票", "lottery", "spadegaming", undefined, false, false],
  ["Rapid 3D", "极速3D", "lottery", "jili", undefined, false, true],

  // Crash / Arcade
  ["Crash X", "爆点X", "crash", "spribe", undefined, true, false],
  ["Aviator", "飞行员", "crash", "spribe", undefined, true, true],
  ["JetX", "喷气X", "crash", "spribe", undefined, false, false],
  ["Balloon", "气球飞升", "crash", "spribe", undefined, false, false],
  ["Mines", "扫雷", "crash", "spribe", undefined, true, false],
  ["Goal", "射门", "crash", "spribe", undefined, false, false],
  ["Hi Lo", "高低", "crash", "spribe", undefined, false, false],
  ["Plinko", "弹珠", "crash", "spribe", undefined, false, true],
  ["Dice", "骰子", "crash", "spribe", undefined, false, false],
  ["Mini Roulette", "迷你轮盘", "crash", "spribe", undefined, false, false],
  ["Crash Legend", "爆点传奇", "crash", "jili", undefined, false, false],
  ["Go Rush", "冲刺", "crash", "jili", undefined, false, false],
  ["Limbo Rise", "林波上升", "crash", "spribe", undefined, false, false],
  ["Tower Rush", "高塔冲刺", "crash", "jili", undefined, false, false],
  ["Keno Crash", "基诺爆点", "crash", "jili", undefined, false, false],
  ["Arcade Blast", "街机爆破", "arcade", "spribe", undefined, true, false],
  ["Hotline", "热线", "arcade", "spribe", undefined, false, false],
  ["Keno Express", "极速基诺街机", "arcade", "spribe", undefined, false, false],
  ["Mini Games Hub", "迷你游戏中心", "arcade", "spribe", undefined, false, false],
  ["Lucky Spin Arcade", "幸运旋转街机", "arcade", "jili", undefined, false, false],
  ["Neon Runner", "霓虹跑者", "arcade", "jili", undefined, false, true],
  ["Pixel Jackpot", "像素彩金", "arcade", "jili", undefined, false, false],
  ["Retro Reels", "复古转轴", "arcade", "spadegaming", undefined, false, false],
  ["Party Popper", "派对礼炮", "arcade", "spadegaming", undefined, false, false],
  ["Cosmic Dash", "宇宙冲刺", "arcade", "jili", undefined, false, false],
  ["Beat Master", "节拍大师", "arcade", "jili", undefined, false, false],
  ["Treasure Tap", "点点寻宝", "arcade", "spadegaming", undefined, false, false],
  ["Lucky Scratch", "幸运刮刮", "arcade", "jili", undefined, false, false],
  ["Arcade Poker Pop", "街机扑克弹", "arcade", "spribe", undefined, false, false],
  ["Turbo Dice", "涡轮骰子", "arcade", "spribe", undefined, false, false],

  // Table / Poker
  ["Classic Baccarat", "经典百家乐", "table", "evolution", undefined, true, false],
  ["Commission Free Baccarat", "免佣百家乐", "table", "evolution", undefined, false, false],
  ["European Roulette", "欧洲轮盘", "table", "evolution", undefined, true, false],
  ["American Roulette", "美式轮盘", "table", "pragmatic-play", undefined, false, false],
  ["Casino Hold'em Table", "赌场德州桌", "table", "evolution", undefined, false, false],
  ["Three Card Poker", "三张扑克", "table", "evolution", undefined, false, false],
  ["Caribbean Stud", "加勒比扑克", "table", "microgaming", undefined, false, false],
  ["Sic Bo Classic", "经典骰宝", "table", "dream-gaming", undefined, false, false],
  ["Fan Tan Table", "番摊桌", "table", "dream-gaming", undefined, false, false],
  ["Teen Patti", "印度三张", "table", "pragmatic-play", undefined, false, false],
  ["Andar Bahar Table", "安达巴哈尔桌", "table", "pragmatic-play", undefined, false, false],
  ["Punto Banco", "点宝百家乐", "table", "evolution", undefined, false, false],
  ["Blackjack Classic", "经典二十一点", "table", "microgaming", undefined, true, false],
  ["Blackjack Switch", "切换二十一点", "table", "microgaming", undefined, false, false],
  ["Red Dog", "红狗", "table", "habanero", undefined, false, false],
  ["Texas Hold'em Lobby", "德州扑克大厅", "poker", "evolution", undefined, true, false],
  ["Poker Sit & Go", "扑克快速桌", "poker", "evolution", undefined, false, true],
  ["Omaha Poker", "奥马哈扑克", "poker", "microgaming", undefined, false, false],
  ["Seven Card Stud", "七张梭哈", "poker", "microgaming", undefined, false, false],
  ["Chinese Poker", "中式扑克", "poker", "spadegaming", undefined, false, false],
  ["Video Poker Jacks", "视频扑克Jacks", "poker", "microgaming", undefined, false, false],
  ["Deuces Wild Poker", "百搭二扑克", "poker", "habanero", undefined, false, false],
  ["Poker Tournament Desk", "扑克锦标赛", "poker", "evolution", undefined, false, false],
  ["Cash Game Tables", "现金桌扑克", "poker", "evolution", undefined, true, false],
  ["Short Deck Poker", "短牌扑克", "poker", "microgaming", undefined, false, true],
];

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);
}

function hashHue(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % 360;
}

function escapeXml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function seedRand(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

function motifForGame(game) {
  const n = `${game.name.en} ${game.id}`.toLowerCase();
  if (/mahjong|neko|tiger|ox|rabbit|mouse|dragon|phoenix|qilin|caishen|oriental/.test(n))
    return "asian";
  if (/fruit|candy|sugar|sweet|bonanza|juicy|chilli|berry/.test(n)) return "candy";
  if (/olympus|zeus|thor|princess|egypt|aztec|tomb|pyramid|book/.test(n))
    return "myth";
  if (/wolf|buffalo|rhino|dog|mustang|cowboy|west|bass|fish/.test(n)) return "wild";
  if (/gold|gem|jewel|diamond|treasure|fortune|rich/.test(n)) return "treasure";
  if (/crash|aviator|jet|rocket|balloon|x/.test(n)) return "crash";
  if (/baccarat|blackjack|roulette|poker|dragon tiger|sic bo|andar/.test(n))
    return "cards";
  if (/football|nba|tennis|sports|league|esports|horse/.test(n)) return "sports";
  if (/lotto|draw|keno|bingo|mark six|toto|4d|magnum/.test(n)) return "lottery";
  return "slots";
}

function artLayer(game, accent, highlight, deep, hue) {
  const rand = seedRand(hashHue(game.id) * 9973 + game.name.en.length * 13);
  const motif = motifForGame(game);
  const cat = game.category;

  if (
    cat === "fishing" ||
    (motif === "wild" &&
      /fish|bass|war|hunter|ocean|mermaid/.test(game.name.en.toLowerCase()))
  ) {
    let fish = "";
    for (let i = 0; i < 7; i++) {
      const x = 40 + rand() * 380;
      const y = 120 + rand() * 380;
      const s = 18 + rand() * 34;
      fish += `<ellipse cx="${x}" cy="${y}" rx="${s}" ry="${s * 0.45}" fill="${highlight}" fill-opacity="${0.25 + rand() * 0.45}" transform="rotate(${-25 + rand() * 50} ${x} ${y})"/>
      <polygon points="${x + s},${y} ${x + s + 14},${y - 8} ${x + s + 14},${y + 8}" fill="${accent}" fill-opacity="0.55"/>`;
    }
    return `
      <circle cx="360" cy="140" r="90" fill="${highlight}" fill-opacity="0.12"/>
      <path d="M0 420 Q120 360 240 400 T480 380 L480 640 L0 640 Z" fill="${accent}" fill-opacity="0.18"/>
      ${fish}
      <circle cx="90" cy="520" r="70" fill="#38bdf8" fill-opacity="0.15"/>`;
  }

  if (cat === "live-casino" || cat === "table" || cat === "poker" || motif === "cards") {
    const suits = ["♠", "♥", "♦", "♣"];
    let cards = "";
    for (let i = 0; i < 5; i++) {
      const x = 70 + i * 58;
      const y = 180 + (i % 2) * 18;
      const rot = -18 + i * 9;
      const suit = suits[i % 4];
      const color = suit === "♥" || suit === "♦" ? "#ef4444" : "#111";
      cards += `<g transform="translate(${x} ${y}) rotate(${rot})">
        <rect x="0" y="0" width="72" height="102" rx="8" fill="#f8fafc" stroke="${accent}" stroke-width="2"/>
        <text x="12" y="28" font-size="18" font-weight="800" fill="${color}">A</text>
        <text x="22" y="68" font-size="28" fill="${color}">${suit}</text>
      </g>`;
    }
    return `
      <ellipse cx="240" cy="520" rx="220" ry="90" fill="#0b3d2e" fill-opacity="0.85"/>
      <ellipse cx="240" cy="520" rx="200" ry="70" fill="#0f766e" fill-opacity="0.35"/>
      ${cards}
      <circle cx="360" cy="470" r="28" fill="#f59e0b" stroke="#fde68a" stroke-width="3"/>
      <circle cx="400" cy="500" r="22" fill="#e11d48" stroke="#fecdd3" stroke-width="2"/>`;
  }

  if (cat === "sports" || motif === "sports") {
    return `
      <rect x="40" y="160" width="400" height="280" rx="24" fill="#14532d" fill-opacity="0.85"/>
      <rect x="60" y="180" width="360" height="240" rx="8" fill="none" stroke="#a3e635" stroke-width="3" stroke-opacity="0.55"/>
      <circle cx="240" cy="300" r="42" fill="none" stroke="#a3e635" stroke-width="3" stroke-opacity="0.7"/>
      <line x1="240" y1="180" x2="240" y2="420" stroke="#a3e635" stroke-width="2" stroke-opacity="0.5"/>
      <circle cx="340" cy="220" r="26" fill="#f8fafc" fill-opacity="0.9"/>
      <path d="M80 500 Q240 430 400 510" fill="none" stroke="${accent}" stroke-width="8" stroke-linecap="round" opacity="0.55"/>`;
  }

  if (cat === "crash" || motif === "crash") {
    const points = [];
    for (let i = 0; i < 12; i++) {
      const x = 40 + i * 34;
      const y = 420 - Math.pow(i / 11, 1.7) * 260 - rand() * 12;
      points.push(`${x},${y}`);
    }
    return `
      <rect x="36" y="140" width="408" height="360" rx="20" fill="#111" fill-opacity="0.55"/>
      <polyline points="${points.join(" ")}" fill="none" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>
      <circle cx="${points[points.length - 1].split(",")[0]}" cy="${points[points.length - 1].split(",")[1]}" r="14" fill="${highlight}"/>
      <polygon points="300,180 360,210 300,240 320,210" fill="${highlight}" opacity="0.9"/>`;
  }

  if (cat === "lottery" || motif === "lottery") {
    let balls = "";
    for (let i = 0; i < 8; i++) {
      const x = 60 + (i % 4) * 100;
      const y = 200 + Math.floor(i / 4) * 120;
      const n = 1 + Math.floor(rand() * 49);
      balls += `<circle cx="${x + 30}" cy="${y}" r="38" fill="url(#ball${i % 3})"/>
      <text x="${x + 30}" y="${y + 8}" text-anchor="middle" font-size="20" font-weight="900" fill="#111">${n}</text>`;
    }
    return `
      <defs>
        <radialGradient id="ball0"><stop offset="0%" stop-color="#fde047"/><stop offset="100%" stop-color="#eab308"/></radialGradient>
        <radialGradient id="ball1"><stop offset="0%" stop-color="#fda4af"/><stop offset="100%" stop-color="#e11d48"/></radialGradient>
        <radialGradient id="ball2"><stop offset="0%" stop-color="#bbf7d0"/><stop offset="100%" stop-color="#16a34a"/></radialGradient>
      </defs>
      ${balls}`;
  }

  // Slots / arcade — geometric reel symbols (no emoji; sharp-safe)
  const drawSymbol = (kind, cx, cy, color) => {
    if (kind === "gem") {
      return `<polygon points="${cx},${cy - 18} ${cx + 16},${cy} ${cx},${cy + 18} ${cx - 16},${cy}" fill="${color}" opacity="0.95"/>`;
    }
    if (kind === "seven") {
      return `<text x="${cx}" y="${cy + 12}" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="28" font-weight="900" fill="${color}">7</text>`;
    }
    if (kind === "bell") {
      return `<path d="M${cx - 14} ${cy + 8} Q${cx} ${cy - 22} ${cx + 14} ${cy + 8} Z" fill="${color}"/><rect x="${cx - 10}" y="${cy + 8}" width="20" height="6" rx="2" fill="${highlight}"/>`;
    }
    if (kind === "star") {
      return `<polygon points="${cx},${cy - 16} ${cx + 5},${cy - 4} ${cx + 16},${cy - 4} ${cx + 7},${cy + 4} ${cx + 10},${cy + 16} ${cx},${cy + 8} ${cx - 10},${cy + 16} ${cx - 7},${cy + 4} ${cx - 16},${cy - 4} ${cx - 5},${cy - 4}" fill="${color}"/>`;
    }
    if (kind === "coin") {
      return `<circle cx="${cx}" cy="${cy}" r="16" fill="${color}"/><circle cx="${cx}" cy="${cy}" r="10" fill="none" stroke="#111" stroke-width="2" opacity="0.35"/>`;
    }
    if (kind === "tile") {
      return `<rect x="${cx - 14}" y="${cy - 18}" width="28" height="36" rx="4" fill="#f8fafc"/><text x="${cx}" y="${cy + 6}" text-anchor="middle" font-size="14" font-weight="800" fill="#111">中</text>`;
    }
    // fruit circle
    return `<circle cx="${cx}" cy="${cy}" r="15" fill="${color}"/><circle cx="${cx - 4}" cy="${cy - 4}" r="4" fill="#fff" opacity="0.35"/>`;
  };

  const kinds =
    motif === "candy"
      ? ["fruit", "fruit", "gem", "star", "coin", "bell"]
      : motif === "asian"
        ? ["tile", "coin", "gem", "star", "coin", "tile"]
        : motif === "myth"
          ? ["star", "gem", "seven", "bell", "coin", "star"]
          : motif === "treasure"
            ? ["gem", "coin", "star", "gem", "coin", "seven"]
            : ["seven", "fruit", "gem", "bell", "star", "coin"];

  const colors = [accent, highlight, "#f8fafc", "#fbbf24", "#fb7185", "#38bdf8"];

  let reels = "";
  for (let col = 0; col < 3; col++) {
    const x = 70 + col * 120;
    reels += `<rect x="${x}" y="150" width="100" height="300" rx="14" fill="#0a0a0a" stroke="${accent}" stroke-width="2" stroke-opacity="0.65"/>`;
    for (let row = 0; row < 3; row++) {
      const kind = kinds[Math.floor(rand() * kinds.length)];
      const color = colors[Math.floor(rand() * colors.length)];
      const y = 190 + row * 90;
      reels += `<rect x="${x + 10}" y="${y - 28}" width="80" height="70" rx="10" fill="${deep}" fill-opacity="0.9"/>
      ${drawSymbol(kind, x + 50, y + 4, color)}`;
    }
  }

  return `
    <circle cx="${300 + (hue % 50)}" cy="120" r="120" fill="${accent}" fill-opacity="0.22"/>
    <circle cx="80" cy="540" r="100" fill="${highlight}" fill-opacity="0.12"/>
    ${reels}
    <rect x="50" y="290" width="380" height="18" rx="9" fill="${accent}" fill-opacity="0.35"/>`;
}

async function renderCover(game) {
  const palette = CATEGORY_PALETTES[game.category] ?? CATEGORY_PALETTES.slots;
  const [bg, accent, highlight, deep] = palette;
  const hue = hashHue(game.id);
  const art = artLayer(game, accent, highlight, deep, hue);
  const provider = game.providerId.replace(/-/g, " ").toUpperCase();

  const svg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="45%" stop-color="${deep}"/>
      <stop offset="100%" stop-color="#050505"/>
    </linearGradient>
    <radialGradient id="glow" cx="72%" cy="22%" r="58%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.62"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="foil" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff" stop-opacity="0.18"/>
      <stop offset="35%" stop-color="#fff" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.55"/>
    </linearGradient>
    <linearGradient id="bottom" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.88"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${art}
  <rect width="${W}" height="${H}" fill="url(#foil)"/>
  <rect x="0" y="420" width="${W}" height="220" fill="url(#bottom)"/>
  <rect x="24" y="548" rx="999" height="26" width="${Math.min(210, 36 + provider.length * 8)}" fill="rgba(0,0,0,0.55)" stroke="${accent}" stroke-opacity="0.55"/>
  <text x="38" y="566" font-family="Arial, sans-serif" font-size="11" font-weight="800" fill="#ffffff" letter-spacing="1">${escapeXml(provider)}</text>
  <rect x="0" y="${H - 5}" width="${W}" height="5" fill="${accent}"/>
</svg>`);

  const base = await sharp(svg).png().toBuffer();
  const webp = await sharp(base)
    .webp({ quality: 86 })
    .toBuffer();

  // Game artwork must stay unbranded — never stamp TPOWER logo on thumbs.
  return { buffer: webp };
}

function buildGames() {
  const seen = new Set();
  const games = [];

  for (const row of SEED) {
    const [en, zh, category, providerId, rtp, featured, isNew] = row;
    let slug = slugify(en);
    let id = slug;
    let n = 2;
    while (seen.has(id)) {
      id = `${slug}-${n}`;
      slug = id;
      n += 1;
    }
    seen.add(id);

    games.push({
      id,
      slug,
      name: { en, zh },
      description: {
        en: `${en} from ${providerId.replace(/-/g, " ")} — available in the TPOWER ${category.replace("-", " ")} lobby.`,
        zh: `${zh}（${providerId.replace(/-/g, " ")}）— 可在 TPOWER ${category} 大厅游玩。`,
      },
      category,
      providerId,
      ...(rtp ? { rtp } : {}),
      ...(featured ? { featured: true } : {}),
      ...(isNew ? { new: true } : {}),
      image: `/images/games/${slug}.webp`,
    });
  }

  return games;
}

fs.mkdirSync(OUT_IMG, { recursive: true });
fs.mkdirSync(OUT_LEGACY, { recursive: true });

const games = buildGames();
console.log("catalogue size:", games.length);

let i = 0;
for (const game of games) {
  i += 1;
  const { buffer } = await renderCover(game);
  const dest = path.join(OUT_IMG, `${game.slug}.webp`);
  const legacy = path.join(OUT_LEGACY, `${game.slug}.webp`);
  fs.writeFileSync(dest, buffer);
  fs.writeFileSync(legacy, buffer);
  if (i % 25 === 0 || i === games.length) {
    console.log(`covers ${i}/${games.length}`);
  }
}

fs.writeFileSync(OUT_DATA, `${JSON.stringify(games, null, 2)}\n`);
console.log("wrote", OUT_DATA);

const counts = games.reduce((acc, g) => {
  acc[g.category] = (acc[g.category] ?? 0) + 1;
  return acc;
}, {});
console.log("by category:", counts);

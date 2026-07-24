import type { Locale } from "@/config/site";
import type { Game, LocalizedString } from "@/types";

type DetailFaq = { question: LocalizedString; answer: LocalizedString };

function categoryFeatures(game: Game): LocalizedString[] {
  switch (game.category) {
    case "slots":
      return [
        {
          en: "Mobile-ready reel layout for short and longer sessions on TPOWER.",
          zh: "手机友好的转轮布局，适合在 TPOWER 上短局或长局游玩。",
        },
        {
          en: "Clear paytable and feature labels when the studio publishes them.",
          zh: "工作室公布的赔付表与特色玩法说明，入口清楚。",
        },
        {
          en: "Synced from the official TPOWER lobby catalogue for this title.",
          zh: "本页资料同步 TPOWER 官方大厅目录中的对应作品。",
        },
      ];
    case "live-casino":
      return [
        {
          en: "Live dealer broadcast format selected for peak-hour Malaysia play.",
          zh: "真人荷官直播格式，按马来西亚晚间高峰体验挑选。",
        },
        {
          en: "Table rules follow the studio’s published live casino framework.",
          zh: "桌台规则遵循工作室公开的真人视讯框架。",
        },
        {
          en: "Available inside the TPOWER live casino lobby when the shelf is live.",
          zh: "大厅货架在线时，可在 TPOWER 真人视讯区进入。",
        },
      ];
    case "fishing":
      return [
        {
          en: "Arcade-style fishing rooms tuned for touch and portrait play.",
          zh: "街机式捕鱼房，针对触控与竖屏操作优化。",
        },
        {
          en: "Multiplayer room flow with clear weapon and target feedback.",
          zh: "多人房间节奏清楚，武器与目标反馈直观。",
        },
        {
          en: "Listed in the TPOWER fishing catalogue when artwork is verified.",
          zh: "封面验证通过后列入 TPOWER 捕鱼游戏目录。",
        },
      ];
    case "sports":
      return [
        {
          en: "Sports market presentation matched to TPOWER sports lobby access.",
          zh: "体育盘口展示对接 TPOWER 体育大厅入口。",
        },
        {
          en: "Pre-match and in-play styles depend on the live market board.",
          zh: "赛前与滚球形态以实时盘口板为准。",
        },
        {
          en: "One wallet journey with the rest of the TPOWER product map.",
          zh: "与 TPOWER 其他产品共用同一钱包路径。",
        },
      ];
    case "crash":
      return [
        {
          en: "Short-round crash pacing designed for mobile decision windows.",
          zh: "短回合爆点节奏，适合手机端快速决策。",
        },
        {
          en: "Multiplier curve readability depends on the studio client build.",
          zh: "倍乘曲线可读性取决于工作室客户端呈现。",
        },
        {
          en: "Synced from the TPOWER crash and arcade-adjacent lobby shelves.",
          zh: "同步自 TPOWER 爆点及相关大厅货架。",
        },
      ];
    default:
      return [
        {
          en: `${game.name.en} is listed under ${game.providerName ?? game.providerId} on TPOWER.`,
          zh: `${game.name.zh} 收录于 TPOWER 的 ${game.providerName ?? game.providerId} 货架。`,
        },
        {
          en: "Catalogue metadata comes from the official TPOWER game sync.",
          zh: "目录元数据来自 TPOWER 官方游戏同步。",
        },
        {
          en: "Play access opens after registration through official channels.",
          zh: "通过官方渠道注册后即可进入游玩。",
        },
      ];
  }
}

function categoryHowToPlay(game: Game): LocalizedString[] {
  switch (game.category) {
    case "slots":
      return [
        {
          en: "Open the TPOWER lobby and search for the game title or provider shelf.",
          zh: "打开 TPOWER 大厅，按游戏名或厂商货架搜索进入。",
        },
        {
          en: "Set a stake you can afford, review the paytable, then start the reels.",
          zh: "设定可承受的投注，先看赔付表，再启动转轮。",
        },
        {
          en: "Use session limits and take breaks — RTP is long-run maths, not a short-session promise.",
          zh: "使用时段限额并适时休息——RTP 是长期理论值，不是短局保证。",
        },
      ];
    case "live-casino":
      return [
        {
          en: "Enter the live casino lobby and open the matching table or game show.",
          zh: "进入真人视讯大厅，打开对应桌台或游戏秀。",
        },
        {
          en: "Confirm chip size and side bets before the betting window closes.",
          zh: "在下注窗口关闭前确认筹码与旁注。",
        },
        {
          en: "Follow table limits and responsible-play tools during peak hours.",
          zh: "高峰时段遵守桌台限额，并使用负责任博彩工具。",
        },
      ];
    default:
      return [
        {
          en: `Register on TPOWER and open ${game.name.en} from the official lobby.`,
          zh: `在 TPOWER 注册后，从官方大厅打开 ${game.name.zh}。`,
        },
        {
          en: "Confirm your stake and rules panel before the first round.",
          zh: "第一局开始前确认投注额与规则面板。",
        },
        {
          en: "Stop when the session budget is done — never chase losses.",
          zh: "预算用完就停，不要追损。",
        },
      ];
  }
}

function defaultFaqs(game: Game): DetailFaq[] {
  const provider = game.providerName ?? game.providerId;
  return [
    {
      question: {
        en: `Can I play ${game.name.en} on TPOWER?`,
        zh: `在 TPOWER 能玩 ${game.name.zh} 吗？`,
      },
      answer: {
        en: `Yes — ${game.name.en} from ${provider} is listed in the TPOWER catalogue when the lobby shelf and cover art are live. Register through official channels to open the full lobby.`,
        zh: `可以。${provider} 的 ${game.name.zh} 在大厅货架与封面在线时会出现在 TPOWER 目录。请通过官方渠道注册后进入完整大厅。`,
      },
    },
    {
      question: {
        en: `What is the RTP for ${game.name.en}?`,
        zh: `${game.name.zh} 的 RTP 是多少？`,
      },
      answer: {
        en: game.rtp
          ? `Published RTP for this title is ${game.rtp}. Treat it as long-run theory, not a short-session guarantee.`
          : `Official RTP for ${game.name.en} is marked Coming Soon on this page until the studio figure is published in the TPOWER catalogue.`,
        zh: game.rtp
          ? `本页公布的 RTP 为 ${game.rtp}。这是长期理论回报，不是短局保证。`
          : `在工作室数值写入 TPOWER 目录前，本页将 ${game.name.zh} 的 RTP 标为即将公布。`,
      },
    },
    {
      question: {
        en: `Is ${game.name.en} available on mobile?`,
        zh: `${game.name.zh} 支持手机玩吗？`,
      },
      answer: {
        en: `TPOWER lobbies are built for mobile and desktop. Open ${game.name.en} after login on Android, iOS browser, or the official app path.`,
        zh: `TPOWER 大厅兼顾手机与桌面。登录后可在 Android、iOS 浏览器或官方 APP 路径打开 ${game.name.zh}。`,
      },
    },
  ];
}

export function resolveGameFeatures(game: Game): LocalizedString[] {
  return game.features?.length ? game.features : categoryFeatures(game);
}

export function resolveGameHowToPlay(game: Game): LocalizedString[] {
  return game.howToPlay?.length ? game.howToPlay : categoryHowToPlay(game);
}

export function resolveGameFaqs(game: Game): DetailFaq[] {
  return game.faqs?.length ? game.faqs : defaultFaqs(game);
}

export function displayGameSpec(
  value: string | undefined,
  comingSoon: string,
): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : comingSoon;
}

export function gameDetailMetaDescription(
  game: Game,
  locale: Locale,
  categoryLabel: string,
): string {
  if (locale === "zh") {
    return `了解 ${game.name.zh}（${game.providerName ?? game.providerId}）在 TPOWER线上博彩 的玩法、品类${categoryLabel}${game.rtp ? `、RTP ${game.rtp}` : ""}与官方入口说明。`;
  }
  return `Play ${game.name.en} by ${game.providerName ?? game.providerId} on TPOWER Online Casino Malaysia — ${categoryLabel}${game.rtp ? `, RTP ${game.rtp}` : ""}, specs, and official lobby access.`;
}

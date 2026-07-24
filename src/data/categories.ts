import type { GameCategoryCard } from "@/types";

export const gameCategories: GameCategoryCard[] = [
  {
    id: "slots",
    href: "/slots",
    icon: "slots",
    title: { en: "Slots", zh: "老虎机" },
    description: {
      en: "High-quality video slots from leading studios, optimised for mobile sessions.",
      zh: "一线厂商电子游戏，手机畅玩不卡顿，热门主题天天更新。",
    },
  },
  {
    id: "live-casino",
    href: "/live-casino",
    icon: "live",
    title: { en: "Live Casino", zh: "真人视讯" },
    description: {
      en: "Real dealers, cinematic studios, and classic tables streamed in real time.",
      zh: "真人荷官现场发牌，百家乐轮盘二十一点，高清直播如临现场。",
    },
  },
  {
    id: "sports",
    href: "/sports",
    icon: "sports",
    title: { en: "Sports", zh: "体育博彩" },
    description: {
      en: "Football, basketball, and regional markets with clear odds presentation.",
      zh: "足球篮球本地赛事，赔率一目了然，手机下注随时跟进。",
    },
  },
  {
    id: "fishing",
    href: "/fishing",
    icon: "fishing",
    title: { en: "Fishing", zh: "捕鱼游戏" },
    description: {
      en: "Arcade-style fishing rooms with multiplayer action and progressive targets.",
      zh: "多人联机捕鱼，街机手感爽快，Boss 分值越打越高。",
    },
  },
  {
    id: "lottery",
    href: "/lottery",
    icon: "lottery",
    title: { en: "Lottery", zh: "彩票" },
    description: {
      en: "Number games and draw-style experiences with transparent result cycles.",
      zh: "数字彩与开奖玩法，结果周期公开透明，规则简单好上手。",
    },
  },
  {
    id: "poker",
    href: "/poker",
    icon: "poker",
    title: { en: "Poker", zh: "扑克" },
    description: {
      en: "Table classics and poker-inspired formats for focused, strategic play.",
      zh: "经典牌桌与扑克变体，适合喜欢动脑、节奏稳的玩家。",
    },
  },
  {
    id: "arcade",
    href: "/arcade",
    icon: "arcade",
    title: { en: "Arcade", zh: "街机" },
    description: {
      en: "Fast specialty titles designed for short, transparent entertainment sessions.",
      zh: "节奏快、规则清，适合碎片时间来几局轻娱乐。",
    },
  },
  {
    id: "crash",
    href: "/crash",
    icon: "arcade",
    title: { en: "Crash", zh: "爆点" },
    description: {
      en: "Multiplier crash rounds with readable curves and quick mobile rhythm.",
      zh: "倍率曲线实时跳动，出手时机自己拿捏，手机操作很顺手。",
    },
  },
];

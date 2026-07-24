/**
 * Inject one unique long section before timelineTitle in each payment page.
 */
import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "src/data/payments-center");

const blocks = {
  "deposit-guide.ts": {
    titleEn: "Deposit rituals for night-shift Malaysia players",
    titleZh: "大马夜班玩家的存款仪式",
    en: `Night-shift funding has patterns. You finish work, open the phone, and want credit before the lobby loads. Rituals protect that moment: bookmark official TPOWER, open cashier from navigation, choose the rail you used successfully last week, enter the amount you decided at dinner, finish provider confirmation without multitasking, verify completed status, then open games.

Break the ritual when something feels off. A new deep link, a host asking for a personal transfer, a mirrored APK — those are exit ramps, not speed ramps. Deposit Guide authority is the courage to stop.

Keep a simple ledger for a month if you are rebuilding discipline: date, rail, amount, outcome. Patterns appear. Maybe FPX fails every Tuesday maintenance. Maybe TnG wins on commute nights. Data beats superstition.

When promotions shout, re-read terms before you inflate the deposit. The Deposit Guide’s commercial job is TPOWER Deposit clarity — not maximising reckless top-ups.`,
    zh: `夜班入金有其模式。你下班、打开手机、想在大厅加载前入账。仪式保护该时刻：收藏官方 TPOWER、从导航打开收银台、选择上周成功用过的通道、输入晚饭时决定的金额、不打断地完成提供方确认、核对完成状态、再开游戏。

感觉不对时打断仪式。新的深链、要私人转账的接待、镜像 APK——那些是出口匝道，不是速度匝道。存款指南的权威是敢停。

若你在重建纪律，简单记账一个月：日期、通道、金额、结果。模式会出现。也许 FPX 每周二维护失败。也许 TnG 在通勤夜胜出。数据胜过迷信。

当优惠喊叫时，抬高存款前重读条款。存款指南的商业工作是 TPower 存款清楚——不是最大化鲁莽充值。`,
  },
  "withdrawal-guide.ts": {
    titleEn: "Emotional cashouts vs planned cashouts",
    titleZh: "情绪化出金 vs 计划出金",
    en: `Emotional cashouts happen after a swing session when you fear giving it back. Planned cashouts happen because you decided a stop point earlier. The Withdrawal Guide endorses planned cashouts. Emotional cashouts still work through the same cashier — but they collide more often with unfinished wagering and mismatched details you ignored while winning.

Write the stop point before you play. When you hit it, open Withdrawal Guide habits immediately: check withdrawable balance, confirm destination, submit once. Do not reopen slots “for one more spin” while the request processes.

If fear says “pay unlock fee now,” that fear is the attack surface. Payment Security and Support Center exist for that minute. Official TPOWER Withdrawal never sells fear.`,
    zh: `情绪化出金发生在波动场次后，你害怕还回去。计划出金发生在你更早决定停止点之后。提款指南背书计划出金。情绪化出金仍走同一收银台——但更常撞上未完成流水与赢钱时忽略的不匹配资料。

开玩前写下停止点。到达时立即打开提款指南习惯：查可提余额、确认收款方、提交一次。申请处理中不要重开老虎机「再来一轮」。

若恐惧说「现在付解锁费」，那恐惧就是攻击面。支付安全与客服中心为那一分钟存在。官方 TPower 提款从不贩卖恐惧。`,
  },
  "payment-methods.ts": {
    titleEn: "How Malaysia search intent maps to this hub",
    titleZh: "大马搜索意图如何映射到本中心",
    en: `People type TPOWER Payment, TPOWER Banking, FPX, DuitNow, GrabPay, and Touch 'n Go for different reasons. The hub catches the comparative intent. Child pages catch the specific intent. FAQ catches the symptom intent. Security catches the threat intent.

If your analytics later show thin bounce on a child page, deepen that child — do not paste its paragraphs back into the hub. Hub bloat destroys the routing clarity that makes topic clusters rank.

Use internal links generously but naturally. Every major paragraph that names a rail should offer a path to its guide. That is how EEAT compounds across the Payment & Money Center.`,
    zh: `人们因不同原因输入 TPower 支付、TPower 银行、FPX、DuitNow、GrabPay、Touch 'n Go。中心承接比较意图。子页承接特定意图。FAQ 承接症状意图。安全承接威胁意图。

若日后分析显示某子页跳出偏薄，加深该子页——不要把它的段落贴回中心。中心膨胀会破坏让主题集群排名的路由清楚度。

慷慨且自然地使用内链。每个点名通道的主要段落都应提供通往其指南的路径。这就是 EEAT 在支付与资金中心跨页复利的方式。`,
  },
  "fpx-deposit.ts": {
    titleEn: "FPX for first-time TPOWER depositors",
    titleZh: "首次 TPOWER 存款者的 FPX",
    en: `First FPX deposits feel longer because every screen is new. Expect the bank list, the bank login, the OTP, and the return. The second FPX is usually faster because muscle memory returns.

Do not practise first FPX on an unstable bus ride. Practise where you can finish. First-time success builds trust; first-time abandonment builds superstition that “FPX never works.”

After first success, note which bank you used. That note becomes your primary rail for Instant Deposit nights.`,
    zh: `首次 FPX 存款感觉更长，因为每个屏幕都新。预期银行列表、银行登录、OTP 与返回。第二次 FPX 通常更快，因为肌肉记忆回来了。

不要在不稳的巴士上练习首次 FPX。在能完成的地方练习。首次成功建立信任；首次半途建立「FPX 从不行」的迷信。

首次成功后记下用的银行。该笔记成为即时存款夜晚的主通道。`,
  },
  "duitnow-deposit.ts": {
    titleEn: "DuitNow for salary-day funding discipline",
    titleZh: "发薪日入金纪律下的 DuitNow",
    en: `Salary day is when real-time rails feel dangerous. Money is plentiful and attention is low. Decide the entertainment budget before you DuitNow. Transfer the budget once. Do not “top up the top-up” because a session went badly.

DuitNow makes moving money easy. Responsible Gaming makes moving money intentional. Together they keep TPOWER DuitNow from becoming an accidental second salary drain.`,
    zh: `发薪日是实时通道感觉危险的时候。钱多、注意力低。DuitNow 前先决定娱乐预算。预算只转一次。不要因为场次不顺就「给充值再充值」。

DuitNow 让移动资金容易。负责任博彩让移动资金有意识。二者一起避免 TPower DuitNow 变成意外的第二薪水排水口。`,
  },
  "touch-n-go.ts": {
    titleEn: "TnG deposits during commute windows",
    titleZh: "通勤窗口中的 TnG 存款",
    en: `Commute windows are TnG’s natural habitat and also its failure habitat. Signal flaps. Approvals die. The fix is timing: fund at the office Wi-Fi or home Wi-Fi edges of the commute, not in the worst tunnel segment.

If you must fund mid-commute, wait for a stable stretch, complete TnG approval in one breath, then verify cashier before the next station announcement distracts you.`,
    zh: `通勤窗口是 TnG 的自然栖息地，也是失败栖息地。信号抖动。批准死亡。修复是时机：在通勤两端的办公室或家庭 Wi-Fi 入金，而不是最差隧道段。

若必须在通勤中入金，等待稳定路段，一口气完成 TnG 批准，再在下一站广播分心前核对收银台。`,
  },
  "grabpay.ts": {
    titleEn: "GrabPay after rides — attention management",
    titleZh: "乘车后的 GrabPay——注意力管理",
    en: `After a ride you are already in Grab. That convenience is useful and risky. Useful because GrabPay is one tap away. Risky because fatigue makes proxy messages look helpful.

Rule: if you open GrabPay for TPOWER, open TPOWER cashier in the same sitting from official navigation. Do not accept a GrabPay number SMS that arrives “helpfully” during the ride.`,
    zh: `乘车后你已在 Grab。便利有用也有风险。有用是因为 GrabPay 一触即达。有风险是因为疲劳让代理消息看起来有帮助。

规则：若为 TPOWER 打开 GrabPay，同一次坐着从官方导航打开 TPOWER 收银台。不要接受乘车期间「好心」到达的 GrabPay 号码短信。`,
  },
  "online-banking.ts": {
    titleEn: "IB deposits for higher amounts",
    titleZh: "较高金额的网银存款",
    en: `Higher IB amounts attract more bank-side scrutiny and more phishing attention. Use trusted networks, verify cashier details twice, and avoid publicising large deposits in group chats.

If your bank asks extra verification for merchant payments, complete it inside the bank — never by sharing screens with remote helpers claiming to be TPOWER staff.`,
    zh: `较高网银金额吸引更多银行侧审查与更多钓鱼注意。使用可信网络，两次核对接收银台资料，避免在群聊炫耀大额存款。

若银行为商户付款要求额外验证，在银行内完成——绝不与声称是 TPOWER 职员的远程助手共享屏幕。`,
  },
  "instant-deposit.ts": {
    titleEn: "Teaching impatient friends without spreading panic",
    titleZh: "教急躁朋友而不传播恐慌",
    en: `If a friend asks how to make TPOWER Instant Deposit work, send them this page and the Deposit Guide — not a personal account workaround. Teaching official habits scales. Teaching proxies creates victims.

Instant Deposit culture should be calm competence, not speed shaming. Banks have nights. Prepared players still win the week.`,
    zh: `若朋友问如何让 TPower 即时存款生效，把本页与存款指南发给他们——不是私人账户变通。传授官方习惯可扩展。传授代理制造受害者。

即时存款文化应是冷静能力，不是速度羞辱。银行有夜晚。有准备的玩家仍赢得整周。`,
  },
  "fast-withdrawal.ts": {
    titleEn: "Measuring payout speed honestly",
    titleZh: "诚实衡量出金速度",
    en: `Measure from request submit to bank post, and separate TPOWER release time from bank post time. Players who only stare at the bank app blame the wrong layer. Cashier timestamps tell the release story; bank apps tell the posting story.

Honest measurement reduces fake “priority fee” purchases. If release already happened, a stranger cannot accelerate your bank.`,
    zh: `从申请提交到银行入账衡量，并分开 TPOWER 放款时间与银行入账时间。只盯银行 APP 的玩家会怪错层。收银台时间戳讲述放款故事；银行 APP 讲述入账故事。

诚实衡量减少假「优先费」购买。若已放款，陌生人无法加速你的银行。`,
  },
  "payment-security.ts": {
    titleEn: "Building a household payment safety brief",
    titleZh: "建立家庭支付安全简报",
    en: `Write four lines on the fridge: (1) official domain only, (2) no personal deposit accounts, (3) no withdrawal fees to strangers, (4) Support Center from navigation. That brief beats a hundred banners.

Review the brief when a new adult joins the household device list. Payment Security is cultural, not only technical.`,
    zh: `在冰箱写四行：(1) 仅官方域名，(2) 无私人存款账户，(3) 无向陌生人付提款费，(4) 从导航打开客服中心。该简报胜过一百个横幅。

当新的成年人加入家庭设备名单时复习简报。支付安全是文化，不只是技术。`,
  },
  "deposit-withdrawal-faq.ts": {
    titleEn: "Using FAQ answers in Support Center tickets",
    titleZh: "在客服中心工单中使用 FAQ 答案",
    en: `When you open Support Center, paste the structured facts this FAQ taught you to collect: time, amount, method, bank/wallet success yes/no, reference if any, wagering active yes/no. Structured tickets resolve faster than essays about feelings.

FAQ does not replace humans for edge cases. It prepares humans with better inputs.`,
    zh: `打开客服中心时，粘贴本 FAQ 教你收集的结构化事实：时间、金额、方式、银行/钱包是否成功、参考号、流水是否进行。结构化工单比感觉散文更快解决。

FAQ 不取代人类处理边界个案。它用更好的输入准备人类。`,
  },
};

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

for (const [file, b] of Object.entries(blocks)) {
  const full = path.join(dir, file);
  let src = fs.readFileSync(full, "utf8");
  if (src.includes(b.titleEn)) {
    console.log("skip existing", file);
    continue;
  }
  const insert = `,
  {
    title: { en: \`${esc(b.titleEn)}\`, zh: \`${esc(b.titleZh)}\` },
    body: { en: \`${esc(b.en)}\`, zh: \`${esc(b.zh)}\` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: \`${esc(b.titleEn)}\`, zh: \`${esc(b.titleZh)}\` },
    reverse: true,
  }`;
  const key = "  ],\n  timelineTitle:";
  if (!src.includes(key)) {
    console.error("marker missing", file);
    continue;
  }
  // insert before closing of sections array — the `],\n  timelineTitle`
  src = src.replace(key, `${insert}\n  ],\n  timelineTitle:`);
  fs.writeFileSync(full, src);
  console.log("section+", file);
}

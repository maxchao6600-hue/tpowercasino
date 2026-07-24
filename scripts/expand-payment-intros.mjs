/**
 * Append unique long-form expansion blocks into each payment page introduction
 * to reach ~2000+ EN words without cloning section templates.
 */
import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "src/data/payments-center");

const expansions = {
  "deposit-guide.ts": {
    en: `

Cashier psychology deserves its own paragraph set. Many Malaysia players open deposit after a stressful commute. The Deposit Guide recommends a ninety-second pause: confirm domain, confirm budget, confirm rail health. That pause prevents more losses than any slogan about speed.

Treat minimum deposit figures as product floors, not social challenges. Splitting one budget into five micro-deposits to “feel safer” can create five pending states. One planned deposit is easier to support than five anxious ones.

If you share a household device, end the session after funding. Deposit success on a borrowed phone without logout is how cousins accidentally play your balance. Platform habits from Security pages apply to money moments too.

Document your personal funding map: primary rail, backup rail, support contact path. When maintenance hits, you will not invent a chat workaround because your map already names the backup.

Finally, remember that deposit authority is cumulative. Reading Payment Methods, Instant Deposit, and Payment Security alongside this guide builds a complete TPOWER Deposit skill set — not a single-page superstition.`,
    zh: `

收银台心理值得单独成段。许多大马玩家在疲惫通勤后打开存款。存款指南建议九十秒停顿：确认域名、确认预算、确认通道健康。这停顿比任何速度口号更能防损失。

把最低存款数字当作产品底线，不是社交挑战。把一笔预算拆成五笔微存款「求安心」，可能造成五个待处理状态。一笔有计划的存款比五笔焦虑存款更好支持。

若共用家庭设备，入金后结束会话。外借手机上存款成功却未登出，是亲戚误玩你余额的常见路径。安全页的平台习惯同样适用于资金时刻。

记录个人资金地图：主通道、备用通道、客服路径。维护到来时，你不会发明聊天变通，因为地图已写明备用。

最后记住，存款权威是累积的。把支付方式、即时存款与支付安全与本指南一起读，才能练成完整的 TPower 存款技能——而不是单页迷信。`,
  },
  "withdrawal-guide.ts": {
    en: `

Payout calendar thinking helps. If you know your bank posts slowly on Sundays, do not schedule emotional withdrawals for Sunday midnight. Fast Withdrawal targets assume ordinary banking behaviour; the Withdrawal Guide teaches you to plan around that behaviour.

Keep a withdrawal folder of screenshots only when something looks wrong — not for every successful cashout. Evidence culture is for exceptions. Normal completed withdrawals should feel uneventful.

If a promotion is active, write down the wagering remainder before you request payout. Surprises at the request button are usually preventable reading failures, not cashier malice.

Large first withdrawals deserve daylight. Completing KYC at noon beats discovering document blur at 1 a.m. AML & KYC is part of withdrawal craft.

Never negotiate cashout speed in unofficial channels. Official speed is preparation plus windows — not fees to strangers. Payment Security repeats that rule because money anxiety makes people forget.`,
    zh: `

出金日历思维有帮助。若你知道银行周日入账慢，就不要把情绪化提款排在周日午夜。快速提款目标假定平常银行行为；提款指南教你围绕该行为计划。

只在看起来不对时保留提款截图文件夹——不是每笔成功出金都存。证据文化服务例外。正常完成的提款应感觉平淡。

若有优惠进行中，申请出金前写下剩余流水。申请按钮前的意外通常是可预防的阅读失败，不是收银台恶意。

大额首次提款值得白天进行。中午完成 KYC 胜过凌晨 1 点才发现证件模糊。AML 与 KYC 是提款手艺的一部分。

永远不要在非官方渠道谈判出金速度。官方速度是准备加窗口——不是付给陌生人的费用。支付安全重复该规则，因为资金焦虑让人忘记。`,
  },
  "payment-methods.ts": {
    en: `

A payment hub earns authority by routing, not by repeating every child page. If you need FPX OTP detail, leave this hub. If you need proxy-scam defence, leave for Payment Security. The hub’s job is orientation and comparison.

Malaysia method diversity is a feature. Different adults keep money in different places. TPOWER Payment Methods respects that diversity by documenting families instead of forcing one “best” logo.

When cashier listings change temporarily, trust the live cashier over outdated screenshots in chat. Hubs and guides explain families; cashier shows tonight’s availability.

Use the method cards as launch pads into deep guides. USDT or specialty rails, when present, still obey official-surface rules: no personal chat accounts.

Bookmark this hub beside Deposit Guide and Withdrawal Guide. Together they form the three-page spine of TPOWER’s money cluster for commercial search intent.`,
    zh: `

支付中心靠路由赢得权威，而不是重复每个子页。若你需要 FPX OTP 细节，离开本中心。若你需要代理骗局防御，去支付安全。中心的工作是定向与比较。

大马方式多样性是特性。不同成年人把钱放在不同地方。TPOWER 支付方式通过说明家族尊重多样性，而不是强迫一个「最佳」Logo。

当收银台列表暂时变化时，信任现场收银台，而不是聊天里过时截图。中心与指南说明家族；收银台显示今晚可用性。

把方式卡片当作进入深度指南的跳板。若存在 USDT 或特殊通道，仍遵守官方表面规则：无私信私人账户。

把本中心与存款指南、提款指南一起收藏。三者构成 TPOWER 资金集群面向商业搜索意图的三页脊梁。`,
  },
  "fpx-deposit.ts": {
    en: `

FPX literacy includes knowing your bank’s secure approval UX. Soft tokens, SMS OTP, and biometric bank unlocks all count as bank-side truth. Casino chat is never a substitute factor.

If you hold multiple bank apps, decide the primary FPX bank before you open cashier. Indecision mid-flow creates abandoned checkouts that feel like failures when they are simply incomplete.

Corporate or joint accounts can complicate FPX if permissions differ. Prefer personal accounts aligned with your TPOWER identity for smoother later withdrawals.

When FPX succeeds repeatedly, resist the superstition that you must always use FPX even during maintenance. Backup rails exist so loyalty to a logo does not become self-harm.`,
    zh: `

FPX 素养包括了解你银行的安全批准体验。软令牌、短信 OTP 与银行生物识别解锁都算银行侧真相。博彩聊天从来不是替代因素。

若你有多个银行 APP，打开收银台前先决定主 FPX 银行。流程中犹豫会造成半途结账，感觉像失败，其实只是未完成。

公司或联名账户若权限不同可能让 FPX 变复杂。优先使用与 TPOWER 身份对齐的个人账户，以便日后提款更顺。

当 FPX 多次成功时，抵制「维护时也必须用 FPX」的迷信。备用通道存在，是为了不让对 Logo 的忠诚变成自我伤害。`,
  },
  "duitnow-deposit.ts": {
    en: `

DuitNow culture rewards precision. A single wrong digit in an identifier wastes minutes and mood. Read cashier fields aloud once before you push. That habit is dull and highly effective.

If your bank labels the transfer with a note field, keep notes factual and short. Do not paste passwords or OTP into notes. Notes are for your memory and support context, not for secrets.

Family funding via DuitNow creates identity debt. If someone else pushes on your behalf, withdrawals later may stall. Prefer self-funded DuitNow aligned with KYC.

When real-time feels slow, check whether you are on a congested evening window before blaming TPOWER. Banking reality is part of DuitNow honesty.`,
    zh: `

DuitNow 文化奖励精确。识别信息一个错位数字就浪费分钟与心情。推送前把收银台字段朗读一次。习惯无聊但高效。

若银行用备注字段标记转账，备注保持事实且短。不要把密码或 OTP 贴进备注。备注供你记忆与客服语境，不是机密。

经 DuitNow 由家人代付会造成身份债务。若他人代推，日后提款可能卡住。优先使用与 KYC 对齐的自付 DuitNow。

当实时感觉变慢，先检查是否处于拥挤晚间窗口，再责怪 TPOWER。银行现实是 DuitNow 诚实的一部分。`,
  },
  "touch-n-go.ts": {
    en: `

TnG players should treat wallet notifications as secondary. Cashier completed status remains primary for play permission. A wallet push alert without cashier credit is incomplete.

Keep Touch 'n Go updated. Outdated wallet apps fail approvals in ways that look like TPOWER faults. Update hygiene is payment hygiene.

If you use TnG GO+ or related tiers, still follow cashier minimums. Wallet marketing tiers do not rewrite TPOWER deposit floors.

Parking-lot deposits are romantic until signal dies. Fund before you enter basements. That single timing change prevents a surprising share of abandoned TnG attempts.`,
    zh: `

TnG 玩家应把钱包通知当次要。游玩许可仍以收银台完成状态为主。没有收银台入账的钱包推送提醒是不完整的。

保持 Touch 'n Go 更新。过时钱包 APP 会以看起来像 TPOWER 故障的方式失败批准。更新卫生就是支付卫生。

若使用 TnG GO+ 或相关层级，仍遵循收银台最低额。钱包营销层级不会改写 TPOWER 存款底线。

停车场存款很浪漫，直到信号死亡。进入地库前先入金。这一时机改变能防止相当比例的半途 TnG 尝试。`,
  },
  "grabpay.ts": {
    en: `

GrabPay users often deposit after rides. That timing can mean low attention. Build a ritual: open Grab balance, open TPOWER cashier, select GrabPay, confirm, verify credit, then play. Rituals beat improvisation after midnight food orders.

If GrabPay is linked to cards or other funding sources inside Grab, understand that TPOWER still sees a GrabPay method — follow Grab’s own security for those hinterland sources.

Refuse “GrabPay cash-in agents” near entertainment venues who claim partner status. Official partnership is expressed through cashier listing, not street flyers.

When travelling between states, watch for network switches mid-confirmation. Pause GrabPay deposits until signal stabilises.`,
    zh: `

GrabPay 用户常在乘车后存款。该时机可能意味着注意力低。建立仪式：打开 Grab 余额、打开 TPOWER 收银台、选择 GrabPay、确认、核对入账、再玩。仪式胜过午夜点餐后的即兴。

若 GrabPay 在 Grab 内连接卡片或其他资金来源，理解 TPOWER 仍看到 GrabPay 方式——那些后方来源遵循 Grab 自身安全。

拒绝娱乐场所附近声称合作方的「GrabPay 兑现代理」。官方合作通过收银台列表表达，不是街头传单。

跨州移动时注意确认中途的网络切换。信号稳定前暂停 GrabPay 存款。`,
  },
  "online-banking.ts": {
    en: `

Online banking maturity includes reading bank push notifications. A declined IB attempt should be read in the bank app before you assume TPOWER rejected you. Many declines are bank-side fraud controls on unfamiliar merchant patterns — retry calmly or switch rails.

Joint account signatories should confirm who can approve transfers before starting a TPOWER banking deposit. Half-approved transfers create confusing pending stories.

Keep your bank’s official app from sideloaded stores. Compromised IB apps turn every casino deposit into an account-takeover risk unrelated to TPOWER’s cashier.

When typing account numbers, use copy-paste from cashier when offered, then visually verify length and last digits. Manual retyping errors are classic IB pain.`,
    zh: `

网上银行成熟度包括阅读银行推送通知。被拒的网银尝试应先在银行 APP 阅读，再假定 TPOWER 拒绝了你。许多拒绝是银行侧对陌生商户模式的风控——冷静重试或换通道。

联名账户签署人应在开始 TPOWER 银行存款前确认谁能批准转账。半批准转账会造成混乱的待处理故事。

不要从非官方商店安装银行 APP。被入侵的网银 APP 会让每笔博彩存款变成与 TPOWER 收银台无关的盗号风险。

输入账号时，若收银台提供则复制粘贴，再目视核对长度与末几位。手动重打错误是经典网银痛苦。`,
  },
  "instant-deposit.ts": {
    en: `

Instant Deposit is a coaching page for impatience. The enemy is not the bank — it is the second deposit fired during the first pending window. If you remember only one rule from this page, remember single-flight funding.

Create a personal SLA: wait X minutes after provider success before support. Your X can be short, but it should be intentional. Random rage retries are not SLAs.

Speed also comes from device readiness: updated apps, charged phone, known passwords. Hunting for an OTP SIM while the timer runs is how instant becomes endless.

If you need adrenaline, do not seek it from duplicate transfers. Seek it from games after credit is confirmed — within Responsible Gaming limits.`,
    zh: `

即时存款是给急躁的教练页。敌人不是银行——而是第一笔待处理窗口中发射的第二笔存款。若本页只记住一条规则，记住单飞行入金。

建立个人 SLA：提供方成功后等待 X 分钟再找客服。你的 X 可以短，但应有意识。随机怒重试不是 SLA。

速度也来自设备就绪：已更新 APP、电量充足、已知密码。OTP 倒计时中找 SIM，是即时变无尽的方式。

若你需要肾上腺素，不要从重复转账寻找。在入账确认后、负责任博彩限额内，从游戏寻找。`,
  },
  "fast-withdrawal.ts": {
    en: `

Fast Withdrawal is not a twin of Instant Deposit. Inbound speed optimises provider confirmation; outbound speed optimises eligibility hygiene. Confusing them creates players who mash deposit twice and then demand cashout fees.

Build a pre-cashout checklist on your phone notes: wagering clear? KYC clear? bank match? amount intended? Submit only when all four are yes. That checklist is the real fast lane.

VIP status may improve communication clarity. It does not delete banking holidays. Expectation management is part of feeling fast.

If you chase “faster than Fast Withdrawal” offers in chats, you are leaving the official product. Payment Security is the page for that boundary.`,
    zh: `

快速提款不是即时存款的双胞胎。入金速度优化提供方确认；出金速度优化资格卫生。混淆二者会造就连存两笔又要求出金费的玩家。

在手机备忘录建立出金前清单：流水清？KYC 清？银行匹配？金额有意？四项皆是才提交。该清单才是真正快车道。

VIP 状态可能改善沟通清楚度。它不会删除银行假日。预期管理是「感觉快」的一部分。

若你在聊天追求「比快速提款更快」的报价，你已离开官方产品。支付安全是该边界专页。`,
  },
  "payment-security.ts": {
    en: `

Payment Security is a pause button with curriculum. Every urgent money DM should trigger the same sequence: stop, open official site, navigate to cashier or Support Center, ignore the DM’s deep link.

Teach household adults the same sequence. Shared phones mean shared risk. A partner who “helps” by sending OTP aloud can unwind years of careful deposits.

Report impersonation even when you did not lose money. Patterns help protect the next player. Support Center can receive structured reports with channel and time.

Remember that secure payments are boring. Boring is the brand of safety. Drama belongs to attackers.`,
    zh: `

支付安全是带课程的暂停键。每条紧迫资金私信应触发同一顺序：停下、打开官网、导航到收银台或客服中心、忽略私信深链。

把同一顺序教给同住成年人。共用手机意味着共用风险。大声读 OTP「帮忙」的伴侣，可以毁掉多年谨慎存款。

即使未亏损也举报假冒。模式帮助保护下一位玩家。客服中心可接收带通道与时间的结构化报告。

记住安全支付是无聊的。无聊是安全的品牌。戏剧属于攻击者。`,
  },
  "deposit-withdrawal-faq.ts": {
    en: `

FAQ hubs fail when they pretend to replace textbooks. This page succeeds when it triagees: short answer, then deep link. If you need a full FPX story, leave for FPX Deposit. If you need scam defence, leave for Payment Security.

Searchers often arrive with one symptom. Match the symptom, act officially, then bookmark the deeper guide for next time. That is how FAQ becomes a gateway into the cluster rather than a dead end.

Keep asking better questions: not “why slow?” but “bank success or not?”, “method name?”, “wagering active?”, “KYC flagged?”. Better questions unlock better Support Center outcomes.

The FAQ is bilingual by design. Chinese and English answers are written for different search cultures, not mirrored sentence by sentence.`,
    zh: `

FAQ 中心若假装取代课本就会失败。本页在分诊时成功：短答案，再深度链接。若需要完整 FPX 故事，去 FPX 存款。若需要骗局防御，去支付安全。

搜索者常带着一个症状到来。匹配症状、官方行动，再为下次收藏更深指南。这样 FAQ 成为进入集群的门户，而不是死胡同。

持续问更好的问题：不是「为何慢？」，而是「银行是否成功？」「方式名？」「流水是否进行？」「KYC 是否标记？」。更好的问题解锁更好的客服结果。

FAQ 按设计双语。中英文答案面向不同搜索文化撰写，不是逐句镜像。`,
  },
};

for (const [file, block] of Object.entries(expansions)) {
  const full = path.join(dir, file);
  let src = fs.readFileSync(full, "utf8");
  // Insert before closing of introduction en template — find first `,\n    zh:` after introduction
  const marker = "introduction: {";
  const idx = src.indexOf(marker);
  if (idx < 0) {
    console.error("no intro", file);
    continue;
  }
  // Find en: ` ... `,
  const enStart = src.indexOf("en: `", idx);
  const enTick = enStart + 4; // points to `
  // find closing `; after en content — first `\n,` pattern after enStart for closing
  let i = enTick + 1;
  while (i < src.length) {
    if (src[i] === "`" && src[i - 1] !== "\\") break;
    i++;
  }
  const before = src.slice(0, i);
  const after = src.slice(i);
  // insert expansion before closing backtick
  src = before + block.en + after;

  // now zh
  const zhStart = src.indexOf("zh: `", idx);
  const zhTick = zhStart + 4;
  let j = zhTick + 1;
  while (j < src.length) {
    if (src[j] === "`" && src[j - 1] !== "\\") break;
    j++;
  }
  src = src.slice(0, j) + block.zh + src.slice(j);
  fs.writeFileSync(full, src);
  console.log("expanded", file);
}

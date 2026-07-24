import type { Locale } from "@/config/site";

export function getTermsSections(locale: Locale) {
  if (locale === "zh") {
    return [
      {
        title: "1. 接受条款",
        body: "访问或使用 TPOWER Casino 网站与相关产品说明，即表示您同意受本使用条款约束。若您不同意，请勿使用本服务。本网站现阶段提供产品说明与支持入口；实时账户功能以官方产品渠道为准。",
      },
      {
        title: "2. 资格",
        body: "您必须年满 21 岁，并有权在马来西亚适用法律框架下访问在线娱乐服务。我们可随时要求身份与年龄验证。未满足资格者不得使用本服务。",
      },
      {
        title: "3. 账户责任",
        body: "若您持有 TPOWER 账户，应对凭证保密，并对通过该账户进行的活动负责。发现未授权访问时，请立即通过 support@tpower.my 联系支持团队。",
      },
      {
        title: "4. 优惠与奖励",
        body: "所有优惠均受公布条款约束，包括流水、贡献率、有效期与资格限制。滥用、串通或多账户行为可导致奖励取消与账户限制。",
      },
      {
        title: "5. 支付",
        body: "存款与提款须使用属于您本人的支付方式。我们可能暂停处理以完成安全核验或合规审查。请仅通过官方公布的支付路径操作。",
      },
      {
        title: "6. 负责任娱乐",
        body: "您同意将平台用于娱乐目的，并在需要时使用限额、冷静期与自我排除工具。赌博不能作为收入来源。",
      },
      {
        title: "7. 禁止行为",
        body: "禁止欺诈、使用自动化工具干扰服务、绕过安全控制、为未成年人开户，或从事违反马来西亚适用法律的行为。",
      },
      {
        title: "8. 服务变更",
        body: "我们可能更新游戏供应、功能、网站内容或条款以提升安全性、合规性或产品质量。重大变更将通过本网站或官方渠道通知。",
      },
      {
        title: "9. 免责声明",
        body: "在法律允许范围内，本网站按“现状”提供信息。我们不对第三方供应商中断、网络故障或您设备环境导致的损失承担责任。",
      },
      {
        title: "10. 管辖与争议",
        body: "本条款受马来西亚法律解释。争议应首先通过 support@tpower.my 友好协商；无法解决时，提交有管辖权的马来西亚法院处理。",
      },
      {
        title: "11. 联系",
        body: "条款相关问题请发送至 support@tpower.my。",
      },
    ];
  }

  return [
    {
      title: "1. Acceptance",
      body: "By accessing or using the TPOWER Casino website and related product information, you agree to these Terms of Use. If you do not agree, do not use the service. This website currently provides product guidance and support entry points; live account features are provided through official product channels.",
    },
    {
      title: "2. Eligibility",
      body: "You must be at least 21 years old and legally permitted to access online gaming services under applicable Malaysian frameworks. We may request identity and age verification at any time. Ineligible persons must not use the service.",
    },
    {
      title: "3. Account responsibility",
      body: "If you hold a TPOWER account, you are responsible for safeguarding credentials and for activity conducted through that account. Contact support immediately at support@tpower.my if you suspect unauthorised access.",
    },
    {
      title: "4. Promotions and rewards",
      body: "All offers are governed by published terms including wagering, contribution, expiry, and eligibility limits. Abuse, collusion, or multi-accounting may void rewards and restrict accounts.",
    },
    {
      title: "5. Payments",
      body: "Deposits and withdrawals must use payment methods belonging to you. We may pause processing to complete security checks or compliance reviews. Use only officially published payment paths.",
    },
    {
      title: "6. Responsible entertainment",
      body: "You agree to use the platform for entertainment and to apply limits, time-outs, and self-exclusion tools when needed. Gambling is not a source of income.",
    },
    {
      title: "7. Prohibited conduct",
      body: "Fraud, automated interference, bypassing security controls, creating accounts for minors, or other unlawful activity under applicable Malaysian law is prohibited.",
    },
    {
      title: "8. Service changes",
      body: "We may update game supply, features, website content, or terms to improve security, compliance, or product quality. Material changes will be communicated through this website or official channels.",
    },
    {
      title: "9. Disclaimer",
      body: "To the extent permitted by law, information on this website is provided as-is. We are not liable for third-party provider outages, network failures, or losses caused by your device environment.",
    },
    {
      title: "10. Governing law and disputes",
      body: "These terms are interpreted under the laws of Malaysia. Disputes should first be raised amicably via support@tpower.my; unresolved matters may be brought before competent Malaysian courts.",
    },
    {
      title: "11. Contact",
      body: "Questions about these terms can be sent to support@tpower.my.",
    },
  ];
}

export function getPrivacySections(locale: Locale) {
  if (locale === "zh") {
    return [
      {
        title: "1. 我们收集的数据",
        body: "我们可能收集账户资料、联系方式、设备与日志数据、支付相关信息、年龄确认记录，以及您向支持团队提供的沟通内容。",
      },
      {
        title: "2. 使用目的",
        body: "数据用于运营账户、处理交易、防止欺诈、改善产品、提供支持、验证年龄资格，以及履行法律与合规义务。",
      },
      {
        title: "3. 法律依据（马来西亚）",
        body: "在适用情况下，我们依据履行合同、合法利益（安全与欺诈防范）、法律义务，以及您就特定处理活动给出的同意来处理个人数据，并遵循马来西亚个人数据保护相关要求。",
      },
      {
        title: "4. 共享",
        body: "我们可能与支付处理方、游戏供应商、安全服务商及法律要求的主管机构共享必要数据。我们不会出售个人数据。",
      },
      {
        title: "5. 跨境传输",
        body: "若处理或支持服务位于马来西亚以外，我们将采取合理的合同与技术措施保护传输中的个人数据。",
      },
      {
        title: "6. 保留",
        body: "我们在提供服务及满足法律、会计与争议处理所需的期限内保留数据，期满后删除或匿名化。",
      },
      {
        title: "7. 您的权利",
        body: "您可请求访问、更正、限制或删除某些数据，法律允许的义务保留情形除外。请通过 support@tpower.my 联系我们，并提供足够信息以便核实身份。",
      },
      {
        title: "8. 安全",
        body: "我们实施技术与组织措施保护个人数据，但任何互联网传输都无法保证绝对安全。",
      },
      {
        title: "9. 联系",
        body: "隐私相关请求请发送至 support@tpower.my。",
      },
    ];
  }

  return [
    {
      title: "1. Data we collect",
      body: "We may collect account profile details, contact information, device and log data, payment-related information, age-confirmation records, and communications you send to support.",
    },
    {
      title: "2. How we use data",
      body: "Data is used to operate accounts, process transactions, prevent fraud, improve the product, provide support, verify age eligibility, and meet legal or compliance obligations.",
    },
    {
      title: "3. Legal bases (Malaysia)",
      body: "Where applicable, we process personal data based on contract performance, legitimate interests (security and fraud prevention), legal obligations, and consent for specific processing activities, consistent with Malaysian personal data protection requirements.",
    },
    {
      title: "4. Sharing",
      body: "We may share necessary data with payment processors, game providers, security vendors, and authorities when legally required. We do not sell personal data.",
    },
    {
      title: "5. Cross-border transfers",
      body: "If processing or support services operate outside Malaysia, we apply reasonable contractual and technical safeguards to protect personal data in transit.",
    },
    {
      title: "6. Retention",
      body: "We retain data for as long as needed to provide the service and meet legal, accounting, and dispute-resolution requirements, then delete or anonymise it.",
    },
    {
      title: "7. Your rights",
      body: "You may request access, correction, restriction, or deletion of certain data, subject to legal retention duties. Contact support@tpower.my and provide enough detail for identity verification.",
    },
    {
      title: "8. Security",
      body: "We apply technical and organisational measures to protect personal data, though no internet transmission can be guaranteed absolutely secure.",
    },
    {
      title: "9. Contact",
      body: "Privacy requests can be sent to support@tpower.my.",
    },
  ];
}

export function getCookieSections(locale: Locale) {
  if (locale === "zh") {
    return [
      {
        title: "1. 什么是 Cookie",
        body: "Cookie 与类似技术帮助网站记住偏好、支持必要功能，并理解哪些页面表现良好。",
      },
      {
        title: "2. 我们使用的类型",
        body: "必要 Cookie 支持年龄确认与基本站点安全。功能 Cookie 可记住语言等偏好。分析 Cookie（若启用）帮助我们改进性能与内容质量。本营销网站当前不使用实时账户登录会话 Cookie。",
      },
      {
        title: "3. 管理偏好",
        body: "您可通过浏览器设置控制 Cookie。禁用必要 Cookie 可能影响年龄确认或语言偏好等基础体验。",
      },
      {
        title: "4. 更新",
        body: "我们可能更新本政策以反映产品或法规变化。最新版本将始终发布于本页面。",
      },
    ];
  }

  return [
    {
      title: "1. What cookies are",
      body: "Cookies and similar technologies help websites remember preferences, support essential functions, and understand which pages perform well.",
    },
    {
      title: "2. Types we use",
      body: "Essential cookies support age confirmation and basic site security. Functional cookies may remember preferences such as language. Analytics cookies, if enabled, help us improve performance and content quality. This marketing website does not currently set live account login session cookies.",
    },
    {
      title: "3. Managing preferences",
      body: "You can control cookies through browser settings. Disabling essential cookies may affect basic experiences such as age confirmation or language preference.",
    },
    {
      title: "4. Updates",
      body: "We may update this policy to reflect product or regulatory changes. The latest version will always be published on this page.",
    },
  ];
}

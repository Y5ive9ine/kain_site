export type ProjectSection = {
  label: string;
  title: string;
  paragraphs: string[];
  visual?: 'network' | 'console' | 'notes';
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  description: string;
  summary: string;
  role: string;
  year: string;
  team: string;
  tags: string[];
  accent: 'coral' | 'yellow' | 'blue';
  sections: ProjectSection[];
};

const kainProjects: Project[] = [
  {
    slug: 'context-atlas',
    index: '01',
    title: 'Context Atlas',
    eyebrow: 'Knowledge workflow · Concept case',
    description: '把分散的研究、决策和关系，整理成可以继续行动的工作地图。',
    summary: '一个面向个人研究者的知识工作台概念，用更清楚的关系和时间线帮助人们回到上下文。',
    role: 'Product design',
    year: '2026',
    team: 'Solo concept',
    tags: ['Research', 'Systems', 'Prototype'],
    accent: 'coral',
    sections: [
      {
        label: '01 / Context',
        title: '把“记住”变成“重新理解”',
        paragraphs: [
          '研究材料往往散落在文档、书签、会议记录和聊天里。Context Atlas 从回到上下文的动作开始：先看关系，再决定下一步。',
          '这是一个概念案例，用来探索个人知识系统应该如何同时保留结构、时间和不确定性。'
        ],
        visual: 'network'
      },
      {
        label: '02 / Approach',
        title: '用三种视图切换阅读方式',
        paragraphs: [
          '地图视图适合发现关系，时间线适合追踪变化，卡片视图适合快速复盘。三种视图共享同一套内容模型，避免把信息复制成三份。'
        ],
        visual: 'console'
      },
      {
        label: '03 / Reflection',
        title: '为下一次进入留下入口',
        paragraphs: [
          '最终界面不追求一次展示所有内容，而是让每个节点都保留“为什么在这里”和“下一次从哪里继续”的线索。'
        ],
        visual: 'notes'
      }
    ]
  },
  {
    slug: 'studio-console',
    index: '02',
    title: 'Studio Console',
    eyebrow: 'Team operating surface · Concept case',
    description: '让小团队在项目、节奏和决定之间保持一个安静的工作表面。',
    summary: '一个面向小型工作室的项目操作台概念，强调状态清晰、动作集中和低干扰反馈。',
    role: 'Product design',
    year: '2026',
    team: 'Solo concept',
    tags: ['SaaS', 'Workflow', 'UI system'],
    accent: 'yellow',
    sections: [
      {
        label: '01 / Context',
        title: '把项目状态放在行动前面',
        paragraphs: [
          'Studio Console 将项目状态、今天的重点和待确认的决定放在同一条工作路径上，让团队先理解上下文，再进入任务。',
          '该页面是结构探索，示例内容用于展示布局和交互方向。'
        ],
        visual: 'console'
      },
      {
        label: '02 / Approach',
        title: '把信息密度控制在可读范围',
        paragraphs: [
          '通过优先级、状态色和短句摘要建立节奏，复杂内容在需要时展开，避免每个模块都争夺首屏注意力。'
        ],
        visual: 'network'
      },
      {
        label: '03 / Reflection',
        title: '让更新本身成为团队语言',
        paragraphs: [
          '状态更新不只记录完成与否，也记录阻塞原因和下一次需要谁参与。这样项目记录更接近真实工作，而不是单纯的清单。'
        ],
        visual: 'notes'
      }
    ]
  },
  {
    slug: 'signal-notes',
    index: '03',
    title: 'Signal Notes',
    eyebrow: 'Personal publishing · Prototype',
    description: '一个小型、可持续维护的个人发布系统，用来记录正在形成的想法。',
    summary: '一个以 Markdown 为内容源的个人写作原型，探索文章、实验和 Now 页面之间的轻量连接。',
    role: 'Design & front-end',
    year: '2026',
    team: 'Personal prototype',
    tags: ['Publishing', 'Astro', 'Content'],
    accent: 'blue',
    sections: [
      {
        label: '01 / Context',
        title: '发布频率应该服从真实节奏',
        paragraphs: [
          'Signal Notes 用简单的内容模型保存文章、实验和当前关注点，让网站成为长期积累的入口，而不是一次性展示。'
        ],
        visual: 'notes'
      },
      {
        label: '02 / Approach',
        title: '内容和页面结构保持分离',
        paragraphs: [
          '内容用 Markdown 管理，页面只负责呈现和导航。未来可以接入 CMS、RSS 或全文搜索，而不需要重写展示层。'
        ],
        visual: 'console'
      },
      {
        label: '03 / Reflection',
        title: '给未完成的想法保留位置',
        paragraphs: [
          '实验页面允许内容保持半成品状态，把过程本身视为可以被访问的作品。'
        ],
        visual: 'network'
      }
    ]
  },
  {
    slug: 'field-signals',
    index: '04',
    title: 'Field Signals',
    eyebrow: 'Research workspace · Personal study',
    description: '把访谈、观察和待验证的假设整理成可以继续追踪的研究脉络。',
    summary: '一个面向产品团队的研究工作区概念，用轻量的标签和时间线让洞察更容易回到决策现场。',
    role: 'Product design',
    year: '2025',
    team: 'Personal study',
    tags: ['Research', 'SaaS', 'Prototype'],
    accent: 'blue',
    sections: [
      { label: '01 / Context', title: '让观察回到真实场景', paragraphs: ['研究结论只有回到具体场景才会继续产生价值。Field Signals 用来源、时间和用户语句保留每个判断的上下文。'], visual: 'network' },
      { label: '02 / Approach', title: '让证据和假设保持距离', paragraphs: ['证据、解释和下一步行动使用不同层级呈现，减少把推测误认为事实的风险。'], visual: 'console' },
      { label: '03 / Reflection', title: '把下一次访问变得更轻', paragraphs: ['每个研究节点都留下一个可继续的问题，让团队可以从上次停下的位置重新开始。'], visual: 'notes' }
    ]
  },
  {
    slug: 'decision-room',
    index: '05',
    title: 'Decision Room',
    eyebrow: 'Team systems · Personal study',
    description: '让跨职能团队在同一张工作表面上确认优先级、取舍和下一步。',
    summary: '一个把讨论、决定和行动连接起来的团队协作概念，适合节奏快又需要保留判断依据的小型团队。',
    role: 'Product design',
    year: '2025',
    team: 'Personal study',
    tags: ['Systems', 'SaaS', 'Prototype'],
    accent: 'yellow',
    sections: [
      { label: '01 / Context', title: '把讨论变成可回看的决定', paragraphs: ['Decision Room 将讨论中的不同观点、决定条件和后续行动放在一起，减少重复解释。'], visual: 'console' },
      { label: '02 / Approach', title: '让状态反映真实进度', paragraphs: ['状态标签只表达下一步需要什么动作，不把复杂的工作过程压缩成简单的完成与否。'], visual: 'network' },
      { label: '03 / Reflection', title: '为不同意见留出空间', paragraphs: ['决定记录保留被放弃的路径，让团队能够理解取舍，也让未来的改变更容易发生。'], visual: 'notes' }
    ]
  },
  {
    slug: 'type-garden',
    index: '06',
    title: 'Type Garden',
    eyebrow: 'Content system · Personal study',
    description: '探索内容、组件和语气如何共同形成一个可以持续生长的发布系统。',
    summary: '一个内容设计系统概念，用可复用的结构承载文章、实验和长期积累的片段。',
    role: 'Design & front-end',
    year: '2025',
    team: 'Personal study',
    tags: ['Publishing', 'Systems', 'Prototype'],
    accent: 'coral',
    sections: [
      { label: '01 / Context', title: '内容结构先于页面装饰', paragraphs: ['Type Garden 从内容的最小单元开始，先定义标题、证据和下一步，再决定它们如何组合。'], visual: 'notes' },
      { label: '02 / Approach', title: '让语气成为系统的一部分', paragraphs: ['设计令牌同时约束颜色、间距和文字节奏，让不同页面保持同一种可识别的声音。'], visual: 'console' },
      { label: '03 / Reflection', title: '让半成品也有合适的位置', paragraphs: ['草稿和实验不必伪装成完成品，清楚的状态让读者知道如何继续阅读。'], visual: 'network' }
    ]
  },
  {
    slug: 'calm-queue',
    index: '07',
    title: 'Calm Queue',
    eyebrow: 'Interaction pattern · Personal study',
    description: '把持续到来的请求整理成可以逐步处理的安静队列。',
    summary: '一个减少通知噪音的交互模式研究，用优先级、上下文和短暂的聚焦状态帮助人们回到当前任务。',
    role: 'Interaction design',
    year: '2024',
    team: 'Personal study',
    tags: ['Research', 'Publishing', 'Prototype'],
    accent: 'yellow',
    sections: [
      { label: '01 / Context', title: '把紧急和重要分开', paragraphs: ['Calm Queue 先询问请求与当前目标的关系，再决定它应该进入今天、稍后或等待信息的队列。'], visual: 'network' },
      { label: '02 / Approach', title: '用短暂聚焦减少切换', paragraphs: ['聚焦状态只保留完成当前动作需要的信息，让人可以在有限的时间里回到自己的节奏。'], visual: 'console' },
      { label: '03 / Reflection', title: '让安静成为一种反馈', paragraphs: ['系统用清楚的状态和轻量的动效回应变化，避免用持续提醒制造更多压力。'], visual: 'notes' }
    ]
  }
];

export const personalProjects = kainProjects;

const pouloReference = [
  {
    slug: 'fetaui', title: 'fetaUI', description: 'An animated design system that agents can read.', eyebrow: '#AIandAgentics #DesignSystem', summary: 'I designed, built and shipped an open source animated icon and UI library on my own: 5,987 icons in 10 styles, 347 components with motion, and an MCP server so coding agents use the real thing.', tags: ['AI and Agentics', 'Design System'], role: 'Founder, Designer and Developer', year: '2026', team: 'Open source', accent: 'blue' as const
  },
  {
    slug: 'billdr', title: 'Billdr AI', description: 'Redesigning how crews run their day on site.', eyebrow: '#AIandAgentics #MobileApp', summary: "I led the design of Billdr's first mobile app for general contractors and their crews, from field research to a cross platform design system and a validated MVP.", tags: ['AI and Agentics', 'Mobile App', 'SaaS'], role: 'Lead Product Designer', year: '2026', team: 'Billdr', accent: 'blue' as const
  },
  {
    slug: 'chloe', title: 'Chloe', description: 'Designing an agentic AI operator that does the retention work so studio owners don’t have to.', eyebrow: '#AIandAgentics #SaaS #DesignSystem', summary: 'I designed the surfaces where studio owners meet Chloe: connecting their CRM, reading the business at a glance, and talking to an AI that acts on what it sees, on web and on the floor.', tags: ['AI and Agentics', 'SaaS', 'Design System'], role: 'Lead Product Designer', year: '2026', team: 'Chloe', accent: 'yellow' as const
  },
  {
    slug: 'otera', title: 'Otera AI', description: 'Designing the trust layer for enterprise AI, so people could check, correct and teach the model.', eyebrow: '#AIandAgentics #SaaS #DesignSystem', summary: 'I led product design for a Series A platform that automates back office documents with in house models and LLMs. I owned the design discipline, the design system and features like HITL, AI Coworker and pre processing.', tags: ['AI and Agentics', 'SaaS', 'Design System'], role: 'Founding Product Designer', year: '2023–25', team: 'Otera', accent: 'coral' as const
  },
  {
    slug: 'nexscale', title: 'NexScale website', description: 'From taste debate to triage.', eyebrow: '#Website', summary: 'I audited the live site, wrote the case for change, repositioned the product and shipped a redesigned site on Framer. I owned it end to end in one week.', tags: ['Websites'], role: 'Web Designer and Developer', year: '2026', team: 'NexScale', accent: 'yellow' as const
  },
  {
    slug: 'qpage', title: 'QPage', description: 'Making the talent pool something recruiters could actually reach.', eyebrow: '#AIandAgentics #SaaS #DesignSystem', summary: 'As cofounder and CPO, I led product and design for an AI ATS and CRM built to make tech hiring faster, fairer and data driven.', tags: ['AI and Agentics', 'SaaS', 'Design System'], role: 'Cofounder, CPO', year: '2023–25', team: 'QPage', accent: 'blue' as const
  },
  {
    slug: 'weldica', title: 'Weldica', description: 'Turning compliance paperwork into a guided conversation.', eyebrow: '#AIandAgentics #SaaS #DesignSystem', summary: 'I designed a web app that automates welding procedure qualification. A conversational assistant guides supervisors from first inquiry to final approval, against CSA W47.1 and AWS D1.1.', tags: ['AI and Agentics', 'SaaS', 'Design System'], role: 'Product Designer', year: '2026', team: 'Weldica', accent: 'coral' as const
  }
];

// The reference projects use a longer editorial rhythm on their detail pages.
// Keeping these headings in the content model lets the shared case template
// expose the same navigation and section cadence without coupling layout to a
// particular project.
const pouloSections: Record<string, ProjectSection[]> = {
  fetaui: [
    ['Problem', 'Interfaces are often assembled from parts that were never made to work together. The project starts by making the system legible: one source, shared rules, and a reviewable path from idea to component.'],
    ['Approach', 'One system, drawn once, generated everywhere, and readable by people and agents alike. Rules make the set coherent while leaving room for expression.'],
    ['Procedure', 'A small set of repeatable steps keeps the work moving: specify, draw, generate, review, and ship.'],
    ['Native to agents', 'An agent should never have to guess a prop. Every component carries a readable description, source, and example.'],
    ['Motion', 'Every component moves with intention. Shared springs and reduced-motion rules keep interaction calm.'],
    ['Under the hood', 'Tokens, transforms, and simple documentation make the system maintainable as it grows.'],
    ['Reflection', 'The bottleneck moved from making to deciding. Clear specs and review gates made the work faster and more trustworthy.']
  ].map(([title, paragraph]) => ({ label: title, title, paragraphs: [paragraph], visual: 'notes' })),
  billdr: [
    ['Problem', 'Construction projects generate chaos, not just buildings. Teams contend with scattered communication, manual admin, and delayed logs.'],
    ['Research', 'Looking beyond speculation, we reviewed workflows and interviewed people who manage projects and field work.'],
    ['What we learned', 'The hardest part was uncertainty. Crews needed the next action and its context at a glance, without digging through screens.'],
    ['Ideation', 'We turned research into concrete directions: priority tasks, shifts, and next steps available without digging through screens.'],
    ['Design', 'A cross-platform system brought the same hierarchy to mobile and web, with voice and glanceable states for people on site.'],
    ['Lessons', 'The product became easier to trust when the interface showed what would happen next and kept the most common action close.'],
    ['Agent view', 'A voice-first assistant turns a field update into a clear task while preserving the original words and project context.']
  ].map(([title, paragraph]) => ({ label: title, title, paragraphs: [paragraph], visual: 'console' })),
  chloe: [
    ['Context', 'A small team needed an operator that could turn scattered signals into clear next steps without adding another dashboard to manage.'],
    ['Goal', 'Give studio owners a calm view of the business and a direct path from a signal to an action.'],
    ['My role', 'I framed the product, designed the system, wrote the interface copy, and worked with engineering through the first release.'],
    ['Iteration', 'Short feedback loops kept the team close to real member conversations and the details between a prompt and a decision.'],
    ['Onboarding', 'Seven steps carry an owner from a cold landing to a live CRM, with every error state explained.'],
    ['One flow, two canvases', 'The same model works on a desk and a phone. The hierarchy stays steady while controls adapt to the available space.'],
    ['States, not just screens', 'Boards carry the parts that decide whether a task finishes: reminders, weak passwords, expired codes, and the small details between.'],
    ['Dashboard', 'The dashboard starts with today’s focus, members at risk, visits, and a clear next action.'],
    ['Conversation', 'Prompt starters reflect an owner’s week and turn long analysis into a document that can be acted on.'],
    ['Ask Chloe', 'A focused prompt lets an owner ask for a useful decision without learning a new reporting language.'],
    ['Multi branch analysis', 'Branching questions preserve the evidence behind a recommendation and make the path reviewable.'],
    ['Executive Summary', 'A short summary turns the most important signals into a shareable update.'],
    ['Business Pulse', 'The pulse view keeps visits, members, and retention trends in one calm surface.'],
    ['Community Vibe', 'Qualitative feedback sits alongside the numbers so context is not lost.']
  ].map(([title, paragraph]) => ({ label: title, title, paragraphs: [paragraph], visual: 'network' })),
  otera: [
    ['Overview', 'A generative automation platform streamlined back-office processes by integrating models with the tools and workflows teams already use.'],
    ['Product', 'The trust layer brings confidence, review, and correction into one document workflow so teams can move without surrendering control.'],
    ['What I did', 'I led product design, the design system, and features such as human review, AI Coworker, and pre-processing.'],
    ['Tools and technologies', 'Research, journey maps, prototypes, and a shared component language made complex model behaviour easier to explain.'],
    ['Primary user group persona', 'Operations teams need clear status, a human checkpoint, and a reliable record when a model changes a document.'],
    ['Process', 'We adapted a double-diamond process: understand, frame, make, and learn, with room for the nonlinear reality of product work.'],
    ['Our process', 'Trust grew when the interface explained status, surfaced uncertainty, and let people correct the model.'],
    ['Our non-linear process reality', 'Research, design, and delivery looped as new evidence changed the shape of the problem.'],
    ['Design system development process', 'Shared tokens and components kept every review state consistent as the product expanded.'],
    ['Feature design discovery process', 'Feature work began with a clear question, a prototype, and a testable decision.'],
    ['User journey map', 'The journey map made every handoff visible from intake to approval.'],
    ['User research synthesis', 'Themes from interviews became signals the product could explain and act on.'],
    ['Usability tests', 'Short sessions exposed where confidence and control needed to be clearer.'],
    ['SUS', 'A lightweight usability measure gave the team a shared baseline for iteration.']
  ].map(([title, paragraph]) => ({ label: title, title, paragraphs: [paragraph], visual: 'network' }))
};

export const projects: Project[] = pouloReference.map((reference, index) => ({
  ...kainProjects[index],
  ...reference,
  sections: pouloSections[reference.slug] ?? kainProjects[index].sections
}));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

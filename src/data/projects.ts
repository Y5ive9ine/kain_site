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

export const projects: Project[] = [
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

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

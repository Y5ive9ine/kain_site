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
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

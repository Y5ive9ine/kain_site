export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  body: { heading: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: 'portfolio-as-a-set-of-judgements',
    title: '把作品集写成一组可以继续阅读的判断',
    excerpt: '作品集不只是结果的陈列，也可以让访客看到你如何处理问题、约束和取舍。',
    date: '2026-01-18',
    readingTime: '6 min read',
    tags: ['Portfolio', 'Writing'],
    body: [
      {
        heading: '从展示结果开始，但不要停在结果',
        paragraphs: [
          '项目封面负责让人愿意点进去，详情页负责让人理解为什么这样做。两者之间需要有一条清晰的叙事线：问题是什么，谁受到影响，哪些选择改变了结果。',
          '当案例只展示最终界面时，访客只能判断视觉风格；当案例保留关键判断时，访客才能判断你的工作方式。'
        ]
      },
      {
        heading: '让每个模块回答一个问题',
        paragraphs: [
          '背景回答“为什么开始”，过程回答“如何推进”，结果回答“发生了什么变化”，复盘回答“下一次会怎么做”。每个模块都有明确任务，页面就不会变成项目日志。'
        ]
      }
    ]
  },
  {
    slug: 'design-systems-save-decisions',
    title: '设计系统应该保存哪些决定',
    excerpt: '颜色和组件只是表面，更重要的是系统如何保存团队已经做过的判断。',
    date: '2025-12-06',
    readingTime: '5 min read',
    tags: ['Design systems', 'Product'],
    body: [
      {
        heading: '令牌是决定的接口',
        paragraphs: [
          '设计令牌把颜色、间距、字号和动效变成可以被复用的接口。它们让“这里要更紧一点”变成可讨论、可验证的值。'
        ]
      },
      {
        heading: '保留语境，而不是只保留变量',
        paragraphs: [
          '系统还应该记录这些变量何时使用、为什么存在，以及在不同主题和不同屏幕上怎样变化。只有这样，系统才能帮助新页面保持一致，而不是限制新页面。'
        ]
      }
    ]
  },
  {
    slug: 'small-site-content-model',
    title: '小型网站的内容模型',
    excerpt: '个人网站需要一套足够轻、又能支撑长期积累的内容结构。',
    date: '2025-11-21',
    readingTime: '4 min read',
    tags: ['Astro', 'Content'],
    body: [
      {
        heading: '先区分长期内容和短期状态',
        paragraphs: [
          '作品和文章需要稳定的 URL、摘要和元信息；Now 页面关注当前时间，更新频率可以更高。把它们分开，内容才能按自己的节奏维护。'
        ]
      },
      {
        heading: '文件是一个很好的默认起点',
        paragraphs: [
          'Markdown 和 TypeScript 数据文件足够透明，容易备份，也能在未来迁移到 CMS 或数据库。第一版不需要先承担一个复杂后台。'
        ]
      }
    ]
  }
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

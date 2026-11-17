export type Experiment = {
  title: string;
  description: string;
  type: string;
  status: 'In progress' | 'Shipped' | 'Paused';
  href: string;
};

export const experiments: Experiment[] = [
  {
    title: 'Signal Notes',
    description: '用 Markdown 驱动文章、实验和 Now 页面的个人发布结构。',
    type: 'Publishing system',
    status: 'In progress',
    href: '/work/signal-notes/'
  },
  {
    title: 'Context Atlas',
    description: '探索知识节点、时间线和关系图如何共同支持一次复盘。',
    type: 'Interaction study',
    status: 'In progress',
    href: '/work/context-atlas/'
  },
  {
    title: 'Quiet Console',
    description: '一个降低通知噪音、把重点留在当天工作的界面实验。',
    type: 'Interface prototype',
    status: 'Paused',
    href: '/work/studio-console/'
  }
];

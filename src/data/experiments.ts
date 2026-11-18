export type Experiment = {
  title: string;
  description: string;
  type: string;
  status: 'In progress' | 'Shipped' | 'Paused';
  href: string;
};

export const experiments: Experiment[] = [
  {
    title: 'Interactive 3D Turntable Component',
    description: 'Responsive product visualiser interactions.',
    type: 'Interaction study',
    status: 'Shipped',
    href: '/work/signal-notes/'
  },
  {
    title: 'Component Library',
    description: 'An animated glowy prompt input.',
    type: 'Interface study',
    status: 'Shipped',
    href: '/work/context-atlas/'
  },
  {
    title: 'Hiring Assessment',
    description: 'A small time-based hiring exercise.',
    type: 'Interface prototype',
    status: 'Paused',
    href: '/work/studio-console/'
  }
];

export const initialChores = [
  {
    id: '1',
    title: 'chore 1',
    content: 'this is the first chore',
    status: 'DONE' as const,
  },
  {
    id: '2',
    title: 'chore 2',
    content: 'this is the second chore',
    status: 'OPEN' as const,
  },
  {
    id: '3',
    title: 'chore 3',
    content: 'this is the third chore',
    status: 'WORKING' as const,
  },
];

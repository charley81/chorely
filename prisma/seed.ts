import { PrismaClient } from '../app/generated/prisma';

const prisma = new PrismaClient();

const chores = [
  {
    id: '1',
    title: 'Chore 1',
    content: 'This is the first chore from the database',
    status: 'DONE' as const,
  },
  {
    id: '2',
    title: 'Chore 2',
    content: 'This is the second chore from the database',
    status: 'OPEN' as const,
  },
  {
    id: '3',
    title: 'Chore 3',
    content: 'This is the third chore from the database',
    status: 'IN_PROGRESS' as const,
  },
];

const seed = async () => {
  await prisma.chore.createMany({
    data: chores,
  });
};

seed();

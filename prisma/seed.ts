import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

const chores = [
  {
    title: 'Chore 1',
    content: 'This is the first chore from the database',
    status: 'DONE' as const,
  },
  {
    title: 'Chore 2',
    content: 'This is the second chore from the database',
    status: 'OPEN' as const,
  },
  {
    title: 'Chore 3',
    content: 'This is the third chore from the database',
    status: 'IN_PROGRESS' as const,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log('DB Seed: Started...');

  await prisma.chore.deleteMany();

  await prisma.chore.createMany({
    data: chores,
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed();

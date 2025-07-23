import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

const chores = [
  {
    title: 'Chore 1',
    content: 'This is the first chore from the DB',
    status: 'DONE' as const,
  },
  {
    title: 'Chore 2',
    content: 'This is the second chore from the DB',
    status: 'OPEN' as const,
  },
  {
    title: 'Chore 3',
    content: 'This is the third chore from the DB',
    status: 'WORKING' as const,
  },
];

export async function main() {
  const t0 = performance.now();
  console.log('DB Seed: Started...');

  await prisma.chore.deleteMany();
  await prisma.chore.createMany({
    data: chores,
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
}

main();

import { hash } from '@node-rs/argon2';

import { PrismaClient } from '@/generated/prisma/client';

const prisma = new PrismaClient();

const users = [
  {
    username: 'admin',
    email: 'admin@mail.com',
  },
  {
    username: 'user',
    email: 'user.chorely@proton.me',
  },
];

const chores = [
  {
    title: 'Chore 1',
    content: 'This is the first chore from the DB',
    status: 'DONE' as const,
    deadline: new Date().toISOString().split('T')[0],
    bounty: 100,
  },
  {
    title: 'Chore 2',
    content: 'This is the second chore from the DB',
    status: 'OPEN' as const,
    deadline: new Date().toISOString().split('T')[0],
    bounty: 20,
  },
  {
    title: 'Chore 3',
    content: 'This is the third chore from the DB',
    status: 'WORKING' as const,
    deadline: new Date().toISOString().split('T')[0],
    bounty: 50,
  },
];

export async function main() {
  const t0 = performance.now();
  console.log('DB Seed: Started...');

  await prisma.chore.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await hash('geheimnis');

  const dbUsers = await prisma.user.createManyAndReturn({
    data: users.map((user) => ({
      ...user,
      passwordHash,
    })),
  });

  await prisma.chore.createMany({
    data: chores.map((chore) => ({
      ...chore,
      userId: dbUsers[0].id,
    })),
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
}

main();

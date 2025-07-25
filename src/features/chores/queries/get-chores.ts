import prisma from '@/lib/prisma';

export const getChores = async () => {
  try {
  } catch (error) {
    console.error('Prisma Error: ', error);
  }
  return await prisma.chore.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

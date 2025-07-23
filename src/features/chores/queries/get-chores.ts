import prisma from '@/lib/prisma';

export const getChores = async () => {
  return await prisma.chore.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

import prisma from '@/lib/prisma';

export const getChore = async (choreId: string) => {
  return await prisma.chore.findUnique({
    where: {
      id: choreId,
    },
  });
};

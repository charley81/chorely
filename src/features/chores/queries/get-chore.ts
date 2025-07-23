import prisma from '@/lib/prisma';

export const getChore = async (id: string) => {
  return await prisma.chore.findUnique({
    where: {
      id,
    },
  });
};

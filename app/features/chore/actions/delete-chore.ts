'use server';

import prisma from '@/lib/prisma';

export const deleteChore = async (choreId: string) => {
  await prisma.chore.delete({
    where: {
      id: choreId,
    },
  });
};

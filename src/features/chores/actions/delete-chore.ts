'use server';

import prisma from '@/lib/prisma';

export const deleteChore = async (id: string) => {
  await prisma.chore.delete({
    where: { id },
  });
};

'use server';

import { choresPath } from '@/app/utils/paths';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const deleteChore = async (choreId: string) => {
  await prisma.chore.delete({
    where: {
      id: choreId,
    },
  });

  revalidatePath(choresPath());
  redirect(choresPath());
};

'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import prisma from '@/lib/prisma';
import { choresPath } from '@/paths';
import { setCookieByKey } from '@/actions/cookies';

export const deleteChore = async (id: string) => {
  await prisma.chore.delete({
    where: { id },
  });

  revalidatePath(choresPath());
  await setCookieByKey('toast', 'Chore deleted');
  redirect(choresPath());
};

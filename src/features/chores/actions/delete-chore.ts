'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { setCookieByKey } from '@/actions/cookies';
import { fromErrorToActionState } from '@/components/form/utils/to-action-state';
import prisma from '@/lib/prisma';
import { choresPath } from '@/paths';

export const deleteChore = async (id: string) => {
  try {
    await prisma.chore.delete({
      where: { id },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }

  revalidatePath(choresPath());
  await setCookieByKey('toast', 'Chore deleted');
  redirect(choresPath());
};

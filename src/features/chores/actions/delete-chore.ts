'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { setCookieByKey } from '@/actions/cookies';
import {
  fromErrorToActionState,
  toActionState,
} from '@/components/form/utils/to-action-state';
import { getAuthOrRedirect } from '@/features/auth/queries/get-auth-or-redirect';
import { isOwner } from '@/features/utils/is-owner';
import prisma from '@/lib/prisma';
import { choresPath } from '@/paths';

export const deleteChore = async (id: string) => {
  const { user } = await getAuthOrRedirect();
  try {
    const chore = await prisma.chore.findUnique({
      where: {
        id,
      },
    });

    if (!chore || !isOwner(user, chore)) {
      return toActionState('ERROR', 'Not authorized');
    }

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

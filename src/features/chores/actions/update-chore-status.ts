'use server';
import { revalidatePath } from 'next/cache';

import {
  fromErrorToActionState,
  toActionState,
} from '@/components/form/utils/to-action-state';
import { getAuthOrRedirect } from '@/features/auth/queries/get-auth-or-redirect';
import { isOwner } from '@/features/utils/is-owner';
import { ChoreStatus } from '@/generated/prisma';
import prisma from '@/lib/prisma';
import { choresPath } from '@/paths';

export const updateChoreStatus = async (id: string, status: ChoreStatus) => {
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

    await prisma.chore.update({
      where: {
        id,
        userId: user.id,
      },
      data: {
        status,
      },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }

  revalidatePath(choresPath());

  return toActionState('SUCCESS', 'Status updated');
};

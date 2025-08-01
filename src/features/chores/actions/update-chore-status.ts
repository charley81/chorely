'use server';
import { revalidatePath } from 'next/cache';

import {
  fromErrorToActionState,
  toActionState,
} from '@/components/form/utils/to-action-state';
import { ChoreStatus } from '@/generated/prisma';
import prisma from '@/lib/prisma';
import { choresPath } from '@/paths';

export const updateChoreStatus = async (id: string, status: ChoreStatus) => {
  try {
    await prisma.chore.update({
      where: {
        id,
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

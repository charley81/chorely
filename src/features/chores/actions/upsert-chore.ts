'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import * as z from 'zod';

import {
  ActionState,
  fromErrorToActionState,
} from '@/components/form/utils/to-action-state';
import prisma from '@/lib/prisma';
import { chorePath, choresPath } from '@/paths';

const upsertChoreScema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title must contain at least one character' })
    .max(191, { message: 'Title max 191 chars' }),
  content: z
    .string()
    .min(1, { message: 'Content must contain at least one character' })
    .max(1024, { message: 'Content max 1024 chars' }),
});

export const upsertChore = async (
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  try {
    const data = upsertChoreScema.parse({
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    });

    await prisma.chore.upsert({
      where: {
        id: id || '',
      },
      update: data,
      create: data,
    });
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  revalidatePath(choresPath());

  if (id) {
    redirect(chorePath(id));
  }

  return {
    message: 'Chore Created',
    fieldErrors: {},
    payload: formData, // Include payload even on success
  };
};

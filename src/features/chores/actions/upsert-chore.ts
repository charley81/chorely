'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import * as z from 'zod';

import { setCookieByKey } from '@/actions/cookies';
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from '@/components/form/utils/to-action-state';
import prisma from '@/lib/prisma';
import { chorePath, choresPath } from '@/paths';
import { toCent } from '@/utils/currency';

const upsertChoreScema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title must contain at least one character' })
    .max(191, { message: 'Title max 191 chars' }),
  content: z
    .string()
    .min(1, { message: 'Content must contain at least one character' })
    .max(1024, { message: 'Content max 1024 chars' }),
  deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Is Required'),
  bounty: z.coerce.number().positive(),
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
      deadline: formData.get('deadline'),
      bounty: formData.get('bounty'),
    });

    const dbData = {
      ...data,
      bounty: toCent(data.bounty),
    };

    await prisma.chore.upsert({
      where: {
        id: id || '',
      },
      update: dbData,
      create: dbData,
    });
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  revalidatePath(choresPath());

  if (id) {
    await setCookieByKey('toast', 'Chore Updated');
    redirect(chorePath(id));
  }

  return toActionState('SUCCESS', 'Chore Created');
};

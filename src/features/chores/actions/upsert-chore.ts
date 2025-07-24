'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import * as z from 'zod';

import prisma from '@/lib/prisma';
import { chorePath, choresPath } from '@/paths';

const upsertChoreScema = z.object({
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024),
});

export const upsertChore = async (
  id: string | undefined,
  _actionState: { message: string },
  formData: FormData,
) => {
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
    console.log(error);
    return { message: 'Something went wrong', payload: formData };
  }

  revalidatePath(choresPath());

  if (id) {
    redirect(chorePath(id));
  }

  return {
    message: 'Chore Created',
  };
};

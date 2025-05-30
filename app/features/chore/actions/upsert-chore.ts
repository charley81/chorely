'use server';

import { chorePath, choresPath } from '@/app/utils/paths';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const upsertChore = async (
  id: string | undefined,
  formData: FormData
) => {
  const data = {
    title: formData.get('title') as string,
    content: formData.get('content') as string,
  };

  await prisma.chore.upsert({
    where: {
      id: id || '',
    },
    update: data,
    create: data,
  });

  revalidatePath(choresPath());

  if (id) {
    redirect(chorePath(id));
  }
};

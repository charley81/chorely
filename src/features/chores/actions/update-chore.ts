'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import prisma from '@/lib/prisma';
import { choresPath } from '@/paths';

export const updateChore = async (id: string, formData: FormData) => {
  const data = {
    title: formData.get('title') as string,
    content: formData.get('content') as string,
  };

  await prisma.chore.update({
    where: {
      id: id as string,
    },
    data: {
      title: data.title as string,
      content: data.content as string,
    },
  });

  revalidatePath(choresPath());
  redirect(choresPath());
};

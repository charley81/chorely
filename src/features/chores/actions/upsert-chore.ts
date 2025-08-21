'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import prisma from '@/lib/prisma'
import { choresPath } from '@/paths'

export const upsertChore = async (
  id: string | undefined,
  formData: FormData,
) => {
  const data = {
    title: formData.get('title') as string,
    content: formData.get('content') as string,
  }

  await prisma.chore.upsert({
    where: {
      id: id || '',
    },
    update: data,
    create: data,
  })

  revalidatePath(choresPath())

  if (id) {
    redirect(choresPath())
  }
}

'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import prisma from '@/lib/prisma'
import { choresPath } from '@/paths'

export const deleteChore = async (id: string) => {
  await prisma.chore.delete({
    where: {
      id,
    },
  })
  revalidatePath(choresPath())
  redirect(choresPath())
}

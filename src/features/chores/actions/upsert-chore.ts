'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import * as z from 'zod'

import {
  ActionState,
  fromErrorToActionState,
} from '@/components/form/utils/to-action-state'
import prisma from '@/lib/prisma'
import { choresPath } from '@/paths'

const upsertChoreSchema = z.object({
  title: z.string().min(1).max(20),
  content: z.string().min(1).max(250),
})

export const upsertChore = async (
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData,
) => {
  try {
    const data = upsertChoreSchema.parse({
      title: formData.get('title'),
      content: formData.get('content'),
    })

    await prisma.chore.upsert({
      where: {
        id: id || '',
      },
      update: data,
      create: data,
    })
  } catch (error) {
    return fromErrorToActionState(error, formData)
  }

  revalidatePath(choresPath())

  if (id) {
    redirect(choresPath())
  }
}

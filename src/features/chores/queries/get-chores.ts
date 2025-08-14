import prisma from '@/lib/prisma'

import { Chore } from '../types'

const getChores = async (): Promise<Chore[]> => {
  const chores = await prisma.chore.findMany()
  return chores
}

export { getChores }

import prisma from '@/lib/prisma'
import { Chore } from '../types'

const getChore = async (choreId: string): Promise<Chore | null> => {
  const maybeChore = await prisma.chore.findUnique({
    where: {
      id: choreId,
    },
  })
  return new Promise((resolve) => resolve(maybeChore || null))
}
export { getChore }

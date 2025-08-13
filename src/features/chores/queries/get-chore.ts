import { initialChores } from '@/data'

import { Chore } from '../types'

const getChore = async (choreId: string): Promise<Chore | null> => {
  const maybeChore = initialChores.find((chore) => chore.id === choreId)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return new Promise((resolve) => resolve(maybeChore || null))
}
export { getChore }

import { initialChores } from '@/data'

import { Chore } from '../types'

const getChores = async (): Promise<Chore[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return new Promise((resolve) => resolve(initialChores))
}

export { getChores }

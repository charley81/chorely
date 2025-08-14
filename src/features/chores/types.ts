import { Chore as PrismaChore } from '@/generated/prisma'

export type Chore = PrismaChore
export type ChoreStatus = Chore['status']

// export type ChoreStatus = 'DONE' | 'OPEN' | 'IN_PROGRESS'

// export type Chore = {
//   id: string
//   title: string
//   content: string
//   status: ChoreStatus
// }

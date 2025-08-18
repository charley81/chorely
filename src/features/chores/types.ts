import { Chore as PrismaChore } from '@/generated/prisma'

export type Chore = PrismaChore
export type ChoreStatus = Chore['status']

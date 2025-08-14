import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()

const chores = [
  {
    id: '1',
    title: 'Chore 1',
    content: 'This is the content for chore 1 from the DB',
    status: 'OPEN' as const,
  },
  {
    id: '2',
    title: 'Chore 2',
    content: 'This is the content for chore 2 from the DB',
    status: 'DONE' as const,
  },
  {
    id: '3',
    title: 'Chore 3',
    content: 'This is the content for chore 2 from the DB',
    status: 'WORKING' as const,
  },
]

export async function main() {
  for (const c of chores) {
    await prisma.chore.create({ data: c })
  }
}

main()

import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()

const chores = [
  {
    title: 'Chore 1',
    content: 'This is the content for chore 1 from the DB',
    status: 'OPEN' as const,
  },
  {
    title: 'Chore 2',
    content: 'This is the content for chore 2 from the DB',
    status: 'DONE' as const,
  },
  {
    title: 'Chore 3',
    content: 'This is the content for chore 2 from the DB',
    status: 'WORKING' as const,
  },
]

export async function main() {
  const t0 = performance.now()
  console.log('DB Seed: Started...')

  await prisma.chore.deleteMany()
  await prisma.chore.createMany({
    data: chores,
  })

  const t1 = performance.now()
  console.log(`DB Seed: Finshed ${t1}ms`)
}

main()

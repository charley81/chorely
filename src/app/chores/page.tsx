import { Suspense } from 'react'

import { Heading } from '@/components/heading'
import { ChoreList } from '@/features/chores/components/chore-list'

import Loading from './loading'

export default async function ChoresPage() {
  return (
    <>
      <Heading title="Chores" description="All your chores here" />
      <Suspense fallback={<Loading />}>
        <ChoreList />
      </Suspense>
    </>
  )
}

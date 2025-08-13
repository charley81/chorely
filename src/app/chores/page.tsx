import { Suspense } from 'react'

import { Heading } from '@/components/heading'
import { ChoreList } from '@/features/chores/components/chore-list'
import { Spinner } from '@/components/spinner'

export default function ChoresPage() {
  return (
    <>
      <Heading title="Chores" description="All your chores here" />
      <Suspense fallback={<Spinner />}>
        <ChoreList />
      </Suspense>
    </>
  )
}

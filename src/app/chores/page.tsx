import { Suspense } from 'react'

import { CardCompact } from '@/components/card-compact'
import { Heading } from '@/components/heading'
import { Spinner } from '@/components/spinner'
import { ChoreList } from '@/features/chores/components/chore-list'
import { ChoreUpsertForm } from '@/features/chores/components/chore-upsert-form'

export default function ChoresPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Chores" description="All your chores here" />

      <CardCompact
        title="Create Chore"
        description="A new chore will be created"
        content={<ChoreUpsertForm />}
        className="w-full max-w-[448px] self-center"
      />

      <Suspense fallback={<Spinner />}>
        <ChoreList />
      </Suspense>
    </div>
  )
}

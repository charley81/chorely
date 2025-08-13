import { Suspense } from 'react'

import { Spinner } from '@/components/spinner'
import { ChoreItem } from '@/features/chores/components/chore-item'
import { getChore } from '@/features/chores/queries/get-chore'
import { notFound } from 'next/navigation'

type ChorePageParams = {
  params: Promise<{ choreId: string }>
}

export default async function ChorePage({ params }: ChorePageParams) {
  const { choreId } = await params
  const chore = await getChore(choreId)

  if (!chore) {
    return notFound()
  }
  return (
    <Suspense fallback={<Spinner />}>
      <div className="animate-fade-in-from-top flex justify-center">
        <ChoreItem chore={chore} isDetail />
      </div>
    </Suspense>
  )
}

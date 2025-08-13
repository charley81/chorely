import Link from 'next/link'

import { Placeholder } from '@/components/placeholder'
import { Button } from '@/components/ui/button'
import { ChoreItem } from '@/features/chores/components/chore-item'
import { getChore } from '@/features/chores/queries/get-chore'
import { choresPath } from '@/paths'
import { Heading } from '@/components/heading'
import { Suspense } from 'react'
import { Spinner } from '@/components/spinner'

type ChorePageParams = {
  params: Promise<{ choreId: string }>
}

export default async function ChorePage({ params }: ChorePageParams) {
  const { choreId } = await params
  const chore = await getChore(choreId)

  if (!chore) {
    return (
      <div className="flex justify-between">
        <Placeholder
          label="Chore not found..."
          button={
            <Button asChild variant="outline" className="flex items-center">
              <Link href={choresPath()}>Go to chores</Link>
            </Button>
          }
        />
      </div>
    )
  }
  return (
    <Suspense fallback={<Spinner />}>
      <div className="animate-fade-in-from-top flex justify-center">
        <ChoreItem chore={chore} isDetail />
      </div>
    </Suspense>
  )
}

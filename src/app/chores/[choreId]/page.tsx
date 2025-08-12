import Link from 'next/link'

import { Placeholder } from '@/components/placeholder'
import { Button } from '@/components/ui/button'
import { initialChores } from '@/data'
import { ChoreItem } from '@/features/chores/components/chore-item'
import { choresPath } from '@/paths'

type ChorePageParams = {
  params: Promise<{ choreId: string }>
}

export default async function ChorePage({ params }: ChorePageParams) {
  const { choreId } = await params

  const chore = initialChores.find((chore) => chore.id === choreId)

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
    <div className="animate-fade-in-from-top flex justify-center">
      <ChoreItem chore={chore} isDetail />
    </div>
  )
}

import Link from 'next/link'

import { Heading } from '@/components/heading'
import { Placeholder } from '@/components/placeholder'
import { Button } from '@/components/ui/button'
import { initialChores } from '@/data'
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
    <>
      <Heading title="Chore Page" description="Get the details here" />
      <div className="animate-fade-in-from-top mt-12">
        <h3>{chore.title}</h3>
        <p>{chore.content}</p>
        <Button asChild variant="outline">
          <Link href={choresPath()}>Back</Link>
        </Button>
      </div>
    </>
  )
}

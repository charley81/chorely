import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { initialChores } from '@/data'
import { choresPath } from '@/paths'
import { Header } from '@/components/header'

type ChorePageParams = {
  params: Promise<{ choreId: string }>
}

export default async function ChorePage({ params }: ChorePageParams) {
  const { choreId } = await params

  const chore = initialChores.find((chore) => chore.id === choreId)

  if (!chore) {
    return (
      <div>
        <h3>Chore not found!</h3>
      </div>
    )
  }
  return (
    <>
      <Header title="Chore Page" description="Get the details here" />
      <div className="animate-fade-in-from-top mt-12">
        <h3>{chore.title}</h3>
        <p>{chore.content}</p>
        <Button asChild>
          <Link href={choresPath()}>Back</Link>
        </Button>
      </div>
    </>
  )
}

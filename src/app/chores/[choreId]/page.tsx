import { Button } from '@/components/ui/button'
import { initialChores } from '@/data'
import { choresPath } from '@/paths'
import Link from 'next/link'

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
    <div>
      <h3>{chore.title}</h3>
      <p>{chore.content}</p>
      <Button asChild>
        <Link href={choresPath()}>Back</Link>
      </Button>
    </div>
  )
}

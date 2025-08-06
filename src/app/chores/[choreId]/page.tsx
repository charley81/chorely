import { initialChores } from '@/app/data'

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
    </div>
  )
}

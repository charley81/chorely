import { Heading } from '@/components/heading'
import ChoreList from '@/features/chores/components/chore-list'
import { getChores } from '@/features/chores/queries/get-chores'

export default async function ChoresPage() {
  const chores = await getChores()
  return (
    <>
      <Heading title="Chores" description="All your chores here" />
      <div className="animate-fade-in-from-top flex w-full flex-col items-center gap-y-4">
        <ChoreList chores={chores} />
      </div>
    </>
  )
}

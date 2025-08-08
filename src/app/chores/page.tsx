import { Heading } from '@/components/heading'
import { initialChores } from '@/data'
import ChoreList from '@/features/chores/components/chore-list'

export default function ChoresPage() {
  return (
    <>
      <Heading title="Chores" description="All your chores here" />
      <div className="animate-fade-in-from-top flex w-full flex-col items-center gap-y-4">
        <ChoreList chores={initialChores} />
      </div>
    </>
  )
}

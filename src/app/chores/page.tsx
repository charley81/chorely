import { Header } from '@/components/header'
import { initialChores } from '@/data'
import ChoreList from '@/features/chores/components/chore-list'

export default function ChoresPage() {
  return (
    <>
      <Header title="Chores" description="All your chores here" />
      <div className="animate-fade-in-from-top mt-12 flex w-full flex-col items-center gap-y-4">
        <ChoreList chores={initialChores} />
      </div>
    </>
  )
}

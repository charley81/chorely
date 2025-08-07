import { initialChores } from '@/data'
import ChoreList from '@/features/chores/components/chore-list'

export default function ChoresPage() {
  return (
    <div className="flex flex-col gap-y-4 items-center w-full animate-fade-in-from-top">
      <ChoreList chores={initialChores} />
    </div>
  )
}

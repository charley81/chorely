import { getChores } from '../queries/get-chores'
import { ChoreItem } from './chore-item'

const ChoreList = async () => {
  const chores = await getChores()

  return (
    <div className="animate-fade-in-from-top flex w-full flex-col items-center gap-y-4">
      {chores.map((chore) => (
        <ChoreItem key={chore.id} chore={chore} />
      ))}
    </div>
  )
}

export { ChoreList }

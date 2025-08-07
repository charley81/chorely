import { Chore } from '@/data'

import { ChoreItem } from './chore-item'

type ChoreListProps = {
  chores: Chore[]
}

export default function ChoreList({ chores }: ChoreListProps) {
  return (
    <>
      {chores.map((chore) => (
        <ChoreItem key={chore.id} chore={chore} />
      ))}
    </>
  )
}

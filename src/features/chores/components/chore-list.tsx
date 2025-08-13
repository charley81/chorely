import { Suspense } from 'react'

import { Chore } from '../types'
import { ChoreItem } from './chore-item'

type ChoreListProps = {
  chores: Chore[]
}

export default function ChoreList({ chores }: ChoreListProps) {
  return (
    <>
      <Suspense>
        {chores.map((chore) => (
          <ChoreItem key={chore.id} chore={chore} />
        ))}
      </Suspense>
    </>
  )
}

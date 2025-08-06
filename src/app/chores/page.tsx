import Link from 'next/link'

import { initialChores } from '../data'

export default function ChoresPage() {
  return (
    <div>
      {initialChores.map((chore) => (
        <Link key={chore.id} href={`/chores/${chore.id}`}>
          {chore.title}
        </Link>
      ))}
    </div>
  )
}

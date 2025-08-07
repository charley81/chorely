import Link from 'next/link'

import { initialChores } from '@/data'
import { chorePath } from '@/paths'

export default function ChoresPage() {
  return (
    <div>
      {initialChores.map((chore) => (
        <Link key={chore.id} href={chorePath(chore.id)}>
          {chore.title}
        </Link>
      ))}
    </div>
  )
}

import Link from 'next/link'

import { initialChores } from '@/data'
import { chorePath } from '@/paths'

export default function ChoresPage() {
  return (
    <div className="flex flex-col gap-y-4">
      {initialChores.map((chore) => (
        <Link key={chore.id} href={chorePath(chore.id)}>
          {chore.title}
        </Link>
      ))}
    </div>
  )
}

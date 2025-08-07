import Link from 'next/link'

import { initialChores } from '@/data'
import { chorePath } from '@/paths'

export default function ChoresPage() {
  return (
    <div className="flex flex-col gap-y-4 mx-auto w-full max-w-[400px]">
      {initialChores.map((chore) => (
        <Link
          key={chore.id}
          href={chorePath(chore.id)}
          className="border p-8 rounded-md border-slate-700 w-full"
        >
          {chore.title}
        </Link>
      ))}
    </div>
  )
}

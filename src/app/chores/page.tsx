import { LucideBicepsFlexed,LucideCheck, LucideLockOpen } from 'lucide-react'
import Link from 'next/link'

import { initialChores } from '@/data'
import { chorePath } from '@/paths'

const CHORE_STATUS = {
  DONE: <LucideCheck />,
  OPEN: <LucideLockOpen />,
  IN_PROGRESS: <LucideBicepsFlexed />,
}

export default function ChoresPage() {
  return (
    <div className="flex flex-col gap-y-4 mx-auto w-full max-w-[400px]">
      {initialChores.map((chore) => (
        <Link
          key={chore.id}
          href={chorePath(chore.id)}
          className="border p-8 rounded-md border-slate-700 w-full"
        >
          <span>{CHORE_STATUS[chore.status]}</span>
          <h3 className="text-2xl font-bold">{chore.title}</h3>
          <p className="text-base">{chore.content}</p>
        </Link>
      ))}
    </div>
  )
}

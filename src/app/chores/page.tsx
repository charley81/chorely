import { clsx } from 'clsx'
import { LucideBicepsFlexed, LucideCheck, LucideLockOpen } from 'lucide-react'
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
    <div className="flex flex-col gap-y-4 items-center w-full animate-fade-in-from-top">
      {initialChores.map((chore) => (
        <Link
          key={chore.id}
          href={chorePath(chore.id)}
          className="border p-8 rounded-md border-slate-500 w-full max-w-[400px]"
        >
          <span className="text-slate-500">{CHORE_STATUS[chore.status]}</span>
          <h3 className="text-2xl font-semibold truncate">{chore.title}</h3>
          <p
            className={clsx('text-base truncate text-slate-500', {
              'line-through': chore.status === 'DONE',
            })}
          >
            {chore.content}
          </p>
        </Link>
      ))}
    </div>
  )
}

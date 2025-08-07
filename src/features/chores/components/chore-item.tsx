import clsx from 'clsx'
import { LucideBicepsFlexed, LucideCheck, LucideLockOpen } from 'lucide-react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Chore } from '@/data'
import { chorePath } from '@/paths'

type ChoreItemProps = {
  chore: Chore
}

const CHORE_STATUS = {
  DONE: <LucideCheck />,
  OPEN: <LucideLockOpen />,
  IN_PROGRESS: <LucideBicepsFlexed />,
}

export function ChoreItem({ chore }: ChoreItemProps) {
  return (
    <Card className="w-full max-w-[648px]">
      <CardHeader>
        <CardAction className="text-slate-500">
          {CHORE_STATUS[chore.status]}
        </CardAction>
        <CardTitle className="text-2xl font-semibold truncate">
          {chore.title}
        </CardTitle>
      </CardHeader>
      <CardContent
        className={clsx('text-base truncate text-slate-500', {
          'line-through': chore.status === 'DONE',
        })}
      >
        {chore.content}
      </CardContent>
      <CardFooter>
        <Link
          href={chorePath(chore.id)}
          className={buttonVariants({ variant: 'outline' })}
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  )
}

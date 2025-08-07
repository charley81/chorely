import { chorePath } from '@/paths'
import clsx from 'clsx'
import Link from 'next/link'
import { Chore } from '@/data'
import { LucideBicepsFlexed, LucideCheck, LucideLockOpen } from 'lucide-react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'

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

import clsx from 'clsx'
import { LucideEye } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { chorePath } from '@/paths'

import { CHORE_STATUS } from '../constants'
import { Chore } from '../types'

type ChoreItemProps = {
  chore: Chore
  isDetail?: boolean
}

export function ChoreItem({ chore, isDetail }: ChoreItemProps) {
  const detailButton = (
    <Button asChild variant="outline" size="icon">
      <Link href={chorePath(chore.id)}>
        <LucideEye />
      </Link>
    </Button>
  )

  return (
    <div
      className={clsx('flex w-full justify-center gap-1', {
        'max-w-[448px]': !isDetail,
        'max-w-[648px]': isDetail,
      })}
    >
      <Card className="w-full">
        <CardHeader>
          <CardAction className="text-slate-500">
            {CHORE_STATUS[chore.status]}
          </CardAction>
          <CardTitle className="truncate text-2xl font-semibold">
            {chore.title}
          </CardTitle>
        </CardHeader>
        <CardContent
          className={clsx('truncate text-base text-slate-500', {
            'line-through': chore.status === 'DONE',
          })}
        >
          {chore.content}
        </CardContent>
      </Card>
      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{detailButton}</div>
      )}
    </div>
  )
}

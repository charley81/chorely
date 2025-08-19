import clsx from 'clsx'
import { LucideArrowBigLeft, LucideEye, LucideTrash } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { chorePath, choresPath } from '@/paths'

import { deleteChore } from '../actions/delete-chore'
import { CHORE_STATUS } from '../constants'
import { Chore } from '../types'

type ChoreItemProps = {
  chore: Chore
  isDetail?: boolean
}

export function ChoreItem({ chore, isDetail }: ChoreItemProps) {
  const deleteChoreWithId = deleteChore.bind(null, chore.id)

  const backButton = (
    <Button asChild variant="outline" size="icon">
      <Link href={choresPath()}>
        <LucideArrowBigLeft className="h-4 w-4" />
      </Link>
    </Button>
  )

  const detailButton = (
    <Button asChild variant="outline" size="icon">
      <Link prefetch href={chorePath(chore.id)}>
        <LucideEye className="h-4 w-4" />
      </Link>
    </Button>
  )

  const deleteButton = (
    <form action={deleteChoreWithId}>
      <Button variant="outline" size="icon" className="hover:cursor-pointer">
        <LucideTrash className="h-4 w-4" />
      </Button>
    </form>
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
          className={clsx('text-base text-slate-500', {
            'line-through': chore.status === 'DONE',
            'line-clamp-3': !isDetail,
          })}
        >
          {chore.content}
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? (
          <>
            {backButton}
            {deleteButton}
          </>
        ) : (
          <>{detailButton}</>
        )}
      </div>
    </div>
  )
}

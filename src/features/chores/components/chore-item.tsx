import clsx from 'clsx';
import { LucideExternalLink, LucidePencil, LucideTrash } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Chore } from '@/generated/prisma/client';
import { choreEditPath, chorePath } from '@/paths';

import { deleteChore } from '../actions/delete-chore';
import { CHORE_ICONS } from '../constants';

type ChoreItemProps = {
  chore: Chore;
  isDetail?: boolean;
};

export function ChoreItem({ chore, isDetail }: ChoreItemProps) {
  const editButton = (
    <Button asChild size="icon" variant="outline">
      <Link href={choreEditPath(chore.id)}>
        <LucidePencil className="h-4 w-4" />
      </Link>
    </Button>
  );

  const detailButton = (
    <Button asChild size="icon" variant="outline">
      <Link prefetch href={chorePath(chore.id)}>
        <LucideExternalLink className="h-4 w-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <form action={deleteChore.bind(null, chore.id)}>
      <Button size="icon" variant="outline">
        <LucideTrash className="h-4 w-4" />
      </Button>
    </form>
  );

  return (
    <div
      className={clsx('flex w-full flex-1 gap-x-1', {
        'max-w-[420px]': !isDetail,
        'max-w-[620px]': isDetail,
      })}
    >
      <Card key={chore.id} className="w-full">
        <CardHeader className="flex gap-x-2">
          <CardTitle className="truncate">{chore.title}</CardTitle>
          <span>{CHORE_ICONS[chore.status]}</span>
        </CardHeader>
        <CardContent>
          <span
            className={clsx('truncate whitespace-break-spaces', {
              'line-through': chore.status === 'DONE',
              'line-clamp-3': isDetail,
            })}
          >
            {chore.content}
          </span>
        </CardContent>
        <CardFooter>{chore.deadline}</CardFooter>
        <CardFooter>{chore.bounty}</CardFooter>
      </Card>

      <div className="flex flex-col gap-y-1">
        {isDetail ? (
          <>
            {editButton}
            {deleteButton}
          </>
        ) : (
          <>
            {detailButton}
            {editButton}
          </>
        )}
      </div>
    </div>
  );
}

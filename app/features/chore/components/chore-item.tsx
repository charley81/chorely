import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Chore } from '@/app/generated/prisma';
import { chorePath } from '@/app/utils/paths';
import clsx from 'clsx';
import { LucideSquareArrowOutUpRight, LucideTrash } from 'lucide-react';
import Link from 'next/link';
import { deleteChore } from '../actions/delete-chore';
import { CHORE_ICONS } from '../constants';

type ChoreItemProps = {
  chore: Chore;
  isDetail?: boolean;
};

export function ChoreItem({ chore, isDetail }: ChoreItemProps) {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link prefetch href={chorePath(chore.id)} className="underline">
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <form action={deleteChore.bind(null, chore.id)}>
      <Button variant="outline" size="icon">
        <LucideTrash className="h-4 w-4" />
      </Button>
    </form>
  );

  return (
    <div
      className={clsx('flex gap-x-1 w-full', {
        'max-w-[1020px]': isDetail,
        'max-w-[768px]': !isDetail,
      })}
    >
      <Card key={chore.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2">
            <span>{CHORE_ICONS[chore.status]}</span>
            <h3 className="truncate">{chore.title}</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx('whitespace-break-spaces', {
              'line-clamp-3': !isDetail,
            })}
          >
            {chore.content}
          </span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? deleteButton : detailButton}
      </div>
    </div>
  );
}

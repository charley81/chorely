'use client';

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
  const handleDeleteChore = async () => {
    await deleteChore(chore.id);
  };

  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={chorePath(chore.id)} className="underline">
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <Button variant="outline" size="icon" onClick={handleDeleteChore}>
      <LucideTrash className="h-4 w-4" />
    </Button>
  );

  return (
    <div
      className={clsx('w-full max-w-[420px] flex gap-x-1', {
        'max-w-[580px]': isDetail,
        'max-w-[420px]': !isDetail,
      })}
    >
      <Card key={chore.id} className="w-full max-w-[648px]">
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

'use client';
import clsx from 'clsx';
import { LucideExternalLink, LucideTrash } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Chore } from '@/generated/prisma/client';
import { chorePath } from '@/paths';

import { deleteChore } from '../actions/delete-chore';
import { CHORE_ICONS } from '../constants';

type ChoreItemProps = {
  chore: Chore;
  isDetail?: boolean;
};

export function ChoreItem({ chore, isDetail }: ChoreItemProps) {
  const detailButton = (
    <Button asChild size="icon" variant="outline">
      <Link href={chorePath(chore.id)}>
        <LucideExternalLink />
      </Link>
    </Button>
  );

  const handleDeleteChore = async () => {
    await deleteChore(chore.id);
  };

  const deleteButton = (
    <Button size="icon" variant="outline" onClick={handleDeleteChore}>
      <LucideTrash />
    </Button>
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
      </Card>

      <div className="flex flex-col gap-y-1">
        {isDetail ? deleteButton : detailButton}
      </div>
    </div>
  );
}

import clsx from 'clsx';
import { LucideExternalLink } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { chorePath } from '@/paths';

import { Chore } from '../types';

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

  return (
    <div
      className={clsx('flex w-full flex-1 gap-x-1', {
        'max-w-[620px]': !isDetail,
        'max-w-[420px]': isDetail,
      })}
    >
      <Card key={chore.id} className="w-full">
        <CardHeader className="flex gap-x-2">
          <CardTitle className="truncate">{chore.title}</CardTitle>
          <span>{chore.status}</span>
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
      {isDetail && <div className="flex flex-col gap-y-1">{detailButton}</div>}
    </div>
  );
}

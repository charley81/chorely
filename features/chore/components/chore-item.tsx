import { chorePath } from '@/app/utils/paths';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import clsx from 'clsx';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import { CHORE_ICONS } from '../constants';
import { Chore } from '../types';

type ChoreItemProps = {
  chore: Chore;
  isDetail?: boolean;
};

export function ChoreItem({ chore, isDetail }: ChoreItemProps) {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={chorePath(chore.id)} className="underline">
        <SquareArrowOutUpRight />
      </Link>
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
            {chore.content + chore.content + chore.content}
          </span>
        </CardContent>
      </Card>
      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{detailButton}</div>
      )}
    </div>
  );
}

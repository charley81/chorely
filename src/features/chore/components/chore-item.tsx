import clsx from 'clsx';
import { LucideSquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { chorePath } from '@/path';

import { CHORE_ICONS } from '../constants';
import { Chore } from '../types';

type ChoreItemProps = {
  chore: Chore;
  isDetail?: boolean;
};

export function ChoreItem({ chore, isDetail = false }: ChoreItemProps) {
  const detailButton = (
    <Button asChild variant="outline" size="icon">
      <Link href={chorePath(chore.id)} className="underline">
        <LucideSquareArrowOutUpRight className="h4 w-4" />
      </Link>
    </Button>
  );

  return (
    <div className="flex w-full gap-x-1">
      <Card className="animate-fade-in-from-top w-full">
        <CardHeader>
          <CardTitle>
            <p
              className={clsx('flex items-center gap-x-1', {
                'text-blue-500': chore.status === 'DONE',
                'text-green-500': chore.status === 'OPEN',
                'text-red-500': chore.status === 'WORKING',
              })}
            >
              {CHORE_ICONS[chore.status].icon}
              <span className="text-xs">{CHORE_ICONS[chore.status].text}</span>
            </p>
            <p className="mt-2 truncate">{chore.title}</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className={clsx('whitespace-break-spaces text-slate-400', {
              'line-through': chore.status === 'DONE',
              'line-clamp-3': !isDetail,
            })}
          >
            {chore.content}
          </p>
        </CardContent>
      </Card>
      {!isDetail && <div className="flex flex-col gap-y-1">{detailButton}</div>}
    </div>
  );
}

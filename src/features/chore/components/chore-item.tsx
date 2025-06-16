import clsx from 'clsx';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { chorePath } from '@/path';

import { CHORE_ICONS } from '../constants';
import { Chore } from '../types';

type ChoreItemProps = {
  chore: Chore;
};

export function ChoreItem({ chore }: ChoreItemProps) {
  return (
    <Card className="animate-fade-in-from-top">
      <CardHeader>
        <CardTitle>
          <span
            className={clsx('flex items-end gap-x-1', {
              'text-blue-500': chore.status === 'DONE',
              'text-green-500': chore.status === 'OPEN',
              'text-red-500': chore.status === 'WORKING',
            })}
          >
            {CHORE_ICONS[chore.status].icon}
            <span className="text-xs">{CHORE_ICONS[chore.status].text}</span>
          </span>
          <p className="mt-2 truncate">{chore.title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className={clsx('truncate text-slate-400', {
            'line-through': chore.status === 'DONE',
          })}
        >
          {chore.content}
        </p>
      </CardContent>
      <CardFooter>
        <Link href={chorePath(chore.id)} className="underline">
          view
        </Link>
      </CardFooter>
    </Card>
  );
}

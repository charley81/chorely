import clsx from 'clsx';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { chorePath } from '@/paths';

import { Chore } from '../types';

type ChoreItemProps = {
  chore: Chore;
};

export function ChoreItem({ chore }: ChoreItemProps) {
  return (
    <Card key={chore.id} className="w-full max-w-[620px]">
      <CardHeader className="flex gap-x-2">
        <CardTitle className="truncate">{chore.title}</CardTitle>
        <span>{chore.status}</span>
      </CardHeader>
      <CardContent>
        <CardDescription
          className={clsx('truncate', {
            'line-through': chore.status === 'DONE',
          })}
        >
          {chore.content}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={chorePath(chore.id)} className="underline">
          View
        </Link>
      </CardFooter>
    </Card>
  );
}

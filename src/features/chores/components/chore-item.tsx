import clsx from 'clsx';
import { LucideExternalLink } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
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
  const detailButton = (
    <Button asChild size="icon" variant="outline">
      <Link href={chorePath(chore.id)}>
        <LucideExternalLink />
      </Link>
    </Button>
  );

  return (
    <div className="flex w-full max-w-[620px] flex-1 gap-x-1">
      <Card key={chore.id} className="w-full">
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
        <CardFooter></CardFooter>
      </Card>
      <div className="flex flex-col gap-y-1">
        {detailButton}
        {detailButton}
        {detailButton}
      </div>
    </div>
  );
}

import { clsx } from 'clsx';
import { LucideBicepsFlexed, LucideCheck, LucideLockOpen } from 'lucide-react';
import Link from 'next/link';

import { Heading } from '@/components/heading';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { initialChores } from '@/data';
import { chorePath } from '@/paths';

const CHORE_STATUS = {
  DONE: <LucideCheck />,
  OPEN: <LucideLockOpen />,
  WORKING: <LucideBicepsFlexed />,
};

export default function ChoresPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Chores Page" description="All your chores here" />

      <div className="animate-fade-in-from-top flex flex-col items-center gap-y-8">
        {initialChores.map((chore) => (
          <Card key={chore.id} className="w-full max-w-[620px]">
            <CardHeader className="flex gap-x-2">
              <CardTitle className="truncate">{chore.title}</CardTitle>
              <span>{CHORE_STATUS[chore.status]}</span>
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
        ))}
      </div>
    </div>
  );
}

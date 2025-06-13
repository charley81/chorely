import clsx from 'clsx';
import { LucideBicepsFlexed, LucideCheck, LucideLockOpen } from 'lucide-react';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { initialChores } from '@/data';
import { chorePath } from '@/path';

const CHORE_ICONS = {
  DONE: {
    icon: <LucideCheck />,
    text: 'Done',
  },
  OPEN: {
    icon: <LucideLockOpen />,
    text: 'Open',
  },
  WORKING: {
    icon: <LucideBicepsFlexed />,
    text: 'Working',
  },
};

export default function ChoresPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Chores Page</h1>
      <div className="mt-20 flex max-w-2xl flex-col gap-y-4">
        {initialChores.map((chore) => (
          <Card key={chore.id} className="animate-fade-in-from-top">
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
                  <span className="text-xs">
                    {CHORE_ICONS[chore.status].text}
                  </span>
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
                {chore.conent}
              </p>
            </CardContent>
            <CardFooter>
              <Link href={chorePath(chore.id)} className="underline">
                view
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

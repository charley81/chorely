import { LucideBicepsFlexed, LucideCheck, LucideLockOpen } from 'lucide-react';
import Link from 'next/link';

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
      <h1 className="text-4xl">Chores Page</h1>
      <div className="mt-20 flex max-w-2xl flex-col gap-y-4">
        {initialChores.map((chore) => (
          <div key={chore.id} className="rounded border border-slate-100 p-4">
            <p className="flex items-end gap-x-1">
              {CHORE_ICONS[chore.status].icon}
              <span className="text-xs">{CHORE_ICONS[chore.status].text}</span>
            </p>
            <div className="py-2">
              <h3 className="truncate text-2xl font-bold">{chore.title}</h3>
              <p className="truncate text-slate-400">{chore.conent}</p>
            </div>
            <Link href={chorePath(chore.id)} className="underline">
              view
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

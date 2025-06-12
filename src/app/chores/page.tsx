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
      <h1 className="text-6xl">Chores Page</h1>
      <div className="flex max-w-2xl flex-col gap-y-4">
        {initialChores.map((chore) => (
          <div key={chore.id}>
            <p className="flex items-end gap-x-1">
              {CHORE_ICONS[chore.status].icon}
              <span className="text-xs">{CHORE_ICONS[chore.status].text}</span>
            </p>
            <h3 className="text-2xl font-bold">{chore.title}</h3>
            <Link href={chorePath(chore.id)}>view</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

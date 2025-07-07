import { LucideBicepsFlexed, LucideCheck, LucideLockOpen } from 'lucide-react';
import Link from 'next/link';

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
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Chores Page</h2>
        <p className="text-muted-foreground text-sm">
          All your chores are here
        </p>
      </div>

      <div className="flex flex-col gap-y-4">
        {initialChores.map((chore) => (
          <div key={chore.id}>
            <div>
              <h3>{chore.title}</h3>
              <span>{CHORE_STATUS[chore.status]}</span>
            </div>
            <Link href={chorePath(chore.id)} className="underline">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

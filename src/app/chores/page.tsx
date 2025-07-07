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
    <div>
      <h1 className="mb-10 text-xl font-bold">Chores</h1>

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

import Link from 'next/link';

import { initialChores } from '@/app/utils/data';

import { chorePath } from '../utils/paths';

const CHORE_ICONS = {
  OPEN: 'O',
  DONE: 'X',
  IN_PROGRESS: 'I',
};

export default function ChoresPage() {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Chores page</h2>
        <p className="text-sm text-muted-foreground"></p>
      </div>
      {initialChores.map((chore) => {
        return (
          <div key={chore.id}>
            <div>{CHORE_ICONS[chore.status]}</div>
            <h2 key={chore.id} className="my-4">
              {chore.title}
              <Link
                href={chorePath(chore.id)}
                className="border border-white text-white m-4"
              >
                View
              </Link>
            </h2>
          </div>
        );
      })}
    </div>
  );
}

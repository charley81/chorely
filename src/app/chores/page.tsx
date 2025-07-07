import Link from 'next/link';

import { initialChores } from '@/data';
import { chorePath } from '@/paths';

export default function ChoresPage() {
  return (
    <div>
      <h1 className="mb-10 text-xl font-bold">Chores</h1>

      <div className="flex flex-col gap-y-4">
        {initialChores.map((chore) => (
          <div key={chore.id}>
            <h3>{chore.title}</h3>
            <Link href={chorePath(chore.id)} className="underline">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

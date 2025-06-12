import Link from 'next/link';

import { initialChores } from '@/data';
import { chorePath } from '@/path';

export default function ChoresPage() {
  return (
    <div>
      <h1 className="text-6xl">Chores Page</h1>
      <div className="flex max-w-2xl flex-col gap-y-4">
        {initialChores.map((chore) => (
          <div key={chore.id}>
            <h3 className="text-2xl font-bold">{chore.title}</h3>
            <Link href={chorePath(chore.id)}>view</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

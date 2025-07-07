import Link from 'next/link';

import { initialChores } from '@/data';
import { chorePath } from '@/paths';

export default function ChoresPage() {
  return (
    <div>
      <h1>Chores</h1>

      <div>
        {initialChores.map((chore) => (
          <div key={chore.id}>
            <h3>{chore.title}</h3>
            <Link href={chorePath(chore.id)}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

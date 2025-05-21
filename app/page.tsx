import Link from 'next/link';

import { choresPath } from './utils/paths';

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Home page</h2>
        <p className="text-sm text-muted-foreground">
          Your home place to start
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center ">
        <Link href={choresPath()} className="underline">
          Go to chores
        </Link>
      </div>
    </div>
  );
}

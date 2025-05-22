import Link from 'next/link';

import { Heading } from '@/components/heading';

import { choresPath } from './utils/paths';

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Home" description="A home place to start" />

      <div className="flex-1 flex flex-col items-center ">
        <Link href={choresPath()} className="underline">
          Go to chores
        </Link>
      </div>
    </div>
  );
}

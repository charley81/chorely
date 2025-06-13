import Link from 'next/link';

import { choresPath } from '@/path';

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold">Welcome to Chorely</h1>
      <p className="mt-2 text-base">
        We&apos;re just getting started, stay tuned, but for now checkout some
        chores{' '}
        <span className="text-ring">
          <Link href={choresPath()}>here</Link>
        </span>
      </p>
    </>
  );
}

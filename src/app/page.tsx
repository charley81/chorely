import Link from 'next/link';

import { choresPath } from '@/path';

export default function Home() {
  return (
    <>
      <h1 className="text-4xl">Welcome to Chorely</h1>
      <p className="mt-2 text-base">
        We&apos;re just getting started, stay tuned, but for now checkout some
        chores{' '}
        <span className="text-blue-600 underline">
          <Link href={choresPath()}>here</Link>
        </span>
      </p>
    </>
  );
}

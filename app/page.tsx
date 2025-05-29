import Link from 'next/link';
import { choresPath } from './utils/paths';

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div className="flex-1 flex flex-col items-center ">
        <Link href={choresPath()} className="underline text-6xl font-bold">
          Go to chores
        </Link>
      </div>
    </div>
  );
}

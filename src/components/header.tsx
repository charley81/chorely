import { LucideBrushCleaning } from 'lucide-react';
import Link from 'next/link';

import { choresPath, homePath } from '@/paths';

import { ModeToggle } from './mode-toggle';
import { buttonVariants } from './ui/button';

export function Header() {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 bg-background/95 background-blur fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b px-5 py-2.5">
      <div>
        <Link
          href={homePath()}
          className={buttonVariants({ variant: 'ghost' })}
        >
          <h3 className="flex items-center gap-x-1 text-lg font-bold">
            Chorely
            <span>
              <LucideBrushCleaning />
            </span>
          </h3>
        </Link>
      </div>
      <div className="flex items-center gap-x-2">
        <Link
          href={choresPath()}
          className={buttonVariants({ variant: 'default' })}
        >
          Chores
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

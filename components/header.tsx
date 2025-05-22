import { LucideBrushCleaning } from 'lucide-react';
import Link from 'next/link';

import { choresPath,homePath } from '@/app/utils/paths';

import { buttonVariants } from './ui/button';

export function Header() {
  return (
    <nav className="flex justify-between w-full py-2.5 px-5 border-b supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 bg-background/95">
      <div>
        <Link
          href={homePath()}
          className={buttonVariants({ variant: 'ghost' })}
        >
          <h3 className="font-black text-lg">Chorley</h3>
          <LucideBrushCleaning className="h-12 w-12" />
        </Link>
      </div>
      <div>
        <Link
          href={choresPath()}
          className={buttonVariants({ variant: 'default' })}
        >
          Chores
        </Link>
      </div>
    </nav>
  );
}

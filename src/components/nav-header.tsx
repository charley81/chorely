import { LucideBrushCleaning } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { choresPath, homePath } from '@/path';

import { ThemeSwitcher } from './theme/theme-switcher';

export function NavHeader() {
  return (
    <nav className="bg-accent fixed top-0 right-0 left-0 z-20 mx-auto w-full p-4 font-bold text-black">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-x-2 px-4">
        <Link
          href={homePath()}
          className={
            (buttonVariants({ variant: 'ghost' }),
            'text-foreground flex gap-x-1 text-xl font-bold')
          }
        >
          <span className="text-ring">
            <LucideBrushCleaning />
          </span>
          Chorely
        </Link>
        <div className="flex items-center gap-x-1">
          <ThemeSwitcher />
          <Link
            href={choresPath()}
            className={buttonVariants({ variant: 'default' })}
          >
            Chores
          </Link>
        </div>
      </div>
    </nav>
  );
}

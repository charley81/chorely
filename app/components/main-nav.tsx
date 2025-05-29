import { choresPath, homePath } from '@/app/utils/paths';
import { LucideBrushCleaning } from 'lucide-react';
import Link from 'next/link';
import { ThemeSwitcher } from './theme/theme-switcher';
import { buttonVariants } from './ui/button';

export function MainNav() {
  return (
    <nav className="flex justify-between w-full p-6 border-b supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 bg-background/95">
      <div className="flex align-items gap-x-2">
        <Link
          href={homePath()}
          className={buttonVariants({ variant: 'ghost' })}
        >
          <h3 className="font-black text-lg">Chorley</h3>
          <LucideBrushCleaning className="h-12 w-12" />
        </Link>
      </div>
      <div className="flex align-items gap-x-2">
        <ThemeSwitcher />
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

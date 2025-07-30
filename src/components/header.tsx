import { LucideBrushCleaning, LucideLogOut } from 'lucide-react';
import Link from 'next/link';

import { signOut } from '@/features/auth/actions/sign-out';
import { choresPath, homePath, signInPath, signUpPath } from '@/paths';

import { SubmitButton } from './form/submit-button';
import { ModeToggle } from './theme/mode-toggle';
import { buttonVariants } from './ui/button';

export function Header() {
  const navItems = (
    <>
      <Link
        href={choresPath()}
        className={buttonVariants({ variant: 'default' })}
      >
        Chores
      </Link>
      <Link
        href={signUpPath()}
        className={buttonVariants({ variant: 'outline' })}
      >
        Sign Up
      </Link>
      <Link
        href={signInPath()}
        className={buttonVariants({ variant: 'outline' })}
      >
        Sign In
      </Link>
      <form action={signOut}>
        <SubmitButton label="Sign Out" icon={<LucideLogOut />} />
      </form>
    </>
  );

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
        <ModeToggle />
        {navItems}
      </div>
    </nav>
  );
}

import { LucideBrushCleaning, LucideLogOut } from 'lucide-react';
import Link from 'next/link';

import { signOut } from '@/features/auth/actions/sign-out';
import { getAuth } from '@/features/auth/queries/get-auth';
import { choresPath, homePath, signInPath, signUpPath } from '@/paths';

import { SubmitButton } from './form/submit-button';
import { ModeToggle } from './theme/mode-toggle';
import { buttonVariants } from './ui/button';

export async function Header() {
  const { user } = await getAuth();

  const navItems = user ? (
    <>
      <Link
        href={choresPath()}
        className={buttonVariants({ variant: 'default' })}
      >
        Chores
      </Link>
      <form action={signOut}>
        <SubmitButton
          label="Sign Out"
          icon={<LucideLogOut />}
          variant="outline"
        />
      </form>
    </>
  ) : (
    <>
      <Link
        href={signUpPath()}
        className={buttonVariants({ variant: 'outline' })}
      >
        Sign Up
      </Link>
      <Link
        href={signInPath()}
        className={buttonVariants({ variant: 'default' })}
      >
        Sign In
      </Link>
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

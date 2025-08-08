import { LucideBrushCleaning } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { choresPath,homePath } from '@/paths'

import { ModeToggle } from './theme/mode-toggle'
import { buttonVariants } from './ui/button'

export default function MainNav() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-20 flex w-full justify-between gap-x-2 border-b border-slate-500 p-6 font-bold">
      <Link
        href={homePath()}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'text-xl font-bold',
        )}
      >
        <LucideBrushCleaning /> Home
      </Link>
      <div className="flex items-center gap-x-4">
        <ModeToggle />
        <Link
          href={choresPath()}
          className={buttonVariants({ variant: 'default' })}
        >
          Chores
        </Link>
      </div>
    </nav>
  )
}

import { LucideBrushCleaning } from 'lucide-react'
import Link from 'next/link'

import { choresPath, homePath } from '@/paths'

import { ModeToggle } from './theme/mode-toggle'
import { Button } from './ui/button'

export default function MainNav() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-20 flex w-full justify-between gap-x-2 border-b border-slate-500 p-6 font-bold">
      <Button asChild variant="ghost" className="text-xl font-black">
        <Link href={homePath()}>
          <LucideBrushCleaning /> Home
        </Link>
      </Button>
      <div className="flex items-center gap-x-4">
        <ModeToggle />
        <Button asChild>
          <Link href={choresPath()}>Chores</Link>
        </Button>
      </div>
    </nav>
  )
}

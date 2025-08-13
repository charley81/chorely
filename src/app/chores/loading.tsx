import { LucideLoaderCircle } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center text-slate-500">
      <LucideLoaderCircle className="h-16 w-16 animate-spin" />
    </div>
  )
}

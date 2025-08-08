import { LucideCircleAlert } from 'lucide-react'
import { cloneElement } from 'react'

type PlaceholderProps = {
  label: string
  icon?: React.ReactElement<{ className?: string }>
  button?: React.ReactElement<{ className?: string }>
}

export function Placeholder({
  label,
  icon = <LucideCircleAlert />,
  button = <div />,
}: PlaceholderProps) {
  return (
    <div className="flex h-screen flex-1 flex-col items-center justify-center gap-y-4 self-center">
      {cloneElement(icon, {
        className: 'h-16, w-16',
      })}
      <h3>{label}</h3>
      {cloneElement(button, {
        className: 'h-10',
      })}
    </div>
  )
}

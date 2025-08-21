import { ReactNode } from 'react'

import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

type TooltipButtonProps = {
  children: ReactNode
  tooltip: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  type?: 'button' | 'submit' | 'reset'
  asChild?: boolean
} & React.ComponentProps<typeof Button>

export function TooltipButton({
  children,
  tooltip,
  side = 'right',
  type,
  asChild,
  ...buttonProps
}: TooltipButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button type={type} asChild={asChild} {...buttonProps}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent side={side}>{tooltip}</TooltipContent>
    </Tooltip>
  )
}

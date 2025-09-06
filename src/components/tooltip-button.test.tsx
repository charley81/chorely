import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'

import { TooltipButton } from './tooltip-button'
import { TooltipProvider } from './ui/tooltip'

describe('TooltipButton', () => {
  afterEach(cleanup)

  it('should render the button with its children', () => {
    render(
      <TooltipProvider>
        <TooltipButton tooltip="My Tooltip">
          <div>My Button</div>
        </TooltipButton>
      </TooltipProvider>,
    )
    expect(screen.getByText('My Button')).toBeInTheDocument()
  })

  it('should display the tooltip on hover', async () => {
    const user = userEvent.setup()
    render(
      <TooltipProvider>
        <TooltipButton tooltip="My Tooltip">
          <div>My Button</div>
        </TooltipButton>
      </TooltipProvider>,
    )

    await user.hover(screen.getByText('My Button'))

    expect(await screen.findByRole('tooltip')).toBeInTheDocument()
  })
})

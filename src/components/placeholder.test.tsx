import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Placeholder } from './placeholder'
import { LucideCircleAlert } from 'lucide-react'
import { Button } from './ui/button'

describe('Placeholder', () => {
  it('renders default icon and label correctly', () => {
    render(<Placeholder label="Test Message" />)

    const icon = document.querySelector('.lucide-circle-alert')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('h-16, w-16')

    expect(screen.getByText('Test Message')).toBeInTheDocument
  })

  it('renders custom icon correctly', () => {
    const CustomIcon = () => <svg className="custom-icon" />
    render(<Placeholder label="Test" icon={<CustomIcon />} />)

    const icon = document.querySelector('.custom-icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('custom-icon')
  })

  it('renders button with correct className', () => {
    render(<Placeholder label="Test" button={<Button>Action</Button>} />)

    const button = screen.getByRole('button', { name: 'Action' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('h-10')
  })

  it('renders default button when not provided', () => {
    const { container } = render(<Placeholder label="Test" />)

    const buttonDiv = container.querySelector('h3 + div')
    expect(buttonDiv).toBeInTheDocument()
    expect(buttonDiv).toHaveClass('h-10')
  })

  it('applies root container classes', () => {
    const { container } = render(<Placeholder label="Test" />)

    const mainContaienr = container.firstChild
    expect(mainContaienr).toHaveClass(
      'flex',
      'h-screen',
      'flex-1',
      'flex-col',
      'items-center',
      'justify-center',
      'gap-y-4',
      'self-center',
    )
  })
})

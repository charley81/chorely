import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { CardCompact } from './card-compact'

describe('CardCompact', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render the title and description', () => {
    render(
      <CardCompact
        title="My Title"
        description="My Description"
        content={null}
      />,
    )
    expect(screen.getByText('My Title')).toBeInTheDocument()
    expect(screen.getByText('My Description')).toBeInTheDocument()
  })

  it('should render the content', () => {
    render(
      <CardCompact
        title="My Title"
        description="My Description"
        content={<div>My Content</div>}
      />,
    )
    expect(screen.getByText('My Content')).toBeInTheDocument()
  })

  it('should render the footer when provided', () => {
    render(
      <CardCompact
        title="My Title"
        description="My Description"
        content={null}
        footer={<div>My Footer</div>}
      />,
    )
    expect(screen.getByText('My Footer')).toBeInTheDocument()
  })

  it('should not render the footer when not provided', () => {
    render(
      <CardCompact
        title="My Title"
        description="My Description"
        content={null}
      />,
    )
    expect(screen.queryByText('My Footer')).not.toBeInTheDocument()
  })

  it('should apply the className', () => {
    const { container } = render(
      <CardCompact
        title="My Title"
        description="My Description"
        content={null}
        className="my-class"
      />,
    )
    expect(container.firstChild).toHaveClass('my-class')
  })
})

import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Heading } from './heading'

describe('Heading', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render the title', () => {
    render(<Heading title="My Title" />)
    expect(screen.getByText('My Title')).toBeInTheDocument()
  })

  it('should render the description when provided', () => {
    render(<Heading title="My Title" description="My Description" />)
    expect(screen.getByText('My Description')).toBeInTheDocument()
  })

  it('should not render the description when not provided', () => {
    render(<Heading title="My Title" />)
    expect(screen.queryByText('My Description')).not.toBeInTheDocument()
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import { Grid } from './Grid'

describe('Grid', () => {
  it('renders an empty grid', () => {
    render(<Grid data-testid="grid" />)
    const grid = screen.getByTestId('grid')
    expect(grid).toBeEmptyDOMElement()
    expect(grid).toHaveClass('grid')
  })

  it('respects the inline prop', () => {
    render(<Grid inline data-testid="grid" />)
    const grid = screen.getByTestId('grid')
    expect(grid).toBeEmptyDOMElement()
    expect(grid).toHaveClass('inline-grid')
    expect(grid).not.toHaveClass('grid')
  })
})

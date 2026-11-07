import React from 'react'
import { render, screen } from '@testing-library/react'
import { Tile } from './Tile'
import { TileSet } from './TileSet'

describe('TileSet', () => {
  it('renders the children in a container', () => {
    render(
      <TileSet>
        <Tile heading="A" href="#" />
        <Tile heading="B" href="#" />
      </TileSet>
    )
    expect(screen.getByTestId('tile-set')).toBeInTheDocument()
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })

  it('renders the heading as an h3', () => {
    render(
      <TileSet heading="Hello">
        <Tile heading="A" href="#" />
        <Tile heading="B" href="#" />
      </TileSet>
    )
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Hello')
    expect(screen.getByTestId('tile-set')).toBeInTheDocument()
  })
})

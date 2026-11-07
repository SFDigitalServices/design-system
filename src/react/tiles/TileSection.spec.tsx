import { render, screen } from '@testing-library/react'
import { Tile } from './Tile'
import { TileSection } from './TileSection'
import { TileSet } from './TileSet'

describe('TileSection', () => {
  it('renders the children in a container', () => {
    render(
      <TileSection>
        <TileSet heading="Set A">
          <Tile heading="Tile 1" href="#" />
          <Tile heading="Tile 2" href="#" />
        </TileSet>
        <TileSet heading="Set B">
          <Tile heading="Tile 3" href="#" />
          <Tile heading="Tile 4" href="#" />
        </TileSet>
      </TileSection>
    )
    expect(screen.getByTestId('tile-section')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<TileSection heading="Tile section" />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })
})

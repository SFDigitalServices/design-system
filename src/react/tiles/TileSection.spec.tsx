import { render, screen, within } from '@testing-library/react'
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
    expect(screen.getByText('Set A')).toBeInTheDocument()
    expect(screen.getByText('Tile 1')).toBeInTheDocument()
    expect(screen.getByText('Tile 4')).toBeInTheDocument()
  })

  it('does not render a heading when none is provided', () => {
    render(
      <TileSection>
        <Tile heading="Tile 1" href="#" />
      </TileSection>
    )
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })

  it('wraps a string heading in an <h2>', () => {
    render(<TileSection heading="Tile section" />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Tile section')
  })

  it('uses a provided heading element as-is without wrapping it', () => {
    render(<TileSection heading={<h3>Custom heading</h3>} />)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveTextContent('Custom heading')
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument()
  })

  it('does not render the branded divider by default', () => {
    render(<TileSection heading="Tile section" />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.queryByTestId('branded-heading')).not.toBeInTheDocument()
  })

  it('wraps the heading in a branded heading when branded', () => {
    render(<TileSection heading="Tile section" branded />)
    const branded = screen.getByTestId('branded-heading')
    expect(
      within(branded).getByRole('heading', { level: 2 })
    ).toHaveTextContent('Tile section')
  })
})

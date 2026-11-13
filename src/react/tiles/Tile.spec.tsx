import React from 'react'
import { render, screen } from '@testing-library/react'
import { Tile } from './Tile'

describe('Tile', () => {
  it('renders a link with a heading', () => {
    render(<Tile heading="Tile heading" href="/" />)

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveTextContent('Tile heading')
  })

  it('renders the tile description', () => {
    render(
      <Tile
        heading="Tile heading"
        href="/"
        description="This is the description"
      />
    )
    const desc = screen.getByTestId('tile-description')
    expect(desc).toBeInTheDocument()
    expect(desc).toHaveTextContent('This is the description')
  })

  describe('icon prop', () => {
    it('renders the icon component with the expected attributes', () => {
      function Icon(props: JSX.IntrinsicElements['svg']) {
        return <svg {...props} />
      }

      render(<Tile icon={Icon} heading="Icon test" href="#" />)
      const icon = screen.getByTestId('tile-icon')
      expect(icon).toBeInTheDocument()
      expect(icon.tagName).toBe('svg')
      expect(icon.classList).toContain('size-20')
    })
  })

  describe('right arrow', () => {
    it('renders by default', () => {
      render(<Tile heading="Right arrow" href="#" />)
      expect(screen.getByTestId('tile-arrow')).toBeInTheDocument()
    })

    it('hides when hideRightArrow={true}', () => {
      render(<Tile hideRightArrow heading="No right arrow" href="#" />)
      expect(screen.queryByTestId('tile-arrow')).not.toBeInTheDocument()
    })
  })

  describe('children', () => {
    it('renders children after the description', () => {
      const { container } = render(
        <Tile href="#" heading="I believe " description="the children ">
          <p>are our future</p>
        </Tile>
      )
      expect(container).toHaveTextContent(
        'I believe the children are our future'
      )
    })
  })

  describe('subcomponents', () => {
    it('Tile.Link is a component', () => {
      expect(typeof Tile.Link).toBe('object')
    })
    it('Tile.Content is a component', () => {
      expect(typeof Tile.Content).toBe('object')
    })
    it('Tile.Heading is a component', () => {
      expect(typeof Tile.Heading).toBe('object')
    })
    it('Tile.Icon is a component', () => {
      expect(typeof Tile.Icon).toBe('function')
    })
    it('Tile.Description is a component', () => {
      expect(typeof Tile.Description).toBe('object')
    })
  })
})

import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders a button', () => {
    render(<Button>hi</Button>)
    const button = screen.getByRole('button', { name: 'hi' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('hi')
  })

  describe('as="a"', () => {
    it('renders a link', () => {
      render(
        <Button as="a" href="#derp">
          hi
        </Button>
      )
      const button = screen.getByRole('link')
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('hi')
      expect(button).toHaveAttribute('href', '#derp')
    })
  })

  describe('variants', () => {
    it.each([['primary'], ['secondary'], ['link'], ['whatever']])(
      'renders the variant',
      (variant) => {
        // @ts-expect-error these are not all valid
        render(<Button variant={variant}>yo</Button>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent('yo')
      }
    )
  })

  describe('block prop', () => {
    render(<Button block>yo</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('flex', 'w-full')
  })

  describe('className', () => {
    it('adds className values', () => {
      render(<Button className="wut">yo</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('inline-flex', 'wut')
    })
  })
})

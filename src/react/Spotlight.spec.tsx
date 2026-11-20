import { render, screen, within } from '@testing-library/react'
import { Spotlight } from './Spotlight'

describe('Spotlight', () => {
  it('renders a div with data-testid="spotlight"', () => {
    render(<Spotlight>label</Spotlight>)

    const div = screen.getByTestId('spotlight')
    expect(div).toBeInTheDocument()
    expect(div.tagName).toBe('DIV')
  })

  describe('image', () => {
    it('renders an image in <figure>', () => {
      render(
        <Spotlight>
          <Spotlight.Image>
            <img data-testid="image" src="cool.png" alt="Cool" />
          </Spotlight.Image>
        </Spotlight>
      )

      const figure = screen.getByRole('figure')
      expect(figure).toBeInTheDocument()
      const image = within(figure).getByRole('img')
      expect(image).toHaveClass('object-cover')
    })

    it('does not render a <figure> if no image is provided', () => {
      render(
        <Spotlight>
          <Spotlight.Image attribution="Nope" />
        </Spotlight>
      )

      const figure = screen.queryByRole('figure')
      expect(figure).not.toBeInTheDocument()
    })

    it('renders attribution in <figcaption>', () => {
      render(
        <Spotlight>
          <Spotlight.Image attribution="Attribution">
            <img data-testid="image" src="cool.png" alt="Cool" />
          </Spotlight.Image>
        </Spotlight>
      )

      const figure = screen.getByRole('figure')
      expect(figure).toBeInTheDocument()
      // eslint-disable-next-line testing-library/no-node-access
      const caption = figure.querySelector('figcaption')
      expect(caption).toBeInTheDocument()
      expect(caption).toHaveTextContent('Attribution')
    })
  })

  describe('content', () => {
    it('renders content in a div', () => {
      render(
        <Spotlight>
          <Spotlight.Content>This is cool</Spotlight.Content>
        </Spotlight>
      )

      const content = screen.getByTestId('spotlight-content')
      expect(content).toHaveTextContent('This is cool')
    })

    it('renders an h2 heading by default', () => {
      render(
        <Spotlight>
          <Spotlight.Content>
            <Spotlight.Heading>This is cool</Spotlight.Heading>
          </Spotlight.Content>
        </Spotlight>
      )

      const content = screen.getByTestId('spotlight-content')
      const heading = within(content).getByRole('heading', { level: 2 })
      expect(heading).toHaveTextContent('This is cool')
    })
  })
})

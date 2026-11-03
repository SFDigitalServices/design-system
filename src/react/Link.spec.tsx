import { render, screen } from '@testing-library/react'
import { Link } from './Link'

describe('Link', () => {
  it('renders a Link', () => {
    render(<Link href="/test">Hello</Link>)

    const link = screen.getByRole('link')
    expect(link).toHaveTextContent('Hello')
  })
})

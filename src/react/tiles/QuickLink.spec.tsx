import { render, screen } from '@testing-library/react'
import { QuickLink } from './QuickLink'

describe('QuickLink', () => {
  it('renders a link', () => {
    render(<QuickLink href="#" heading="Hello" />)
    expect(screen.getByRole('link')).toHaveTextContent('Hello')
  })

  it('renders the description', () => {
    render(
      <QuickLink
        href="#"
        heading="Hello"
        description="This is the description"
      />
    )
    expect(screen.getByTestId('quick-link-description')).toHaveTextContent(
      'This is the description'
    )
  })

  it('does not get divider styles', () => {
    render(<QuickLink href="#" heading="No divider" />)
    expect(screen.getByRole('link')).not.toHaveClass('border-b-1')
  })
})

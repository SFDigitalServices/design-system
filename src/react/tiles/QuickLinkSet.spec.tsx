import { render, screen } from '@testing-library/react'
import { QuickLink } from './QuickLink'
import { QuickLinkSet } from './QuickLinkSet'

describe('QuickLinkSet', () => {
  it('renders quick links in a grid', () => {
    render(
      <QuickLinkSet>
        <QuickLink href="#" heading="Link 1" />
        <QuickLink href="#" heading="Link 2" />
        <QuickLink href="#" heading="Link 3" />
      </QuickLinkSet>
    )

    const container = screen.getByTestId('quick-link-set')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('grid')
  })
})

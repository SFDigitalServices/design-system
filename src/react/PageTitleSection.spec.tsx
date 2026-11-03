import { render, screen } from '@testing-library/react'
import { PageTitleSection } from './PageTitleSection'

describe('PageTitleSection', () => {
  it('renders a page title section with an <h1> title', () => {
    render(
      <PageTitleSection label="Label" title="Title">
        <h2>subheader</h2>
      </PageTitleSection>
    )
    const h1 = screen.getByRole('heading', {
      level: 1
    })

    expect(h1).toHaveTextContent('Title')
  })

  it('renders a page title section with an <h2> child', () => {
    render(
      <PageTitleSection label="Label" title="Title">
        <h2>subheader</h2>
      </PageTitleSection>
    )
    const h2 = screen.getByRole('heading', {
      level: 2
    })

    expect(h2).toHaveTextContent('subheader')
  })

  it("doesn't render the h1 without a title", () => {
    render(<PageTitleSection label="lol">wut</PageTitleSection>)

    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument()
  })

  it('renders a label if it exists', () => {
    render(<PageTitleSection title="Title" label="label" />)
    const label = screen.getByTestId('page-label')
    expect(label).toBeInTheDocument()
    expect(label.textContent === 'label')
  })

  it("doesn't render a label if it doesn't exist", () => {
    render(<PageTitleSection title="Title" />)
    expect(screen.queryByTestId('page-label')).not.toBeInTheDocument()
  })

  it('appends the sr-only class to the label if it is marked as hidden', () => {
    const { container } = render(
      <PageTitleSection title="Title" label="haha" isHidden={true} />
    )
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveClass('sr-only')
  })
})

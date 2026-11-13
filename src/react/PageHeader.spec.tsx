import { render, screen } from '@testing-library/react'
import { PageHeader } from './PageHeader'
import { PageLabel } from './PageLabel'

describe('PageHeader', () => {
  it('renders a responsively positioned logo', () => {
    render(<PageHeader title="Yo" logo={<img src="foo.jpg" />} />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    // the first image should only show < lg
    expect(images[0]).toHaveClass('lg:hidden')
    // and the second should only show >= lg
    // eslint-disable-next-line testing-library/no-node-access
    expect(images[1].parentElement).toHaveClass('lg:block')
  })

  it('renders the page label if provided', () => {
    render(<PageHeader title="Cool" label="Label text" />)
    expect(screen.getByText('Label text')).toBeInTheDocument()
  })

  it('renders the page label as a JSX element', () => {
    render(
      <PageHeader
        title="Cool"
        label={
          <PageLabel isHidden data-testid="hidden-page-label">
            Page label
          </PageLabel>
        }
      />
    )
    expect(screen.getByTestId('hidden-page-label')).toBeInTheDocument()
  })

  it('renders the content', () => {
    render(
      <PageHeader title="Yo">
        <p>My cool content</p>
      </PageHeader>
    )
    expect(screen.getByText('My cool content')).toBeInTheDocument()
  })

  it('renders the description prop', () => {
    render(<PageHeader title="Yo" description="Page description" />)
    expect(screen.getByText('Page description')).toBeInTheDocument()
  })
})

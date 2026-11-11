import { render, screen } from '@testing-library/react'
import { BrandedHeading } from './BrandedHeading'

describe('BrandedHeading', () => {
  it('renders its children', () => {
    render(
      <BrandedHeading>
        <h2>A heading</h2>
      </BrandedHeading>
    )

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'A heading'
    )
  })

  it('renders inside the branded-heading wrapper', () => {
    render(
      <BrandedHeading>
        <h2>A heading</h2>
      </BrandedHeading>
    )

    const wrapper = screen.getByTestId('branded-heading')
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveTextContent('A heading')
  })

  it('renders a branded divider alongside the heading', () => {
    const { container } = render(
      <BrandedHeading>
        <h2>A heading</h2>
      </BrandedHeading>
    )

    const wrapper = screen.getByTestId('branded-heading')
    // the divider is rendered as the wrapper's last child
    // eslint-disable-next-line testing-library/no-node-access
    expect(wrapper.lastElementChild).toHaveClass('w-[46px]')
    expect(container).toBeInTheDocument()
  })

  it('applies the default spacing when no level is provided', () => {
    render(
      <BrandedHeading>
        <h2>A heading</h2>
      </BrandedHeading>
    )

    expect(screen.getByTestId('branded-heading')).toHaveClass('space-y-8')
  })

  it.each([
    {
      level: 1 as const,
      wrapperClass: 'space-y-12',
      dividerClass: 'md:w-[54px]'
    },
    {
      level: 2 as const,
      wrapperClass: 'lg:space-y-12',
      dividerClass: 'w-[36px]'
    }
  ])(
    'applies level $level classes to the wrapper and divider',
    ({ level, wrapperClass, dividerClass }) => {
      render(
        <BrandedHeading level={level}>
          <h2>A heading</h2>
        </BrandedHeading>
      )

      const wrapper = screen.getByTestId('branded-heading')
      expect(wrapper).toHaveClass(wrapperClass)
      // eslint-disable-next-line testing-library/no-node-access
      expect(wrapper.lastElementChild).toHaveClass(dividerClass)
    }
  )

  it('forwards extra props to the wrapper', () => {
    render(
      <BrandedHeading aria-label="branded">
        <h2>A heading</h2>
      </BrandedHeading>
    )

    const wrapper = screen.getByTestId('branded-heading')
    expect(wrapper).toHaveAttribute('aria-label', 'branded')
  })
})
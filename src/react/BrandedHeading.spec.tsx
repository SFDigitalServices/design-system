import { render, screen } from '@testing-library/react'
import { BrandedHeading } from './BrandedHeading'

describe('BrandedHeading', () => {
  it('renders its children inside the branded-heading wrapper', () => {
    render(
      <BrandedHeading>
        <h2>A heading</h2>
      </BrandedHeading>
    )

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'A heading'
    )
    expect(screen.getByTestId('branded-heading')).toHaveTextContent('A heading')
  })

  it('renders a branded divider as the last child', () => {
    render(
      <BrandedHeading>
        <h2>A heading</h2>
      </BrandedHeading>
    )

    const wrapper = screen.getByTestId('branded-heading')
    // eslint-disable-next-line testing-library/no-node-access
    expect(wrapper.lastElementChild).toHaveClass('w-[46px]')
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
})

import { render, screen } from '@testing-library/react'
import { IconWarning } from './icons'
import { StackedItem } from './StackedItem'

describe('<StackedItem />', () => {
  it.each([
    { type: 'bool', value: true },
    { type: 'string', value: 'hi' },
    { type: 'number', value: 6 },
    { type: 'component', value: <div>hi</div> },
    { type: 'null', value: undefined }
  ])('Renders with $type', ({ value }) => {
    render(<StackedItem>{value}</StackedItem>)

    /* eslint-disable testing-library/no-node-access */
    // need to reach in and get the value for the test
    const expected =
      typeof value === 'object'
        ? value?.props.children
        : value === true || value === undefined
        ? ''
        : value
    /* eslint-enable testing-library/no-node-access */

    expect(screen.getByTestId('stacked-content-item')).toHaveTextContent(
      expected
    )
  })

  it('renders an icon when provided', () => {
    render(<StackedItem icon={IconWarning}>Testing</StackedItem>)
    expect(screen.getByTestId('stacked-content-item-icon')).toBeInTheDocument()
  })

  it('renders a title when provided', () => {
    render(<StackedItem title="wohoo">Testing</StackedItem>)
    expect(screen.getByTestId('stacked-content-item')).toHaveTextContent(
      'wohoo'
    )
  })

  it('renders a title as an h3 when provided', () => {
    render(
      <StackedItem title="wohoo" headingAs="h3">
        Testing
      </StackedItem>
    )
    expect(
      screen.getByRole('heading', {
        level: 3
      })
    ).toHaveTextContent('wohoo')
  })
})

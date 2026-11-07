import { render, screen } from '@testing-library/react'
import { StackedContainer } from './StackedContainer'

describe('<StackedContainer />', () => {
  it.each([
    { type: 'bool', value: true },
    { type: 'string', value: 'hi' },
    { type: 'number', value: 6 },
    { type: 'component', value: <div>hi</div> },
    { type: 'null', value: null }
  ])('Renders with $type', ({ value }) => {
    render(<StackedContainer>{value}</StackedContainer>)
    expect(screen.getByTestId('stacked-content-container')).toBeInTheDocument()
  })
})

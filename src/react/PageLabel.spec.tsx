import { render, screen } from '@testing-library/react'
import { PageLabel } from './PageLabel'

describe('PageLabel', () => {
  it('renders a PageLabel', () => {
    render(<PageLabel>label</PageLabel>)

    const label = screen.getByText('label')
    expect(label).toBeInTheDocument()
  })
})

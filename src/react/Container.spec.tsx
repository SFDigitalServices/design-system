import React from 'react'
import { render, screen } from '@testing-library/react'
import { Container } from './Container'

describe('Container', () => {
  it('renders an empty container', () => {
    render(<Container data-testid="container" />)

    const container = screen.getByTestId('container')
    expect(container).toBeEmptyDOMElement()
  })
})

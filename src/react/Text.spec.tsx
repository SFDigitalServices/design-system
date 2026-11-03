import React from 'react'
import { render, screen } from '@testing-library/react'
import {
  Text,
  BodyText,
  SmallText,
  HeadingXs,
  HeadingSm,
  HeadingMd,
  HeadingXl,
  DisplayLg,
  DisplayXXXl,
  Monospace
} from './Text'

describe('Text', () => {
  it('renders a styled Text element', () => {
    render(<Text>Hi!</Text>)

    const text = screen.getByText('Hi!')
    expect(text).toBeInTheDocument()
  })

  it('renders a styled BodyText element', () => {
    render(<BodyText>Hi!</BodyText>)

    const text = screen.getByText('Hi!')
    expect(text).toBeInTheDocument()
  })

  it('renders a styled SmallText element', () => {
    render(<SmallText>Hi!</SmallText>)

    const text = screen.getByText('Hi!')
    expect(text).toBeInTheDocument()
  })

  it('renders a styled HeadingXs element', () => {
    render(<HeadingXs>Hi!</HeadingXs>)

    const text = screen.getByText('Hi!')
    expect(text).toBeInTheDocument()
  })

  it('renders a styled HeadingSm element', () => {
    render(<HeadingSm>Hi!</HeadingSm>)

    const text = screen.getByText('Hi!')
    expect(text).toBeInTheDocument()
  })

  it('renders a styled HeadingMd element', () => {
    render(<HeadingMd>Hi!</HeadingMd>)

    const text = screen.getByText('Hi!')
    expect(text).toBeInTheDocument()
  })

  it('renders a styled HeadingXl element', () => {
    render(<HeadingXl>Hi!</HeadingXl>)

    const text = screen.getByText('Hi!')
    expect(text).toBeInTheDocument()
  })

  it('renders a styled TitleXl element', () => {
    render(<HeadingXl>Hi!</HeadingXl>)

    const text = screen.getByText('Hi!')
    expect(text).toBeInTheDocument()
  })

  it('renders a styled DisplayLg element', () => {
    render(<DisplayLg>Hi!</DisplayLg>)

    const text = screen.getByText('Hi!')
    expect(text).toBeInTheDocument()
  })

  it('renders a styled DisplayXXXl element', () => {
    render(<DisplayXXXl>Hi!</DisplayXXXl>)

    const text = screen.getByText('Hi!')
    expect(text).toBeInTheDocument()
  })

  it('renders a styled Monospace element', () => {
    render(<Monospace>Hi!</Monospace>)

    const text = screen.getByText('Hi!')
    expect(text).toBeInTheDocument()
  })
})

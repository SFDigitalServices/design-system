import { render, screen } from '@testing-library/react'
import { ImageHeader } from './ImageHeader'

describe('ImageHeader', () => {
  it('renders an image with the expected classes', () => {
    render(
      <ImageHeader image={<img src="foo.jpg" />}>
        <p>My cool content</p>
      </ImageHeader>
    )
    const image = screen.getByRole('img')
    expect(image).toHaveClass('object-cover')
    expect(
      screen.getByText('My cool content', { selector: 'p' })
    ).toBeInTheDocument()
  })

  it('renders the content without an image', () => {
    render(
      <ImageHeader image={null}>
        <p>My cool content</p>
      </ImageHeader>
    )
    const image = screen.queryByTestId('image-header-image')
    expect(image).not.toBeInTheDocument()
    expect(
      screen.getByText('My cool content', { selector: 'p' })
    ).toBeInTheDocument()
  })
})

import { Container, DisplayXXXl, ImageHeader } from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react'
import { MockHeader } from '../../.storybook/components'

const images = {
  dph: 'https://media.api.sf.gov/original_images/sf_skyline_small.jpg',
  'assessor-recorder':
    'https://media.api.sf.gov/original_images/headerimage-Neighborhoods-1.jpg'
} as const

const meta: Meta<typeof ImageHeader> = {
  title: 'React/ImageHeader',
  component: ImageHeader,
  argTypes: {
    children: {
      name: 'Heading'
    },
    image: {
      name: 'Image',
      type: 'string',
      control: 'select',
      options: Object.keys(images),
      mapping: Object.fromEntries(
        Object.entries(images).map(([key, src]) => [
          key,
          <img src={src} alt={key} />
        ])
      )
    }
  },
  render({ children, image, ...rest }) {
    return (
      <ImageHeader image={image}>
        <DisplayXXXl>{children}</DisplayXXXl>
      </ImageHeader>
    )
  },
  decorators: [
    (Story) => (
      <>
        <MockHeader />
        <Story />
        <Container>
          <div className="py-20">
            <p>The quick brown fox jumps over the lazy dog.</p>
          </div>
        </Container>
      </>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type ImageHeaderStory = StoryObj<typeof meta>

export const WithImage: ImageHeaderStory = {
  args: {
    children: 'Assessor-Recorder',
    // @ts-expect-error derp
    image: 'assessor-recorder'
  }
}

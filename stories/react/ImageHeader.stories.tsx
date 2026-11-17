import { Container, DisplayXXXl, ImageHeader } from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react'
import { MockHeader } from '../helpers/MockHeader'

export const HEADER_IMAGES = {
  dph: 'https://media.api.sf.gov/original_images/sf_skyline_small.jpg',
  'assessor-recorder':
    'https://media.api.sf.gov/original_images/headerimage-Neighborhoods-1.jpg'
} as const

const meta = {
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
      options: Object.keys(HEADER_IMAGES),
      mapping: Object.fromEntries(
        Object.entries(HEADER_IMAGES).map(([key, src]) => [
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
            <p>This is content in a container.</p>
            <p>The quick brown fox jumps over the lazy dog.</p>
          </div>
        </Container>
      </>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof ImageHeader>

export default meta

type ImageHeaderStory = StoryObj<typeof meta>

export const WithImage: ImageHeaderStory = {
  args: {
    children: 'Assessor-Recorder',
    // @ts-expect-error derp
    image: 'assessor-recorder'
  }
}

export const NoImage: ImageHeaderStory = {
  args: {
    children: 'This is an ImageHeader without an image',
    image: undefined
  }
}

import { Container, DisplayXXXl, ImageHeader } from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react'
import { MockHeader } from '../helpers/MockHeader'
import { HEADER_IMAGES } from '../helpers/shared-args'

const meta = {
  title: 'React/ImageHeader',
  component: ImageHeader,
  argTypes: {
    children: {
      name: 'Heading',
      description: 'rendered as &lt;DisplayXXL&gt;{...}&lt;/DisplayXXL&gt;'
    },
    className: {
      table: {
        disable: true
      }
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
        <Container className="py-20">
          <p>This is content in a container.</p>
          <p>The quick brown fox jumps over the lazy dog.</p>
        </Container>
      </>
    )
  ]
} satisfies Meta<typeof ImageHeader>

export default meta

type ImageHeaderStory = StoryObj<typeof meta>

export const WithImage = {
  args: {
    children: 'Assessor-Recorder',
    // @ts-expect-error derp
    image: 'assessor-recorder'
  },
  argTypes: {
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
  }
} satisfies ImageHeaderStory

export const NoImage: ImageHeaderStory = {
  args: {
    children: 'This is an ImageHeader without an image',
    image: undefined
  },
  argTypes: {
    image: {
      table: {
        disable: true
      }
    }
  }
}

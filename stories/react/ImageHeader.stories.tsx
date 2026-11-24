import { Container, DisplayXXXl, ImageHeader } from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  HEADER_IMAGES,
  MockSiteHeader,
  mappingInput,
  renderImage
} from '../helpers'

export type ImageHeaderArgs = {
  heading: string
  image?: keyof typeof HEADER_IMAGES
}

const meta: Meta<ImageHeaderArgs> = {
  title: 'React/ImageHeader',
  argTypes: {
    heading: {
      name: 'Heading',
      description: 'rendered as &lt;DisplayXXL&gt;{...}&lt;/DisplayXXL&gt;'
    },
    image: {
      type: 'string',
      ...mappingInput(HEADER_IMAGES)
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2sMxDPHy2gTjuCWAZhF3VQ/Components?node-id=7634-5238&t=NqivXdtyqehlFO6i-0'
    }
  },
  render({ heading, image }) {
    return (
      <>
        <MockSiteHeader />
        <ImageHeader image={renderImage(image)}>
          <DisplayXXXl>{heading}</DisplayXXXl>
        </ImageHeader>
        <Container className="py-20">
          <p>This is content in a container after the ImageHeader.</p>
        </Container>
      </>
    )
  }
}

export default meta

type ImageHeaderStory = StoryObj<typeof meta>

export const WithImage = {
  args: {
    heading: 'Assessor-Recorder',
    image: 'ASR'
  },
  argTypes: {
    image: {
      name: 'Image',
      ...mappingInput(HEADER_IMAGES)
    }
  }
} satisfies ImageHeaderStory

export const NoImage: ImageHeaderStory = {
  args: {
    heading: 'This is an ImageHeader without an image',
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

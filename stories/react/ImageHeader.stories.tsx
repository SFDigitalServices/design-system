import { Container, DisplayXXXl, ImageHeader } from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  HEADER_IMAGES,
  MockSiteHeader,
  mappingInput,
  renderImage
} from '../helpers'

const meta: Meta<typeof ImageHeader> = {
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
  render({ children, image }) {
    return (
      <>
        <MockSiteHeader />
        <ImageHeader image={renderImage(image)}>
          <DisplayXXXl>{children}</DisplayXXXl>
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
    children: 'Assessor-Recorder',
    // @ts-expect-error derp
    image: HEADER_IMAGES.ASR
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

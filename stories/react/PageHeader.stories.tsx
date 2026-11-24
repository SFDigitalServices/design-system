import type { ImageHeaderProps, PageHeaderProps } from '#src/react'
import { Container, ImageHeader, PageHeader, PageLabel } from '#src/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ALL_MODES,
  DEPARTMENT_LOGOS,
  HEADER_IMAGES,
  MockSiteHeader,
  mappingInput,
  renderImage
} from '../helpers'
import { WithImage as ImageHeaderWithImage } from './ImageHeader.stories'

type PageHeaderArgs = Pick<
  PageHeaderProps,
  'title' | 'description' | 'label' | 'logo'
> &
  Pick<ImageHeaderProps, 'image'>

const meta: Meta<PageHeaderArgs> = {
  title: 'React/PageHeader',
  component: PageHeader,
  args: {
    title: 'This is the title',
    description: 'And this is the description'
  },
  argTypes: {
    title: {
      name: 'Title'
    },
    description: {
      name: 'Description'
    },
    label: {
      name: 'Label',
      type: 'string',
      control: 'select',
      options: ['none', 'visible', 'hidden'],
      mapping: {
        none: undefined,
        visible: 'LABEL',
        hidden: <PageLabel isHidden>LABEL</PageLabel>
      }
    },
    logo: {
      name: 'Logo',
      ...mappingInput(DEPARTMENT_LOGOS)
    }
  },
  parameters: {
    chromatic: {
      modes: {
        mobile: ALL_MODES.mobile,
        desktop: ALL_MODES.desktop
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2sMxDPHy2gTjuCWAZhF3VQ/Components?node-id=7629-5030&t=NqivXdtyqehlFO6i-0'
    }
  },
  render({ title, description, label, logo, image }) {
    return (
      <>
        <MockSiteHeader />
        <ImageHeader image={renderImage(image)}>
          <PageHeader
            title={title}
            description={description}
            label={label}
            logo={renderImage(logo)}
          />
        </ImageHeader>
        <Container className="py-20">
          <p>This is content in a container after the PageHeader.</p>
        </Container>
      </>
    )
  }
}

export default meta

type PageHeaderStory = StoryObj<typeof meta>

export const NoImage: PageHeaderStory = {
  args: {
    title: 'PageHeader without a full-width image',
    logo: undefined
  }
}

export const WithImage: PageHeaderStory = {
  args: {
    title: 'PageHeader with a full-width image',
    logo: renderImage(DEPARTMENT_LOGOS.ASR),
    image: renderImage(HEADER_IMAGES.ASR)
  },
  argTypes: {
    image: ImageHeaderWithImage.argTypes.image
  }
}

export const WithLabel: PageHeaderStory = {
  args: {
    label: 'News',
    title: 'Something big is happening'
  }
}

import {
  Container,
  ImageHeader,
  ImageHeaderProps,
  PageHeader,
  PageHeaderProps,
  PageLabel
} from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  DEPARTMENT_LOGOS,
  MockSiteHeader,
  imageMapping,
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
        visible: <PageLabel>LABEL</PageLabel>,
        hidden: <PageLabel isHidden>LABEL</PageLabel>
      }
    },
    logo: {
      name: 'Logo',
      ...imageMapping(DEPARTMENT_LOGOS)
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
            logo={logo}
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

type ImageHeaderStory = StoryObj<typeof meta>

export const WithImage: ImageHeaderStory = {
  args: {
    title: 'Assessor-Recorder',
    logo: <img src={DEPARTMENT_LOGOS.ASR} alt="Assessor-Recorder logo" />
  },
  argTypes: {
    image: ImageHeaderWithImage.argTypes.image
  }
}

export const NoImage: ImageHeaderStory = {
  args: {
    title: 'PageHeader without an image',
    logo: undefined
  }
}

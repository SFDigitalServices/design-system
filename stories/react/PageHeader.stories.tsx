import {
  Container,
  DisplayXXXl,
  ImageHeader,
  ImageHeaderProps,
  PageHeader,
  PageHeaderProps
} from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react'
import { MockHeader } from '../helpers/MockHeader'
import ImageHeaderMeta from './ImageHeader.stories'

const logos = {
  dph: 'https://media.api.staging.dev.sf.gov/original_images/sfdph_logo_blue-01.png',
  'assessor-recorder':
    'https://media.api.staging.dev.sf.gov/original_images/ASR_Seal__Logo_Edited_0e6uAcG.jpg'
} as const

type PageHeaderArgs = Pick<
  PageHeaderProps,
  'title' | 'description' | 'label' | 'logo'
> &
  Pick<ImageHeaderProps, 'image'>

const meta: Meta<PageHeaderArgs> = {
  title: 'React/PageHeader',
  component: PageHeader,
  argTypes: {
    title: {
      name: 'Title'
    },
    description: {
      name: 'Description'
    },
    label: {
      name: 'Label'
    },
    image: ImageHeaderMeta.argTypes.image,
    logo: {
      name: 'Logo',
      type: 'string',
      control: 'select',
      options: Object.keys(logos),
      mapping: Object.fromEntries(
        Object.entries(logos).map(([key, src]) => [
          key,
          <img src={src} alt={key} />
        ])
      )
    }
  },
  render({ title, description, label, logo, image, ...rest }) {
    return (
      <ImageHeader image={image}>
        <PageHeader
          title={title}
          description={description}
          label={label}
          logo={logo}
        />
      </ImageHeader>
    )
  },
  decorators: [
    (Story, context) => (
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
}

export default meta

type ImageHeaderStory = StoryObj<typeof meta>

export const WithImage: ImageHeaderStory = {
  args: {
    title: 'Assessor-Recorder',
    logo: <img src={logos['assessor-recorder']} alt="Assessor-Recorder logo" />
  }
}

export const NoImage: ImageHeaderStory = {
  args: {
    title: 'PageHeader without an image',
    logo: undefined
  }
}

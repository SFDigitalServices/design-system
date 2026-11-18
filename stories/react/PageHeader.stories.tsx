import {
  Container,
  ImageHeader,
  ImageHeaderProps,
  PageHeader,
  PageHeaderProps
} from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react'
import { MockHeader } from '../helpers/MockHeader'
import { DEPARTMENT_LOGOS } from '../helpers/shared-args'
import ImageHeaderMeta from './ImageHeader.stories'

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
      options: Object.keys(DEPARTMENT_LOGOS),
      mapping: Object.fromEntries(
        Object.entries(DEPARTMENT_LOGOS).map(([key, src]) => [
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
        <Container className="py-20">
          <p>This is content in a container.</p>
          <p>The quick brown fox jumps over the lazy dog.</p>
        </Container>
      </>
    )
  ]
}

export default meta

type ImageHeaderStory = StoryObj<typeof meta>

export const WithImage: ImageHeaderStory = {
  args: {
    title: 'Assessor-Recorder',
    logo: (
      <img
        src={DEPARTMENT_LOGOS['assessor-recorder']}
        alt="Assessor-Recorder logo"
      />
    )
  }
}

export const NoImage: ImageHeaderStory = {
  args: {
    title: 'PageHeader without an image',
    logo: undefined
  }
}

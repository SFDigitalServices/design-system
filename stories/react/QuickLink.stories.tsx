import { QuickLink, QuickLinkProps } from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { withContainer } from '../helpers'

type QuickLinkArgs = Pick<QuickLinkProps, 'href' | 'heading' | 'description'>

const meta: Meta<QuickLinkArgs> = {
  title: 'React/Quick links/QuickLink',
  component: QuickLink,
  args: {
    href: '#',
    heading: 'Quick link',
    description: 'This is the description'
  },
  decorators: [withContainer()]
}

export default meta

type QuickLinkStory = StoryObj<typeof meta>

export const Default: QuickLinkStory = {}

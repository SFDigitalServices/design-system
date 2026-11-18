import { IconArchive, StackedItem } from '@/src/react'
import * as icons from '@/src/react/icons'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { withContainer } from '../helpers'

const meta: Meta<typeof StackedItem> = {
  title: 'React/StackedItem',
  component: StackedItem,
  args: {
    headingAs: 'p'
  },
  argTypes: {
    title: {
      name: 'Title (heading)',
      type: 'string',
      description: 'The heading text, rendered with <HeadingLg>'
    },
    children: {
      name: 'Content',
      type: 'string'
    },
    icon: {
      options: Object.keys(icons),
      mapping: icons
    },
    headingAs: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    }
  },
  decorators: [withContainer()]
}

export default meta

type StackedItemStory = StoryObj<typeof meta>

export const Default: StackedItemStory = {
  args: {
    icon: IconArchive,
    title: 'Content title',
    children: 'Some text in a StackedItem!'
  }
}

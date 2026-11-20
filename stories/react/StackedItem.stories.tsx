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
      type: 'string',
      description: 'The heading text, rendered with &lt;HeadingLg&gt;'
    },
    headingAs: {
      control: 'select',
      description: 'The <code>as</code> prop of the &lt;HeadingLg&gt;',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    },
    children: {
      name: 'Content',
      type: 'string'
    },
    icon: {
      options: Object.keys(icons),
      mapping: icons
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

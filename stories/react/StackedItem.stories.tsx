import { IconArchive, StackedItem } from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof StackedItem> = {
  title: 'React/StackedItem',
  component: StackedItem,
  argTypes: {
    children: {
      name: 'content',
      type: 'string'
    },
    title: {
      type: 'string'
    }
  }
}

export default meta

type StackedItemStory = StoryObj<typeof meta>

export const _StackedItem: StackedItemStory = {
  args: {
    icon: IconArchive,
    title: 'Content title',
    children: 'Some text in a StackedItem!'
  }
}

import { IconArchive, StackedItem } from '@/design-system'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof StackedItem> = {
  title: 'Components/Stacked Item',
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

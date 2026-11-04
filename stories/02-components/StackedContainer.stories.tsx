import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import {
  IconCash,
  StackedContainer,
  StackedItem,
  type StackedItemProps
} from '@/design-system'

const meta: Meta<typeof StackedContainer> = {
  title: 'Components/Stacked Container',
  component: StackedContainer,
  args: {
    icon: IconCash,
    titles: [],
    content: [
      'Some text!',
      'Some other text',
      'Yet another item with some longer text that might cause the thing to wrap'
    ]
  },
  argTypes: {
    titles: {
      type: 'string',
      control: {
        type: 'array'
      }
    },
    content: {
      type: 'string',
      control: {
        type: 'array'
      }
    }
  },
  render: ({ content, titles, ...rest }) => (
    <StackedContainer>
      {[...Array(3)].map((text, i) => (
        <StackedItem
          key={`item-${i}`}
          title={titles[i] || `Item ${i + 1} title`}
          {...(rest as Partial<StackedItemProps>)}
        >
          {content[i] || `Content in item ${i + 1}`}
        </StackedItem>
      ))}
    </StackedContainer>
  )
}

export default meta

type StackedContainerStory = StoryObj<typeof meta>

export const _StackedContainer: StackedContainerStory = {}

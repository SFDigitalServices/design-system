import { PageLabel } from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { withContainer } from '../helpers'

type PageLabelArgs = {
  content: string
  isHidden?: boolean
}

const meta: Meta<PageLabelArgs> = {
  title: 'React/PageLabel',
  args: {
    content: 'Calendar',
    isHidden: false
  },
  argTypes: {
    content: {
      name: 'Label text'
    },
    isHidden: {
      name: 'Hidden?'
    }
  },
  render({ content, isHidden }) {
    return <PageLabel isHidden={isHidden}>{content}</PageLabel>
  },
  decorators: [withContainer()]
}

export default meta

type PageLabelStory = StoryObj<typeof meta>

export const Default: PageLabelStory = {}

export const Hidden: PageLabelStory = {
  args: {
    isHidden: true
  }
}

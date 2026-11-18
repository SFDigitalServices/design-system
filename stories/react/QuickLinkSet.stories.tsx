import { QuickLink, QuickLinkSet } from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { withContainer } from '../helpers'

type QuickLinkSetArgs = {
  count: number
}

const meta: Meta<QuickLinkSetArgs> = {
  title: 'React/Quick links/QuickLinkSet',
  args: {
    count: 4
  },
  argTypes: {
    count: {
      name: 'Number of links',
      control: {
        min: 0,
        max: 10
      }
    }
  },
  render({ count }) {
    return (
      <QuickLinkSet>
        {Array.from({ length: count }).map((_, i) => (
          <QuickLink
            // eslint-disable-next-line @eslint-react/no-array-index-key
            key={i}
            heading={`Tile ${i + 1}`}
            href="#"
            description="This is the description"
          />
        ))}
      </QuickLinkSet>
    )
  },
  decorators: [withContainer()]
}

export default meta

type QuickLinkSetStory = StoryObj<typeof meta>

export const Default: QuickLinkSetStory = {}

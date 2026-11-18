import { QuickLink, QuickLinkSet, QuickLinkSetProps } from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { withContainer } from '../helpers'

type QuickLinkSetArgs = Pick<QuickLinkSetProps, 'children'>

const meta: Meta<QuickLinkSetArgs> = {
  title: 'React/Quick links/QuickLinkSet',
  component: QuickLinkSet,
  args: {
    children: (
      <>
        <QuickLink
          href="#"
          heading="Quick link 1"
          description="This is the description"
        />
        <QuickLink
          href="#"
          heading="Quick link 2"
          description="This is the description"
        />
        <QuickLink
          href="#"
          heading="Quick link 3"
          description="This is the description"
        />
        <QuickLink
          href="#"
          heading="Quick link 4"
          description="This is the description"
        />
        <QuickLink
          href="#"
          heading="Quick link 5"
          description="This is the description"
        />
      </>
    )
  },
  decorators: [withContainer()]
}

export default meta

type QuickLinkSetStory = StoryObj<typeof meta>

export const Default: QuickLinkSetStory = {}

import React from 'react'
import { InformationPage } from '@/sfgov/components'
import { InfoPageFactory } from '@/sfgov/lib/factories'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof InformationPage> = {
  title: 'pages / Information',
  component: InformationPage,
  render: (args) => <InformationPage page={args} />,
  args: InfoPageFactory.make(),
  parameters: {
    container: false,
    controls: {
      exclude: ['id', 'meta']
    }
  }
}

export default meta

type InformationPageStory = StoryObj<typeof meta>

export const _Information: InformationPageStory = {}

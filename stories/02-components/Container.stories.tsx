import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Container as ContainerComponent } from '@/design-system'

const meta: Meta<typeof ContainerComponent> = {
  title: 'Components/Container',
  component: ContainerComponent,
  argTypes: {
    children: {
      name: 'content',
      type: 'string'
    }
  }
}

export default meta

type ContainerStory = StoryObj<typeof meta>

export const Container: ContainerStory = {
  args: {
    children: 'Some text in a container!'
  }
}

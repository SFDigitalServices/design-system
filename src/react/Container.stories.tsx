import type { Meta, StoryObj } from '@storybook/react-vite'
import { Container as ContainerComponent } from './Container'

const meta: Meta<typeof ContainerComponent> = {
  title: 'React/Container',
  component: ContainerComponent,
  argTypes: {
    children: {
      name: 'content',
      type: 'string'
    },
    className: {
      name: 'class',
      type: 'string'
    }
  }
}

export default meta

type ContainerStory = StoryObj<typeof meta>

export const Container: ContainerStory = {
  args: {
    children: 'Some text in a container!',
    className: 'bg-pinkLight'
  }
}

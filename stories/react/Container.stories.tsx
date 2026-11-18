import { Container } from '@/src/react/Container'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Container> = {
  title: 'React/Container',
  component: Container,
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

export const Default: ContainerStory = {
  args: {
    children: 'Some text in a container!',
    className: 'bg-neutral200'
  }
}

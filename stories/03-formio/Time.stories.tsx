import { createSingleFieldComponent, singleFieldArgTypes } from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Time',
  args: {
    label: 'Time field',
    required: false
  },
  argTypes: {
    ...singleFieldArgTypes
  },
  component: createSingleFieldComponent({ type: 'time' })
}

export default meta

type Story = StoryObj<typeof meta>

export const Optional: Story = {
  args: {
    label: 'Optional time field'
  }
}

export const Required: Story = {
  args: {
    label: 'Required time field',
    required: true
  }
}

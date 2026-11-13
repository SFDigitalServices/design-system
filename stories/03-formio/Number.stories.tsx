import { createSingleFieldComponent, singleFieldArgTypes } from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Number',
  args: {
    label: 'Number',
    required: false,
    errorMessage: 'Enter a number'
  },
  argTypes: {
    ...singleFieldArgTypes
  },
  component: createSingleFieldComponent({ type: 'number' })
}

export default meta

type Story = StoryObj<typeof meta>

export const Optional: Story = {
  args: {
    label: 'Optional number'
  }
}

export const Required: Story = {
  args: {
    label: 'Required number',
    required: true
  }
}

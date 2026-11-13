import { createSingleFieldComponent, singleFieldArgTypes } from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Currency',
  args: {
    label: 'How much money do you have on you?',
    required: false,
    errorMessage: 'Enter a dollar amount',
    validate: {
      min: 1,
      max: 1000
    }
  },
  argTypes: {
    ...singleFieldArgTypes,
    validate: {
      name: 'Validation options'
    }
  },
  component: createSingleFieldComponent({ type: 'currency' })
}

export default meta

type Story = StoryObj<typeof meta>

export const Optional: Story = {}

export const Required: Story = {
  args: {
    required: true
  }
}

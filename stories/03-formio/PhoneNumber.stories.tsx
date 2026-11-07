import { createSingleFieldComponent, singleFieldArgTypes } from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Phone number',
  args: {
    label: 'Phone number',
    required: false,
    errorMessage: 'Enter a valid phone number'
  },
  argTypes: {
    ...singleFieldArgTypes
  },
  component: createSingleFieldComponent({ type: 'phoneNumber' })
}

export default meta

type Story = StoryObj<typeof meta>

export const Optional: Story = {
  args: {
    label: 'Optional phone number'
  }
}

export const Required: Story = {
  args: {
    label: 'Phone number',
    required: true
  }
}

import { createSingleFieldComponent, singleFieldArgTypes } from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Text area',
  args: {
    label: 'Text field',
    required: false,
    rows: 3
  },
  argTypes: {
    ...singleFieldArgTypes,
    rows: {
      type: 'number',
      name: 'Rows',
      control: {
        min: 2
      }
    }
  },
  component: createSingleFieldComponent({ type: 'textarea' })
}

export default meta

type Story = StoryObj<typeof meta>

export const Optional: Story = {
  args: {
    label: 'Optional text field'
  }
}

export const Required: Story = {
  args: {
    label: 'Required text field',
    required: true
  }
}

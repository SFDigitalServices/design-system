import { createSingleFieldComponent, singleFieldArgTypes } from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Text',
  args: {
    label: 'Text field',
    required: false
  },
  argTypes: {
    ...singleFieldArgTypes,
    prefix: {
      name: 'Prefix',
      type: 'string'
    },
    suffix: {
      name: 'Suffix',
      type: 'string'
    }
  },
  component: createSingleFieldComponent({ type: 'textfield' })
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

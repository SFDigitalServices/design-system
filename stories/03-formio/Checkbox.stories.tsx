import React from 'react'
import { createSingleFieldComponent, singleFieldArgTypes } from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Checkbox',
  args: {
    label: 'Single checkbox',
    description: 'This is the checkbox description'
  },
  argTypes: {
    ...singleFieldArgTypes
  },
  component: createSingleFieldComponent({ type: 'checkbox' })
}

export default meta

type Story = StoryObj<typeof meta>

export const Optional: Story = {
  args: {
    label: 'Optional checkbox'
  }
}

export const Required: Story = {
  args: {
    label: 'Required checkbox',
    required: true,
    errorMessage: 'Please check the box'
  }
}

import React from 'react'
import { singleFieldArgTypes, createSingleFieldComponent } from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Email',
  args: {
    label: 'Email address',
    required: false,
    errorMessage: 'Enter a valid email address'
  },
  argTypes: {
    ...singleFieldArgTypes
  },
  component: createSingleFieldComponent({ type: 'email' })
}

export default meta

type Story = StoryObj<typeof meta>

export const Optional: Story = {
  args: {
    label: 'Optional email'
  }
}

export const Required: Story = {
  args: {
    label: 'Required email',
    required: true
  }
}

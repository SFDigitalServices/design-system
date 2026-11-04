import React from 'react'
import { singleFieldArgTypes, createSingleFieldComponent } from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Date and time',
  args: {
    label: 'Please enter a date and time',
    required: false,
    enableDate: true,
    enableTime: true
  },
  argTypes: {
    ...singleFieldArgTypes,
    enableDate: {
      type: 'boolean',
      name: 'Enable date picker'
    },
    enableTime: {
      type: 'boolean',
      name: 'Enable time picker'
    }
  },
  component: createSingleFieldComponent({ type: 'datetime' })
}

export default meta

type Story = StoryObj<typeof meta>

export const Optional: Story = {
  args: {
    label: 'Optional date and time'
  }
}

export const Required: Story = {
  args: {
    label: 'Required date and time',
    required: true
  }
}

export const DateOnly: Story = {
  args: {
    label: 'Pick a date',
    enableTime: false
  }
}

export const TimeOnly: Story = {
  args: {
    label: 'Pick a time',
    enableDate: false
  }
}

import React from 'react'
import { singleFieldArgTypes, createSingleFieldComponent } from './utils'
import type { Meta, StoryObj } from '@storybook/react'
import { DaySchema } from '@/design-system/formio'

const meta: Meta = {
  title: 'formio / fields / Date',
  args: {
    label: 'When were you born?',
    required: false,
    errorMessage: 'Enter a valid date',
    fields: {
      year: {
        type: 'number',
        required: true
      },
      month: {
        type: 'number',
        required: true
      },
      day: {
        type: 'number',
        required: true
      }
    }
  },
  argTypes: {
    ...singleFieldArgTypes,
    fields: {
      name: 'Field options'
    }
  },
  component: createSingleFieldComponent({ type: 'day' })
}

export default meta

type Story = StoryObj<typeof meta>

export const Optional: Story = {
  args: {
    label: 'Optional date'
  }
}

export const Required: Story = {
  args: {
    label: 'Required date',
    required: true
  }
}

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentFactory, createSingleFieldComponent } from './utils'
import { ColumnsSchema } from '@/design-system/formio'
import { disableArgTypes } from '../utils'

const meta: Meta<ColumnsSchema> = {
  title: 'formio / fields / Columns',
  component: createSingleFieldComponent({ type: 'columns' }),
  argTypes: {
    ...disableArgTypes('columns')
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const TwoUp: Story = {
  args: {
    columns: [
      {
        width: 6,
        components: [
          ComponentFactory.make({
            label: 'Name'
          })
        ]
      },
      {
        width: 6,
        components: [
          ComponentFactory.make({
            label: 'Age',
            type: 'number'
          })
        ]
      }
    ]
  }
}

export const ThreeUp: Story = {
  args: {
    columns: [
      {
        width: 4,
        components: [
          ComponentFactory.make({
            label: 'Name'
          })
        ]
      },
      {
        width: 4,
        components: [
          ComponentFactory.make({
            label: 'Age',
            type: 'number'
          })
        ]
      },
      {
        width: 4,
        components: [
          ComponentFactory.make({
            label: 'Cool?',
            type: 'checkbox'
          })
        ]
      }
    ]
  }
}

import React from 'react'
import { ComponentFactory, FormFactory, SingleFieldFormArgs } from './utils'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonSchema } from '@/design-system/formio'
import FormioForm from '@/design-system/components/FormioForm'
import { disableArgTypes } from '../utils'

type ButtonArgs = SingleFieldFormArgs<ButtonSchema>

const meta: Meta<ButtonArgs> = {
  title: 'formio / fields / Button',
  args: {
    label: 'Click me',
    description: ''
  },
  argTypes: {
    label: {
      name: 'Text'
    },
    description: {
      name: 'Description',
      type: 'string'
    },
    ...disableArgTypes('action')
  },
  component: (args) => (
    <FormioForm
      form={FormFactory.make({
        components: [
          ComponentFactory.make({
            type: 'button',
            ...args
          })
        ]
      })}
    />
  )
}

export default meta

type Story = StoryObj<typeof meta>

export const Submit: Story = {
  args: {
    label: 'Submit this form',
    action: 'submit'
  }
}

export const Reset: Story = {
  args: {
    label: 'Reset this form',
    action: 'reset'
  }
}

export const Custom: Story = {
  args: {
    label: 'Say hello',
    action: 'custom',
    custom: 'alert("Hello!")'
  }
}

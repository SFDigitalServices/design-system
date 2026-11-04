import {
  createSingleFieldComponent,
  singleFieldArgTypes,
  SingleFieldFormArgs
} from './utils'
import type { Meta, StoryObj } from '@storybook/react'
import type { SelectSchema } from '@/design-system/formio'

type SelectArgs = SingleFieldFormArgs<SelectSchema> & {
  values: object[]
}

const meta: Meta<SelectArgs> = {
  title: 'formio / fields / Dropdown',
  args: {
    label: 'Select a color',
    values: [
      { label: 'Black', value: 'black' },
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
      { label: 'Orange', value: 'orange' },
      { label: 'Red', value: 'red' },
      { label: 'Yellow', value: 'yellow' },
      { label: 'White', value: 'white' }
    ],
    errorMessage: 'Please select a color'
  },
  argTypes: {
    ...singleFieldArgTypes,
    values: {
      name: 'Values (options)'
    }
  },
  component: createSingleFieldComponent(
    ({ values, ...rest }) =>
      ({
        type: 'select',
        widget: 'html5',
        data: { values },
        ...rest
      } as SelectSchema)
  )
}

export default meta

type Story = StoryObj<typeof meta>

export const Optional: Story = {
  args: {
    label: 'Optional dropdown'
  }
}

export const Required: Story = {
  args: {
    label: 'Required dropdown',
    required: true
  }
}

import {
  createSingleFieldComponent,
  singleFieldArgTypes,
  SingleFieldFormArgs
} from './utils'
import type { Meta, StoryObj } from '@storybook/react'
import type { InputOption, SelectSchema } from '@/design-system/formio'

type SelectArgs = SingleFieldFormArgs<SelectSchema> & {
  values: InputOption[]
}

const meta: Meta<SelectArgs> = {
  title: 'formio / fields / Autocomplete',
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
    multiple: false,
    errorMessage: 'Please select a color'
  },
  argTypes: {
    ...singleFieldArgTypes,
    values: {
      name: 'Values (options)'
    },
    multiple: {
      name: 'Multiple values',
      type: 'boolean'
    }
  },
  component: createSingleFieldComponent(
    ({ values, ...rest }) =>
      ({
        type: 'select',
        widget: 'choicesjs',
        data: { values: makeValues(values) },
        ...rest
      } as SelectSchema)
  )
}

export default meta

type Story = StoryObj<typeof meta>

export const Optional: Story = {
  args: {
    label: 'Optional auto-complete'
  }
}

export const Required: Story = {
  args: {
    label: 'Required auto-complete',
    required: true
  }
}

export const MultipleValues: Story = {
  args: {
    label: 'Auto-complete with multiple values',
    description: 'Select at least one value',
    multiple: true,
    required: true
  }
}

function makeValues(
  value: string[] | InputOption[] | Record<string, string>
): InputOption[] {
  if (Array.isArray(value)) {
    return value.map((v) =>
      typeof v === 'string' ? { label: v, value: v } : (v as InputOption)
    )
  } else {
    return Object.entries(value).map(([value, label]) => ({ value, label }))
  }
}

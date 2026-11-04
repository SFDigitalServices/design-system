import { createSingleFieldComponent, singleFieldArgTypes } from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Selectboxes',
  args: {
    label: 'Select some colors',
    description: 'This is the selectboxes description',
    values: [
      { label: 'Black', value: 'black' },
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
      { label: 'Orange', value: 'orange' },
      { label: 'Red', value: 'red' },
      {
        label:
          'Under penalty of perjury, I hereby declare that the information contained within and submitted with the application is complete, true, and accurate. I understand that a misrepresentation of fact may be cause for rejection of this application, denial of a permit or suspension revocation of a permit issued, and other adverse action.',
        value: 'long label'
      },
      { label: 'Disabled', disabled: true }
    ]
  },
  argTypes: {
    ...singleFieldArgTypes,
    values: {
      name: 'Values (options)'
    }
  },
  component: createSingleFieldComponent({ type: 'selectboxes' })
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Basic options'
  }
}

export const Required: Story = {
  args: {
    label: 'This requires at least one checked option',
    required: true,
    errorMessage: 'Please select at least one color'
  }
}

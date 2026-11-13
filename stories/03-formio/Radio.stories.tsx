import { createSingleFieldComponent, singleFieldArgTypes } from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Radio',
  args: {
    label: 'Select one color',
    description: 'This is the radio buttons description',
    values: [
      { label: 'Black', value: 'black' },
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
      { label: 'Orange', value: 'orange' },
      { label: 'Red', value: 'red' },
      {
        label:
          'Under penalty of perjury, I hereby declare that the information contained within and submitted with the application is complete, true, and accurate. I understand that a misrepresentation of fact may be cause for rejection of this application, denial of a permit or suspension revocation of a permit issued, and other adverse action.',
        value: 'yellow'
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
  component: createSingleFieldComponent({ type: 'radio' })
}

export default meta

type Story = StoryObj<typeof meta>

export const Optional: Story = {
  args: {
    label: 'Optional radio'
  }
}

export const Required: Story = {
  args: {
    label: 'Required radio',
    required: true,
    errorMessage: 'Please select a color'
  }
}

import { createSingleFieldComponent } from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Datagrid',
  component: createSingleFieldComponent({
    type: 'datagrid',
    key: 'people',
    label: 'People',
    // @ts-expect-error derp
    components: [
      { type: 'textfield', key: 'name', label: 'Name' },
      { type: 'number', key: 'age', label: 'Age' }
    ]
  }),
  args: {
    dataPreview: true
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

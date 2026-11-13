import {
  createSingleFieldComponent,
  MailingAddressFactory,
  withFormSubmitted
} from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Fieldset',
  component: createSingleFieldComponent({
    type: 'fieldset',
    components: MailingAddressFactory.make().components[0].components
  }),
  args: { legend: 'Fieldset' }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

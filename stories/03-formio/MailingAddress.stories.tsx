import {
  createSingleFieldComponent,
  MailingAddressFactory,
  withFormSubmitted
} from './utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Mailing address',
  component: createSingleFieldComponent(MailingAddressFactory.make())
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Error: Story = {
  ...meta,
  decorators: [withFormSubmitted]
}

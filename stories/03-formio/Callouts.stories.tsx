// AKA Alerts

import { createSingleFieldComponent } from './utils'
import type { HTMLElementSchema } from '@/design-system/formio'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'formio / fields / Callouts',
  args: {
    content: 'This is an HTML element. <b>It should have bold text.</b>',
    tag: 'div'
  },
  argTypes: {
    content: {
      type: 'string',
      name: 'Content',
      description: 'Raw HTML content. Some sanitization is done in formio.js'
    },
    tag: {
      type: 'string',
      name: 'HTML tag',
      description: 'The outer HTML tag in which to wrap the content'
    }
  },
  component: createSingleFieldComponent({ type: 'htmlelement' })
}

export default meta

type Story = StoryObj<typeof meta>

const infoCalloutSchema: HTMLElementSchema = {
  label: 'Informational Alert',
  tag: 'div',
  className: 'flex flex-items-start bg-blue-1 p-40 mt-40 mb-100',
  attrs: [
    {
      attr: 'role',
      value: 'alert'
    }
  ],
  content: `
    <span class="d-none d-flex fg-blue-4 mr-2" data-icon="alert"><!-- no text here --></span>
    <span>
      <strong>Projects in plan review use Bluebeam </strong>
      <p>If your application is already in plan review, and you are responding to plan check comments, do not use this form. You should:&nbsp;</p>
      <ul>
        <li>Add your updated documents directly to the Bluebeam session, or</li>
        <li><a href="https://www.sf.gov/resubmit-plans-building-permit-application" target="_blank" rel="noopener noreferrer">Follow these instructions to upload revisions</a>, if you do not have access to Bluebeam.</li>
      </ul>
    </span>
  `,
  refreshOnChange: false,
  key: 'alertInformational1',
  type: 'htmlelement',
  input: false,
  tableView: false
}

export const InformationCallout: Story = {
  render: createSingleFieldComponent(infoCalloutSchema),
  args: {
    content: infoCalloutSchema.content
  }
}

const successCalloutSchema: HTMLElementSchema = {
  label: 'Success alert',
  tag: 'div',
  className: 'flex flex-items-start bg-green-1 p-40 mt-40 mb-100',
  attrs: [
    {
      attr: 'role',
      value: 'alert'
    }
  ],
  content: `
    <span class="fg-green-4 mr-2" data-icon="check"><!-- no text here --></span>
    <span>
      <strong>Projects in plan review use Bluebeam</strong>
      <p>If your application is already in plan review, and you are responding to plan check comments, do not use this form. You should:&nbsp;</p>
      <ul>
        <li>Add your updated documents directly to the Bluebeam session, or</li>
        <li><a href="https://www.sf.gov/resubmit-plans-building-permit-application" target="_blank" rel="noopener noreferrer">Follow these instructions to upload revisions</a>, if you do not have access to Bluebeam.</li>
      </ul>
    </span>
  `,
  refreshOnChange: false,
  key: 'alertSuccess',
  type: 'htmlelement',
  input: false,
  tableView: false
}
export const SuccessCallout: Story = {
  render: createSingleFieldComponent(successCalloutSchema),
  args: {
    content: successCalloutSchema.content
  }
}

const criticalCalloutSchema: HTMLElementSchema = {
  label: 'Ineligible alert',
  tag: 'div',
  className: 'flex flex-items-start bg-red-1 p-40 mt-40 mb-100',
  attrs: [
    {
      attr: 'role',
      value: 'alert'
    }
  ],
  content: `
    <span class="fg-red-4 mr-2" data-icon="delete"><!-- no text here --></span>
    <span>
      <strong>Projects in plan review use Bluebeam </strong>
      <p>If your application is already in plan review, and you are responding to plan check comments, do not use this form. You should:&nbsp;</p>
      <ul>
        <li>Add your updated documents directly to the Bluebeam session, or</li>
        <li><a href="https://www.sf.gov/resubmit-plans-building-permit-application" target="_blank" rel="noopener noreferrer">Follow these instructions to upload revisions</a>, if you do not have access to Bluebeam.</li>
      </ul>
    </span>
  `,
  refreshOnChange: false,
  key: 'alertIneligible',
  tags: ['shared'],
  type: 'htmlelement',
  input: false,
  tableView: false
}
export const CriticalCallout: Story = {
  render: createSingleFieldComponent(criticalCalloutSchema),
  args: {
    content: criticalCalloutSchema.content
  }
}

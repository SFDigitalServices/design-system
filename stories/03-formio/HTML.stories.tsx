import React from 'react'
import {
  ComponentFactory,
  createSingleFieldComponent,
  singleFieldSchema
} from './utils'
import type { HTMLElementSchema } from '@/design-system/formio'
import type { Meta, StoryObj } from '@storybook/react'
import dedent from 'dedent'
import FormioForm from '@/design-system/components/FormioForm'

const meta: Meta = {
  title: 'formio / fields / HTML content',
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

export const Basic: Story = {}

export const InfoAlert: Story = {
  args: {
    content: dedent`
      <span class="mr-2" data-icon="document"></span>
      <span><strong>We will ask you about:</strong>
        <ul>
          <li>Your project's location</li>
          <li>Your project details</li>
          <li>Your contact info</li>
        </ul>
      </span>
      <p>
        You will also upload your plans and other required forms.
      </p>
      <p>
        We will set up your building permit application, and email you your
        building permit application number.  We will then review your
        application for completeness, and email you the results of our
        Completeness Review.
      </p>
    `
  }
}

export const IneligibleAlert: Story = {
  render: createSingleFieldComponent({
    type: 'htmlelement',
    className: 'flex flex-items-start bg-red-1 p-40 mt-40 mb-100',
    attrs: [
      {
        attr: 'role',
        value: 'alert'
      }
    ]
  } as HTMLElementSchema),
  args: {
    content: dedent`
      <span class="fg-red-4 mr-2" data-icon="delete"><!-- ... --></span>
      <span>
        <strong>Projects in plan review use Bluebeam </strong>
        <p>If your application is already in plan review, and you are responding
        to plan check comments, do not use this form. You should:&nbsp;</p>
        <ul>
          <li>Add your updated documents directly to the Bluebeam session, or</li>
          <li>
            <a href="https://www.sf.gov/resubmit-plans-building-permit-application" target="_blank" rel="noopener noreferrer">
              Follow these instructions to upload revisions
            </a>, if you do not have access to Bluebeam.
          </li>
        </ul>
      </span>
    `
  }
}

export const Interpolations: Story = {
  args: {
    content: 'The value should show up here: "{{data.field}}".',
    value: 'Initial value'
  },
  render: ({ value, ...args }) => {
    const schema = singleFieldSchema({
      type: 'htmlelement',
      refreshOnChange: true,
      ...args
    } as HTMLElementSchema)
    schema.components.unshift(
      ComponentFactory.make({
        key: 'field',
        label: 'Type a value here'
      })
    )
    return (
      <FormioForm
        form={schema}
        submission={{
          data: {
            field: value
          }
        }}
      />
    )
  }
}

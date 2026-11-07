import React from 'react'
import FormioForm from '@/design-system/components/FormioForm'
import type { EmailSchema, WizardFormSchema } from '@/design-system/formio'
import { Alert } from '@/sfgov/components'
import type { Meta, StoryObj } from '@storybook/react'
import {
  ComponentFactory,
  PageFactory,
  withFormSubmitted,
  WizardFactory
} from './utils'

const meta: Meta<typeof FormioForm> = {
  title: 'formio / Form',
  component: (args) => {
    console.clear()
    return <FormioForm {...args} />
  },
  args: {
    isDev: true
  },
  argTypes: {
    src: {
      type: 'string',
      name: 'Schema URL',
      if: {
        arg: 'form',
        exists: false
      }
    },
    form: {
      name: 'Schema JSON',
      if: {
        arg: 'src',
        exists: false
      }
    },
    isDev: {
      type: 'boolean',
      name: 'Development mode'
    },
    options: {
      name: 'Form options'
    }
  },
  parameters: {
    controls: {
      exclude: /^(on.*|formioform|formReady|submission|url)$/
    }
  }
}

export default meta

type FormStory = StoryObj<typeof meta>

export const WithURL: FormStory = {
  ...meta,
  args: {
    ...meta.args,
    src: 'https://formio.sfgov.org/live11-ruehbbakcoznmcf/sfgovfeedbackform'
  },
  decorators: [
    (Story) => (
      <>
        <Alert
          variant="preview"
          description={[
            '<div>',
            '<b>This is a live form!</b> ',
            'Submissions and uploaded files may go into production systems. ',
            'Please consult with the delivery team before submitting forms from this site.',
            '</div>'
          ].join('')}
        />
        <Story />
      </>
    )
  ]
}

export const WithSchema: FormStory = {
  ...meta,
  args: {
    form: getFormSchema()
  }
}

export const WithErrors: FormStory = {
  ...meta,
  args: {
    ...meta.args,
    form: getFormSchema()
  },
  // @ts-expect-error derp
  decorators: [withFormSubmitted]
}

export const Completed: FormStory = {
  ...meta,
  args: {
    ...meta.args,
    form: getFormSchema(false)
  },
  // @ts-expect-error derp
  decorators: [withFormSubmitted]
}

function getFormSchema(required = true): WizardFormSchema {
  return WizardFactory.seed(123).make({
    title: 'Test form',
    components: [
      PageFactory.make({
        title: 'About you',
        components: [
          ComponentFactory.make({
            key: 'name',
            label: 'Your name',
            validate: {
              required
            }
          }),
          ComponentFactory.make({
            key: 'email',
            type: 'email',
            label: 'Email',
            validate: {
              required,
              customMessage: 'Enter a valid email address'
            }
          } as EmailSchema)
        ]
      })
    ]
  })
}

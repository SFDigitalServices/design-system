import React from 'react'
import { FormPage } from '@/sfgov/components'
import { FormPageFactory } from '@/sfgov/lib/factories'
import { FormPageData } from '@/sfgov/types'
import type { Meta, StoryObj } from '@storybook/react'

type FormArgs = {
  data: Partial<FormPageData>
  url: string
  submitted?: boolean
  page?: number
  component?: string
}

const meta: Meta<FormArgs> = {
  title: 'pages / Form',
  render: ({ data, url, submitted, page, component }) => (
    <FormPage
      // seeding the factory "locks" the randomness so we don't get different
      // random data on every page load
      page={FormPageFactory.seed(123).make({
        ...data,
        schema_url: url
      })}
      submitted={submitted}
      formComponentKey={component}
      formPage={page}
    />
  ),
  args: {
    submitted: false,
    component: '',
    page: 0
  },
  argTypes: {
    url: {
      name: 'Schema URL'
      // type: 'string',
      // control: {
      //   type: 'text',
      //   disable: true
      // }
    },
    page: {
      name: 'Skip to page',
      type: 'number',
      control: {
        min: 0
      },
      if: {
        arg: 'submitted',
        neq: true
      }
    },
    component: {
      name: 'Focus on component key',
      type: 'string'
    },
    submitted: {
      name: 'Submitted',
      type: 'boolean'
    }
  },
  parameters: {
    container: false,
    controls: {
      exclude: ['data']
    }
  }
}

export default meta

type FormPageStory = StoryObj<typeof meta>

export const Default: FormPageStory = {
  name: 'Feedback form',
  args: {
    ...meta.args,
    url: 'https://formio.sfgov.org/live11-ruehbbakcoznmcf/sfgovfeedbackform'
  }
}

export const BuildingPermit: FormPageStory = {
  name: 'Apply for a building permit',
  args: {
    ...meta.args,
    url: 'https://formio.sfgov.org/dbi/applyforabuildingpermit2024'
  }
}

export const HoursOfOperation: FormPageStory = {
  name: 'Hours of operation',
  args: {
    ...meta.args,
    url: 'https://formio.dev.sf.gov/dev-ruehbbakcoznmcf/hoursofoperation'
  }
}

/* eslint-disable no-return-assign */
import React, { useMemo, useState } from 'react'
import { cloneDeep } from 'lodash'
import {
  singleFieldArgTypes,
  DATA_PREVIEW_SCHEMA,
  CopyClipboard
} from './utils'
import type { Meta, StoryObj } from '@storybook/react'
import {
  HoursOfOperation,
  HoursOfOperationOutput,
  type DayValue
} from '@/design-system/formio/components/HoursOfOperation'
import { classes, HeadingLg } from '@/design-system'
import FormioForm from '@/design-system/components/FormioForm'
import { PageFactory } from '@/design-system/formio/factories'
import { WELL_CLASSES } from '@/design-system/formio/templates/well'

type LanguageCode = 'en' | 'es' | 'fil' | 'zh-hant' | 'vi-vn'

const DAY_KEYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
] as const
type DayOfWeek = (typeof DAY_KEYS)[number]

type HOOArgs = {
  label: string
  componentKey: string
  dataPreview: boolean
  debugLayout?: boolean
  lang?: LanguageCode
  defaultData?: Partial<Record<DayOfWeek, DayValue[]>>
}

const WEEKDAYS: DayOfWeek[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday'
]

const meta: Meta<HOOArgs> = {
  title: 'formio / components / Hours of operation',
  args: {
    label: 'Hours of operation',
    componentKey: 'hoursOfOperation',
    dataPreview: true,
    debugLayout: false
  },
  argTypes: {
    ...singleFieldArgTypes,
    componentKey: {
      name: 'form.io key',
      type: 'string'
    },
    lang: {
      name: 'Language',
      options: ['en', 'es', 'fil', 'zh-hant', 'vi-vn'],
      control: {
        type: 'select',
        labels: {
          en: 'English',
          es: 'Spanish',
          fil: 'Filipino',
          'zh-hant': 'Chinese',
          'vi-vn': 'Vietnamese'
        }
      }
    },
    debugLayout: {
      name: 'Debug layout',
      type: 'boolean'
    },
    defaultData: {
      name: 'Default data'
    }
  },
  component({
    componentKey: key,
    label,
    lang,
    dataPreview,
    debugLayout,
    defaultData
  }) {
    const dayLabels = DAYS_BY_LANG[lang || 'en']
    const input = useMemo(
      () =>
        HoursOfOperation({
          key,
          label,
          days: Object.fromEntries(
            DAY_KEYS.map((day, i) => [day, dayLabels[i]])
          ),
          debug: debugLayout
        }),
      [key, label, debugLayout, lang]
    )
    const output = useMemo(
      () =>
        HoursOfOperationOutput({
          targetKey: key,
          type: 'textarea'
        }),
      [key]
    )
    /**
     * NB: we need to create deep copies of these because the originals are
     * mutated by our upgrade() function. These are the values that we display
     * in the JSON output, so they need to include the original placeholders for
     * validation and calculated values that get replaced with functions, which
     * can't be serialized as JSON.
     */
    const originalInputSchema = useMemo(() => cloneDeep(input), [input])
    const originalOutputSchema = useMemo(() => cloneDeep(output), [output])
    return (
      <>
        <FormioForm
          isDev={true}
          form={{
            type: 'form',
            display: 'wizard',
            components: [
              PageFactory.make({
                title: 'Hours of operation',
                components: [
                  { ...input, defaultValue: defaultData },
                  output,
                  ...(dataPreview ? [DATA_PREVIEW_SCHEMA] : [])
                ]
              })
            ]
          }}
          formReady={(form) => {
            if (defaultData) {
              form.submit()
            }
          }}
        />
        <JSONDisplay
          value={originalInputSchema}
          title="Input component schema"
        />
        <JSONDisplay
          value={originalOutputSchema}
          title="Output component schema"
        />
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Data9to5: Story = {
  args: {
    defaultData: Object.fromEntries(
      WEEKDAYS.map((day) => [day, [{ start: '09:00', end: '17:00' }]])
    )
  }
}

export const DataClosedLunch: Story = {
  args: {
    defaultData: Object.fromEntries(
      WEEKDAYS.map((day) => [
        day,
        [
          { start: '09:00', end: '11:30' },
          { start: '13:00', end: '17:00' }
        ]
      ])
    )
  }
}

export const InvalidDuplicateTimes: Story = {
  args: {
    defaultData: {
      monday: [
        { start: '09:00', end: '17:00' },
        { start: '09:00', end: '17:00' }
      ]
    }
  }
}

export const InvalidOverlappingTimes: Story = {
  args: {
    defaultData: {
      monday: [
        { start: '09:00', end: '12:00' },
        { start: '11:00', end: '14:00' }
      ]
    }
  }
}

export const InvalidReversedTimes: Story = {
  args: {
    defaultData: {
      monday: [{ start: '17:00', end: '09:00' }]
    }
  }
}

export const InvalidAdjacentTimes: Story = {
  args: {
    defaultData: {
      monday: [
        { start: '09:00', end: '12:00' },
        { start: '12:00', end: '16:00' }
      ]
    }
  }
}

const DAYS_BY_LANG: Record<LanguageCode, string[]> = {
  en: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ],
  es: [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
  ],
  fil: [
    'Lunes',
    'Martes',
    'Miyerkules',
    'Huwebes',
    'Biyernes',
    'Sabado',
    'Linggo'
  ],
  'zh-hant': [
    '星期一',
    '星期二',
    '星期三',
    '星期四	',
    '星期五',
    '星期六',
    '星期日'
  ],
  'vi-vn': [
    'Thứ hai',
    'Thứ ba',
    'Thứ Tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy',
    'Chủ nhật'
  ]
}

function JSONDisplay({ value, title }: { value: unknown; title: string }) {
  const json = useMemo(() => JSON.stringify(value, null, 2), [value])
  const [open, setOpen] = useState(false)
  return (
    <details open={open} onToggle={() => setOpen(!open)}>
      <HeadingLg as="summary" className="cursor-pointer">
        {title}
      </HeadingLg>
      <div className={classes(WELL_CLASSES, 'overflow-x-auto relative')}>
        <pre>{json}</pre>
        <div className="absolute top-8 right-8">
          <CopyClipboard clipboardText={json} />
        </div>
      </div>
    </details>
  )
}

import { Formio, type Form } from 'formiojs'
import moment from 'moment'
import type { DataGridSchema } from '../types'
import type {
  DayErrors,
  DayValue,
  DayValues,
  HoursOfOperationOutputSchema,
  HoursOfOperationSchema
} from './HoursOfOperation'
import {
  HoursOfOperation,
  HoursOfOperationOutput,
  stringifyDayValues,
  validateDayGrid,
  VALIDATE_DAY_GRID_ERROR_DEFAULTS
} from './HoursOfOperation'

// FIXME: we should not need to do this!
jest.setTimeout(10000)

describe.skip('HoursOfOperation()', () => {
  it('returns a container component', () => {
    expect(HoursOfOperation({ key: 'hours', label: 'Hours' })).toEqual(
      expect.objectContaining({
        type: 'container',
        key: 'hours',
        label: 'Hours'
      })
    )
  })

  it('uses the default days', () => {
    const { components } = HoursOfOperation({ key: 'hoo', label: '' })
    expect(components).toHaveLength(7)
    expect(components.map((c) => c.type)).toEqual(repeat('columns', 7))
  })

  it('accepts custom days', () => {
    const { components } = HoursOfOperation({
      key: 'hoo',
      label: '',
      days: {
        saturday: 'Saturday!',
        sunday: 'Sunday!'
      }
    })
    expect(components).toHaveLength(2)
    expect(components[0].key).toBe('saturdayColumns')
    expect(
      // @ts-expect-error derp
      components[0].columns[0].components[0].columns[0].components[0].content
    ).toBe('Saturday!')
  })

  describe.skip('excludeFromAirtable', () => {
    it('excludes from Airtable by default', () => {
      expect(
        HoursOfOperation({ key: 'hoo', label: 'lol' }).properties?.[
          'airtable:exclude'
        ]
      ).toBe('true')
    })
    it('respects excludeFromAirtable: false', () => {
      expect(
        HoursOfOperation({
          key: 'hoo',
          label: 'lol',
          excludeFromAirtable: false
        }).properties?.['airtable:exclude']
      ).toBe(undefined)
    })
  })
})

describe.skip('HoursOfOperationOutput()', () => {
  it('returns a hidden component by default', () => {
    expect(
      HoursOfOperationOutput({
        targetKey: 'hoo'
      })
    ).toEqual(
      expect.objectContaining({
        type: 'hidden',
        properties: expect.objectContaining({
          targetKey: 'hoo',
          timeFormat: 'h:mma',
          closedText: 'Closed'
        }),
        calculateValue: expect.stringMatching(/\bvalue\s*=/)
      })
    )
  })

  it('respects type: textarea', () => {
    expect(
      HoursOfOperationOutput({
        targetKey: 'hoo',
        type: 'textarea'
      }).type
    ).toEqual('textarea')
  })

  it('respects timeFormat', () => {
    expect(
      HoursOfOperationOutput({ targetKey: 'hoo', timeFormat: 'hh:mm' })
        .properties?.timeFormat
    ).toBe('hh:mm')
  })

  it('respects closedText', () => {
    expect(
      HoursOfOperationOutput({ targetKey: 'hoo', closedText: 'CLOSED' })
        .properties?.closedText
    ).toBe('CLOSED')
  })
})

describe.skip('stringifyDayValues()', () => {
  it.each<[DayValues, string[]]>([
    [
      {
        monday: [{ start: '09:00', end: '17:00' }]
      },
      ['Monday: 9am - 5pm']
    ],
    [
      {
        monday: [],
        tuesday: [
          { start: '10:30', end: '12:00' },
          { start: '14:00', end: '02:00' }
        ]
      },
      ['Monday: Closed', 'Tuesday: 10:30am - 12pm, 2pm - 2am']
    ]
  ])('stringifies %s value into %s', async (value, expected) => {
    const { output } = await formFixture('hoo', value)
    expect(
      stringifyDayValues({
        component: output.component,
        instance: output,
        data: {
          hoo: value
        },
        moment,
        value: ''
      })
    ).toEqual(expected.join('\n'))
  })
})

describe.skip('validateDayGrid()', () => {
  it.each<{
    values: DayValue[]
    expected: boolean | string
    errors?: Partial<DayErrors>
  }>([
    {
      values: [{ start: '09:00', end: '17:00' }],
      expected: true
    },
    {
      values: [
        { start: '09:00', end: '17:00' },
        { start: '09:00', end: '17:00' }
      ],
      expected: VALIDATE_DAY_GRID_ERROR_DEFAULTS.duplicateTimes
    },
    {
      values: [],
      expected: true
    },
    {
      values: [
        { start: '09:00', end: '10:00' },
        { start: '11:00', end: '17:00' },
        { start: '18:00', end: '20:00' },
        { start: '21:00', end: '22:00' },
        { start: '12:00', end: '17:00' }
      ],
      expected: 'Custom overlapping times error',
      errors: {
        overlappingTimes: 'Custom overlapping times error'
      }
    },
    {
      values: [
        { start: '09:00', end: '10:00' },
        { start: '10:00', end: '12:00' }
      ],
      expected: true,
      errors: {
        adjacentTimes: undefined
      }
    },
    {
      values: [{ start: '17:00', end: '12:00' }],
      expected: VALIDATE_DAY_GRID_ERROR_DEFAULTS.reversedTimes
    },
    {
      values: [
        { start: '12:00', end: '16:00' },
        { start: '16:00', end: '20:00' }
      ],
      expected: VALIDATE_DAY_GRID_ERROR_DEFAULTS.adjacentTimes
    }
  ])(
    'validates `$values` as "$expected"',
    async ({ values, expected, errors }) => {
      const { form } = await formFixture('hoo')
      const { component } = form.getComponent<DataGridSchema>('monday')
      if (errors) component.errors = errors
      expect(
        validateDayGrid({
          input: values,
          valid: '',
          component
        })
      ).toEqual(expected)
    }
  )
})

async function formFixture(key = 'hoo', value?: DayValues) {
  const form: Form = await Formio.createForm(
    document.createElement('div'),
    {
      type: 'form',
      components: [
        HoursOfOperation({ key, label: 'Hours of operation' }),
        HoursOfOperationOutput({
          targetKey: key
        })
      ]
    },
    {
      submission: {
        data: {
          [key]: value
        }
      }
    }
  )
  await form.ready
  return {
    form,
    input: form.getComponent<HoursOfOperationSchema>(key),
    output: form.getComponent<HoursOfOperationOutputSchema>(`${key}Text`)
  }
}

function repeat<T>(value: T, len: number) {
  return Array(len)
    .fill(value, 0, len)
    .map(() => value)
}

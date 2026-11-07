import { classes } from '../../react'
import type moment from 'moment'
import type {
  ColumnsSchema,
  ComponentInstance,
  ContainerSchema,
  DataGridSchema,
  HiddenSchema,
  TextAreaSchema,
  TimeSchema
} from '../types'

type ComponentFactoryProps = {
  key: string
  label: string
  debug?: boolean
}

export type DayKey =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

/**
 * This is the type
 */
export type DayErrors = {
  reversedTimes: string
  duplicateTimes: string
  adjacentTimes: string
  overlappingTimes: string
}

/**
 * These are the default English error messages used to validate
 */
export const VALIDATE_DAY_GRID_ERROR_DEFAULTS = Object.freeze({
  duplicateTimes: 'Please remove duplicate times',
  overlappingTimes: 'Start and end times should not overlap',
  reversedTimes: 'Start time should come before end time',
  adjacentTimes: 'Please combine time ranges with the same start and end'
})

export const DEFAULT_DAYS: Record<DayKey, string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday'
}

// this is the data structure of a single day's datagrid values
export type DayValue = { start: string; end: string }
export type DayValues = Partial<Record<DayKey, DayValue[]>>

export type HoursOfOperationProps = ComponentFactoryProps & {
  /**
   * A mapping of day component keys to labels. The default is all days of the
   * week in lowercase and their English names as labels ( 'monday': 'Monday',
   * etc.). The display order is determined by the order they're defined in the
   * object literal, so if you want Sunday first you would pass:
   *
   * ```js
   * days: { sunday: 'Sunday', monday: 'Monday', ...etc }
   * ```
   */
  days?: Record<string, string>
  /**
   * Whether to exclude this component from Airtable dynamic mapping. The
   * default is true, which assumes that you've also included a text output
   * component generated with the correct targetKey:
   *
   * ```ts
   * components: [
   *   HoursOfOperation({ key: 'hoursOfOperation' }),
   *   HoursOfOperationOutput({ targetKey: 'hoursOfOperation' })
   * ]
   * ```
   */
  excludeFromAirtable?: boolean
}

// These are the placeholder values for the validation and calculated value
// functions in the input and output components, respectively. We store them
export const VALIDATE_DAY_GRID_PLACEHOLDER =
  '/* PLACEHOLDER: validateDayGrid() */valid = true'
export const CALULATE_DAY_VALUES_PLACEHOLDER =
  '/* PLACEHOLDER: stringifyDayValues() */value = ""'

export type HoursOfOperationSchema = ContainerSchema
export type HoursOfOperationOutputSchema = HiddenSchema | TextAreaSchema

/**
 * Create an Hours of Operation 'container' component schema with the given key,
 * label, and optional days of the week. The key will be passed down to child
 * components so that they have a consistent naming scheme, allowing you to use
 * multiple instances of this component in a single form (as long as the schemas
 * were generated in code).
 */
export function HoursOfOperation({
  key,
  label,
  debug,
  days,
  /* istanbul ignore next */
  excludeFromAirtable = true
}: HoursOfOperationProps) {
  return {
    type: 'container',
    key,
    label,
    customClass: classes('flex flex-col divide-y-1 divide-neutral200'),
    components: Object.entries(days || DEFAULT_DAYS).map(([key, label]) =>
      dayComponentFactory({ key, label, debug })
    ),

    properties: /* istanbul ignore next */ excludeFromAirtable
      ? {
          // exclude this component from Airtable
          'airtable:exclude': 'true'
        }
      : undefined
  } satisfies HoursOfOperationSchema
}

export type HoursOfOperationOutputProps = {
  type?: 'hidden' | 'textarea'
  targetKey: string
  timeFormat?: string
  closedText?: string
}

/**
 * Create a hidden or visible (textarea) component to store the human-readable
 * text output of a component created with `HoursOfOperation()` This component
 * requires the component key of an HoursOfOperation component. Use it like so:
 *
 * ```ts
 * const input = HoursOfOperation({ key: 'hoo', label: 'Hours of Operation' })
 * const output = HoursOfOperationOutput({ targetKey: 'hoo' })
 * const schema: FormSchema = {
 *   type: 'form',
 *   title: 'Hours of operation',
 *   components: [input, output]
 * }
 * ```
 */
export function HoursOfOperationOutput({
  type,
  targetKey,
  timeFormat,
  closedText
}: HoursOfOperationOutputProps): HoursOfOperationOutputSchema {
  return {
    type: type || 'hidden',
    key: `${targetKey}Text`,
    label: '',
    hideLabel: true,
    disabled: true,
    customClass: classes('font-monospace whitespace-pre'),
    properties: {
      targetKey,
      timeFormat: timeFormat || 'h:mma',
      closedText: closedText || 'Closed'
    },
    calculateValue: CALULATE_DAY_VALUES_PLACEHOLDER,
    redrawOn: targetKey
  } as HoursOfOperationOutputSchema
}

/**
 * This is a factory for components that render inputs for a single day of the
 * week in an HoursOfOperation container. Formio 'columns' components are used
 * to create a nested layout for each day, with the label (day of the week) and
 * the conditionally hidden "Closed" text in the first column and the datagrid
 * input component in the second.
 * ┌───────────────────────┬──────────────┐
 * │ ┌─────────┬─────────┐ │ ┌──────────┐ │
 * │ │ Monday  │ Closed  │ │ │ Datagrid │ │
 * │ └─────────┴─────────┘ │ └──────────┘ │
 * └───────────────────────┴──────────────┘
 * @see {dayGridFactory}
 */
function dayComponentFactory({ key, label, debug }: ComponentFactoryProps) {
  return {
    key: `${key}Columns`,
    label,
    hideLabel: true,
    type: 'columns',
    customClass: classes(
      'w-full py-8 !my-0',
      /* istanbul ignore next */
      debug && 'bg-warning100'
    ),
    properties: {
      'column.0.className': classes(
        'pt-8',
        'absolute basis-0',
        'md:relative md:basis-1/4'
      ),
      'column.1.className': classes(
        'basis-full',
        'md:basis-3/4',
        /* istanbul ignore next */
        debug && 'bg-success100'
      )
    },
    columns: [
      {
        width: 3,
        components: [
          {
            type: 'columns',
            key: `${key}LabelColumns`,
            label: '',
            hideLabel: true,
            customClass: classes('!gap-x-4'),
            properties: {
              'column.0.className': classes(
                // XXX: this is intended to be wider than the longest translated
                // day of the week, which is "Miyerkules" (as of this writing)
                '!min-w-[8em]',
                /* istanbul ignore next */
                debug && 'bg-white'
              ),
              'column.1.className': classes(
                '!min-w-[5em]',
                'text-neutral500',
                /* istanbul ignore next */
                debug && 'bg-danger100'
              )
            },
            columns: [
              {
                width: 6,
                components: [
                  {
                    type: 'htmlelement',
                    key: `${key}Label`,
                    tag: 'span',
                    // refreshOnChange: true,
                    content: label
                  }
                ]
              },
              {
                width: 6,
                components: [
                  {
                    type: 'htmlelement',
                    key: `${key}Closed`,
                    content: 'Closed',
                    tag: 'span',
                    conditional: {
                      show: true,
                      when: key,
                      eq: ''
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        width: 9,
        // offset: 3,
        components: [dayGridFactory({ key, label, debug })]
      }
    ]
  } satisfies ColumnsSchema
}

/**
 * Creates a tabular datagrid component for a single day of the week.
 * ┌───────────────────────────────────────┐
 * │ ┌────────────┬───────┬──────────┬───┐ │
 * │ │ Start time │ "to"  │ End time │ X │ │
 * │ ├────────────┼───────┼──────────┼───┤ │
 * │ │ Start time │ "to"  │ End time │ X │ │
 * │ └────────────┴───────┴──────────┴───┘ │
 * └───────────────────────────────────────┘
 */
function dayGridFactory({
  key,
  label,
  debug
}: ComponentFactoryProps): DataGridSchema {
  return {
    key,
    type: 'datagrid',
    label,
    hideLabel: true,
    // place the "Add hours"
    addAnother: 'Add hours',
    addAnotherPosition: 'top',
    customClass: classes('!my-0 gap-x-4'),
    properties: {
      addAnotherIcon: 'plus',
      'column.0.className': classes(
        'align-bottom',
        /* istanbul ignore next */
        debug && 'bg-primary50'
      ),
      'column.1.className': classes('align-bottom')
    },
    initEmpty: true,
    tableView: false,
    components: [
      {
        type: 'columns',
        key: `${key}GridColumns`,
        label: '',
        hideLabel: true,
        customClass: classes('!gap-8 items-end justify-between'),
        properties: {
          'column.0.className': classes('basis-1/2'),
          'column.1.className': classes('basis-[1em] pb-8'),
          'column.2.className': classes('basis-1/2')
        },
        columns: [
          {
            width: 4,
            components: [timeFactory({ key: 'start', label: 'Start' })]
          },
          {
            width: 4,
            components: [
              {
                type: 'htmlelement',
                content: 'to',
                customClass: classes('text-center shrink'),
                key: `${key}To`
              }
            ]
          },
          {
            width: 4,
            components: [timeFactory({ key: 'end', label: 'End' })]
          }
        ]
      }
    ],
    validate: {
      custom: VALIDATE_DAY_GRID_PLACEHOLDER
    },
    errors: VALIDATE_DAY_GRID_ERROR_DEFAULTS
  }
}

function timeFactory({ key, label }: ComponentFactoryProps): TimeSchema {
  return {
    type: 'time',
    key,
    label,
    hideLabel: true,
    dataFormat: 'HH:mm',
    // attributes: { step: '900' },
    customClass: '!mb-0',
    validate: {
      required: true,
      customMessage: `${label} time is required`
    },
    properties: {
      inputClass: classes('!h-[40px]')
    }
  }
}

export type ValidateDayContext = {
  input: DayValue[]
  valid?: boolean | string
  component: DataGridSchema
}

/**
 * This is the custom validation function for datagrid components that store
 * data for each day's times.
 */
export function validateDayGrid({
  input,
  valid,
  component
}: ValidateDayContext) {
  // the presence of each error message indicates whether to perform that type
  // of validation
  const { reversedTimes, duplicateTimes, adjacentTimes, overlappingTimes } =
    component.errors as DayErrors
  // if there are no values, yield to formio's built-in validator, which will
  // handle messaging if the component is required
  if (!input || !input.length) {
    return (valid = true)
  }

  if (reversedTimes) {
    // validate that none of the empty times have reversed (or equal) start and
    // end times
    const nonEmptyTimes = input.filter((v) => v.start && v.end)
    if (nonEmptyTimes.some((v) => v.end <= v.start)) {
      return (valid = reversedTimes)
    }
  }
  if (duplicateTimes) {
    // validate that none of the values have duplicate start and end times
    const unique = new Set(input.map((v) => JSON.stringify([v.start, v.end])))
    if (unique.size < input.length) {
      return (valid = duplicateTimes)
    }
  }

  if (adjacentTimes || overlappingTimes) {
    const sorted = input.slice().sort((a, b) => a.start.localeCompare(b.start))
    let { end } = sorted.shift()!
    for (const next of sorted) {
      if (adjacentTimes && next.start === end) {
        return (valid = adjacentTimes)
      } else if (overlappingTimes && next.start < end) {
        return (valid = overlappingTimes)
      }
      end = next.end
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (valid = true)
}

export type CalculateValueContext = {
  component: HoursOfOperationOutputSchema
  data: Record<string, DayValues>
  moment: typeof moment
  value: string
  instance: ComponentInstance
}

/* istanbul ignore next */
export function stringifyDayValues({
  component,
  data,
  value,
  moment,
  instance
}: CalculateValueContext): string {
  const { targetKey, timeFormat, closedText } = component.properties || {}
  if (!targetKey) {
    return 'Error: properties.targetKey is not set'
  }
  const container = instance.root.getComponent(targetKey)
  const days = data[targetKey] as DayValues | undefined

  value = days
    ? Object.entries(days)
        .map(([day, values]) => {
          const label = container?.getComponent(day)?.component.label || day
          const times = values
            .filter((v) => v.start && v.end)
            .sort((a, b) => a.start.localeCompare(b.start))
            .map(({ start, end }) =>
              [start, end]
                .map((t) =>
                  moment(`2000-01-01 ${t}`)
                    .format(timeFormat)
                    .replace(':00', '')
                )
                .join(' - ')
            )
            .join(', ')
          return `${label}: ${times || closedText || 'Closed'}`
        })
        .join('\n')
    : ''
  return value
}

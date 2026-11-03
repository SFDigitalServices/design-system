import { Utils } from '@formio/react'
import {
  CALULATE_DAY_VALUES_PLACEHOLDER,
  HoursOfOperation,
  HoursOfOperationOutput,
  setComponentsValidateOnBlur,
  stringifyDayValues,
  upgradeHoursOfOperation,
  validateDayGrid,
  VALIDATE_DAY_GRID_PLACEHOLDER
} from '.'
import { ComponentFactory } from '../factories'
import type { AnyComponentSchema, FormSchema } from '../types'

describe('setComponentsValidateOnBlur', () => {
  function formSchemaFixture(): FormSchema {
    return {
      type: 'form',
      title: 'Contains Address Lookup',
      display: 'form',
      components: [
        ComponentFactory.make({
          key: 'name',
          label: 'name',
          validateOn: 'change'
        }),
        ComponentFactory.make({
          key: 'phoneNumber',
          label: 'phone number',
          validateOn: 'change'
        }),
        ComponentFactory.make({
          key: 'selectProjectAddress',
          label: 'project address',
          validateOn: 'change'
        }),
        ComponentFactory.make({
          key: 'chooseLotNumber',
          label: 'lot number',
          validateOn: 'change'
        })
      ]
    }
  }

  it('sets component.validateOn to blur for all components, except for custom keys', () => {
    const schema = formSchemaFixture()
    const components = schema.components

    setComponentsValidateOnBlur(schema)

    expect(components[0].validateOn).toBe('blur')
    expect(components[1].validateOn).toBe('blur')
    expect(components[2].validateOn).toBe('change')
    expect(components[3].validateOn).toBe('change')
  })
})

describe('upgradeHoursOfOperation()', () => {
  function formSchemaFixture(): FormSchema {
    const key = 'hoo'
    return {
      type: 'form',
      title: 'Hours of operation',
      display: 'form',
      components: [
        HoursOfOperation({ key, label: '' }),
        HoursOfOperationOutput({ targetKey: key })
      ]
    }
  }

  it('replaces the day grid validate.custom placeholders', () => {
    const schema = formSchemaFixture()
    // sanity check
    const days = Utils.searchComponents(schema.components, {
      'validate.custom': VALIDATE_DAY_GRID_PLACEHOLDER
    })
    expect(days).toHaveLength(7)
    upgradeHoursOfOperation(schema)
    expect(days.map((c: AnyComponentSchema) => c.validate?.custom)).toEqual(
      repeat(validateDayGrid, 7)
    )
  })

  it('replaces the calculated value of the output component', () => {
    const schema = formSchemaFixture()
    // sanity check
    const output = Utils.searchComponents(schema.components, {
      calculateValue: CALULATE_DAY_VALUES_PLACEHOLDER
    })
    expect(output).toHaveLength(1)
    upgradeHoursOfOperation(schema)
    expect(output[0].calculateValue).toBe(stringifyDayValues)
  })
})

function repeat<T>(value: T, len: number) {
  return Array(len)
    .fill(value, 0, len)
    .map(() => value)
}

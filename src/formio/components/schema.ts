import { Utils } from '@formio/react'
import type { FormSchema, ComponentSchema } from '../types'
import {
  CALULATE_DAY_VALUES_PLACEHOLDER,
  stringifyDayValues,
  VALIDATE_DAY_GRID_PLACEHOLDER,
  validateDayGrid
} from './HoursOfOperation'

/**
 * Upgrade all of the custom components in this form schema in place.
 */
export function upgrade(schema: FormSchema) {
  try {
    upgradeHoursOfOperation(schema)
    setComponentsValidateOnBlur(schema)
  } catch (error) /* istanbul ignore next */ {
    console.error('failed to upgrade formio schema:', error)
  }
}

export function setComponentsValidateOnBlur(schema: FormSchema) {
  /**
   * We generally want to validate on blur, but have custom components with
   * logic attached to validation that we want to run on change.
   */
  const customKeys = [
    'selectProjectAddress',
    'chooseLotNumber',
    'chooseAddress'
  ]
  Utils.eachComponent(schema.components, (component: ComponentSchema) => {
    if (component.key && customKeys.includes(component.key)) {
      component.validateOn = 'change'
    } else {
      component.validateOn = 'blur'
    }
  })
}

/**
 * Upgrade a form schema with custom validations (for input) and calculated
 * values (for output). This modifies the components in place, replacing the
 * placeholder expression strings with the actual function.
 */
export function upgradeHoursOfOperation(form: FormSchema) {
  for (const comp of Utils.searchComponents(form.components, {
    'validate.custom': VALIDATE_DAY_GRID_PLACEHOLDER
  })) {
    comp.validate.custom = validateDayGrid
  }
  for (const comp of Utils.searchComponents(form.components, {
    calculateValue: CALULATE_DAY_VALUES_PLACEHOLDER
  })) {
    comp.calculateValue = stringifyDayValues
  }
}

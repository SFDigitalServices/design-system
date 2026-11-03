/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import h from 'vhtml'
import type { ComponentProps } from 'react'
import type { ComponentContext, FormSchema } from '../types'
import { omit } from '../utils'
import { classed } from '@tw-classed/core'

export default { form }

// There's one weird case in the Webform class that calls
// `setAlert('alert alert-danger', ...)`
// https://github.com/formio/formio.js/blob/v4.21.3/src/Webform.js#L705
const WRONG_VERSION_ALERT_TYPE = 'alert alert-danger'

// https://github.com/formio/formio.js/blob/v4.21.3/src/components/_classes/input/Input.js#L157-L164
type AlertContext = ComponentContext<FormSchema> & {
  // https://github.com/formio/formio.js/blob/v4.21.3/src/Webform.js#L705
  type: 'danger' | 'warning' | 'success' | typeof WRONG_VERSION_ALERT_TYPE
  message: string
  attrs: ComponentProps<'div'>
}

export const alertClass = classed({
  base: 'mt-20 rounded-4 p-16 mb-8 border-1 border-solid border-current *:!my-0 !space-y-8',
  variants: {
    type: {
      danger: 'text-danger600 bg-danger100',
      success: 'text-success600 bg-success100',
      warning: 'text-warning600 bg-warning100',
      info: 'text-information600 bg-information100'
    }
  },
  defaultVariants: {
    type: 'info'
  }
})

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/alert/form.ejs
 */
export function form({ type, message, ...ctx }: AlertContext) {
  const attrs = omit(ctx.attrs, ['class', 'style', 'role'])
  // istanbul ignore next
  if (type === WRONG_VERSION_ALERT_TYPE) type = 'danger'
  return (
    <div
      role="alert"
      className={alertClass({ type })}
      dangerouslySetInnerHTML={{ __html: message }}
      {...attrs}
    />
  )
}

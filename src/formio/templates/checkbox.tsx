/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import { classes } from '../../react'
import h from 'vhtml'
import type { CheckboxSchema, ComponentContext } from '../types'
import { omit } from '../utils'

export default { form }
export type CheckboxContext = ComponentContext<CheckboxSchema> & {
  input: {
    type: 'input'
    component: CheckboxSchema
    changeEvent: string
    attr: Record<string, string>
    label: string
    labelClass: string
  }
  checked: boolean
  tooltip: string
}
/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/checkbox/Checkbox.js#L115C2-L120
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/checkbox/form.ejs
 */
export function form({ component, instance, input, ...ctx }: CheckboxContext) {
  const uniqueId = `${instance.id}-${component.key}`
  // omit "class" from attrs, because that class name adds css baggage
  const attrs = omit(input.attr, ['class'])
  return (
    <label
      className={classes(input.labelClass, 'flex items-center gap-x-16 my-20')}
      data-testid={`checkbox-${instance.id}`}
    >
      <input
        ref="input"
        id={uniqueId}
        {...attrs}
        checked={ctx.checked}
        className={classes(
          // className,
          'appearance-none',
          'size-40',
          'shrink-0',
          'border',
          'border-1',
          'rounded',
          'focus:outline-focus',
          'disabled:bg-neutral100',
          'disabled:border-neutral300',
          'checked:border-primary500',
          'checked:bg-check-white',
          component.properties?.inputClass
        )}
        aria-required={component.validate?.required ? 'true' : 'false'}
        aria-describedby={`d-${uniqueId}`}
      />
      <div dangerouslySetInnerHTML={{ __html: input.label }} />
    </label>
  )
}

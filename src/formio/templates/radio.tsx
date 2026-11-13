/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import { classes } from '../../react'
import h from 'vhtml'
import type {
  RadioSchema,
  ComponentContext,
  InputOption,
  SelectBoxesSchema
} from '../types'

export default { form }
export type RadioContext = ComponentContext<RadioSchema | SelectBoxesSchema> & {
  input: {
    type: string
    component: RadioSchema
    changeEvent: string
    attr: JSX.IntrinsicElements['input']
  }
  inline: boolean
  values: InputOption[]
  value: string | Record<string, boolean>
  row: object
}
/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/radio/Radio.js#L167-L173
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/radio/form.ejs
 */
export function form(ctx: RadioContext) {
  function isChecked(value: string) {
    if (typeof ctx.value === 'object') {
      return ctx.value[value]
    }
    return value === ctx.value
  }
  return (
    <div
      className={
        ctx.inline
          ? 'flex-rows space-y-8 md:space-y-0 md:inline-flex md:gap-16'
          : ''
      }
      ref="radioGroup"
      role={ctx.component.type === 'selectboxes' ? 'group' : 'radiogroup'}
      aria-required={ctx.component.validate?.required ? 'true' : 'false'}
      aria-labelledby={`l-${ctx.instance.id}-${ctx.component.key}`}
      aria-describedby={`d-${ctx.instance.id}-${ctx.component.key}`}
    >
      {ctx.values.map((item, index) => (
        <div
          key={`wrapper-${index}`}
          data-testid={`${ctx.component.key}-${item.value}`}
          ref="wrapper"
        >
          <label
            className={`form-check-label ${classes(
              'flex',
              'items-center',
              'gap-x-16',
              'my-20',
              'items-center'
            )}`}
            htmlFor={`${ctx.instance.root?.id}-${ctx.id}-${ctx.row}-${
              typeof item.value === 'object'
                ? item.value + '-' + index
                : item.value
            }`}
          >
            <input
              className={classes(
                'appearance-none',
                'size-40',
                'shrink-0',
                'border',
                'border-1',
                'focus:outline-focus',
                'disabled:bg-neutral100',
                'disabled:border-neutral300',
                ctx.component.type === 'selectboxes'
                  ? [
                      'rounded',
                      'bg-white',
                      'checked:border-primary500',
                      'checked:bg-check-white'
                    ]
                  : [
                      'rounded-full',
                      'check-shadow-inner',
                      'checked:bg-primary500',
                      'disabled:shadow-none',
                      'disabled:outline-none'
                    ]
              )}
              ref="input"
              {...ctx.input.attr}
              value={item.value}
              checked={isChecked(item.value)}
              id={`${ctx.instance.root?.id}-${ctx.id}-${ctx.row}-${
                typeof item.value === 'object'
                  ? item.value + '-' + index
                  : item.value
              }`}
              role={ctx.component.type === 'selectboxes' ? 'checkbox' : 'radio'}
              disabled={item.disabled}
              aria-label={item.label}
            />
            <span>{item.label}</span>
          </label>
        </div>
      ))}
    </div>
  )
}

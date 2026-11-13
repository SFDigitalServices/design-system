/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import { classes } from '../../react'
import h from 'vhtml'
import type { RadioContext } from './radio'

export default { form }

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
      role="radioGroup"
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
            className={classes(
              'form-check-label',
              'flex',
              'gap-x-16',
              'my-20',
              'h-[52px]',
              'w-full',
              'md:w-[100px]',
              'text-primary600',
              'border',
              'border-1',
              'border-primary600',
              'rounded',
              'focus-within:outline-focus'
            )}
            htmlFor={`${ctx.instance.root?.id}-${ctx.id}-${ctx.row}-${
              typeof item.value === 'object'
                ? item.value + '-' + index
                : item.value
            }`}
          >
            <input
              className={classes(
                'appearance-none',
                'shrink-0',
                'focus:outline-focus',
                'sr-only',
                'peer',
                'h-[52px]',
                'w-full',
                'md:w-[100px]'
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
              role="radio"
              disabled={item.disabled}
              aria-label={
                item.value === 'yes'
                  ? 'Yes it was easy to fill out this form'
                  : 'No it was not easy to fill out this form'
              }
            />
            <span
              className={classes(
                'flex',
                'items-center',
                'justify-center',
                'w-full',
                'gap-8',
                'text-label-xs',
                'font-medium',
                'cursor-pointer',
                'before:thumbs-up-blue',
                'peer-checked:bg-primary600',
                'peer-checked:before:thumbs-up-white',
                'peer-checked:text-white',
                item.value === 'no' ? 'before:rotate-180' : ''
              )}
            >
              {item.label}
            </span>
          </label>
        </div>
      ))}
    </div>
  )
}

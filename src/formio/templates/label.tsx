/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import h from 'vhtml'
import { classes } from '../../react'
import type { AnyComponentSchema, ComponentContext } from '../types'

export default { form }

export type LabelContext = ComponentContext<AnyComponentSchema>

/**
 * @see https://github.com/formio/formio.js/tree/v4.21.3/src/templates/bootstrap/label/form.ejs
 */
export function form({ t, ...ctx }: LabelContext) {
  const uniqueId = `${ctx.instance.id}-${ctx.component.key}`
  const required = ctx.component.validate?.required ? (
    <span
      className="text-danger600"
      aria-label={t('required', { defaultValue: 'Required' })}
    >
      {' '}
      {t('*', { defaultValue: '*' })}
    </span>
  ) : (
    ''
  )
  const labelText = `<p>${(ctx.component.label || '') + required}</p>`

  return (
    <>
      <label
        ref="label"
        className={classes(
          'block text-label-md mb-4 empty:mb-0',
          ctx.label?.className?.replace('field-required', '')
        )}
        id={`l-${uniqueId}`}
        dangerouslySetInnerHTML={{
          __html: labelText
        }}
      ></label>
    </>
  )
}

/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import h from 'vhtml'
import type { ComponentContext } from '../types'

export default { form }

export type FieldContext = ComponentContext & {
  label: JSX.IntrinsicElements['label'] & { labelPosition?: string }
  labelMarkup: string
  element: string
}

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/_classes/field/Field.js
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/field/form.ejs
 */
export function form({ component, ...ctx }: FieldContext) {
  const description = component.description
  const uniqueId = `${ctx.instance.id}-${component.key}`
  return (
    <div data-testid={`sfds-field-${uniqueId}`}>
      {!ctx.label.hidden && ctx.label.labelPosition !== 'bottom'
        ? ctx.labelMarkup
        : ''}

      {description ? (
        <div
          id={`d-${uniqueId}`}
          className="text-neutral600 my-8"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      ) : (
        ''
      )}
      <div ref="messageContainer" className="text-danger600 mt-4 empty:mt-0" />
      <div dangerouslySetInnerHTML={{ __html: ctx.element }} />

      {!ctx.label.hidden && ctx.label.labelPosition === 'bottom'
        ? ctx.labelMarkup
        : ''}
    </div>
  )
}

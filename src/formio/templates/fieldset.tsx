/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import h from 'vhtml'
import type { FieldsetSchema, ComponentContext } from '../types'

export default { form }
export type FieldsetContext = ComponentContext<FieldsetSchema> & {
  collapsed: boolean
  nestedKey: string
}
/**
 * @see https://github.com/formio/formio.js/blob/master/src/components/_classes/nested/NestedComponent.js#L12-L518
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/fieldset/form.ejs
 */
export function form(ctx: FieldsetContext) {
  return (
    <fieldset data-testid="formio-sfds-fieldset">
      {ctx.component.legend ? (
        <legend
          ref="header"
          className={`text-label-md pb-28 ${
            ctx.component.collapsible ? 'formio-clickable' : ''
          }`}
        >
          <div dangerouslySetInnerHTML={{ __html: ctx.component.legend }} />
          {ctx.component.tooltip ? (
            <i
              ref="tooltip"
              tabIndex={0}
              className="text-muted"
              data-tooltip={ctx.component.tooltip}
            ></i>
          ) : (
            ''
          )}
        </legend>
      ) : (
        ''
      )}
      {!ctx.collapsed ? (
        <div
          dangerouslySetInnerHTML={{ __html: ctx.children }}
          className="fieldset-body"
          ref={ctx.nestedKey}
        />
      ) : (
        ''
      )}
    </fieldset>
  )
}

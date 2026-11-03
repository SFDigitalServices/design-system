/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import h from 'vhtml'
import type { AnyComponentSchema, ComponentContext } from '../types'
import { alertClass } from './alert'

export default { form }

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/_classes/component/Component.js#L1192-L1198
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/component/form.ejs
 */
export function form(ctx: ComponentContext<AnyComponentSchema>) {
  return (
    <div
      id={ctx.id}
      // 'row' caused fieldset rows with multiple columns to be misaligned
      className={ctx.classes?.replace('row', '')}
      ref="component"
    >
      {ctx.visible ? (
        <>
          <div dangerouslySetInnerHTML={{ __html: ctx.children }} />
        </>
      ) : null}
      {ctx.component.type === 'datagrid' && ctx.component.validate?.custom ? (
        <div
          ref="messageContainer"
          className={alertClass({
            type: 'danger',
            className: 'mt-8 empty:!p-0 empty:!m-0 empty:!border-0'
          })}
        />
      ) : null}
    </div>
  )
}

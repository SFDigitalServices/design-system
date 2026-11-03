/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import h from 'vhtml'
import { classes } from '../../react'
import type { SelectSchema, ComponentContext } from '../types'

export default { form }
export type SelectContext = ComponentContext<SelectSchema> & {
  input: {
    ref: string
    type: 'select'
    component: SelectSchema
    attr: Record<string, string>
    multiple: boolean
  }
  selectOptions: string
}
/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/select/Select.js#L864-L869
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/select/form.ejs
 */
export function form(ctx: SelectContext) {
  const uniqueId = `${ctx.instance.id}-${ctx.component.key}`
  const { class: className, ...attrs } = ctx.input.attr
  return (
    <>
      <select
        {...attrs}
        className={classes(
          className,
          'appearance-none',
          '!h-[56px] w-full p-16',
          '!border-1 !border-black bg-white !rounded-4',
          'dropdown-open !bg-[right_0.5rem_top_50%]',
          'focus:outline-focus'
        )}
        ref={ctx.input.ref || 'selectContainer'}
        /**
         * @see https://github.com/SFDigitalServices/sfgov-next/blob/main/packages/design-system/formio/templates/field.tsx#L23
         * @see https://github.com/SFDigitalServices/sfgov-next/blob/main/packages/design-system/formio/templates/field.tsx#L28
         */
        aria-labelledby={`l-${uniqueId} d-${uniqueId}`}
        /**
         * @see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/message/form.ejs#L1
         * */
        aria-describedby={`e-${uniqueId}`}
        aria-required={ctx.component.validate?.required}
        data-testid="formio-sfds-select"
        dangerouslySetInnerHTML={{ __html: ctx.selectOptions }}
      />
      {/* for the future multiselect autocomplete styling
      <input
        type="text"
        className="formio-select-autocomplete-input"
        ref="autocompleteInput"
        autoComplete={
          ctx.input.attr.autocomplete ? ctx.input.attr.autocomplete : ''
        }
        tabIndex={-1}
        aria-label={t('autocomplete', { defaultValue: 'Autocomplete' })}
      /> */}
    </>
  )
}

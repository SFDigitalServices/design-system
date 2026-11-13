/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import { classes } from '../../react'
import h from 'vhtml'
import type { ComponentContext, WellSchema } from '../types'

export default { form }

export type WellContext = ComponentContext<WellSchema>

export const WELL_CLASSES = classes(
  'bg-neutral10 px-20 py-16 border-1 border-solid border-neutral200 rounded'
)

/**
 * @see https://github.com/formio/formio.js/tree/v4.21.3/src/templates/bootstrap/well/form.ejs
 */
export function form({ nestedKey, children }: ComponentContext<WellSchema>) {
  return (
    <div
      className={WELL_CLASSES}
      ref={nestedKey}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}

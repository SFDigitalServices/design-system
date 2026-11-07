/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import h from 'vhtml'
import type { ContainerSchema, ComponentContext } from '../types'

export type ContainerContext = ComponentContext<ContainerSchema> & {
  children: string
  nestedKey: string
}

export default { form }
/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/container/form.ejs
 */
export function form({ component, children, nestedKey }: ContainerContext) {
  return (
    <div
      ref={nestedKey}
      dangerouslySetInnerHTML={{ __html: children }}
      className={component.customClass}
    />
  )
}

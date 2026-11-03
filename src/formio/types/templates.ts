import type { AnyComponentSchema } from './components'
import type { TFunction } from 'i18next'
import type { FormSchema } from './forms'

// formio Component class instance
export interface ComponentInstance<T extends object = AnyComponentSchema> {
  id: string
  root: ComponentInstance<FormSchema>
  component: T
  dataValue: unknown
  getComponent<C extends AnyComponentSchema = AnyComponentSchema>(
    key: string
  ): ComponentInstance<C> | null
  get pristine(): boolean
  setPristine(pristine: boolean): void
  checkValidity(data?: unknown, dirty?: boolean, row?: unknown): boolean
}

export interface ComponentContext<T extends object> {
  id: string
  key: string
  nestedKey: string
  builder: boolean
  component: T
  tabIndex: number
  classes?: string
  className?: string
  styles?: string
  visible: boolean
  label?: {
    hidden?: boolean
    className: string
    labelPosition?: 'top' | 'right' | 'bottom' | 'left'
  }
  children: string
  instance: ComponentInstance<T>
  t(...args: Parameters<TFunction>): string
  iconClass(name: string): string
}

export type ComponentTemplate<T extends object = object> = (
  context: T
) => string | string[] | JSX.Element | undefined

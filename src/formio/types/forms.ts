import type {
  AnyComponentSchema,
  PanelSchema,
  TypedComponentSchema
} from './components'

/**
 * "Flat" (single-page) and "wizard" (multi-page) forms share a common base
 * schema.
 */
interface BaseFormSchema {
  type: 'form'
  title?: string

  // metadata
  _id?: string
  _vid?: number
  name?: string
  path?: string
  project?: string
  properties?: Record<string, string>
  owner?: string
  tags?: string[]
}

/**
 * A single-page ("flat") form schema has { type: "form", display: "form" }
 * and a list of components of (almost) any type.
 */
export type FlatFormSchema = TypedComponentSchema<
  'form',
  {
    display: 'form'
    components: AnyComponentSchema[]
  },
  BaseFormSchema
>

/**
 * A "wizard" form schema has { type: "form", display: "wizard" }
 * and (not necessarily, but as a functional requirement) child
 * components of type "panel".
 */
export type WizardFormSchema = TypedComponentSchema<
  'form',
  {
    display: 'wizard'
    components: PanelSchema[]
  },
  BaseFormSchema
>

/**
 * A form.io form schema is either a "flat" or "wizard" form.
 */
export type FormSchema = FlatFormSchema | WizardFormSchema

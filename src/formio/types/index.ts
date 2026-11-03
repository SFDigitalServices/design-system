/* eslint-disable no-use-before-define */
import type { Components, ComponentSchema, Form, Formio } from 'formiojs'
import type { EventEmitter } from 'formiojs/types/eventEmitter'
import type { i18n } from 'i18next'
import type { AnyComponentSchema } from './components'
import type { FormSchema } from './forms'
import type { ComponentInstance, ComponentTemplate } from './templates'

export * from './components'
export * from './forms'
export * from './templates'
export * from './utils'
export type { Form, Formio, Components }

export type EventError =
  | string
  | Error
  | Error[]
  | { message: string }
  | Array<{ message: string }>

export type FormSubmission = {
  _id?: string
  state?: 'draft' | 'submitted'
  data: Record<string, unknown>
  // https://github.com/formio/formio.js/blob/v4.21.3/src/Webform.js#L1468-L1475
  metadata?: {
    timezone: string
    offset: number
    origin: string
    referrer: string
    browserName: string
    userAgent: string
    pathName: string
    onLine: boolean
  }
}

declare module 'formiojs' {
  interface Form {
    alert?: HTMLElement
    // changed: any
    components: ComponentInstance[]
    data: Record<string, unknown>
    element: HTMLElement
    formio: Formio
    submitted: boolean
    submission: FormSubmission

    checkValidity<T = unknown>(data?: T, dirty?: boolean, row?: T): void

    getComponent<T extends AnyComponentSchema = AnyComponentSchema>(
      key: string
    ): ComponentInstance<T>
    // focus on a component by its unique id
    focusOnComponent(key: string): Promise<void>

    get pristine(): boolean
    setPristine(pristine: boolean): void

    /**
     * Different events receive different types of data in the callback, so we
     * declare these as function overloads:
     * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
     */
    on(
      event: 'blur',
      cb: (instance: ComponentInstance) => void,
      internal?: boolean,
      once?: boolean
    ): void
    on(
      event: 'change',
      cb: (event: FormChangeEvent, flags: FormChangeFlags) => void,
      internal?: boolean,
      once?: boolean
    ): void
    on(
      event: 'nextPage' | 'prevPage',
      cb: (event: WizardPageEvent) => void,
      internal?: boolean,
      once?: boolean
    ): void
    on(
      event: 'submitError',
      cb: (errors: EventError) => void,
      internal?: boolean,
      once?: boolean
    ): void
    // this is the catch-all (default) implementation, which allows for
    on(
      event: string,
      cb: (event: object) => void,
      internal?: boolean,
      once?: boolean
    ): void

    redraw(): Promise<void>

    setAlert(type: string | boolean, message?: string, options?: object): void
    /**
     * This method only exists on multi-page forms, which render with the Wizard
     * class: https://github.com/formio/formio.js/blob/v4.21.3/src/Wizard.js#L642
     */
    setPage?: (page: number) => Promise<void>
    submit(before?: boolean, options?: object): Promise<object>
  }

  interface Formio {
    createForm(
      el: HTMLElement,
      source: string | FormSchema,
      options?: FormOptions
    ): Promise<Form>
  }

  interface ValidateOptions {
    customMessage?: string
  }

  interface ComponentSchema {
    type?: string
    key?: string
    // some components can be marked as read-only
    disabled?: boolean

    // some components have a title
    title?: string
    tags?: string[]

    // many types of text fields can optionally show the word and character
    // counts
    showCharCount?: boolean
    showWordCount?: boolean

    // all components can specify custom attributes
    attributes?: Record<string, string>
    // this field is optional for all components
    properties?: Record<string, string>

    hideOnChildrenHidden?: boolean
    redrawOn?: string
  }
}

interface SubmissionHookData extends FormSubmission {
  component?: AnyComponentSchema
}

export type FormOptions = Partial<{
  allowPrevious: boolean
  alwaysDirty: boolean
  breadcrumbSettings: object
  buttonSettings: {
    showPrevious?: boolean
    showNext?: boolean
    showCancel?: boolean
  }
  cdnUrl: string
  componentErrorClass: string
  decimalSeparator: string
  disabled: Record<string, boolean>
  display: 'form' | 'wizard'
  events: EventEmitter
  // fileService: any
  flatten: boolean
  formio: Formio
  hide: Record<string, boolean>
  highlightErrors: boolean
  // https://github.com/formio/formio.js/blob/66d554e28589e1be222d12fdad530a4d4acff164/src/Form.js#L25-L34
  hooks?: Partial<{
    // https://github.com/formio/formio.js/blob/v4.21.3/src/Webform.js#L1075
    attachWebform: (this: Form, element: HTMLElement, form: Form) => void
    // https://github.com/formio/formio.js/blob/v4.21.3/src/Webform.js#L1453
    beforeCancel: (this: Form, cancel: boolean) => boolean | undefined
    // https://github.com/formio/formio.js/blob/v4.21.3/src/Wizard.js#L748
    beforeNext: (
      this: Form,
      currentPage: number,
      submission: FormSubmission
    ) => void
    beforePrev: (
      this: Form,
      currentPage: number,
      submission: FormSubmission
    ) => void
    //
    beforeSubmit: (this: Form, data: SubmissionHookData) => void
    // https://github.com/formio/formio.js/blob/v4.21.3/src/Webform.js#L1523
    customValidation: (
      this: Form,
      data: SubmissionHookData
    ) => boolean | undefined
  }>
  i18n: Record<string, string>
  i18next: i18n
  iconset: string
  language: string
  noAlerts: boolean
  noDefaults: boolean
  readOnly: boolean
  renderMode: 'form' | 'html' | 'flat' | 'builder' | 'pdf'
  sanitize: boolean
  // sanitizeConfig: SanitizeConfig
  saveDraft: boolean
  saveDraftThrottle: number
  show: Record<string, boolean>
  showCheckboxBackground: boolean
  showHiddenFields: boolean
  skipDraftRestore: boolean
  submitOnEnter?: boolean
  template: string
  thousandsSeparator: string
  useSessionToken: boolean
  viewAsHtml: boolean
  wizardButtonOrder: string[]
  zoom: number
}>

export type ComponentConstructor = Components.components.base

export type FormioPlugin = {
  components?: Record<string, ComponentConstructor>
  framework?: string
  options?: {
    form?: FormOptions
  }
  templates?: Record<
    string,
    {
      transform?: (type: string, value: string) => string
    } & Record<
      string,
      {
        form?: ComponentTemplate
        html?: ComponentTemplate
      }
    >
  >
}

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/Webform.js#L1395-L1417
 */
export type FormChangeEvent = FormSubmission & {
  isValid: boolean
  changed?: ComponentChanged
}

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/_classes/component/Component.js#L2205-L2211
 */
export type ComponentChanged<T extends ComponentSchema = AnyComponentSchema> = {
  instance: ComponentInstance<T>
  component: T
  value: unknown
  flags: FormChangeFlags
}

export type FormChangeFlags =
  | { silent: true }
  | {
      changed: boolean
      changes: FormChangeFlags[]
    }

export interface WizardPageEvent {
  page: number
  submission: FormSubmission
}

// https://help.form.io/developers/fetch-plugin-api#request-requestargs
export type RequestArgs = {
  formio: Formio
  type: 'form' | 'forms' | 'submission'
  url: string
  method: string
  data: object
  opts?: object
}

// https://help.form.io/developers/fetch-plugin-api#staticrequest-requestargs
export type StaticRequestArgs = {
  url: string
  method: string
  data: object
}

// fetch plugin hooks can be sync or async
export type MaybePromise<T> = T | Promise<T>

// see: https://help.form.io/developers/fetch-plugin-api#plugin-hooks
export type FormioFetchPlugin = Partial<{
  priority: number
  preRequest: (args: RequestArgs) => MaybePromise<RequestArgs | void>
  preStaticRequest: (
    args: StaticRequestArgs
  ) => MaybePromise<StaticRequestArgs | void>
  request: (args: RequestArgs) => MaybePromise<RequestArgs | void>
  staticRequest: (
    args: StaticRequestArgs
  ) => MaybePromise<StaticRequestArgs | void>
  wrapRequestPromise: <T extends object>(
    promise: Promise<T>,
    args: RequestArgs
  ) => Promise<T>
  wrapStaticRequestPromise: <T extends object>(
    promise: Promise<T>,
    args: StaticRequestArgs
  ) => Promise<T>
}>

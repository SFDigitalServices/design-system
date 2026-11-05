import { Components, Form as FormioReactForm, Formio } from '@formio/react'
import { classed as coreClassed } from '@tw-classed/core'
import type { ComponentProps } from 'react'
import { useMemo } from 'react'
import { BUTTON_VARIANTS } from '../react/Button'
import { classed, classes } from '../react/utils'
import { upgrade } from './components'
import { FORM_CLASS } from './constants.mjs'
import templates from './templates'
import radioThumbsTemplate from './templates/radio-thumbs'
import type {
  EventError,
  Form,
  FormioFetchPlugin,
  FormioPlugin,
  FormOptions,
  FormSchema,
  FormSubmission,
  Override,
  RadioSchema
} from './types'
import { getConsole, hook, isFormSurvey } from './utils'

// import './formio.css'

export * from './types'

// Exported so the factories' Tailwind class names survive tree-shaking and are
// found by consumers scanning dist/ for content.
export { HoursOfOperation, HoursOfOperationOutput } from './components'

// this is our "fixed" version of @formio/react's Form component props type with
// more precise/accurate types for callbacks, options, etc. We use Override here
// instead of `&` because we want our type declarations to supersede theirs.
type FormOwnProps = Override<
  ComponentProps<typeof FormioReactForm>,
  {
    form?: FormSchema
    formReady?: (form: Form) => void
    onFormLoad?: (this: Form | undefined, schema: FormSchema) => void
    onSubmit?: (
      this: Form | undefined,
      submission: FormSubmission,
      saved?: boolean
    ) => void
    onSubmitDone?: (this: Form | undefined, submission: FormSubmission) => void
    onError?: (this: Form | undefined, error: EventError) => void
    options?: FormOptions
  }
>

// @formio/react doesn't export the props type, and doing it here allows us to
// keep it in sync with a wrapping component, surface the props to parent, etc.
// We use Override here because some props are common (`onFocus`, `onBlur`) and
// we need the Form props to supersede the intrinsic ones.
export type FormProps = Override<JSX.IntrinsicElements['div'], FormOwnProps>

// making this a constant ensures that the 'framework' property of the plugin
// and the key under which the templates are nested in 'templates' always match
const framework = 'sfgov'

// internal property for determining whether we've initialized an object
const INITIALIZED = new Map<object, boolean>()

/**
 * @see https://help.form.io/developers/modules#creating-a-module
 */
export const plugin: FormioPlugin = {
  framework,
  templates: {
    [framework]: {
      /**
       * Used by some template frameworks to translate icon classes, etc.
       * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/_classes/component/Component.js#L864-L869
       */
      transform: (type, value) => value,
      ...templates,
      // @ts-expect-error why is this so hard to type?
      'radio-wasItEasyToFillOutThisForm': radioThumbsTemplate
    }
  }
}

const FormWrapper = classed('div', {
  base: FORM_CLASS
})

type FormWrapperProps = ComponentProps<typeof FormWrapper>

export function useFormio(isDev = false) {
  const console = getConsole(isDev)

  once(Formio, () => {
    // eslint-disable-next-line @eslint-react/rules-of-hooks -- Formio's plugin registration API is not a React hook.
    Formio.use(plugin)
    // TODO: override this interface in ambient declarations so we don't have to
    // type it explicitly
    /* istanbul ignore next */
    Formio.registerPlugin(
      {
        priority: 0,
        async wrapRequestPromise(promise, args) {
          if (args.type === 'form') {
            const schema = (await promise) as FormSchema
            upgradeSchemaOnce(schema)

            if (isFormSurvey(schema)) {
              disableRadioUncheck()
            }

            return schema
          }
          return promise
        }
      } as FormioFetchPlugin,
      'sfgov'
    )

    /**
     * There doesn't appear to be any good way to override the Formio.CDN base
     * URL via default form options. In fact, formio recommends "duck punching"
     * `Formio.requireLibrary()` instead:
     * https://github.com/formio/formio.js/issues/3750#issuecomment-775245758
     */
    hook(
      Formio,
      'requireLibrary',
      (
        requireLibrary,
        name: string,
        property: string,
        source: string | { type: string; src: string }[],
        poll: boolean
      ) => {
        if (Array.isArray(source)) {
          for (const lib of source) {
            lib.src = rewriteLibraryUrl(lib.src)
          }
        } else {
          source = rewriteLibraryUrl(source)
        }
        return requireLibrary(name, property, source, poll)
      }
    )

    const ComponentPrototype = Components.components.base.prototype
    hook(ComponentPrototype, 'renderTemplate', (renderTemplate, ...args) => {
      const content = renderTemplate(...args)
      // info('renderTemplate(', args, ') ->', typeof content)
      return modifyComponentClassname(
        // istanbul ignore next
        Array.isArray(content) ? content.join('') : content
      )
    })

    const HTMLElementPrototype = Components.components.htmlelement.prototype
    hook(
      HTMLElementPrototype,
      'renderTemplate',
      (renderTemplate, template, context, ...args) => {
        const content: string | string[] = renderTemplate(
          template,
          context,
          ...args
        )
        return modifyHTMLElementClassname(
          // istanbul ignore next
          Array.isArray(content) ? content.join('') : content
        )
      }
    )
  })

  function FormioForm(props: FormProps) {
    const { formReady, form: originalSchema, ...rest } = props
    const formProps: Partial<FormProps> = {}
    const wrapperProps: FormWrapperProps = {}
    for (const [prop, value] of Object.entries(rest)) {
      // istanbul ignore next
      if (FORMIO_FORM_PROPS.includes(prop as keyof FormProps)) {
        formProps[prop as keyof FormProps] = value
      } else {
        wrapperProps[prop as keyof FormWrapperProps] = value
      }
    }

    /**
     * upgrade the schema if one was passed directly (we do this in the fetch
     * plugin so that schemas will be upgraded if they're loaded via URL)
     */
    const schema = useMemo(() => {
      if (originalSchema) {
        upgradeSchemaOnce(originalSchema as FormSchema)
        return originalSchema
      }
      // eslint-disable-next-line @eslint-react/exhaustive-deps
    }, [
      // use the form's ID as the dependency ("cache key") rather than the
      // schema itself, because we're mutating it
      /* istanbul ignore next */
      originalSchema?._id
    ])

    return (
      <FormWrapper {...wrapperProps}>
        <FormioReactForm
          form={schema}
          formReady={(form: Form) => {
            once(form, addFormHooks)
            // istanbul ignore next
            formReady?.(form)
          }}
          {...formProps}
        />
      </FormWrapper>
    )
  }

  return { Formio, FormioForm }

  function addFormHooks(form: Form) {
    /**
     * This hook moves the "alert" element to the bottom of the form whenever
     * setAlert() is called.
     */
    hook(
      form,
      'setAlert',
      // istanbul ignore next
      function (
        this: Form,
        setAlert,
        type: string | boolean,
        message: string,
        ...rest
      ) {
        console.debug('form.setAlert(', [type, message, ...rest], ')')

        // XXX: formio.js immediately hides the success alert; this skips
        // calling form.setAlert(...) if the type is falsy and it's submitted
        if (isDev && !type && this.submitted) return

        if (message?.includes('Submission Complete')) {
          setAlert(type, ...rest)
        } else {
          setAlert(type, message, ...rest)
        }

        if (this.alert) {
          this.alert.role = 'alert'
          this.element.append(this.alert)
          this.element.scrollIntoView({
            behavior: 'auto',
            block: 'end'
          })
        } else {
          console.warn('form.setAlert() did not set this.alert')
        }
      }
    )
  }

  function upgradeSchemaOnce(schema: FormSchema) {
    once(schema, upgrade)
  }
}

export type FormioFormProps = FormProps & {
  isDev?: boolean
}

export function FormioForm({ isDev, ...rest }: FormioFormProps) {
  // eslint-disable-next-line @eslint-react/static-components
  const { FormioForm } = useFormio(isDev)
  // eslint-disable-next-line @eslint-react/static-components
  return <FormioForm {...rest} />
}

/**
 * Rewrite formio CDN URLs to use JSDelivr. Formio's CDN tracks with cookies and
 * is almost certainly slower/flakier than JSDelivr. Note that some versions of
 * formio.js use different cdn.form.io URL formats. The "un-qualified" format:
 *
 * https://cdn.form.io{/package}{/path*}
 * e.g. https://cdn.form.io/flatpickr/flatpickr.min.js
 *
 * and the versioned ("qualified") format:
 *
 * https://cdn.form.io{/package}{/version}{/path*}
 * e.g. https://cdn.form.io/flatpickr-formio/4.6.13-formio.3/flatpickr.min.js
 *
 * In both cases, cdn.form.io URLs omit the /dist/ file path prefix.
 */
export function rewriteLibraryUrl(url: string) {
  const parsed = new URL(url)

  if (parsed.hostname === 'cdn.form.io') {
    // eslint-disable-next-line prefer-const
    let [pkg, ...path] = parsed.pathname.slice(1).split('/')
    if (/^\d/.test(path[0])) {
      pkg = `${pkg}@${path.shift()}`
    }
    if (path[0] !== 'dist') path.unshift('dist')
    return `https://cdn.jsdelivr.net/npm/${pkg}/${path.join('/')}`
  }
  return url
}

// list props here that should be passed through to the Form component instead
// of the wrapping div
const FORMIO_FORM_PROPS: Array<keyof FormProps> = [
  'form',
  'formioform',
  'formReady',
  'onAttach',
  'onBlur',
  'onBuild',
  'onCancel',
  'onChange',
  'onComponentChange',
  'onCustomEvent',
  'onError',
  'onFocus',
  'onFormLoad',
  'onInitialized',
  'onNextPage',
  'onPrevPage',
  'onRender',
  'onSubmit',
  'onSubmitDone',
  'options',
  'src',
  'submission',
  'url'
]

function once<T extends object>(obj: T, fn: (obj: T) => void) {
  if (!INITIALIZED.has(obj)) {
    fn(obj)
    INITIALIZED.set(obj, true)
  }
}

export interface RadioComponent extends RadioSchema {
  dataValue: string
  getValue(): string
  setSelectedClasses(): void
  updateOnChange(flags: object, changed: boolean): void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateValue(value: string, flags: any): void
}

/**
 * Formio allows radio buttons to be unchecked. This function replaces that
 * logic with a similar function, but without this block:
 * https://github.com/formio/formio.js/blob/v4.21.3/src/components/radio/Radio.js#L408-L413
 */
export function disableRadioUncheck() {
  const RadioPrototype = Components.components.radio
    .prototype as unknown as RadioComponent

  RadioPrototype.updateValue = function (
    value: string,
    flags: object
  ): boolean {
    const newValue = this.getValue()
    const changed = this.dataValue !== newValue

    if (changed) {
      this.dataValue = newValue
      this.setSelectedClasses()
      this.updateOnChange(flags, changed)
    }

    return changed
  }
}

export function modifyComponentClassname(value?: string) {
  const buttonClass = coreClassed(BUTTON_VARIANTS)
  return value
    ?.replace(/\bd-none\b/g, 'hidden')
    .replace(/\bd-flex\b/g, 'flex')
    .replace(/\bcol-md-1\b/g, '')
    .replace(/\bbtn-secondary\b/g, buttonClass({ variant: 'link' }))
}

const defaultCalloutClasses = [
  'border-1',
  'callout-titles:text-heading-lg',
  'callout-titles:font-bold',
  'link:text-primary500',
  'link:!underline',
  'py-20',
  'px-20',
  'before:!inline-flex',
  'before:!pl-[24px]',
  'callout-titles:inline-block',
  'callout-titles:mb-8',
  'max-md:callout-titles:text-desktop-heading-sm',
  'min-md:callout-titles:text-desktop-heading-md'
]

export function modifyHTMLElementClassname(value?: string) {
  if (!value) return undefined
  return value
    .replace(
      /\bbg-blue-1\b/g,
      classes([
        ...defaultCalloutClasses,
        'bg-information50',
        'border-information600',
        'callout-titles:text-information600',
        'before:!info-icon'
      ])
    )
    .replace(/\bfg-blue-4\b/g, 'text-information400')
    .replace(
      /\bbg-green-1\b/g,
      classes([
        ...defaultCalloutClasses,
        'bg-success50',
        'border-success600',
        'callout-titles:text-success600',
        'before:!success-icon'
      ])
    )
    .replace(/\bfg-green-4\b/g, 'text-success400')
    .replace(
      /\bbg-red-1\b/g,
      classes([
        ...defaultCalloutClasses,
        'bg-danger50',
        'border-danger600',
        'callout-titles:text-danger600',
        'before:!alert-icon'
      ])
    )
    .replace(/\bfg-red-4\b/g, 'text-danger400')
}

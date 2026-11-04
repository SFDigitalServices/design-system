import React, { useEffect, useRef, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import FormioForm from '@/design-system/components/FormioForm'
import { Form, FormProps } from '@/design-system/formio'
import { ComponentFactory, FormFactory } from '@/design-system/formio/factories'
import type {
  AnyComponentSchema,
  ComponentSchema,
  FlatFormSchema
} from '@/design-system/formio/types'
import type { Args, ArgTypes, Meta, StoryFn } from '@storybook/react'
import { Button, ButtonProps } from '@/design-system'

export * from '@/design-system/formio/factories'

export type SingleFieldFormArgs<
  T extends ComponentSchema = AnyComponentSchema
> = Partial<
  Omit<T, 'validate'> & {
    required: boolean
    errorMessage: string
    pageTitle: string
    form: FormProps
  }
>

/**
 * Common ArgTypes for stories that render a single formio field using
 */
export const singleFieldArgTypes: ArgTypes = {
  label: {
    type: 'string',
    name: 'Label'
  },
  description: {
    type: 'string',
    name: 'Help text',
    description: 'Passed to the component schema as `description`'
  },
  required: {
    type: 'boolean',
    name: 'Required',
    description: 'Passed to the component schema as `validate.required`'
  },
  errorMessage: {
    type: 'string',
    name: 'Error message',
    description: 'Passed to the component schema as `validate.customMessage`'
  }
}

/**
 * Creates a story component that receives single field schema args
 * @param component
 * @returns
 */
export function createSingleFieldComponent(
  field: SingleFieldFormArgs | ((args: Args) => SingleFieldFormArgs)
) {
  return function SingleFieldComponent({
    form: formOverrides,
    ...rest
  }: SingleFieldFormArgs) {
    const { form: formProps, ...component } =
      typeof field === 'function' ? field(rest) : field
    const schema = singleFieldSchema({ ...component, ...rest })
    return (
      <FormioForm
        isDev={true}
        form={schema}
        {...formProps}
        {...formOverrides}
      />
    )
  }
}

export const DATA_PREVIEW_SCHEMA = ComponentFactory.make({
  type: 'htmlelement',
  tag: 'details',
  label: 'Data preview',
  content: `
    <summary class="text-heading-lg cursor-pointer">Data</summary>
    <pre class="bg-neutral50 p-8 my-40">{{ JSON.stringify(data, null, 2) }}</pre>
  `,
  refreshOnChange: true
})

export function singleFieldSchema<SchemaType extends AnyComponentSchema>(
  component: SingleFieldFormArgs<SchemaType>,
  formProps?: Partial<FlatFormSchema>
): FlatFormSchema {
  const { type = 'textfield', required, errorMessage, ...rest } = component
  return FormFactory.make({
    ...formProps,
    components: [
      // @ts-expect-error wtf
      ComponentFactory.make({
        type,
        validate: {
          required,
          customMessage: errorMessage
        },
        ...rest
      }),
      ComponentFactory.make({
        type: 'button',
        action: 'submit',
        label: 'Submit',
        customClass: 'mt-16'
      })
    ]
  })
}

type FormReady = (form: Form) => void | Promise<unknown>

/**
 * Story decorator that passes a formReady callback to the story args which
 * submits the form automatically. Pass it in the story's `decorators` array:
 *
 * ```js
 * export const Story = {
 *   component: FormioForm,
 *   decorators: [withFormSubmitted]
 * }
 * ```
 */
export function withFormSubmitted(Story: StoryFn, meta: Meta) {
  return <Story args={stackFormReady((form) => form.submit(), meta.args)} />
}

/**
 * Add a formReady callback to the provided form props, calling the existing
 * props.formReady afterwards (if present).
 */
export function stackFormReady(
  callback: FormReady,
  props?: FormProps
): FormProps {
  const { formReady, ...rest } = props || {}
  return {
    ...rest,
    formReady(form: Form) {
      callback(form)
      return formReady?.(form)
    }
  }
}

type CopyClipboardProps = Omit<ButtonProps, 'ref'> & {
  clipboardText: string
  resetMs?: number
}

export function CopyClipboard({
  clipboardText,
  children,
  resetMs = 1000,
  ...rest
}: CopyClipboardProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (copied && resetMs > 0) {
      const timer = setTimeout(() => {
        setCopied(false)
        ref.current?.blur()
      }, resetMs)
      return () => clearTimeout(timer)
    }
  }, [copied, resetMs])
  return (
    <CopyToClipboard text={clipboardText} onCopy={() => setCopied(true)}>
      <Button ref={ref} {...rest}>
        {copied ? 'Copied' : children || 'Copy'}
      </Button>
    </CopyToClipboard>
  )
}

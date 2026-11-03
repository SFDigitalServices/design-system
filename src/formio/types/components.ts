/* eslint-disable no-use-before-define */
import type { ComponentSchema, ValidateOptions } from 'formiojs'
import type { Override } from './utils'
import type { Options as ChoicesOptions } from '@formio/choices.js'

/**
 * This is our "abstract" component schema, which does not specify an explict
 * type and should not be included in discriminated unions. Instead, build on
 * with `TypedComponentSchema<'type', { ... }>` and pass an optional parent
 * schema to extend. (The default is to extend `ComponentSchema`.)
 */
export type { ComponentSchema }

export type TypedComponentSchema<
  T extends string,
  Props extends object = object,
  Parent extends object = ComponentSchema
> = Override<
  Parent,
  {
    type: T
  } & Props
>

/**
 * @see https://github.com/formio/formio.js/blob/c3d57d2fcf3a1b2b1081206c773476ff612ad168/src/components/textfield/TextField.js#L10-L26
 */
export type TextFieldSchema = TypedComponentSchema<
  'textfield',
  {
    inputType?: 'text' | 'password'
    // https://github.com/formio/formio.js/blob/c3d57d2fcf3a1b2b1081206c773476ff612ad168/src/components/textfield/editForm/TextField.edit.data.js#L3-L26
    inputFormat?: 'plain' | 'html' | 'raw'
    mask?: boolean
    displayMask?: string
    spellcheck?: boolean
    truncateMultipleSpaces?: boolean
  }
>

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/button/Button.js#L10-L21
 */
export type ButtonSchema = TypedComponentSchema<
  'button',
  {
    action?: 'submit' | 'event' | 'custom' | 'reset' | 'url'
    // https://github.com/formio/formio.js/blob/v4.21.3/src/components/button/editForm/Button.edit.display.js#L191-L193
    size?: 'sm' | 'md' | 'lg'
    leftIcon?: string
    rightIcon?: string
    block?: boolean
    // https://github.com/formio/formio.js/blob/v4.21.3/src/components/button/editForm/Button.edit.display.js#L172-L177
    theme?: 'primary' | 'secondary' | 'info' | 'success' | 'danger' | 'warning'
    disableOnInvalid?: boolean
    // action: 'submit'
    saveOnEnter?: boolean
    showValidations?: boolean
    // action: 'event'
    event?: string
    // action: 'custom'
    custom?: string
    // action: 'url'
    url: string
    headers?: {
      header: string
      value: string
    }[]
  }
>

/**
 * @see https://github.com/formio/formio.js/blob/c3d57d2fcf3a1b2b1081206c773476ff612ad168/src/components/checkbox/Checkbox.js#L8-L15
 */
export type CheckboxSchema = TypedComponentSchema<
  'checkbox',
  {
    // https://github.com/formio/formio.js/blob/c3d57d2fcf3a1b2b1081206c773476ff612ad168/src/components/checkbox/editForm/Checkbox.edit.display.js#L60-L61
    name?: string
    // https://github.com/formio/formio.js/blob/c3d57d2fcf3a1b2b1081206c773476ff612ad168/src/components/checkbox/editForm/Checkbox.edit.display.js#L70-L72
    value?: string
    inputType?: 'radio' | 'checkbox'
  }
>

/**
 * @see https://github.com/formio/formio.js/blob/c3d57d2fcf3a1b2b1081206c773476ff612ad168/src/components/day/Day.js#L9-L30
 */
export type DaySchema = TypedComponentSchema<
  'day',
  {
    // https://github.com/formio/formio.js/blob/v4.21.3/src/components/day/Day.js#L12-L28
    fields?: Record<
      'day' | 'month' | 'year',
      {
        type: 'number' | 'select'
        required: boolean
        placeholder?: string
      }
    >
    dayFirst?: boolean
    // https://github.com/formio/formio.js/blob/c3d57d2fcf3a1b2b1081206c773476ff612ad168/src/components/day/editForm/Day.edit.validation.js#L37-L40
    minDate?: string
    // https://github.com/formio/formio.js/blob/c3d57d2fcf3a1b2b1081206c773476ff612ad168/src/components/day/editForm/Day.edit.validation.js#L46-L49
    maxDate?: string
  }
>

type DateMode = 'day' | 'week' | 'month' | 'year'

/**
 * @see https://github.com/formio/formio.js/wiki/DateTime-Component
 * @see https://github.com/formio/formio.js/blob/c3d57d2fcf3a1b2b1081206c773476ff612ad168/src/components/datetime/DateTime.js#L10-L42
 */
export type DateTimeSchema = TypedComponentSchema<
  'datetime',
  {
    format: string
    allowInput?: boolean
    defaultDate?: string
    enableDate?: boolean
    enableTime?: boolean
    enableMinDateInput?: boolean
    enableMaxDateInput?: boolean
    datepickerMode?: DateMode
    // https://github.com/formio/formio.js/blob/c3d57d2fcf3a1b2b1081206c773476ff612ad168/src/components/datetime/editForm/DateTime.edit.display.js#L5C11-L17
    displayInTimezone?: 'viewer' | 'submission' | 'location' | 'utc'
    timezone?: string
    useLocaleSettings?: boolean
    datePicker?: {
      disable?: boolean
      disableFunction?: string
      disableWeekends?: boolean
      disableWeekdays?: boolean
      showWeeks?: boolean
      startingDay?: number
      minMode?: DateMode
      maxMode?: DateMode
      yearRows?: number
      yearColumns?: number
      minDate?: string
      maxDate?: string
    }
    timePicker?: {
      hourStep: number
      minuteStep: number
      showMeridian?: boolean
      readonlyInput?: boolean
      mousewheel?: boolean
      arrowkeys?: boolean
    }
  }
>

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/email/Email.js#L6-L12
 */
export type EmailSchema = TypedComponentSchema<
  'email',
  {
    kickbox?: {
      enabled?: boolean
    }
  },
  TextFieldSchema
>

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/file/File.js#L44-L53
 */
export type FileSchema = TypedComponentSchema<
  'file',
  {
    dir?: string
    filePattern?: string
    fileMinSize?: string
    fileMaxSize?: string
    fileNameTemplate?: string
    image?: boolean
    imageSize?: number | string
    imageUpload?: boolean
    privateDownload?: boolean
    uploadOnly?: boolean
    webcam?: boolean
    webcamSize?: string
    useWebViewCamera?: boolean
    fileTypes?: {
      label: string
      value: string
    }[]
  } & (
    | {
        // https://github.com/formio/formio.js/blob/master/src/providers/storage/index.js#L11-L16
        storage: 'azure' | 'base64' | 'dropbox' | 'googleDrive'
      }
    | {
        storage: 's3'
        useMultipartUpload?: boolean
        multipart?: {
          partSize?: number
        }
      }
    | {
        storage: 'url'
        url: string
        options?: string
        fileKey?: string
      }
    | {
        storage: 'indexeddb'
        options?: {
          indexeddb?: string
          indexeddbTable?: string
        }
      }
  )
>

/**
 *
 */
export type HiddenSchema = TypedComponentSchema<
  'hidden',
  {
    // TODO
  },
  TextFieldSchema
>

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/html/HTML.js#L7-L13
 */
export type HTMLElementSchema = TypedComponentSchema<
  'htmlelement',
  {
    content: string
    tag?: keyof HTMLElementTagNameMap
    className?: string
    // not attributes, attr
    attributes?: never
    attrs?: { attr: string; value: string }[]
    // https://github.com/formio/formio.js/blob/c3d57d2fcf3a1b2b1081206c773476ff612ad168/src/components/html/editForm/HTML.edit.display.js#L90-L97
    refreshOnChange?: boolean
  }
>

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/number/Number.js#L10-L18
 */
export type NumberSchema = TypedComponentSchema<
  'number',
  {
    delimiter?: boolean
    requireDecimal?: boolean
    validate: ValidateOptions & {
      min?: string | number
      max?: string | number
      step?: string | number
      integer?: boolean
    }
  }
>

/**
 * Represents an option for a radio, selectboxes, or select component
 */
export type InputOption = {
  value: string
  label: string
  shortcut?: string
  disabled?: boolean
}

/**
 * @see https://github.com/formio/formio.js/blob/master/src/components/radio/Radio.js#L9-L17
 */
export type RadioSchema = TypedComponentSchema<
  'radio',
  {
    values: InputOption[]
    inputType?: 'radio' | 'checkbox'
  }
>

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/selectboxes/SelectBoxes.js#L8-L11
 */
export type SelectBoxesSchema = TypedComponentSchema<
  'selectboxes',
  {
    inline?: boolean
  },
  RadioSchema
>

/**
 * @see https://github.com/formio/formio.js/wiki/Select-Component
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/select/Select.js#L15-L50
 */
export type SelectSchema = TypedComponentSchema<
  'select',
  {
    type: 'select'
    widget: 'choicesjs' | 'html5'
    valueProperty?: string
    refreshOn?: string
    filter?: string
    // default: '<span>{{ item.data }}</span>'
    template?: string
    lazyLoad?: boolean
    // https://github.com/formio/formio.js/blob/v4.21.3/src/components/select/Select.js#L898-L939
    customOptions?: Partial<ChoicesOptions>
  } & (
    | {
        dataSrc?: 'values'
        data: {
          values: InputOption[]
        }
      }
    | {
        dataSrc: 'json'
        data: {
          json: object[]
        }
      }
    | {
        dataSrc: 'url'
        data: {
          url: string
        }
      }
  )
>

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/textarea/TextArea.js#L10-L22
 */
export type TextAreaSchema = TypedComponentSchema<
  'textarea',
  {
    rows?: number
    wysiwyg?: boolean
    // https://github.com/formio/formio.js/blob/v4.21.3/src/components/textarea/TextArea.js#L135-L219
    editor?: 'ace' | 'quill' | 'ckeditor'
    fixedSize?: boolean
    validate: ValidateOptions & {
      minWords?: string | number
      maxWords?: string | number
    }
  },
  TextFieldSchema
>

/**
 * https://github.com/formio/formio.js/blob/v4.21.3/src/components/time/Time.js#L8-L16
 */
export type TimeSchema = TypedComponentSchema<
  'time',
  {
    inputType?: 'time'
    format?: string
    dataFormat?: string
  }
>

/**
 * Primitive components are singular, non-nested inputs.
 */
export type InputComponentSchema =
  | ButtonSchema
  | CheckboxSchema
  | DateTimeSchema
  | DaySchema
  | EmailSchema
  | HiddenSchema
  | HTMLElementSchema
  | NumberSchema
  | SelectBoxesSchema
  | SelectSchema
  | RadioSchema
  | TextAreaSchema
  | TextFieldSchema
  | TimeSchema

export type NestedComponentSchema = ComponentSchema & {
  components: AnyComponentSchema[]
  tree?: boolean
}

/**
 * A single column in the ColumnsSchema['columns'] type
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/columns/Columns.js#L11
 */
export type SingleColumnSchema = {
  label?: string
  width: number
  components: AnyComponentSchema[]
  offset?: number
  push?: number
  pull?: number
  size?: string
  currentWidth?: number
}

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/columns/Columns.js#L7-L18
 */
export type ColumnsSchema = TypedComponentSchema<
  'columns',
  {
    columns: SingleColumnSchema[]
    autoAdjust?: boolean
  }
>

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/container/Container.js#L11-L18
 */
export type ContainerSchema = TypedComponentSchema<
  'container',
  {
    // key is required in container components
    key: string
  },
  NestedComponentSchema
>

export type DataGridSchema = TypedComponentSchema<
  'datagrid',
  {
    input?: true
    initEmpty?: boolean
    noFirstRow?: boolean
    layoutFixed?: boolean
    addAnother?: string
    addAnotherPosition?: 'top' | 'bottom' | 'both'
  },
  NestedComponentSchema
>

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/fieldset/Fieldset.js#L6-L12
 */
export type FieldsetSchema = TypedComponentSchema<
  'fieldset',
  {
    legend: string
    collapsible: boolean
  },
  NestedComponentSchema
>

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/panel/Panel.js#L8-L18
 */
export type PanelSchema = TypedComponentSchema<
  'panel',
  {
    title: string
    collapsible?: boolean
    theme?: string
  },
  NestedComponentSchema
>

/**
 * @see https://help.form.io/userguide/form-building/form-components/layout-components#table
 * @see https://github.com/formio/formio.js/wiki/Table-Component
 * @see https://github.com/formio/formio.js/blob/v4.21.2/src/components/table/Table.js#L18-L36
 */
export type TableSchema = TypedComponentSchema<
  'table',
  {
    label: string
    cellAlignment: 'left' | 'right'
    numRows: number
    numCols: number
    rows: string[][]
    header: string[]
    striped: boolean
    bordered: boolean
    hover: boolean
    condensed: boolean
  },
  NestedComponentSchema
>

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/well/Well.js#L6-L10
 */
export type WellSchema = TypedComponentSchema<
  'well',
  {
    input?: false
  },
  NestedComponentSchema
>

export type AnyComponentSchema =
  | InputComponentSchema
  | DataGridSchema
  | ColumnsSchema
  | ContainerSchema
  | FieldsetSchema
  | PanelSchema
  | TableSchema
  | WellSchema

/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { Components, Formio } from '@formio/react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import mockConsole from 'jest-mock-console'
import type {
  Form,
  FormSchema,
  HTMLElementSchema,
  InputComponentSchema,
  RadioComponent
} from '.'
import {
  disableRadioUncheck,
  rewriteLibraryUrl,
  modifyComponentClassname,
  modifyHTMLElementClassname,
  FormioForm
} from '.'
import { FORM_CLASS } from './constants.mjs'
import * as formioComponents from './components/schema'
import {
  CheckboxFactory,
  ColumnsFactory,
  ComponentFactory,
  FieldsetFactory,
  FormFactory,
  OptionFactory,
  PageFactory,
  RadioFactory,
  SelectBoxesFactory,
  SelectFactory,
  WizardFactory
} from './factories'
import basicFormJson from './__fixtures__/basic.json'
import callouts from './__fixtures__/callouts.json'

const basicForm = basicFormJson as FormSchema

// spy on calls to upgrade() so we can ensure it's called as expected
const upgrade = jest.spyOn(formioComponents, 'upgrade')

let restoreConsole: ReturnType<typeof mockConsole>

/**
 * Mock the console calls so that we can avoid spewing template debugging
 * info into the test runner output.
 */
beforeAll(() => {
  window.scrollTo = jest.fn()
  Formio.getUser = jest.fn(() => undefined)

  /**
   * The FileComponent class uses browser feature detection to populate its
   * `support` object, which it uses during user interactions to enable or
   * disable certain features. Jest's test environment (jsdom) is "browser-like"
   * but differs in ways that confuse either the feature detection or the code
   * that operates on `support` flags. Our workaround here is to patch the
   * `init()` method, skip the feature detection, and just set the support flags
   * directly.
   *
   * @see https://github.com/formio/formio.js/blob/v4.21.3/src/components/file/File.js#L85-L101
   * @see https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
   */
  Components.components.file.prototype.init = function (
    this: typeof Components.components.file
  ) {
    // @ts-expect-error hard to type this
    this.support = {
      filereader: false,
      formdata: false,
      hasWarning: false,
      progress: true
    }
  }

  const noop = () => null
  restoreConsole = mockConsole({
    debug: noop,
    log: noop,
    info: noop
    // warn: noop
  })
})

afterEach(() => {
  upgrade.mockReset()
  // @ts-expect-error not typed
  const forms: Form[] = Object.values(Formio.forms)
  for (const form of forms) {
    form.destroy()
  }
})

afterAll(() => {
  restoreConsole()
})

describe('FormioForm', () => {
  it(`renders a div with the "${FORM_CLASS}" class`, () => {
    const { container } = render(<FormioForm form={FormFactory.make()} />)

    const el = container.querySelector(`.${FORM_CLASS}`)
    expect(el).toBeInTheDocument()
  })

  it('passes the className prop to the wrapper', () => {
    const { container } = render(
      <FormioForm form={FormFactory.make()} className="foo" />
    )

    const el = container.querySelector(`.${FORM_CLASS}`)
    expect(el).toHaveClass('foo')
  })

  it.each([
    { prop: 'data-foo', value: 'bar' },
    { prop: 'role', value: 'form' }
  ])('passes through wrapper attribute "$prop"', ({ prop, value }) => {
    const { container } = render(
      <FormioForm form={FormFactory.make()} {...{ [prop]: value }} />
    )
    expect(container.querySelector(`.${FORM_CLASS}`)).toHaveAttribute(
      prop,
      value
    )
  })

  it('renders a formio form', () => {
    const label = 'Your name'
    render(
      <FormioForm
        form={FormFactory.make({
          components: [
            ComponentFactory.make({
              key: 'name',
              label
            })
          ]
        })}
      />
    )

    const input = screen.getByLabelText(label)
    expect(input).toBeInTheDocument()
  })

  it.skip('renders a wizard form', async () => {
    const field1 = basicFormJson.components[0].components[0]
    const field2 = basicFormJson.components[1].components[0]

    render(<FormioForm form={basicForm} />)

    const input1 = screen.getByLabelText(field1.label, { exact: false })
    expect(input1).toBeInTheDocument()

    await click('Get started')

    const input2 = screen.getByLabelText(field2.label, { exact: false })
    expect(input2).toBeInTheDocument()
  })

  describe('nav buttons', () => {
    it('renders "Get started" for the first page', async () => {
      render(<FormioForm form={basicForm} />)

      const button = screen.getByText('Get started')
      expect(button).toBeInTheDocument()
    })
    it('renders "Submit" for the feedback form', async () => {
      render(
        <FormioForm
          form={WizardFactory.make({
            components: [
              PageFactory.make({
                title: 'Website feedback',
                components: [
                  ComponentFactory.make({
                    label: 'Page one'
                  })
                ]
              })
            ]
          })}
        />
      )

      const button = screen.getByRole('button', {
        name: 'Submit'
      })
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('Submit')
    })
  })

  describe('wizard header', () => {
    it('renders the wizard header in the DOM', async () => {
      render(
        <FormioForm
          form={WizardFactory.make({
            components: [
              PageFactory.make({
                title: 'Page 1',
                components: [
                  ComponentFactory.make({
                    label: 'Page one'
                  })
                ]
              }),
              PageFactory.make({
                title: 'Page 2',
                components: [
                  ComponentFactory.make({
                    label: 'Page two'
                  })
                ]
              }),
              PageFactory.make({
                title: 'Page 3',
                components: [
                  ComponentFactory.make({
                    label: 'Page three'
                  })
                ]
              }),
              PageFactory.make({
                title: 'Page 4',
                components: [
                  ComponentFactory.make({
                    label: 'Page four'
                  })
                ]
              })
            ]
          })}
        />
      )

      const wizardHeaderPanels = await screen.findAllByTestId(/wizardHeader-/)
      // The header is rendered twice for mobile styling vs. desktop
      expect(wizardHeaderPanels.length).toBe(4)
      wizardHeaderPanels.forEach((panel) => {
        expect(panel).toBeInTheDocument()
      })
    })
  })

  describe('component', () => {
    it('does not render a conditionally hidden field', async () => {
      const label = 'Hidden'
      render(
        <FormioForm
          form={FormFactory.make({
            components: [
              // @ts-expect-error derp
              ComponentFactory.make({
                label,
                conditional: {
                  show: true,
                  when: 'x',
                  eq: true
                }
              })
            ]
          })}
        />
      )

      const input = screen.queryByText(label)
      expect(input).not.toBeInTheDocument()
    })

    it('replaces the d-none and d-flex classes', async () => {
      render(
        <FormioForm
          form={FormFactory.make({
            components: [callouts.components[0] as HTMLElementSchema]
          })}
        />
      )

      const input = document.querySelector('span[data-icon=alert]')
      // expect(input?.classList).not.toContain('d-none')
      // expect(input?.classList).toContain('hidden')
      expect(input?.classList).not.toContain('d-flex')
      expect(input?.classList).toContain('flex')
    })
  })

  describe('label', () => {
    it('renders the label', async () => {
      const label = 'Field label'
      render(
        <FormioForm
          form={FormFactory.make({
            components: [
              ComponentFactory.make({
                label,
                validate: {
                  required: false
                }
              })
            ]
          })}
        />
      )

      const input = screen.getByLabelText(label)
      expect(input).toBeInTheDocument()
    })
    it('renders the label with required asterisk', async () => {
      const label = 'Field label'
      render(
        <FormioForm
          form={FormFactory.make({
            components: [
              ComponentFactory.make({
                label,
                validate: {
                  required: true
                }
              })
            ]
          })}
        />
      )

      const input = screen.getByLabelText(label + ' *')
      expect(input).toBeInTheDocument()
    })
  })

  describe('field', () => {
    it('renders the field template', async () => {
      const label = 'Field label'
      render(
        <FormioForm
          form={FormFactory.make({
            components: [
              ComponentFactory.make({
                label,
                validate: {
                  required: true
                }
              })
            ]
          })}
        />
      )

      const fields = await screen.findAllByTestId(/sfds-field-/)
      fields.forEach((field) => {
        expect(field).toBeInTheDocument()
      })
    })
  })
  describe('fieldset', () => {
    it('renders the fieldset template', async () => {
      const label = 'Field label'
      render(
        <FormioForm
          form={FormFactory.make({
            components: [
              FieldsetFactory.make({
                label
              })
            ]
          })}
        />
      )

      const fieldset = screen.getByTestId('formio-sfds-fieldset')
      expect(fieldset).toBeInTheDocument()
    })
  })

  describe('input', () => {
    function renderForm(props: Partial<InputComponentSchema>) {
      render(
        <FormioForm
          form={FormFactory.make({
            components: [ComponentFactory.make(props)]
          })}
        />
      )
    }

    it('renders aria-live region for datetime components', () => {
      renderForm({ type: 'datetime' })
      const region = screen.getByTestId('datetime-live-region')
      expect(region).toBeInTheDocument()
      expect(region.getAttribute('aria-live')).toBe('assertive')
    })

    it('renders a description', () => {
      const label = 'Field label'
      const description = 'This is the description'
      renderForm({ label, description })
      const el = screen.getByText(description)
      expect(el).toBeInTheDocument()
      expect(el).toBeVisible()

      const input = screen.getByLabelText(label)
      expect(input.getAttribute('aria-labelledby')).toContain(el.id)
    })

    it('renders prefix', () => {
      const prefix = 'Before'
      renderForm({ prefix })
      const pre = screen.getByText(prefix)
      expect(pre).toBeInTheDocument()
      expect(pre).toHaveAttribute('ref', 'prefix')
    })

    it('renders suffix', () => {
      const suffix = 'After'
      renderForm({ suffix })
      const suff = screen.getByText(suffix)
      expect(suff).toBeInTheDocument()
      expect(suff).toHaveAttribute('ref', 'suffix')
    })

    it('renders character counter', () => {
      renderForm({ showCharCount: true })
      const charCount = screen.getByTestId('charcount')
      expect(charCount).toBeInTheDocument()
      expect(charCount.getAttribute('aria-live')).toBe('polite')
    })

    it('renders word counter', () => {
      renderForm({ showWordCount: true })
      const wordCount = screen.getByTestId('wordcount')
      expect(wordCount).toBeInTheDocument()
      expect(wordCount.getAttribute('aria-live')).toBe('polite')
    })
  })

  describe('columns', () => {
    it('renders our template', async () => {
      const labelA = 'A component'
      const labelB = 'B component'
      const labelC = 'C component'
      render(
        <FormioForm
          form={FormFactory.make({
            display: 'form',
            components: [
              ColumnsFactory.make({
                columns: [
                  {
                    width: 6,
                    components: [ComponentFactory.make({ label: labelA })]
                  },
                  {
                    width: 3,
                    components: [ComponentFactory.make({ label: labelB })]
                  },
                  {
                    width: 4,
                    offset: 6,
                    components: [ComponentFactory.make({ label: labelC })]
                  }
                ]
              })
            ]
          })}
        />
      )

      const a = screen.getByLabelText(labelA, { exact: false })
      expect(a).toBeInTheDocument()
      expect(a.closest('[ref*=column]')).toHaveStyle({ width: '50%' })

      const b = screen.getByLabelText(labelB, { exact: false })
      expect(b).toBeInTheDocument()
      expect(b.closest('[ref*=column]')).toHaveStyle({ width: '25%' })

      const c = screen.getByLabelText(labelC, { exact: false })
      expect(c).toBeInTheDocument()
      expect(c.closest('[ref*=column]')).toHaveStyle({
        width: '33.3333333%',
        'margin-left': '-50%'
      })
    })
  })

  describe('callouts', () => {
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
    it('replaces the bg-blue-1 and fg-blue-4 classes with expected Tailwind classes', async () => {
      render(
        <FormioForm
          form={FormFactory.make({
            components: [callouts.components[0] as HTMLElementSchema]
          })}
        />
      )

      const alert = screen.getByRole('alert')
      const classes = Array.from(alert.classList)
      const expectedClasses = [
        ...defaultCalloutClasses,
        'bg-information50',
        'border-information600',
        'callout-titles:text-information600',
        'before:!info-icon'
      ]

      expect(alert).toBeInTheDocument()
      expect(classes).toEqual(expect.arrayContaining(expectedClasses))
      expect(classes).not.toContain('bg-blue-1')

      const icon = document.querySelector('span[data-icon=alert]')
      expect(icon!.classList).toContain('text-information400')
      expect(icon!.classList).not.toContain('fg-blue-4')
    })

    it('replaces the bg-green-1 and fg-green-4 class with expected Tailwind classes', async () => {
      render(
        <FormioForm
          form={FormFactory.make({
            components: [callouts.components[1] as HTMLElementSchema]
          })}
        />
      )

      const alert = screen.getByRole('alert')
      const classes = Array.from(alert.classList)
      const expectedClasses = [
        ...defaultCalloutClasses,
        'bg-success50',
        'border-success600',
        'callout-titles:text-success600',
        'before:!success-icon'
      ]

      expect(alert).toBeInTheDocument()
      expect(classes).toEqual(expect.arrayContaining(expectedClasses))
      expect(classes).not.toContain('bg-green-1')

      const icon = document.querySelector('span[data-icon=check]')
      expect(icon!.classList).toContain('text-success400')
      expect(icon!.classList).not.toContain('fg-green-4')
    })
    it('replaces the bg-red-1 and fg-red-4 classes with expected Tailwind classes', async () => {
      render(
        <FormioForm
          form={FormFactory.make({
            components: [callouts.components[2] as HTMLElementSchema]
          })}
        />
      )

      const alert = screen.getByRole('alert')
      const classes = Array.from(alert.classList)
      const expectedClasses = [
        ...defaultCalloutClasses,
        'bg-danger50',
        'border-danger600',
        'callout-titles:text-danger600',
        'before:!alert-icon'
      ]

      expect(alert).toBeInTheDocument()
      expect(classes).toEqual(expect.arrayContaining(expectedClasses))
      expect(classes).not.toContain('bg-red-1')

      const icon = document.querySelector('span[data-icon=delete]')
      expect(icon!.classList).toContain('text-danger400')
      expect(icon!.classList).not.toContain('fg-red-4')
    })
    it('renders and replaces nothing if the className and content properties are not in the schema', async () => {
      render(
        <FormioForm
          form={FormFactory.make({
            components: [callouts.components[3] as HTMLElementSchema]
          })}
        />
      )

      const alert = screen.getByRole('alert')
      expect(alert).toBeInTheDocument()
      const classes = Array.from(alert.classList)
      expect(classes).toEqual(['formio-component-htmlelement', '!my-0'])
    })
  })

  describe('checkboxes', () => {
    it('renders checkboxes in the DOM', async () => {
      render(
        <FormioForm
          form={FormFactory.make({
            components: [
              CheckboxFactory.make(),
              CheckboxFactory.make(),
              CheckboxFactory.make(),
              CheckboxFactory.make(),
              CheckboxFactory.make(),
              CheckboxFactory.make(),
              CheckboxFactory.make()
            ]
          })}
        />
      )

      const checkboxInputs = await screen.findAllByTestId(/checkbox-/)
      expect(checkboxInputs.length).toBe(7)
      checkboxInputs.forEach((input) => {
        expect(input).toBeInTheDocument()
      })
    })
  })
  describe('radio buttons', () => {
    it('renders radio buttons in the DOM', async () => {
      render(
        <FormioForm
          form={FormFactory.make({
            components: [RadioFactory.make({ values: OptionFactory.make(17) })]
          })}
        />
      )

      const radioInputs = await screen.findAllByTestId(/radio-/)
      expect(radioInputs.length).toBe(17)
      radioInputs.forEach((input) => {
        expect(input).toBeInTheDocument()
      })
    })
  })
  describe('select', () => {
    it('renders our select template in the DOM', async () => {
      render(
        <FormioForm
          form={FormFactory.make({
            components: [SelectFactory.make()]
          })}
        />
      )

      const select = screen.getByTestId('formio-sfds-select')
      expect(select).toBeInTheDocument()
    })
    it('renders the expected aria attributes', async () => {
      render(
        <FormioForm
          form={FormFactory.make({
            components: [SelectFactory.make({ label: 'Choose an option' })]
          })}
        />
      )
      const select = await screen.findByLabelText('Choose an option')
      expect(select).toBeInTheDocument()
      expect(select).toHaveAttribute('aria-describedby')
      expect(select).toHaveAttribute('aria-labelledby')
    })
  })
  describe('select boxes', () => {
    it('renders select boxes in the DOM', async () => {
      render(
        <FormioForm
          form={FormFactory.make({
            components: [
              SelectBoxesFactory.make({
                values: OptionFactory.make(17)
              })
            ]
          })}
        />
      )

      const selectBoxInputs = await screen.findAllByTestId(/selectBoxes-/)
      expect(selectBoxInputs.length).toBe(17)
      selectBoxInputs.forEach((input) => {
        expect(input).toBeInTheDocument()
      })
    })
  })
})

describe('modifyComponentClassname()', () => {
  it('returns undefined if undefined is received', () => {
    expect(modifyComponentClassname(undefined)).toEqual(undefined)
  })
})

describe('modifyHTMLElementClassname()', () => {
  it('returns undefined if undefined is received', () => {
    expect(modifyHTMLElementClassname(undefined)).toEqual(undefined)
  })
})

describe('disableRadioUncheck()', () => {
  it('replaces the radio component updateValue method', () => {
    const radioPrototype = Components.components.radio
      .prototype as unknown as RadioComponent
    const originalUpdateValue = radioPrototype.updateValue

    disableRadioUncheck()

    const newUpdateValue = radioPrototype.updateValue

    expect(typeof newUpdateValue).toBe('function')
    expect(newUpdateValue).not.toBe(originalUpdateValue)
  })

  it('updates state when value has changed', () => {
    const radioPrototype = Components.components.radio
      .prototype as unknown as RadioComponent

    const mockFieldMethods = {
      getValue: () => 'new value',
      updateOnChange: jest.fn()
    }
    const mockRadioComponent = {
      dataValue: 'old value',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      isEqual: (newValue: string, dataValue: any) => newValue === dataValue,
      setSelectedClasses: jest.fn(),
      updateValue: jest.fn(),
      ...mockFieldMethods
    } as unknown as RadioComponent

    disableRadioUncheck()
    mockRadioComponent.updateValue = radioPrototype.updateValue

    const result = mockRadioComponent.updateValue('new value', {})

    expect(mockRadioComponent.dataValue).toBe('new value')
    expect(mockRadioComponent.setSelectedClasses).toHaveBeenCalled()
    expect(mockRadioComponent.updateOnChange).toHaveBeenCalledWith({}, true)
    expect(result).toBe(true)
  })
})

describe('rewriteLibraryUrl()', () => {
  it('rewrites cdn.form.io URLs with versions', () => {
    expect(
      rewriteLibraryUrl(
        'https://cdn.form.io/flatpickr-formio/4.6.13-formio.3/flatpickr.min.js'
      )
    ).toEqual(
      'https://cdn.jsdelivr.net/npm/flatpickr-formio@4.6.13-formio.3/dist/flatpickr.min.js'
    )
  })

  it('rewrites cdn.form.io URLs without versions', () => {
    expect(
      rewriteLibraryUrl('https://cdn.form.io/flatpickr/flatpickr.min.js')
    ).toEqual('https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.js')
  })

  it.each([
    [
      'https://example.com/flatpickr/flatpickr.min.js',
      'https://cdn.jsdelivr.net/npm/flatpickr-formio@4.6.13-formio.3/dist/flatpickr.min.js'
    ]
  ])('does not rewrite other urls', (url) => {
    expect(rewriteLibraryUrl(url)).toEqual(url)
  })
})

function sleep(ms: number) {
  return act(() => new Promise((resolve) => setTimeout(resolve, ms)))
}

type InputElement = HTMLInputElement | HTMLButtonElement

async function click<T extends InputElement = HTMLButtonElement>(
  text = 'Submit'
) {
  const el: T = screen.getByText(text, { trim: true })
  expect(el).toBeInTheDocument()
  expect(el).toBeVisible()
  expect(el.disabled).toBe(false)
  fireEvent.click(el)
  await sleep(10)
  return el
}

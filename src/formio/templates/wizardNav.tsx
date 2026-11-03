/** @jsx h */
/** @jsxFrag null */
/** @jsxRuntime classic */
import h from 'vhtml'
import { classed } from '@tw-classed/core'
import { isFormSurvey } from '../utils'
import { BUTTON_VARIANTS } from '../../react/Button'
import type { ButtonType, WizardRenderContext } from './wizard'

export default { form }

const buttonClass = classed(BUTTON_VARIANTS)

function isMobile() {
  return window.innerWidth <= 1024
}

/**
 * @see https://github.com/formio/formio.js/blob/v4.21.3/src/templates/bootstrap/wizardNav/form.ejs
 */
export function form({ t, ...ctx }: WizardRenderContext) {
  const formSurvey = isFormSurvey(ctx.form)
  const formSurveySubmitClasses = isMobile() ? 'w-full' : ''
  const buttonProps: Partial<
    Record<ButtonType, { text: string; className: string }>
  > = {
    previous: {
      text: t('back-button', { defaultValue: 'Back' }),
      className: `${buttonClass({ variant: 'secondary' })} 
      before:right-arrow-blue before:rotate-180
      disabled:before:right-arrow-disabled disabled:before:rotate-180`
    },
    next: {
      text: t('next-button', {
        defaultValue: 'Next'
      }),
      className: `${buttonClass()} 
      after:!right-arrow-white 
      disabled:after:!right-arrow-disabled`
    },
    submit: {
      text: t('submit-button', { defaultValue: 'Submit' }),
      className: `${buttonClass()} ${formSurvey ? formSurveySubmitClasses : ''}`
    }
  }

  return (
    <ul
      className={`${
        formSurvey
          ? 'mb-space-xl'
          : 'xs:mb-space-lg md:mb-space-tablet-xxl lg:mb-space-desktop-xxl'
      } mt-20 flex list-none justify-between space-x-8 p-0`}
      id={`${ctx.wizardKey}-nav`}
    >
      {ctx.buttonOrder.map((type) => {
        const { text, ...props } = buttonProps[type] || {}
        const isSinglePage = ctx.panels.length === 1
        return ctx.buttons[type] && text ? (
          <li
            className={`m-0 p-0 ${formSurvey ? formSurveySubmitClasses : ''}`}
            key={type}
          >
            <button ref={`${ctx.wizardKey}-${type}`} {...props}>
              {formSurvey
                ? t('submit-feedback', { defaultValue: 'Submit feedback' })
                : ctx.currentPage === 0 && !isSinglePage
                ? t('get-started', { defaultValue: 'Get started' })
                : text}
            </button>
          </li>
        ) : null
      })}
    </ul>
  )
}

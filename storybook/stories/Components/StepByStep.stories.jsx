import React from 'react'
import { polymorphic, withClasses, withPropsTransform } from '../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Components / Step by Step',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5895%3A3405'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const StepList = withPropsTransform(
  withClasses(({
    as: Component = 'div',
    children,
    ...rest
  }) => (
    <Component {...rest}>
      <div className='absolute top-24 left-24 bottom-24 border-solid border-0 border-r-3 border-slate-4' style={{ marginLeft: '-1.5px' }}></div>
      <ol className='relative m-0 p-0 space-y-96'>
        {children}
      </ol>
    </Component>
  ), 'relative'),
  ({ steps, children, ...rest }) => ({
    children: children || steps?.map((step, index) => <StepListItem key={index} step={index} {...step} />)
  })
)

StepList.args = {
  steps: [
    {
      step: 1,
      content: 'This is example content to show that you should have your content to the right of the numbers, aligned with each number. The length of space between each number can stretch to the length of the content that you have for that step.'
    },
    {
      step: 'and',
      content: 'You do not necessarily have to have paragraphs of text for each step. In most cases, there will at least be some sort of title for each step.'
    },
    {
      step: 2,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    },
    {
      step: 'or',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      optional: true
    },
    {
      step: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]
}

/** @type {import('@storybook/react').Story} */
export const StepListItem = withPropsTransform(
  polymorphic('li', {
    className: 'flex gap-x-48'
  }),
  ({ step, content, children, optional, ...rest }) => ({
    children: (
      <>
        {typeof step === 'number' ? <StepNumberLabel number={step} /> : <StepWordLabel word={step} />}
        <div className='text-slate-4 space-y-20'>
          <div>{content || children}</div>
          {optional === true && <OptionalStepLabel />}
        </div>
      </>
    )
  })
)

StepListItem.argTypes = {
  step: {
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'and', 'or'],
    control: {
      type: 'select'
    }
  },
  content: {
    name: 'Text content',
    type: 'string'
  }
}

StepListItem.args = {
  step: 1,
  content: 'Here is some step content'
}

const StepLabel = polymorphic('div', {
  className: 'w-48 h-48 flex justify-center items-center title-sm flex-shrink-0'
})

/** @type {import('@storybook/react').Story} */
export const StepNumberLabel = withPropsTransform(
  withClasses(StepLabel, 'rounded-full bg-slate-4 text-white'),
  ({ number, children, ...rest }) => ({ ...rest, children: number || children })
)

StepNumberLabel.argTypes = {
  number: {
    name: 'Number',
    type: 'number',
    control: {
      type: 'number',
      min: 1,
      max: 9
    }
  }
}

StepNumberLabel.args = {
  number: 1
}

/** @type {import('@storybook/react').Story} */
export const StepWordLabel = withPropsTransform(
  withClasses(StepLabel, 'text-slate-4 bg-white'),
  ({ word, children, ...rest }) => ({ ...rest, children: word || children })
)

StepWordLabel.args = {
  word: 'and'
}

StepWordLabel.argTypes = {
  word: {
    name: 'Word',
    options: ['and', 'or'],
    control: 'select'
  }
}

/** @type {import('@storybook/react').Story} */
export const OptionalStepLabel = withPropsTransform(
    polymorphic('div', {
    className: 'inline-flex text-small bg-yellow-2 px-12 py-4 text-slate-4'
  }),
  ({ text, children, ...rest }) => ({ children: text || children, ...rest })
)

OptionalStepLabel.defaultProps = {
  text: 'Optional step'
}
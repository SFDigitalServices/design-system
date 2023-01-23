import React from 'react'
import { withClasses, Stub } from '../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  args: {
    text: 'This is the text content. It is not too long, and not too short. Please keep sentences short and legible.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=736%3A0'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const Disclaimer = withClasses(({ title, text, children = text, ...rest }) => (
  <div {...rest}>
    {title ? <h2 className='title-md mt-0 mb-28'>{title}</h2> : ''}
    <p className='m-0'>{children}</p>
  </div>
), 'p-40 rounded bg-blue-2 text-slate-4')

Disclaimer.args = {
  title: 'Why the City does this'
}

/** @type {import('@storybook/react').Story} */
export const PullQuote = withClasses(({ text, children = text, ...rest }) => (
  <blockquote {...rest}>{children}</blockquote>
), 'rounded p-40 bg-yellow-2 text-slate-4')

/** @type {import('@storybook/react').Story} */
export const NeedToKnow = Stub.bind({})

NeedToKnow.storyName = 'Need to know'

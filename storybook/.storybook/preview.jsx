import React from 'react'
import { addParameters } from '@storybook/react'
import 'sfgov-design-system'

/**
 * These are styles applied only to the preview panel.
 */
/* eslint-disable import/no-unresolved -- FIXME: fails in CI */
import 'sfgov-design-system/dist/css/sfds.css'
import 'sfgov-design-system/dist/css/fonts.css'
import { withClasses } from '../src/utils'
/* eslint-enable */

addParameters({
  options: {
    storySort: {
      method: 'alphabetical'
    }
  },
  design: {
    name: 'Figma'
  },
  docs: {
    components: {
      wrapper: withClasses('div', 'text-body responsive-container'),
      h1: withClasses('h1', 'title-lg mt-0 mb-24'),
      h2: withClasses('h2', 'title-md mt-0 mb-24'),
      p: withClasses('p', 'my-24'),
      ol: withClasses('ol', 'my-24 pl-24 space-y-8 text-inherit'),
      ul: withClasses('ul', 'my-24 pl-24 space-y-8 text-inherit'),
      li: withClasses('li', 'm-0 p-0 text-inherit'),
      a: withClasses('a', '')
    }
  }
})

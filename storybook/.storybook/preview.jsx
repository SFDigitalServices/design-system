import React from 'react'
import { addParameters } from '@storybook/react'
import 'sfgov-design-system'

/**
 * These are styles applied only to the preview panel.
 */
/* eslint-disable import/no-unresolved -- FIXME: fails in CI */
import 'sfgov-design-system/dist/css/sfds.css'
import 'sfgov-design-system/dist/css/fonts.css'
/* eslint-enable */

addParameters({
  options: {
    storySort: {
      method: 'alphabetical'
    }
  },
  docs: {
    components: {
      wrapper: props => <div className='text-body responsive-container' {...props} />,
      h1: props => <h1 className='title-lg mt-0 mb-24' {...props} />,
      h2: props => <h2 className='title-md mt-0 mb-24' {...props} />,
      p: props => <p className='my-24' {...props} />,
      ol: props => <ol className='my-24 pl-24 space-y-8 text-inherit' {...props} />,
      ul: props => <ul className='my-24 pl-24 space-y-8 text-inherit' {...props} />,
      li: props => <li className='m-0 p-0 text-inherit' {...props} />,
      a: props => <a {...props} />
    }
  }
})

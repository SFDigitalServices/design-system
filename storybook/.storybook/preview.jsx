import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addParameters, addDecorator } from '@storybook/react'
import { Box, breakpoints } from '@sfgov/react'
import { getDocsBaseUrl } from '../src/utils'

import 'sfgov-design-system/dist/css/fonts.css'
import 'sfgov-design-system/dist/css/sfds.css'

const breakpointViewports = Object.fromEntries(
  Object.entries(breakpoints).map(([name, width]) => [name, {
    name: `Breakpoint: ${name}`,
    styles: {
      width,
      height: '640px'
    }
  }])
)

addDecorator((Story, { parameters }) => (
  <Box css={{ p: 20, ...parameters.container }}>
    {Story()}
  </Box>
))

addParameters({
  layout: 'fullscreen',
  viewport: {
    viewports: {
      ...breakpointViewports,
      ...INITIAL_VIEWPORTS
    }
  },
  design: {
    name: 'Figma',
    type: 'figma'
  },
  sourceLinkPrefix: getDocsBaseUrl(),
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true
    }
  },
  options: {
    storySort: {
      method: 'alphabetical'
    }
  }
})

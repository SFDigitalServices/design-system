import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addParameters, addDecorator } from '@storybook/react'
import { Box, ThemeProvider, breakpointsByName } from '@sfgov/react'
import { getDocsBaseUrl } from '../src/utils'

import 'sfgov-design-system/dist/css/fonts.css'
import 'sfgov-design-system/dist/css/sfds.css'

const breakpoints = Object.fromEntries(
  Object.entries(breakpointsByName).map(([name, width]) => [name, {
    name: `Breakpoint: ${name}`,
    styles: {
      width,
      height: '640px'
    }
  }])
)

addDecorator((Story, { parameters }) => (
  <ThemeProvider>
    <Box p={20} {...parameters.container}>
      {Story()}
    </Box>
  </ThemeProvider>
))

addParameters({
  layout: 'fullscreen',
  viewport: {
    viewports: {
      ...breakpoints,
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

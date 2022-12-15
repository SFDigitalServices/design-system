import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addParameters, addDecorator } from '@storybook/react'
import { Box, breakpoints, GlobalStyle } from '@sfgov/react'
import { getDocsBaseUrl } from '../src/utils'

const breakpointViewports = Object.fromEntries(
  Object.entries(breakpoints)
    .map(([name, value]) => [name, {
      name: `Breakpoint: ${name}`,
      styles: {
        width: value,
        height: '640px'
      }
    }])
)

addDecorator((Story, { parameters }) => (
  <Box css={{ p: 20, fontFamily: '$body', ...parameters.container }}>
    {Story()}
    <GlobalStyle />
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

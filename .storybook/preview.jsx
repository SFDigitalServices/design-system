import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addParameters, addDecorator } from '@storybook/react'
// eslint-disable-next-line import/no-unresolved
import { Box, breakpoints } from '../react'
import { getDocsBaseUrl } from '../stories/utils'

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

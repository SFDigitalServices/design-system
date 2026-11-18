import type { Preview } from '@storybook/react-vite'
import { GridOverlay } from './components/GridOverlay'
import { viewports } from './viewports'

import './preview.css'

const preview: Preview = {
  decorators: [
    (Story, { globals, parameters }) => (
      <>
        <Story />
        {globals.gridOverlay === true && !parameters.hideOverlay ? (
          <GridOverlay />
        ) : null}
      </>
    )
  ],
  initialGlobals: {
    gridOverlay: false
  },
  parameters: {
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      codePanel: true
    },
    viewport: {
      options: viewports
    },
    hideOverlay: false
  }
}

export default preview

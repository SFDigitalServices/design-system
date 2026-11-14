import type { Preview } from '@storybook/react-vite'
import { GridOverlay } from './components/GridOverlay'
import { viewports } from './viewports'

import './preview.css'

const preview: Preview = {
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
    gridOverlay: false,
    viewport: {
      options: viewports
    }
  },
  decorators: [
    (Story, { parameters }) => (
      <div className="font-body text-body">
        <Story />
        {parameters.gridOverlay ? <GridOverlay /> : null}
      </div>
    )
  ]
}

export default preview

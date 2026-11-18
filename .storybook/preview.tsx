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
    ),
    (Story, { globals }) => (
      <div data-theme={globals.sfgovTheme || undefined}>
        <Story />
      </div>
    )
  ],
  initialGlobals: {
    gridOverlay: false,
    sfgovTheme: undefined
  },
  parameters: {
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    controls: {
      /**
       * Set this to true to show the description column in the controls panel.
       * This is cool, but noisy and sometimes confusing: prop types with
       * multiline comments get turned into descriptions, but they don't render
       * links for `{@link SomeSymbol}`.
       *
       * One way to solve this challenge is to more clearly distinguish
       * component props from story args, which would keep doc comments out of
       * control descriptions and force us to map them directly in story
       * renderings.
       */
      expanded: false,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      codePanel: true
    },
    hideOverlay: false,
    layout: 'fullscreen',
    viewport: {
      options: viewports
    }
  }
}

export default preview

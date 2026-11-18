/// <reference types="vite/client" />
import { GridIcon, PaintBrushIcon } from '@storybook/icons'
// The manager bundler compiles JSX to React.createElement, so React must be in scope.
import React, { useCallback, useEffect } from 'react'
import { Select, ToggleButton } from 'storybook/internal/components'
import {
  addons,
  types,
  useGlobals,
  useStorybookApi
} from 'storybook/manager-api'
import { create } from 'storybook/theming'
import brandImage from './images/sfgov-lockup.png'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'sf.gov design system',
    brandUrl: 'https://www.sf.gov',
    brandImage,
    textColor: 'black'
  }),
  toolbar: {
    // there's no need for the remount ("Reload") button at this point
    remount: { hidden: true },
    // disable the light/dark background toggle
    'storybook/background': { hidden: true },
    // disable the background square grid (our layout grid is more useful)
    'storybook/background-grid': { hidden: true }
  }
})

const GRID_OVERLAY_ADDON_ID = 'sfgov/grid-overlay'
const GRID_OVERLAY_TOOL_ID = `${GRID_OVERLAY_ADDON_ID}/tool`

const THEME_ADDON_ID = 'sfgov/theme'
const THEME_TOOL_ID = `${THEME_ADDON_ID}/tool`

// Keep in sync with the [data-theme] values in src/css/colors.css.
const THEMES = ['blue', 'teal', 'orange', 'green', 'pink', 'brown', 'red']
const THEME_OPTIONS = THEMES.map((value) => ({
  value,
  title: value.charAt(0).toUpperCase() + value.slice(1)
}))

function GridOverlayTool() {
  const [globals, updateGlobals] = useGlobals()
  const api = useStorybookApi()
  const isActive = globals.gridOverlay === true

  const toggle = useCallback(
    () => updateGlobals({ gridOverlay: !isActive }),
    [isActive, updateGlobals]
  )

  useEffect(() => {
    api.setAddonShortcut(GRID_OVERLAY_ADDON_ID, {
      label: 'Toggle grid overlay',
      defaultShortcut: ['G'],
      actionName: 'gridOverlay',
      showInMenu: false,
      action: toggle
    })
  }, [api, toggle])

  return (
    <ToggleButton
      padding="small"
      variant="ghost"
      pressed={isActive}
      ariaLabel="Toggle grid overlay"
      tooltip="Toggle grid overlay [G]"
      onClick={toggle}
    >
      <GridIcon />
    </ToggleButton>
  )
}

function ThemeTool() {
  const [globals, updateGlobals] = useGlobals()
  const theme = globals.sfgovTheme as string | undefined

  return (
    <Select
      key={theme ?? 'none'}
      ariaLabel="Theme"
      icon={<PaintBrushIcon />}
      options={THEME_OPTIONS}
      defaultOptions={theme}
      resetLabel="Default theme"
      onReset={() => updateGlobals({ sfgovTheme: undefined })}
      onSelect={(value) => updateGlobals({ sfgovTheme: value })}
    >
      Theme
    </Select>
  )
}

addons.register(GRID_OVERLAY_ADDON_ID, () => {
  addons.add(GRID_OVERLAY_TOOL_ID, {
    type: types.TOOL,
    title: 'Grid overlay',
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: GridOverlayTool
  })
})

addons.register(THEME_ADDON_ID, () => {
  addons.add(THEME_TOOL_ID, {
    type: types.TOOL,
    title: 'Theme',
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: ThemeTool
  })
})

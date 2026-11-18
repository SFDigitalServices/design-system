import { GridIcon } from '@storybook/icons'
// The manager bundler compiles JSX to React.createElement, so React must be in scope.
import React, { useCallback, useEffect } from 'react'
import { ToggleButton } from 'storybook/internal/components'
import {
  addons,
  types,
  useGlobals,
  useStorybookApi
} from 'storybook/manager-api'

const ADDON_ID = 'sfds/grid-overlay'
const TOOL_ID = `${ADDON_ID}/tool`

function GridOverlayTool() {
  const [globals, updateGlobals] = useGlobals()
  const api = useStorybookApi()
  const isActive = globals.gridOverlay === true

  const toggle = useCallback(
    () => updateGlobals({ gridOverlay: !isActive }),
    [isActive, updateGlobals]
  )

  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
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

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Grid overlay',
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: GridOverlayTool
  })
})

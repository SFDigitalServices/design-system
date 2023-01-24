// import React from 'react'

import { Stub } from '../utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Locator Maps',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=3554%3A1289'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const LocatorMap = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const AddressWithLocatorMap = Stub.bind({})

AddressWithLocatorMap.storyName = 'Address + Locator Map'

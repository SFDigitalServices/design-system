// import React from 'react'

import { Stub } from '../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=795%3A0'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const HeroPerson = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const Person = Stub.bind({})

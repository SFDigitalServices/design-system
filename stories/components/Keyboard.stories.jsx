import { Stub } from '../utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  parameters: {
    sourceLink: '/components/kbd/',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=736%3A0'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const Kbd = Stub.bind({})

Kbd.storyName = '<kbd>'

/** @type {import('@storybook/react').Story} */
export const KeyCombo = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const KeyboardHelp = Stub.bind({})

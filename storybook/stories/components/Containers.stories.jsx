import { Stub } from '../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Containers',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=736%3A0'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const Disclaimer = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const PullQuote = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const NeedToKnow = Stub.bind({})

NeedToKnow.storyName = 'Need to know'

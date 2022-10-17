import { Stub } from '../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Alerts & Banners',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5901%3A3274'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const Banner = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const BannerAlert = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const FormAlert = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const Callout = Stub.bind({})

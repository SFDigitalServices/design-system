import { Stub } from '../../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Forms/Text Inputs',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5989%3A6227'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const TextInput = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const TextInputButton = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const MaskedTextInput = Stub.bind({})

MaskedTextInput.parameters = {
  design: {
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5993%3A6283'
  }
}

/** @type {import('@storybook/react').Story} */
export const TextArea = Stub.bind({})

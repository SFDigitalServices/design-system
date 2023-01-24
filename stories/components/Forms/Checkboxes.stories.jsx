import { Stub } from '../../utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5978%3A6077'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const Checkbox = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const CheckboxSet = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const SmallCheckbox = Stub.bind({})

SmallCheckbox.parameters = {
  design: {
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=3861%3A4848'
  }
}

/** @type {import('@storybook/react').Story} */
export const SmallCheckboxSet = Stub.bind({})

SmallCheckboxSet.parameters = {
  design: {
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=3861%3A4848'
  }
}

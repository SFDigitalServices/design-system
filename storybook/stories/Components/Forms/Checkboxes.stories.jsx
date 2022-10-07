import { polymorphic } from '../../../src/utils'

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
export const Checkbox = () => 'TODO'

/** @type {import('@storybook/react').Story} */
export const CheckboxSet = polymorphic('fieldset', { children: 'TODO' })

/** @type {import('@storybook/react').Story} */
export const SmallCheckbox = () => 'TODO'

SmallCheckbox.parameters = {
  design: {
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=3861%3A4848'
  }
}

/** @type {import('@storybook/react').Story} */
export const SmallCheckboxSet = () => 'TODO'

SmallCheckboxSet.parameters = {
  design: {
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=3861%3A4848'
  }
}

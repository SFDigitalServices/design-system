import { polymorphic } from '../../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Components / Forms / Radio buttons',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5977%3A6009'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const RadioButton = () => 'TODO'

/** @type {import('@storybook/react').Story} */
export const RadioButtonSet = polymorphic('fieldset', { children: 'TODO' })

/** @type {import('@storybook/react').Story} */
export const SmallRadioButton = () => 'TODO'

SmallRadioButton.parameters = {
  design: {
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5978%3A6030'
  }
}

/** @type {import('@storybook/react').Story} */
export const SmallRadioButtonSet = () => 'TODO'

SmallRadioButtonSet.parameters = {
  design: {
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5978%3A6030'
  }
}

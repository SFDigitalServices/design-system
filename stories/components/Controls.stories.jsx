import { Stub } from '../utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  parameters: {
    design: {
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const Accordion = Stub.bind({})

Accordion.parameters = {
  sourceLink: '/components/details/',
  design: {
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=3217%3A230'
  }
}

/** @type {import('@storybook/react').Story} */
export const Pagination = Stub.bind({})

Pagination.parameters = {
  design: {
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5989%3A6171'
  }
}

/** @type {import('@storybook/react').Story} */
export const SegmentedBar = Stub.bind({})

SegmentedBar.parameters = {
  design: {
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5989%3A6186'
  }
}

/** @type {import('@storybook/react').Story} */
export const Toggle = Stub.bind({})

Toggle.parameters = {
  design: {
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5989%3A6201'
  }
}

/** @type {import('@storybook/react').Story} */
export const ShowMoreLess = Stub.bind({})

ShowMoreLess.storyName = 'Show more/less'

ShowMoreLess.parameters = {
  design: {
    url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5989%3A6201'
  }
}

// import React from 'react'

import { Stub } from '../../src/utils'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Icon + Information Lockups',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=698%3A187'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const EmailAddress = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const PhoneNumbers = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const MailingAddress = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const DocumentLink = Stub.bind({})

/** @type {import('@storybook/react').Story} */
export const Timestamp = Stub.bind({})

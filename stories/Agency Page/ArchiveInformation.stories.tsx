import React, { ComponentType } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import {
  ArchiveInformation as ArchiveInformationComponent,
  ArchiveInformationProps
} from '@sfgov/design-system/react'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  args: {
    agencyName: 'Office of Archiving offices',
    email: 'notrealemail@sfgov.org',
    archiveURL: '#'
  } as ArchiveInformationProps,
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5901%3A3274'
    // }
  }
} as ComponentMeta<ComponentType<ArchiveInformationProps>>

export const ArchiveInformation: Story<ArchiveInformationProps> = (args: ArchiveInformationProps) => <ArchiveInformationComponent {...args} />

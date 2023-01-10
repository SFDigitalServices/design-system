import React, { ComponentType } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import {
  AgencyHeader as AgencyHeaderComponent,
  AgencyHeaderProps
} from '@sfgov/design-system/react'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Agency Header',
  args: {
    title: 'Office of Generic Text',
    subtitle:
      'This is a made up department that specializes in the cultivation of generic text.',
    parentAgencies: [
      { id: 1, title: 'Parent agency', href: '' },
      { id: 2, title: 'Another agency', href: '' },
      { id: 3, title: 'Yet another agency', href: '' }
    ],
    contact: {
      address: '1 Dr Carlton B Goodlett Pl #316',
      phone: '415-444-9999'
    }
  } as AgencyHeaderProps,
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5901%3A3274'
    // }
  }
} as ComponentMeta<ComponentType<AgencyHeaderProps>>

export const AgencyHeader: Story<AgencyHeaderProps> = (args: AgencyHeaderProps) => <AgencyHeaderComponent {...args} />

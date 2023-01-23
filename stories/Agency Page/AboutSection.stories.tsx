import React, { ComponentType } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import {
  AboutSection as AboutSectionComponent,
  AboutSectionProps,
  Button
} from '@sfgov/design-system/react'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  args: {
    about: 'This is where you describe what this section is about.',
    ctaTitle: 'Here is a call to action related to this section.',
    ctaComponent: 'Button',
    divisions: [
      { id: 45112, href: '/#', title: 'This is a department division' },
      { id: 45113, href: '/#', title: 'This is another division' },
      { id: 45114, href: '/#', title: 'And another' }
    ],
    relatedDivisions: [
      { id: 45111, href: '/#', title: 'This is a public body' },
      { id: 45211, href: '/#', title: 'This is another public body' },
      { id: 45311, href: '/#', title: 'And another' }
    ]
  } as AboutSectionProps,
  argTypes: {
    ctaComponent: {
      options: ['Button'],
      control: {
        type: 'select'
      },
      mapping: {
        Button: <Button>Call to Action button</Button>
      }
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ssyjx39mPsBSbqy7FDWwBk/Wireframes---Corey?node-id=1%3A25416&t=kpXrtFPgqUwRxRjs-0'
    }
  }
} as ComponentMeta<ComponentType<AboutSectionProps>>

export const AboutSection: Story<AboutSectionProps> = (
  args: AboutSectionProps
) => <AboutSectionComponent {...args} />

import React, { ComponentType } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { Spotlight as SpotlightComponent, SpotlightProps } from '../../react'

const imgSrc =
  'https://sf.gov/sites/default/files/styles/default/public/2021-10/san-francisco-street-day-time.jpg?itok=5QqBW-AZ'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Spotlight',
  args: {
    title: 'Generic Department',
    body: 'This is a made up department that informs you about the cultivation of generic departments.',
    buttonContent: 'This is a button',
    image: imgSrc,
    isFullWidth: false,
    isTitleFirst: false
  } as SpotlightProps,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ssyjx39mPsBSbqy7FDWwBk/Wireframes---Corey?node-id=219%3A36414&t=2DJIeMAUV4klBvro-0'
    }
  }
} as ComponentMeta<ComponentType<SpotlightProps>>

export const Spotlight: Story<SpotlightProps> = (args: SpotlightProps) => (
  <SpotlightComponent {...args} />
)

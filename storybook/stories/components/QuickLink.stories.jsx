import React from 'react'
import tw from 'tailwind-styled-components'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Quick Link',
  args: {
    data: {
      title: 'Generic Quick Link',
      description: 'This is a made up quick link that informs you about the cultivation of generic elements.'
    }
  },
  argTypes: {
  },
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5901%3A3274'
    // }
  }
}

// TODO: we should probably enable word-break in tailwind for below
const QuickLinkContainer = tw.a`
  group
  flex
  flex-col
  no-underline
  border-solid
  border-3 border-grey-2
  py-16
  px-24
  rounded
  lg:p-24
  hocus:bg-action
  hocus:border-white
`

const QuickLinkTitle = tw.p`
  text-title-md
  text-action
  font-medium
  mb-8
  lg:mb-16
  lg:text-title-md-desktop
  group-hocus:text-white
`

const QuickLinkDivider = tw.div`
  h-8
  mb-8
  w-100
  bg-blue-bright
  lg:mb-16
  group-hocus:bg-white
`

const QuickLinkSubtitle = tw.p`
  text-body
  text-black
  flex-auto
  group-hocus:text-white
`

export const QuickLink = ({ data: { title, description } }) =>
  <QuickLinkContainer>
    <QuickLinkTitle>
      {title}
    </QuickLinkTitle>
    <QuickLinkDivider />
    <QuickLinkSubtitle>
      {description}
    </QuickLinkSubtitle>
    <sfgov-icon symbol='arrow-right' class='flex justify-end items-end text-action group-hocus:text-white' />
  </QuickLinkContainer>

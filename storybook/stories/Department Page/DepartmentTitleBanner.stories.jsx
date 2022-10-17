import React from "react"
import tw from "tailwind-styled-components"

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Department Page Title',
  args: {
    text: 'A very extreme and urgent thing is about to happen in San Francisco.'
  },
  argTypes: {
    // text: {
    //   name: 'Text',
    //   type: 'string'
    // }
  },
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5901%3A3274'
    // }
  }
}

export const DepartmentTitleBanner = () =>
  <div>
    <DepartmentPageTitle>City Administrator</DepartmentPageTitle>
    <DepartmentPageSubtitle>With integrity, the Office of the City Administrator serves all San Franciscans and its visitors.</DepartmentPageSubtitle>
    <div className="flex">
      <p className="font-medium">In this page:</p>
      <AnchorLinks>
        <li><a>News</a></li>
        <li><a>Resources</a></li>
        <li><a>Contact</a></li>
      </AnchorLinks>
    </div>
  </div>
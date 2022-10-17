import React from 'react'
import BigDescription from '../../src/BigDescription'
import tw from 'tailwind-styled-components'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Department Page Title',
  args: {
    title: 'Office of Generic Text',
    subtitle: 'This is a made up department that specializes in the cultivation of generic text.',
    links: [{ text: 'News', href: '' }, { text: 'Resources', href: '' }, { text: 'Contact', href: '' }]
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

const DepartmentPageTitle = tw.p`
  text-display-lg
  text-black
  lg:text-display-lg-desktop
  font-light
`

const DepartmentPageSubtitle = tw(BigDescription)`
  text-black
`

const AnchorLinks = tw.ul`
  inline-flex
  list-none
  space-x-40
  underline
`

export const DepartmentTitleBanner = ({ title, subtitle, links }) =>
  <div>
    <DepartmentPageTitle>{ title }</DepartmentPageTitle>
    <DepartmentPageSubtitle>{ subtitle }</DepartmentPageSubtitle>
    <div className='flex'>
      <p className='font-medium'>In this page:</p>
      <AnchorLinks>
        {links.map(link =>
          <li key={link.href}><a>{ link.text }</a></li>
        )}
      </AnchorLinks>
    </div>
  </div>

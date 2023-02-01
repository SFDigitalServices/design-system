import React from 'react'
import {
  Box,
  DisplayLg,
  Section,
  TitleXl,
  TitleXs
} from '../../react'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  args: {
    title: 'An information page',
    subtitle: 'Here is more information on the information page',
    contentSections: [
      {
        id: 1,
        type: 'custom-section',
        title: 'San Francisco',
        children: <p>Hello!</p>
      },
      {
        id: 2,
        type: 'image',
        src: 'https://sf.gov/sites/default/files/styles/836x484/public/2022-09/SF%20Prepared.png?itok=3JTfkksh'
      },
      {
        id: 3,
        type: 'custom-section',
        title: 'San Francisco',
        children: <p>Hello!</p>
      },
      {
        id: 4,
        type: 'custom-section',
        title: 'San Francisco',
        children: <p>Hello!</p>
      }
    ]
  },
  argTypes: {
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Ssyjx39mPsBSbqy7FDWwBk/Wireframes---Corey?node-id=1%3A10765&t=aOZrbzRCBt9KKM0B-0'
    }
  }
}

export const InformationPage = ({ title, subtitle, contentSections }) => (
  <Section>
    <DisplayLg css={{ mb: 28 }}>{title}</DisplayLg>
    <TitleXs>{subtitle}</TitleXs>
    {contentSections.map(section => {
      let content = (
        <>
          <TitleXl>{section.title}</TitleXl>
          {section.children}
        </>
      )
      if (section.type === 'image') {
        content = <img style={{ objectFit: 'contain' }} src={section.src} />
      }

      return (
        <Box key={section.id} css={{ my: 48 }}>
          {content}
        </Box>
      )
    })}
  </Section>
)

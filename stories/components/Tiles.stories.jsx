import React from 'react'
import {
  ContentTile as ContentTileComponent,
  EventTile as EventTileComponent,
  NewsTile as NewsTileComponent,
  QuickLink as QuickLinkComponent
} from '../../react'

// const imgSrc = 'https://sf.gov/sites/default/files/styles/default/public/2021-10/san-francisco-street-day-time.jpg?itok=5QqBW-AZ'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  decorators: [(Story) => <div className='max-w-md'><Story /></div>],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=3377%3A167'
    }
  }
}

/** @type {import('@storybook/react').Story} */
export const NewsTile = NewsTileComponent.bind({})
NewsTile.args = {
  title: 'News!',
  body: 'Monday, April 28',
  href: '/#'
}

/** @type {import('@storybook/react').Story} */
export const QuickLink = QuickLinkComponent.bind({})
QuickLink.args = {
  title: 'Quick Link',
  body: 'This is a quick link body',
  href: '/#'
}

/** @type {import('@storybook/react').Story} */
export const ContentTile = ContentTileComponent.bind({})
ContentTile.args = {
  title: 'Content Tile',
  body: 'This is a content tile body',
  href: '/#'
}

/** @type {import('@storybook/react').Story} */
export const EventTile = EventTileComponent.bind({})
EventTile.args = {
  title: 'Event Tile',
  body: 'This is an event tile body',
  href: '/#',
  eventType: 'Event type'
}

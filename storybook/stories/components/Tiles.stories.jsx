import React from 'react'
import {
  ContentTile as ContentTileComponent,
  FeatureTile as FeatureTileComponent,
  NewsTile as NewsTileComponent
} from '../../src/Tile'

const imgSrc = 'https://sf.gov/sites/default/files/styles/default/public/2021-10/san-francisco-street-day-time.jpg?itok=5QqBW-AZ'

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
  title: 'news!',
  body: 'Monday, April 28',
  img: imgSrc
}

/** @type {import('@storybook/react').Story} */
export const FeatureTile = FeatureTileComponent.bind({})
FeatureTile.args = {
  title: 'feature tile',
  body: 'This is a feature tile body'
}

/** @type {import('@storybook/react').Story} */
export const ContentTile = ContentTileComponent.bind({})
ContentTile.args = {
  title: 'content tile',
  body: 'This is a content tile body'
}

// /** @type {import('@storybook/react').Story} */
// export const QuickLink = TileTemplate.bind({})
// QuickLink.args = { ...EventTile.args, body: 'This is a feature tile body', variant: 'Feature' }

// /** @type {import('@storybook/react').Story} */
// export const TopicTile = TileTemplate.bind({})
// TopicTile.args = { ...EventTile.args, body: 'This is a feature tile body', variant: 'Feature' }

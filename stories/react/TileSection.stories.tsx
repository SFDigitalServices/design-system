import type { TileSectionProps} from '#src/react';
import { Tile, TileSection, TileSet } from '#src/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { withContainer } from '../helpers'

type TileSectionArgs = Pick<TileSectionProps, 'heading' | 'children'>

const meta: Meta<TileSectionArgs> = {
  title: 'React/Tiles/TileSection',
  component: TileSection,
  args: {
    heading: 'Tile section heading',
    children: (
      <>
        <TileSet heading="Set 1">
          <Tile href="#1" heading="Tile 1" description="Tile 1 description" />
          <Tile href="#2" heading="Tile 2" description="Tile 2 description" />
        </TileSet>
        <TileSet heading="Set 2">
          <Tile href="#3" heading="Tile 3" description="Tile 3 description" />
          <Tile href="#4" heading="Tile 4" description="Tile 4 description" />
        </TileSet>
      </>
    )
  },
  decorators: [withContainer()]
}

export default meta

type TileSetStory = StoryObj<typeof meta>

export const Default: TileSetStory = {}

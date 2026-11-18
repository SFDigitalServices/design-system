import { Tile, TileSet, TileSetProps } from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { withContainer } from '../helpers'

type TileSetArgs = Pick<TileSetProps, 'heading' | 'children'>

const meta: Meta<TileSetArgs> = {
  title: 'React/TileSet',
  component: TileSet,
  args: {
    children: (
      <>
        <Tile href="#1" heading="Tile 1" description="Tile 1 description" />
        <Tile href="#2" heading="Tile 2" description="Tile 2 description" />
      </>
    )
  },
  decorators: [withContainer()]
}

export default meta

type TileSetStory = StoryObj<typeof meta>

export const Default: TileSetStory = {}

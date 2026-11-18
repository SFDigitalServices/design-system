import { Tile, TileProps, TileSet, TileSetProps } from '@/src/react'
import * as icons from '@/src/react/icons'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { iconComponentInput, withContainer } from '../helpers'

type TileSetArgs = Pick<TileSetProps, 'heading'> &
  Pick<TileProps, 'icon'> & {
    count: number
  }

const meta: Meta<TileSetArgs> = {
  title: 'React/Tiles/TileSet',
  args: {
    heading: 'Tile set heading',
    icon: undefined,
    count: 3
  },
  argTypes: {
    icon: {
      name: 'Icon',
      ...iconComponentInput()
    }
  },
  render({ heading, icon, count }) {
    return (
      <TileSet heading={heading}>
        {Array.from({ length: count }).map((_, i) => (
          <Tile key={i} heading={`Tile ${i + 1}`} href="#" icon={icon} />
        ))}
      </TileSet>
    )
  },
  decorators: [withContainer()]
}

export default meta

type TileSetStory = StoryObj<typeof meta>

export const Default: TileSetStory = {}

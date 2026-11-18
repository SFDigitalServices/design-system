import { Tile, TileProps, TileSet } from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { iconComponentInput, withContainer } from '../helpers'

type TileArgs = Pick<TileProps, 'heading' | 'href' | 'description' | 'icon'>

const meta: Meta<TileArgs> = {
  title: 'React/Tiles/Tile',
  component: Tile,
  args: {
    href: '#',
    heading: 'Tile set heading',
    description: 'The quick brown fox jumps over the lazy dog.',
    icon: undefined
  },
  argTypes: {
    icon: {
      name: 'Icon',
      ...iconComponentInput()
    }
  },
  render(args) {
    return (
      <TileSet>
        <Tile {...args} />
      </TileSet>
    )
  },
  decorators: [withContainer()]
}

export default meta

type TileStory = StoryObj<typeof meta>

export const Default: TileStory = {}

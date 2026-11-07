import React, { ComponentProps } from 'react'
import { classes, Grid } from '@/design-system'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  args: {
    children:
      'This content takes up half of the grid. It can be really long and there should be lots of text here to show what is really happening.',
    showOverlay: false
  },
  argTypes: {
    children: {
      name: 'text',
      type: 'string',
      control: 'text'
    },
    showOverlay: {
      name: 'Show grid overlay',
      type: 'boolean'
    }
  },
  render: ({ showOverlay, children, ...props }) => (
    <>
      {showOverlay ? <GridOverlay /> : null}
      <Grid {...props}>
        <div className="col-span-3 md:col-span-6 border-accent900 border-1 border-dotted">
          {children}
        </div>
      </Grid>
    </>
  )
}

export default meta

type GridStory = StoryObj<typeof meta>

export const Grid_: GridStory = {}

function GridOverlay() {
  const overlayClasses = classes(
    'fixed h-full top-0 left-0 right-0 z-50 opacity-40'
  )
  const GridBlocks = ({
    count,
    ...rest
  }: ComponentProps<'div'> & {
    count: number
  }) => (
    <>
      {[...Array(count)].map((_, i) => (
        <div key={`block-${i}`} className="bg-[#faf]" {...rest} />
      ))}
    </>
  )
  return (
    <>
      <Grid className={`grid md:hidden ${overlayClasses}`}>
        <GridBlocks count={6} />
      </Grid>
      <Grid className={`hidden md:grid ${overlayClasses}`}>
        <GridBlocks count={12} />
      </Grid>
    </>
  )
}

import React, { ComponentType } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { Box, Grid } from '@sfgov/design-system/react'

type GridArgs = {
  showOverlay: boolean;
};

export default {
  component: Grid,
  args: {
    showOverlay: true
  }
} as ComponentMeta<ComponentType<GridArgs>>

const GridOverlay = ({ showOverlay }) => {
  const overlayCss = {
    backgroundColor: '$redL2'
  }
  const gridCss = {
    position: 'fixed',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0.33,
    zIndex: 50
  }

  return (
    <>
      <Grid css={{ '@md': { display: 'none' }, ...gridCss }}>
        {showOverlay &&
          [...Array(6)].map((_, i) => (
            <Box key={`${i}-small`} css={overlayCss} />
          ))}
      </Grid>
      <Grid css={{ display: 'none', '@md': { display: 'grid' }, ...gridCss }}>
        {showOverlay &&
          [...Array(12)].map((_, i) => (
            <Box key={`${i}-med`} css={overlayCss} />
          ))}
      </Grid>
    </>
  )
}

export const GridStory: Story<GridArgs> = (args: GridArgs) => {
  const borderStyles = {
    borderColor: '$black',
    borderStyle: 'dotted',
    borderWidth: 1
  }

  return (
    <>
      <GridOverlay {...args} />
      <Grid>
        <Box
          css={{
            gridColumn: 'span 3',
            '@md': {
              gridColumn: 'span 6'
            },
            ...borderStyles
          }}
        >
          This is a Box spanning half of the grid
        </Box>
        <Box
          css={{
            gridColumn: '2 / 6',
            '@md': {
              gridColumn: '4 / 10'
            },
            ...borderStyles
          }}
        >
          This is a Box spanning the middle of the grid
        </Box>
        <Box
          css={{
            gridColumn: '4 / 7',
            '@md': {
              gridColumn: '9 / 13'
            },
            ...borderStyles
          }}
        >
          This is a Box spanning the end of the grid
        </Box>
      </Grid>
    </>
  )
}

GridStory.storyName = 'Generic Grid Layout'

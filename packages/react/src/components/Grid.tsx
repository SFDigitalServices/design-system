import { styled } from '../stitches.config'
import { Box } from './Box'

export const Grid = styled(Box, {
  display: 'grid',
  cols: 6,
  '@md': {
    cols: 12,
    gap: 28
  }
})

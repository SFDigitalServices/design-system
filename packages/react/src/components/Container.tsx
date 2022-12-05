import { styled } from '../stitches.config'
import { Box } from './Box'

export const Container = styled(Box, {
  mx: 20,
  maxWidth: '$lg',
  '@md': {
    mx: 28
  },
  '@lg': {
    mx: 96
  },
  '@xl': {
    mx: 'auto'
  }
})

import { styled } from '../stitches.config'
import { Box } from './Box'
import type { VariantProps } from '../utils'

export const Flex = styled(Box, {
  display: 'flex',
  variants: {
    inline: {
      true: {
        display: 'inline-flex'
      }
    }
  }
})

export type FlexVariant = VariantProps<typeof Flex>

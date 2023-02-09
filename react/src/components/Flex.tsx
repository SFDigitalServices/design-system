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

export type FlexProps = VariantProps<typeof Flex>

// FIXME[1.0]: remove this alias
export type FlexVariant = FlexProps

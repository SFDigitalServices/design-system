import type { PropsWithRef } from 'react'
import { styled } from '../stitches.config'
import { Box } from './Box'

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

export type FlexProps = PropsWithRef<typeof Flex>

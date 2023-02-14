import { styled } from '../stitches.config'
import type { VariantProps } from '../utils'

export const Box = styled('div', {
  display: 'block'
})

export type BoxProps = VariantProps<typeof Box>

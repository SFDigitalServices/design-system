import { Container, classed } from '@/src/react'
import { Decorator } from '@storybook/react-vite'
import { ComponentProps } from 'react'

const PaddedContainer = classed(Container, 'py-20')

export function withContainer(
  props?: ComponentProps<typeof PaddedContainer>
): Decorator {
  return (Story) => (
    <PaddedContainer {...props}>
      <Story />
    </PaddedContainer>
  )
}

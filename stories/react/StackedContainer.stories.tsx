import {
  Container,
  IconBuilding,
  IconCash,
  IconEmail,
  IconTrafficCone,
  StackedContainer,
  StackedItem
} from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react'
import { withContainer } from '../helpers'

const meta: Meta<typeof StackedContainer> = {
  title: 'React/StackedContainer',
  component: StackedContainer,
  decorators: [withContainer()]
}

export default meta

type StackedContainerStory = StoryObj<typeof meta>

export const One: StackedContainerStory = {
  render() {
    return (
      <StackedContainer>
        <StackedItem icon={IconBuilding} title="Building">
          <p>
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog.
          </p>
        </StackedItem>
      </StackedContainer>
    )
  }
}

export const Two: StackedContainerStory = {
  render() {
    return (
      <StackedContainer>
        <StackedItem icon={IconCash} title="Money">
          <p>
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog.
          </p>
        </StackedItem>
        <StackedItem icon={IconEmail} title="Mail">
          <p>
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog.
          </p>
        </StackedItem>
      </StackedContainer>
    )
  }
}

export const Three: StackedContainerStory = {
  render() {
    return (
      <StackedContainer>
        <StackedItem icon={IconCash} title="Money">
          <p>The quick brown fox jumps over the lazy dog.</p>
        </StackedItem>
        <StackedItem icon={IconEmail} title="Mail">
          <p>The quick brown fox jumps over the lazy dog.</p>
        </StackedItem>
        <StackedItem icon={IconTrafficCone} title="Look out!">
          <p>The quick brown fox jumps over the lazy dog.</p>
        </StackedItem>
      </StackedContainer>
    )
  }
}

import { Container } from '@/src/react/Container'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Container> = {
  title: 'React/Container'
}

export default meta

type ContainerStory = StoryObj<typeof meta>

export const Default: ContainerStory = {
  render() {
    return <Container className="bg-neutral200 min-h-60" />
  }
}

export const FullWidth: ContainerStory = {
  render() {
    return (
      <>
        <div className="bg-primary200 py-20">
          <Container>Light blue</Container>
        </div>
        <div className="bg-neutral10 py-20">
          <Container>Neutral10</Container>
        </div>
        <div className="bg-theme-secondary py-20">
          <Container>Theme secondary</Container>
        </div>
      </>
    )
  }
}

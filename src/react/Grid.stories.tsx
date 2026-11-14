import type { Meta, StoryObj } from '@storybook/react-vite'
import { Container, DisplayXXXl, Grid, HeadingLg } from './'

const LOREM_IPSUM = 'The quick brown fox jumps over the lazy dog'

const meta: Meta<typeof Grid> = {
  title: 'React/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <Container className="py-20">
        <Story />
      </Container>
    )
  ]
}

export default meta

type GridStory = StoryObj<typeof meta>

export const FullSpan: GridStory = {
  render() {
    return (
      <Grid>
        <div className="col-span-full p-40 rounded-4 bg-neutral200">
          <DisplayXXXl>{LOREM_IPSUM}</DisplayXXXl>
        </div>
      </Grid>
    )
  }
}

export const TwoColumnGrid: GridStory = {
  render() {
    return (
      <Grid>
        <div className="col-span-full md:col-span-6 p-20 rounded-4 bg-primary300">
          <DisplayXXXl>{LOREM_IPSUM}</DisplayXXXl>
        </div>
        <div className="col-span-full md:col-span-6 p-20 rounded-4 bg-secondary300">
          <DisplayXXXl>{LOREM_IPSUM}</DisplayXXXl>
        </div>
      </Grid>
    )
  }
}

export const ThreeColumnGrid: GridStory = {
  render() {
    return (
      <Grid>
        <div className="col-span-full md:col-span-4 p-20 rounded-4 bg-primary300">
          <HeadingLg>{LOREM_IPSUM}</HeadingLg>
        </div>
        <div className="col-span-full md:col-span-4 p-20 rounded-4 bg-secondary300">
          <HeadingLg>{LOREM_IPSUM}</HeadingLg>
        </div>
        <div className="col-span-full md:col-span-4 p-20 rounded-4 bg-accent400">
          <HeadingLg>{LOREM_IPSUM}</HeadingLg>
        </div>
      </Grid>
    )
  }
}

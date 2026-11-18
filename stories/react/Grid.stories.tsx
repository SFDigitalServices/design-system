import { Container, DisplayXXXl, Grid, HeadingLg } from '@/src/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { withContainer } from '../helpers/decorators'

const meta: Meta<typeof Grid> = {
  title: 'React/Grid',
  component: Grid,
  decorators: [withContainer()]
}

export default meta

type GridStory = StoryObj<typeof meta>

export const FullSpan: GridStory = {
  render() {
    return (
      <Grid>
        <div className="col-span-full p-40 rounded-4 bg-neutral200">
          <DisplayXXXl>
            The quick brown fox jumps over the lazy dog.
          </DisplayXXXl>
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
          <DisplayXXXl>
            The quick brown fox jumps over the lazy dog.
          </DisplayXXXl>
        </div>
        <div className="col-span-full md:col-span-6 p-20 rounded-4 bg-secondary300">
          <DisplayXXXl>
            The quick brown fox jumps over the lazy dog.
          </DisplayXXXl>
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
          <HeadingLg>The quick brown fox jumps over the lazy dog.</HeadingLg>
        </div>
        <div className="col-span-full md:col-span-4 p-20 rounded-4 bg-secondary300">
          <HeadingLg>The quick brown fox jumps over the lazy dog.</HeadingLg>
        </div>
        <div className="col-span-full md:col-span-4 p-20 rounded-4 bg-accent400">
          <HeadingLg>The quick brown fox jumps over the lazy dog.</HeadingLg>
        </div>
      </Grid>
    )
  }
}

import React, { ComponentType } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { CSS, Box, Container } from '../../react'

type ContainerArgs = {
  content: string;
  css?: CSS;
};

export default {
  component: Container,
  args: {
    content: 'Lorem ipsum blah blah',
    css: {}
  },
  argTypes: {
    content: {
      name: 'Content',
      type: 'string'
    },
    css: {
      name: 'CSS prop',
      type: {
        name: 'object'
      }
    }
  }
} as ComponentMeta<ComponentType<ContainerArgs>>

export const ContainerStory: Story<ContainerArgs> = (args: ContainerArgs) => (
  <Container css={args.css}>
    <Box
      css={{
        borderColor: '$black',
        borderStyle: 'dotted',
        borderWidth: 1
      }}
    >
      {args.content}
    </Box>
  </Container>
)
ContainerStory.storyName = 'Generic Container'

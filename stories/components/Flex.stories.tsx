import React, { ComponentType } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { Box, Flex } from '../../react'

type FlexArgs = {
  content?: string;
};

export default {
  component: Flex,
  args: {
    content: 'This is a Box inside of a Flex layout'
  }
} as ComponentMeta<ComponentType<FlexArgs>>

const borderStyles = {
  borderColor: '$black',
  borderStyle: 'dotted',
  borderWidth: 1
}

export const FlexStory: Story<FlexArgs> = (args: FlexArgs) => (
  <Flex css={{ p: 20, ...borderStyles }}>
    <Box css={borderStyles}>{args.content}</Box>
  </Flex>
)
FlexStory.storyName = 'Generic Flex Layout'

export const InlineFlex: Story<FlexArgs> = (args: FlexArgs) => (
  <Flex inline css={{ p: 20, ...borderStyles }}>
    <Box css={borderStyles}>{args.content}</Box>
  </Flex>
)
InlineFlex.storyName = 'Inline Flex Layout'
InlineFlex.args = {
  content: 'This is a Box inside of an Inline Flex layout'
}

import React, { ComponentType } from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { Box, Container } from "@sfgov/react";

type BoxArgs = {
  content: string;
  css?: object;
};

export default {
  component: Box,
  args: {
    content: "Lorem ipsum blah blah",
    css: {},
  },
  argTypes: {
    content: {
      name: "Content",
      type: "string",
    },
    css: {
      name: "CSS prop",
      type: {
        name: "object",
      },
    },
  },
} as ComponentMeta<ComponentType<BoxArgs>>;

export const BoxStory: Story<BoxArgs> = (args: BoxArgs) => (
  <Box css={args.css}>{args.content}</Box>
);
BoxStory.storyName = "Generic Box"

export const ContainerInBox: Story<BoxArgs> = (args: BoxArgs) => (
  <Box css={args.css}>
    <Container
      css={{
        borderColor: "$colorBaseBlack",
        borderStyle: "dotted",
        borderWidth: 1,
      }}
    >
      {args.content}
    </Container>
  </Box>
);

ContainerInBox.args = {
  css: { backgroundColor: "$colorBaseGrey100", py: 8 },
};
ContainerInBox.parameters = {
  container: {
    p: 0,
  },
};

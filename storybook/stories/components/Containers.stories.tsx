import React, { ComponentType } from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { CSS, Box, Container } from "@sfgov/react";

type ContainerArgs = {
  content: string;
  css?: CSS;
};

export default {
  component: Container,
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
        name: "object"
      },
    },
  },
} as ComponentMeta<ComponentType<ContainerArgs>>;

export const ContainerStory: Story<ContainerArgs> = (args: ContainerArgs) => (
  <Container css={args.css}>
    <Box
      css={{
        borderColor: "$colorBaseBlack",
        borderStyle: "dotted",
        borderWidth: 1,
      }}
    >
      {args.content}
    </Box>
  </Container>
);
ContainerStory.storyName = "Generic Container";

import React from 'react'
import { Container } from '../Container'
import { Flex } from '../Flex'
import { TitleXs, TitleXl } from '../Text'
import { styled } from '../../stitches.config'
import { IconChevronRight } from '../../icons'

type SectionTitleProps = {
  title: string;
  type?: string;
  hasMore?: boolean;
};

export const SectionTitle = ({ title, type, hasMore }: SectionTitleProps) => (
  <Flex
    css={{
      paddingBottom: 16,
      marginBottom: 32,
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      borderBottom: '1px solid $colorBaseSlate300'
    }}
  >
    <TitleXl>{title}</TitleXl>
    {hasMore && (
      <Flex as="a" css={{ color: '$colorBaseSlate300' }}>
        <TitleXs>More {type}</TitleXs>
        <IconChevronRight />
      </Flex>
    )}
  </Flex>
)

const SectionContainer = styled('section', {
  py: 80,
  backgroundColor: '$colorBaseWhite',
  color: '$colorBaseSlate300',
  variants: {
    variant: {
      grey: {
        backgroundColor: '$colorBaseGrey100'
      }
    }
  }
})

export const Section = ({ children, ...props }) => (
  <SectionContainer {...props}>
    <Container>{children}</Container>
  </SectionContainer>
)

export type SectionProps = React.PropsWithRef<typeof Section>;

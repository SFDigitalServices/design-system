import React from 'react'
import { Container } from '../Container'
import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { TitleXs, TitleXl } from '../Text'
import { styled } from '../../stitches.config'

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
      borderBottom: '1px solid $slateL3'
    }}
  >
    <TitleXl>{title}</TitleXl>
    {hasMore && (
      <Flex as="a" css={{ color: '$slateL3' }}>
        <TitleXs>More {type}</TitleXs>
        <Icon symbol="chevron-right" />
      </Flex>
    )}
  </Flex>
)

const SectionContainer = styled('section', {
  py: 80,
  backgroundColor: '$white',
  color: '$slateL3',
  variants: {
    variant: {
      grey: {
        backgroundColor: '$greyL1'
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

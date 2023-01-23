import React, { ReactNode } from 'react'
import { Flex } from '../Flex'
import { Grid } from '../Grid'
import { Section, SectionTitle } from './Section'
import { SmallText, TitleLg, TitleMd, TitleXs } from '../Text'
import { styled } from '../../stitches.config'

interface RelatedBodiesType {
  id: number;
  href: string;
  title: string;
}

export type AboutSectionProps = {
  about: string;
  ctaTitle: string;
  ctaComponent: React.ReactNode | string;
  divisions?: RelatedBodiesType[];
  relatedDivisions?: RelatedBodiesType[];
};

const AboutContainer = styled(Flex, {
  justifyContent: 'space-between',
  flexDirection: 'column',
  marginBottom: 60,
  gap: 60,
  '@md': {
    flexDirection: 'row',
    '& > *': {
      width: '50%'
    }
  }
})

const FlexColumn = styled(Flex, {
  flexDirection: 'column',
  gap: 40
})

const BodiesSection = ({ sectionTitle, divisions }) => (
  <div>
    <TitleXs>{sectionTitle}</TitleXs>
    <Flex css={{ flexWrap: 'wrap', gap: 28, marginTop: 20 }}>
      {divisions.map((division) => (
        <a key={division.id} href={division.href}>
          {division.title}
        </a>
      ))}
    </Flex>
  </div>
)

export const AboutSection = (args: AboutSectionProps) => (
  <Section>
    <SectionTitle title='About' />
    <AboutContent {...args} />
  </Section>
)

const AboutContent = ({
  about,
  ctaTitle,
  ctaComponent,
  divisions,
  relatedDivisions
}: AboutSectionProps) => (
  <AboutContainer>
    <FlexColumn>
      <TitleXs>{about}</TitleXs>
      <div>
        <TitleXs>{ctaTitle}</TitleXs>
        {/* 
            For the call to action below, we should probably define 
            a series of variants (e.g. Button | SignUp | ...) to choose
            from that are implemented in this component. We'll need to
            know possible values from the CMS, then an API can be designed on our end.
        */}
        {ctaComponent}
      </div>
    </FlexColumn>
    <FlexColumn>
      {!!divisions?.length && (
        <BodiesSection sectionTitle='Divisions' divisions={divisions} />
      )}
      {!!relatedDivisions?.length && (
        <BodiesSection sectionTitle='Related' divisions={relatedDivisions} />
      )}
    </FlexColumn>
  </AboutContainer>
)

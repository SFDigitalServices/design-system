import React from 'react'
import { Flex } from '../Flex'
import { Section, SectionTitle } from './Section'
import { styled } from '../../stitches.config'
import { IconGlobe, IconLocation, IconMail, IconPhone } from '../../icons'
import { TitleXs } from '../Text'

type ContactContentProps = {
  // TODO: Refine these types when we get more clarity on a JSON object model
  address?: any;
  phone?: any;
  email?: any;
  social?: any;
};

export const ContactSection = (args) => (
  <Section>
    <SectionTitle title='Contact' />
    <ContactContent {...args} />
  </Section>
)

const InnerSectionTitle = styled(Flex, {
  alignItems: 'center',
  gap: 8,
  marginBottom: 30
})

const ContactContent = ({
  address,
  phone,
  email,
  social
}: ContactContentProps) => (
  <Flex css={{ justifyContent: 'space-between' }}>
    {address && (
      <div>
        <InnerSectionTitle>
          <IconLocation />
          <TitleXs>Visit</TitleXs>
        </InnerSectionTitle>
        <div>
          <div>{address.address_line1}</div>
          <div>{address.address_line2}</div>
          <div>{`${address.locality}, ${address.administrative_area} ${address.postal_code}`}</div>
          <a
            href='https://www.google.com/maps/dir/?api=1&amp;destination=1+Dr.+Carlton+B.+Goodlett+Place%2CCity+Hall+Room+362%2C+San+Francisco%2CCA+94102'
            target='_blank'
            rel='noreferrer'
          >
            Get directions
          </a>
        </div>
      </div>
    )}
    {!!phone?.length && (
      <div>
        <InnerSectionTitle>
          <IconPhone />
          <TitleXs>Call</TitleXs>
        </InnerSectionTitle>
        {phone.map((p) => (
          <div key={p.tel}>
            {p.owner && <div>{p.owner}</div>}
            <a href={`tel:${p.tel}`}>{p.tel}</a>
          </div>
        ))}
      </div>
    )}
    {email && (
      <div>
        <InnerSectionTitle>
          <IconMail />
          <TitleXs>Email</TitleXs>
        </InnerSectionTitle>
        <div>
          {email.owner && <div>{email.owner}</div>}
          <a href={`mailto:${email.email}`}>{email.email}</a>
        </div>
      </div>
    )}
    {social && (
      <div>
        <InnerSectionTitle>
          <IconGlobe />
          <TitleXs>Social</TitleXs>
        </InnerSectionTitle>
        <div>{/* TODO */}</div>
      </div>
    )}
  </Flex>
)

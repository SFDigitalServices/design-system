import React from 'react'
import { Container } from '../Container'
import { Flex } from '../Flex'
import { TitleXl } from '../Text'
import { IconLocation, IconPhone } from '../../icons'

interface ParentAgencyFragment {
  id: number;
  title: string;
  href: string;
}

interface ContactFragment {
  address: string;
  phone: string;
}

export type AgencyHeaderProps = {
  title: string;
  subtitle: string;
  parentAgencies?: ParentAgencyFragment[];
  contact: ContactFragment;
};

export const AgencyHeader = ({
  title,
  subtitle,
  parentAgencies,
  contact
}: AgencyHeaderProps) => (
  <Container css={{ px: 20, '@md': { px: 96 } }}>
    <TitleXl>{title}</TitleXl>
    <div>{subtitle}</div>
    {!!parentAgencies && (
      <div>
        Part of{' '}
        {parentAgencies.map((agency, i) => [
          i > 0 && ', ',
          <a key={agency.id} href="#">
            {agency.title}
          </a>
        ])}
      </div>
    )}
    <Flex>
      <div>
        <IconLocation />
        {contact.address}
      </div>
      <div>
        <IconPhone />
        {contact.phone}
      </div>
    </Flex>
  </Container>
)

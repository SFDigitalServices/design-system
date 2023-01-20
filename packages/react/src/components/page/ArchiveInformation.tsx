import React from 'react'
import { Container } from '../Container'
import { Flex } from '../Flex'
import { TitleMd } from '../Text'

export type ArchiveInformationProps = {
  agencyName: string;
  email: string;
  archiveURL: string;
};

export const ArchiveInformation = ({
  agencyName,
  email,
  archiveURL
}: ArchiveInformationProps) => (
  <Container css={{ bg: '$colorBaseGrey100', p: 40 }}>
    <Flex css={{ gap: 20 }}>
      <div>
        <TitleMd>Request public record</TitleMd>
        <p>
          <a href={ `mailto:${email}` }>
            Email {email}
          </a>{' '}
          to submit a request to {agencyName}
        </p>
      </div>
      <div>
        <TitleMd>Archived website</TitleMd>
        <p>
          <a
            target="_blank"
            href={archiveURL}
            rel="noreferrer"
          >
            See previous website
          </a>{' '}
          archived August 2022.
        </p>
      </div>
    </Flex>
  </Container>
)

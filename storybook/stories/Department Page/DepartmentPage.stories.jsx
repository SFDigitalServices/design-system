import React from 'react'
import { Header } from './Header.stories'
import { DepartmentTitleBanner } from './DepartmentTitleBanner.stories'
import { QuickLink } from '../components/QuickLink.stories'
import { Spotlight } from '../components/Spotlight.stories'
import PageTitle from '../../src/PageTitle'
import BigDescription from '../../src/BigDescription'
import tw from 'tailwind-styled-components'
import startCase from 'lodash.startcase'
import Section from '../../src/Section'
import SectionTitle from '../../src/SectionTitle'
import { AboutSection } from './AboutSection.stories'
import { ContactSection } from '../../src/ContactSection'
import { ContentTile, NewsTile, TileSection } from '../../src/Tile'

import CityAdministrator from './city-admininistrator.json'
import BoardOfAppeals from './board-appeals.json'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Department Page',
  args: {
    department: CityAdministrator
  },
  argTypes: {
    department: {
      options: ['BoardOfAppeals', 'CityAdministrator'],
      mapping: {
        BoardOfAppeals,
        CityAdministrator
      },
      control: {
        labels: {
          BoardOfAppeals: 'Board of Appeals',
          CityAdministrator: 'City Administrator'
        }
      }
    }
  },
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/nCDNClTAztpLol9l74QWSP/Design-System-Components?node-id=5901%3A3274'
    // }
  }
}

const ResponsiveContainer = tw.div`
  responsive-container
`

const Button = tw.button`
  btn
`

const InverseButton = tw(Button)`
  btn-inverse
`

const CardContainer = tw.div`
  grid
  grid-cols-1
  lg:grid-cols-3
  gap-20
  mb-60
`

const SectionTitle = tw.h2`
  title-xl
  mt-0
  mb-40
`

const NewsCard = tw.a`
  text-slate
  bg-yellow-3
  hover:bg-yellow-4
  rounded
  p-20
`

const NewsCardTitle = tw.a`
  block
  text-slate
  font-medium
  mb-20
`

const ResourceCard = tw.a`
bg-white
  border-solid
  border-3 
  border-grey-2
  rounded
  p-20
  hocus:border-action
  text-slate
`

const ResourceCardTitle = tw.a`
  block
  font-medium
  underline
  mb-20
`

const CallToAction = tw.p`
  text-title-xs
  font-medium
`

const ContactSection = tw.div`
  flex
  items-start
`

export const DepartmentPage = ({ department }) => {
  const links = Object.keys(department).flatMap(field =>
    field === 'services' || field === 'news' || field === 'resources' || field === 'contact'
      ? [{ text: startCase(field), href: `/#${field}` }]
      : []
  )
  return (
    <div className='text-slate'>
      <Header />

      <ResponsiveContainer className='border-0 border-t-3 border-grey-2 border-solid'>
        <DepartmentTitleBanner
          title={department.title}
          subtitle={department.description}
          links={links}
        />
      </ResponsiveContainer>

      {!!department.spotlight_sections?.length && (
        <Spotlight
          title={department.spotlight_sections[0].spotlight_section_title}
          body={department.spotlight_sections[0].spotlight_section_description}
          buttonContent={department.spotlight_sections[0].spotlight_button.content}
          image={department.spotlight_sections[0].image}
        />
      )}

      <ResponsiveContainer>
        {!!department.featured_items?.length && (
          <CardContainer>
            {department.featured_items.map(({ id, feature_title: title, description }) =>
              <QuickLink key={id} data={{ title, description }} />
            )}
          </CardContainer>
        )}
        {department.spotlight_sections?.[1] && !department.spotlight_sections?.[1].variant.primary && (
          <Spotlight
            title={department.spotlight_sections[1].spotlight_section_title}
            body={department.spotlight_sections[1].spotlight_section_description}
            buttonContent={department.spotlight_sections[1].spotlight_button.content}
            image={department.spotlight_sections[1].image}
            backgroundColor='bg-purple-3'
            primary={false}
            isTitleFirst={true}
          />
        )}
      </ResponsiveContainer>

      {department.news?.length && (
        <Section variant='yellow'>
          <SectionTitle>News</SectionTitle>
          <TileSection>
            {department.news.map(newsItem =>
              <NewsTile key={newsItem.id} title={newsItem.title} body={newsItem.posted_date} />
            )}
          </TileSection>
        </Section>
      )}

      {department.resources?.length && (
        <Section variant='lightblue'>
          <SectionTitle>Resources</SectionTitle>
          <TileSection>
            {department.resources.map(resource =>
              <ContentTile key={resource.id} title={resource.title} body={resource.description} />
            )}
          </TileSection>
        </Section>
      )}

      <AboutSection
        about={department.about_or_description}
        ctaTitle={department.about.call_to_action.title}
        ctaButton={department.about.call_to_action.button.content}
        publicBodies={department.about.public_bodies}
        divisions={department.about.divisions}
      />

      <ContactSection
        address={department.contact.address[0].address}
        phone={department.contact.phone_numbers}
        email={department.contact.email[0]}
      />

      <ResponsiveContainer>
        <div className='p-40 lg:flex lg:space-x-20 rounded bg-blue-1'>
          <div>
            <h3>Request public record</h3>
            <p><a href='mailto:admsunshinerequests@sfgov.org'>Email admsunshinerequests@sfgov.org</a> to submit a request.</p>
          </div>
          <div>
            <h3>Archived website</h3>
            <p><a target='_blank' href='https://wayback.archive-it.org/19767/3/https://sfgsa.org/office-city-administrator' rel='noreferrer'>See previous website</a> archived August 2022.</p>
          </div>
        </div>
      </ResponsiveContainer>

      <div className='bg-grey-dark text-white py-20 mt-60'>
        <div className='responsive-container'>
          <div className='flex items-center flex-wrap gap-20'>
            <form className='flex-auto flex items-center gap-20'>
              <span>Was this page helpful?</span>
              <button className='btn btn-inverse'>Yes</button>
              <button className='btn btn-inverse'>No</button>
            </form>
            <div className=''>
              <a href='#' className='text-white hover:text-white'>Report something wrong with this page</a>
            </div>
          </div>
        </div>
      </div>

      <footer className='bg-black text-white py-60'>
      </footer>
    </div>
  )
}

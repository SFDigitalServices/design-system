import React from 'react'
import { Header } from './Header.stories'
import { DepartmentTitleBanner } from './DepartmentTitleBanner.stories'
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

const Title = tw.p`
  text-title-lg
  lg:text-title-lg-desktop
  font-medium
  my-0
`

const SpotlightSection = tw.div`
  bg-grey-1
  px-20
  py-40
  mb-60
  lg:py-60
  lg:flex
  lg:gap-28
`

const SpotlightContent = tw.div`
  lg:w-1/2
`

const SpotlightSectionFloating = tw(SpotlightSection)`
  ${props => props.backgroundColor}
  rounded
  px-0
  py-0
  lg:py-0
  lg:gap-0
`

const SpotlightContentFloating = tw(SpotlightContent)`
  ${props => !!props.isTitlePanel && 'text-white py-40 px-20 lg:py-60 lg:px-40'}
  rounded-b
  lg:rounded-r
  lg:rounded-bl-0
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

// we should probably enable word-break in tailwind for below
const QuickLink = tw.a`
  group
  flex
  flex-col
  no-underline
  border-solid
  border-3 border-grey-2
  py-16
  px-24
  rounded
  lg:p-24
  hocus:bg-action
  hocus:border-white
`

const QuickLinkTitle = tw.p`
  text-title-md
  text-action
  font-medium
  mb-8
  lg:mb-16
  lg:text-title-md-desktop
  group-hocus:text-white
`

const QuickLinkDivider = tw.div`
  h-8
  mb-8
  w-100
  bg-blue-bright
  lg:mb-16
  group-hocus:bg-white
`

const QuickLinkSubtitle = tw.p`
  text-body
  text-black
  flex-auto
  group-hocus:text-white
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
        <SpotlightSection>
          <SpotlightContent className='bg-grey-2'></SpotlightContent>
          <SpotlightContent>
            <Title>{department.spotlight_sections[0].spotlight_section_title}</Title>
            <BigDescription>{department.spotlight_sections[0].spotlight_section_description}</BigDescription>
            <Button>{department.spotlight_sections[0].spotlight_button.content}</Button>
          </SpotlightContent>
        </SpotlightSection>
      )}

      <ResponsiveContainer>
        {!!department.featured_items?.length && (
          <CardContainer>
            {department.featured_items.map(quickLink =>
              <QuickLink key={quickLink.id}>
                <QuickLinkTitle>
                  {quickLink.feature_title}
                </QuickLinkTitle>
                <QuickLinkDivider />
                <QuickLinkSubtitle>
                  {quickLink.description}
                </QuickLinkSubtitle>
                <sfgov-icon symbol='arrow-right' class='flex justify-end items-end text-action group-hocus:text-white' />
              </QuickLink>
            )}
          </CardContainer>
        )}
        {department.spotlight_sections?.[1] && !department.spotlight_sections?.[1].variant.primary && (
          <SpotlightSectionFloating backgroundColor='bg-purple-3'>
            <SpotlightContentFloating isTitlePanel='true'>
              <Title>{department.spotlight_sections[1].spotlight_section_title}</Title>
              <BigDescription>{department.spotlight_sections[1].spotlight_section_description}</BigDescription>
              {department.spotlight_sections[1].spotlight_button.primary
                ? <Button>{department.spotlight_sections[1].spotlight_button.content}</Button>
                : <InverseButton>{department.spotlight_sections[1].spotlight_button.content}</InverseButton>
              }
            </SpotlightContentFloating>
            <SpotlightContentFloating className='bg-grey-2 text-center pt-96'>An image will go here</SpotlightContentFloating>
          </SpotlightSectionFloating>
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

import React from 'react'
import { Header } from './Header.stories'
import { DepartmentTitleBanner } from './DepartmentTitleBanner.stories'
import BigDescription from '../../src/BigDescription'
import tw from 'tailwind-styled-components'
import startCase from 'lodash.startcase'

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

// const QuickLinkArrowIcon = tw.sfgov-icon`
//   flex
//   justify-end
//   items-end
//   text-action
//   group-hocus:text-white
// `

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
        <section className='bg-yellow-1 mt-60 py-80'>
          <ResponsiveContainer>
            <SectionTitle>News</SectionTitle>
            <CardContainer>
              {department.news.map(newsItem =>
                <NewsCard key={newsItem.id}>
                  <NewsCardTitle>{newsItem.title}</NewsCardTitle>
                  <p>{newsItem.posted_date}</p>
                </NewsCard>
              )}
            </CardContainer>
            <Button>See more news</Button>
          </ResponsiveContainer>
        </section>
      )}

      {department.resources?.length && (
        <section className='bg-blue-1 py-80'>
          <ResponsiveContainer>
            <SectionTitle>Resources</SectionTitle>
            <CardContainer className='lg:grid-cols-2'>
              {department.resources.map(resource =>
                <ResourceCard key={resource.id}>
                  <ResourceCardTitle>{resource.title}</ResourceCardTitle>
                  <p>{resource.description}</p>
                </ResourceCard>
              )}
            </CardContainer>
          </ResponsiveContainer>
        </section>
      )}

      <section className='bg-blue-dark text-white py-80'>
        <ResponsiveContainer>
          <Title>About</Title>
          <div className='grid grid-cols-1 lg:grid-cols-3'>
            <BigDescription className='col-span-2 mb-24 lg:mb-60 lg:mr-60'>{department.about_or_description}</BigDescription>
            <div className='col-span-1'>
              <CallToAction>{department.about.call_to_action.title}</CallToAction>
              <InverseButton>{department.about.call_to_action.button.content}</InverseButton>
            </div>
            <div className='col-span-full mb-60'>
              <InverseButton>Learn more about us</InverseButton>
            </div>
            <div className='col-span-2'>
              {!!department.about?.public_bodies?.length && (
                <>
                  <div className='text-title-xs font-medium mb-24'>
                    Public bodies
                  </div>
                  <ul className='flex flex-wrap p-0 m-0 mb-40 list-none'>
                    {department.about.public_bodies.map(publicBody =>
                      <li className='mb-20 w-full lg:w-1/2 lg:pr-8' key={publicBody.id}>
                        <a className='text-white underline'>{publicBody.link.title}</a>
                      </li>
                    )}
                  </ul>
                </>
              )}
              {!!department.about?.divisions?.length && (
                <>
                  <div className='text-title-xs font-medium mb-24'>
                    Divisions
                  </div>
                  <ul className='flex flex-wrap p-0 m-0 mb-40 list-none'>
                    {department.about.divisions.map(division =>
                      <li className='mb-20 w-full lg:w-1/2 lg:pr-8' key={division.id}>
                        <a className='text-white underline'>{division.link.title}</a>
                      </li>
                    )}
                  </ul>
                </>
              )}
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      <ResponsiveContainer className='my-80'>
        <SectionTitle>Contact</SectionTitle>
        <CardContainer>
          <ContactSection>
            <sfgov-icon symbol='location' class='pr-20' />
            <div>
              <h3 className='mt-0'>{department.title}</h3>
              <div>{department.contact.address[0].address.address_line1}</div>
              <div>{department.contact.address[0].address.address_line2}</div>
              <div>{`${department.contact.address[0].address.locality}, ${department.contact.address[0].address.administrative_area} ${department.contact.address[0].address.postal_code}`}</div>
              <div className='bg-grey-2 h-100 w-100 mt-40 mb-20 p-20 rounded text-center'>A map will go here</div>
              <a href='https://www.google.com/maps/dir/?api=1&amp;destination=1+Dr.+Carlton+B.+Goodlett+Place%2CCity+Hall+Room+362%2C+San+Francisco%2CCA+94102' target='_blank' rel='noreferrer'>Get directions</a>
            </div>
          </ContactSection>
          <ContactSection>
            <sfgov-icon symbol='phone' class='pr-20'/>
            <div>
              <h3 className='mt-0'>Phone</h3>
              <div>{department.contact.phone_numbers[0].owner}</div>
              <a href={`tel:${department.contact.phone_numbers[0].tel}`}>{department.contact.phone_numbers[0].tel}</a>
            </div>
          </ContactSection>
          <ContactSection>
            <sfgov-icon symbol='mail' class='pr-20'/>
            <div>
              <h3 className='mt-0'>Email</h3>
              <a href={`mailto:${department.contact.email[0].email}`}>{department.contact.email[0].email}</a>
            </div>
          </ContactSection>
        </CardContainer>
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

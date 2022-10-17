import React from 'react'
import { Header } from './Header.stories'
import { DepartmentTitleBanner } from './DepartmentTitleBanner.stories'
import BigDescription from '../../src/BigDescription'
import tw from 'tailwind-styled-components'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Department Page',
  args: {
    text: 'A very extreme and urgent thing is about to happen in San Francisco.'
  },
  argTypes: {
    text: {
      name: 'Text',
      type: 'string'
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

export const DepartmentPage = () =>
<div className='text-slate'>
  <Header />

  <ResponsiveContainer className='border-0 border-t-3 border-grey-2 border-solid'>
    <DepartmentTitleBanner
      title='City Administrator'
      subtitle='With integrity, the Office of the City Administrator serves all San Franciscans and its visitors.'
      links={[{ text: 'News', href: '' }, { text: 'Resources', href: '' }, { text: 'Contact', href: '' }]}
    />
  </ResponsiveContainer>

  <SpotlightSection>
    <SpotlightContent className='bg-grey-2'></SpotlightContent>
    <SpotlightContent>
      <Title>This is a spotlight title</Title>
      <BigDescription>This is the spotlight description text</BigDescription>
      <Button>A primary button</Button>
    </SpotlightContent>
  </SpotlightSection>

  <ResponsiveContainer>
    <CardContainer>
      {[...Array(3)].map((x, i) =>
        <QuickLink key={i}>
          <QuickLinkTitle>
            Here's one quick link about this department
          </QuickLinkTitle>
          <QuickLinkDivider />
          <QuickLinkSubtitle>
            Here's the subtitle for the above quick link. Written in sentence form!
          </QuickLinkSubtitle>
          <sfgov-icon symbol='arrow-right' class='flex justify-end items-end text-action group-hocus:text-white' />
        </QuickLink>
      )}
    </CardContainer>
    <SpotlightSectionFloating backgroundColor='bg-purple-3'>
      <SpotlightContentFloating isTitlePanel='true'>
        <Title>This is a spotlight title</Title>
        <BigDescription>This is the spotlight description text</BigDescription>
        <InverseButton>An inverse button</InverseButton>
      </SpotlightContentFloating>
      <SpotlightContentFloating className='bg-grey-2 text-center pt-96'>An image will go here</SpotlightContentFloating>
    </SpotlightSectionFloating>
  </ResponsiveContainer>

  <section className='bg-yellow-1 mt-60 py-80'>
    <ResponsiveContainer>
      <SectionTitle>News</SectionTitle>
      <CardContainer>
        {[...Array(3)].map((x, i) =>
          <NewsCard key={i}>
            <NewsCardTitle>Here is a news card. This is the title of the news card.</NewsCardTitle>
            <p>October 13, 2022</p>
          </NewsCard>
        )}
      </CardContainer>
      <Button>See more news</Button>
    </ResponsiveContainer>
  </section>

  <section className='bg-blue-1 py-80'>
    <ResponsiveContainer>
      <SectionTitle>Resources</SectionTitle>
      <CardContainer className='lg:grid-cols-2'>
        {[...Array(9)].map((x, i) =>
          <ResourceCard key={i}>
            <ResourceCardTitle>Here is a resource card. This is the title of the resource card.</ResourceCardTitle>
            <p>Here is the description of the resource card.</p>
          </ResourceCard>
        )}
      </CardContainer>
    </ResponsiveContainer>
  </section>

  <section className='bg-blue-dark text-white py-80'>
    <ResponsiveContainer>
      <Title>About</Title>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <BigDescription className='col-span-2 mb-24 lg:mb-60 lg:mr-60'>The Office of the City Administrator comprises 27 departments, divisions, and programs that provide a broad range of services to other City departments and the public. </BigDescription>
        <div className='col-span-1'>
          <CallToAction>Here is a call to action related to this section.</CallToAction>
          <InverseButton>Here is the call to action button</InverseButton>
        </div>
        <div className='col-span-full mb-60'>
          <InverseButton>Learn more about us</InverseButton>
        </div>
        <div className='col-span-2'>
          <div className='text-title-xs font-medium mb-24'>
            Divisions
          </div>
          <ul className='flex flex-wrap p-0 m-0 mb-40 list-none'>
            {[...Array(19)].map((x, i) =>
              <li className='mb-20 w-full lg:w-1/2 lg:pr-8' key={i}>
                <a className='text-white underline'>These are department divisions</a>
              </li>
            )}
          </ul>
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
          <h3 className='mt-0'>City Administrator</h3>
          <div>1 Dr. Carlton B. Goodlett Place</div>
          <div>City Hall Room 362</div>
          <div>San Francisco, CA 94102</div>
          <div className='bg-grey-2 h-100 w-100 mt-40 mb-20 p-20 rounded text-center'>A map will go here</div>
          <a href='https://www.google.com/maps/dir/?api=1&amp;destination=1+Dr.+Carlton+B.+Goodlett+Place%2CCity+Hall+Room+362%2C+San+Francisco%2CCA+94102' target='_blank' rel='noreferrer'>Get directions</a>
        </div>
      </ContactSection>
      <ContactSection>
        <sfgov-icon symbol='phone' class='pr-20'/>
        <div>
          <h3 className='mt-0'>City Administrator</h3>
          <a href='tel:999-999-9999'>999-999-9999</a>
        </div>
      </ContactSection>
      <ContactSection>
        <sfgov-icon symbol='mail' class='pr-20'/>
        <div>
          <h3 className='mt-0'>City Administrator</h3>
          <a href='mailto:somedepartment@sfgov.org'>somedepartment@sfgov.org</a>
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

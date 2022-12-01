import React from 'react'
import tw from 'tailwind-styled-components'
import BigDescription from '../../src/BigDescription'
import { InverseButton } from '../components/Buttons.stories'
import Section from '../../src/Section'
import SectionTitle from '../../src/SectionTitle'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  args: {
    about: 'This is where you describe what this section is about.',
    ctaTitle: 'Here is a call to action related to this section.',
    ctaButton: 'Here is the call to action button',
    publicBodies: [{ id: 45111, title: 'This is a public body' }, { id: 45211, title: 'This is another public body' }, { id: 45311, title: 'And another' }],
    divisions: [{ id: 45112, title: 'This is a department division' }, { id: 45113, title: 'This is another division' }, { id: 45114, title: 'And another' }]
  }
}

const CallToAction = tw.p`
  text-title-xs
  font-medium
`

export const AboutSection = args =>
  <Section variant='darkblue'>
    <SectionTitle>About</SectionTitle>
    <AboutContent {...args} />
  </Section>

const AboutContent = ({ about, ctaTitle, ctaButton, publicBodies, divisions }) =>
  <div className='grid grid-cols-1 lg:grid-cols-3'>
    <BigDescription className='col-span-2 mb-24 lg:mb-60 lg:mr-60'>{about}</BigDescription>
    <div className='col-span-1'>
      <CallToAction>{ctaTitle}</CallToAction>
      <InverseButton>{ctaButton}</InverseButton>
    </div>
    <div className='col-span-full mb-60'>
      <InverseButton>Learn more about us</InverseButton>
    </div>
    <div className='col-span-2'>
      {!!publicBodies?.length && (
        <>
          <div className='text-title-xs font-medium mb-24'>
            Public bodies
          </div>
          <ul className='flex flex-wrap p-0 m-0 mb-40 list-none'>
            {publicBodies.map(publicBody =>
              <li className='mb-20 w-full lg:w-1/2 lg:pr-8' key={publicBody.id}>
                <a className='text-white underline'>{publicBody.link.title}</a>
              </li>
            )}
          </ul>
        </>
      )}
      {!!divisions?.length && (
        <>
          <div className='text-title-xs font-medium mb-24'>
            Divisions
          </div>
          <ul className='flex flex-wrap p-0 m-0 mb-40 list-none'>
            {divisions.map(division =>
              <li className='mb-20 w-full lg:w-1/2 lg:pr-8' key={division.id}>
                <a className='text-white underline'>{division.link.title}</a>
              </li>
            )}
          </ul>
        </>
      )}
    </div>
  </div>

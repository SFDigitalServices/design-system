import React from 'react'
import Section from '../../src/Section'
import SectionTitle from '../../src/SectionTitle'
import { ContentTile, NewsTile, TileSection } from '../../src/Tile'
import { ContactSection as ContactSectionComponent } from '../../src/ContactSection'

const imgSrc = 'https://sf.gov/sites/default/files/styles/default/public/2021-10/san-francisco-street-day-time.jpg?itok=5QqBW-AZ'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Page Section'
}

export const NewsSection = args =>
  <Section variant='yellow'>
    {args.title && <SectionTitle>{args.title}</SectionTitle>}
    <TileSection>
      {[...Array(3)].map((_, i) =>
        <NewsTile key={i} title='Some news is occurring' body='Here is some info about the news' img={imgSrc} />
      )}
    </TileSection>
  </Section>

NewsSection.args = { title: 'News' }

export const ServicesSection = args =>
  <Section variant='lightblue'>
    {args.title && <SectionTitle>{args.title}</SectionTitle>}
    <TileSection>
      {[...Array(3)].map((_, i) =>
        <ContentTile key={i} title='Here is a service' body='Here is some info about the service' />
      )}
    </TileSection>
  </Section>

ServicesSection.args = { title: 'Services' }

export const ContactSection = args => <ContactSectionComponent {...args} />

ContactSection.args = {
  address: {
    title: 'City Administrator',
    line1: '1 Dr. Carlton B. Goodlett Place',
    line2: 'City Hall Room 362',
    locality: 'San Francisco',
    administrative_area: 'CA',
    postal_code: '94102'
  },
  phone: [{
    owner: '',
    tel: '415-554-4851'
  }],
  email: {
    owner: '',
    email: 'city.administrator@sfgov.org'
  }
}

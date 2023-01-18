import React from 'react'
import { ContentTile, ContactSection as ContactSectionComponent, EventTile, NewsTile, QuickLink, Section, SectionTitle, TitleLg, TileSection } from '@sfgov/react'

// const imgSrc = 'https://sf.gov/sites/default/files/styles/default/public/2021-10/san-francisco-street-day-time.jpg?itok=5QqBW-AZ'

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: 'Page Section'
}

export const NewsSection = args =>
  <Section>
    {args.title && <SectionTitle title={args.title} type="news" hasMore />}
    <TileSection>
      {[...Array(3)].map((_, i) =>
        <NewsTile key={i} title='Some news is occurring' body='APRIL 20, 2022' href='/#' />
      )}
    </TileSection>
  </Section>

NewsSection.args = { title: 'News' }

export const ServicesSection = args =>
  <Section>
    {args.title && <SectionTitle title={args.title} type="services" hasMore />}
    <TitleLg>Types of services</TitleLg>
    <TileSection>
      {[...Array(3)].map((_, i) =>
        <ContentTile key={i} title='Here is a service' body='Here is some info about the service' href='/#' />
      )}
    </TileSection>
  </Section>

ServicesSection.args = { title: 'Services' }

export const QuickLinksSection = () =>
  <Section>
    <TileSection>
      {[...Array(3)].map((_, i) =>
        <QuickLink key={i} title='Get immigration legal help' body='Every 5 years, we create 3 strategic plans to help direct our policies. Join us in developing this year’s plans.' href='/#' />
      )}
    </TileSection>
  </Section>

export const EventsSection = args =>
  <Section>
    {args.title && <SectionTitle title={args.title} type="events" hasMore />}
    <TileSection>
      {[...Array(3)].map((_, i) =>
        <EventTile key={i} title='Here is an event' body='Thursday, April 10' href='/#' imgSrc={null} eventType='Music' />
      )}
    </TileSection>
  </Section>

EventsSection.args = { title: 'Events' }

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

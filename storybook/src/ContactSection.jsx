import React from 'react'
import { TileSection } from './Tile'
import Section from './Section'
import SectionTitle from './SectionTitle'

export const ContactSection = args =>
  <Section>
    <SectionTitle>Contact</SectionTitle>
    <ContactContent {...args} />
  </Section>

const ContactContent = ({ address, phone, email }) =>
  <TileSection>
    {address &&
      <div className='flex items-start'>
        <sfgov-icon symbol='location' class='pr-20' />
        <div>
          <h3 className='mt-0'>{address.title}</h3>
          <div>{address.address_line1}</div>
          <div>{address.address_line2}</div>
          <div>{`${address.locality}, ${address.administrative_area} ${address.postal_code}`}</div>
          <div className='bg-grey-2 h-100 w-100 mt-40 mb-20 p-20 rounded text-center'>A map will go here</div>
          <a href='https://www.google.com/maps/dir/?api=1&amp;destination=1+Dr.+Carlton+B.+Goodlett+Place%2CCity+Hall+Room+362%2C+San+Francisco%2CCA+94102' target='_blank' rel='noreferrer'>Get directions</a>
        </div>
      </div>
    }
    {!!phone?.length &&
      <div className='flex items-start'>
        <sfgov-icon symbol='phone' class='pr-20'/>
        {phone.map(p =>
          <div key={p.tel}>
            <h3 className='mt-0'>Phone</h3>
            {p.owner && <div>{p.owner}</div>}
            <a href={`tel:${p.tel}`}>{p.tel}</a>
          </div>
        )}
      </div>
    }
    {email &&
      <div className='flex items-start'>
        <sfgov-icon symbol='mail' class='pr-20'/>
        <div>
          <h3 className='mt-0'>Email</h3>
            {email.owner && <div>{email.owner}</div>}
          <a href={`mailto:${email.email}`}>{email.email}</a>
        </div>
      </div>
    }
  </TileSection>

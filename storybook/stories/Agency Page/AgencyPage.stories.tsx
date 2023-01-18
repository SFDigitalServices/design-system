import React from "react";
import { Header } from "./Header.stories";
import { AgencyHeader } from "./AgencyHeader.stories";
import {
  AboutSection,
  ArchiveInformation,
  Container,
  ContentTile,
  NewsTile,
  TileSection,
  ContactSection,
  QuickLink,
  Section,
  SectionTitle,
  Spotlight,
} from "@sfgov/react";

import CityAdministrator from "./city-admininistrator.json";
import BoardOfAppeals from "./board-appeals.json";

/** @type {import('@storybook/addons').StoryContext} */
export default {
  title: "Agency Page",
  args: {
    agency: CityAdministrator,
  },
  argTypes: {
    agency: {
      options: ["BoardOfAppeals", "CityAdministrator"],
      mapping: {
        BoardOfAppeals,
        CityAdministrator,
      },
      control: {
        labels: {
          BoardOfAppeals: "Board of Appeals",
          CityAdministrator: "City Administrator",
        },
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Ssyjx39mPsBSbqy7FDWwBk/Wireframes---Corey?node-id=1%3A10765&t=aOZrbzRCBt9KKM0B-0",
    },
  },
};

export const AgencyPage = ({ agency }) => (
  <div className="text-slate">
    <Header />

    <Container>
      <AgencyHeader
        title={agency.title}
        subtitle={agency.description}
        parentAgencies={[
          { id: 1, title: "News", href: "" },
          { id: 2, title: "Resources", href: "" },
          { id: 3, title: "Contact", href: "" },
        ]}
        contact={{
          address: agency.contact.address[0].address.address_line1,
          phone: agency.contact.phone_numbers[0].tel,
        }}
      />
    </Container>

    {!!agency.spotlight_sections?.length && (
      <Spotlight
        title={agency.spotlight_sections[0].spotlight_section_title}
        body={agency.spotlight_sections[0].spotlight_section_description}
        buttonContent={agency.spotlight_sections[0].spotlight_button.content}
        image={agency.spotlight_sections[0].image}
        isFullWidth={true}
      />
    )}

    <Container>
      {!!agency.featured_items?.length && (
        <TileSection>
          {agency.featured_items.map(
            ({ id, feature_title: title, description }) => (
              <QuickLink key={id} title={title} body={description} href="/#" />
            )
          )}
        </TileSection>
      )}
      {agency.spotlight_sections?.[1] &&
        !agency.spotlight_sections?.[1].variant.primary && (
          <Spotlight
            title={agency.spotlight_sections[1].spotlight_section_title}
            body={agency.spotlight_sections[1].spotlight_section_description}
            buttonContent={
              agency.spotlight_sections[1].spotlight_button.content
            }
            image={agency.spotlight_sections[1].image}
          />
        )}
    </Container>

    {agency.news?.length && (
      <Section>
        <SectionTitle title="News" type="news" hasMore />
        <TileSection>
          {agency.news.map((newsItem) => (
            <NewsTile
              key={newsItem.id}
              title={newsItem.title}
              body={newsItem.posted_date}
              href="#"
            />
          ))}
        </TileSection>
      </Section>
    )}

    {agency.resources?.length && (
      <Section>
        <SectionTitle title="Resources" type="resources" hasMore />
        <TileSection>
          {agency.resources.map((resource) => (
            <ContentTile
              key={resource.id}
              title={resource.title}
              body={resource.description}
              href="#"
            />
          ))}
        </TileSection>
      </Section>
    )}

    <AboutSection
      about={agency.about_or_description}
      ctaTitle={agency.about.call_to_action.title}
      ctaComponent={agency.about.call_to_action.button.content}
      divisions={agency.about.divisions}
      relatedDivisions={agency.about.related_divisions}
    />

    <ContactSection
      address={agency.contact.address[0].address}
      phone={agency.contact.phone_numbers}
      email={agency.contact.email[0]}
    />

    <ArchiveInformation
      agencyName={agency.title}
      email={agency.contact.email[0].email}
      archiveURL="#"
    />

    <div className="bg-grey-dark text-white py-20 mt-60">
      <div className="responsive-container">
        <div className="flex items-center flex-wrap gap-20">
          <form className="flex-auto flex items-center gap-20">
            <span>Was this page helpful?</span>
            <button className="btn btn-inverse">Yes</button>
            <button className="btn btn-inverse">No</button>
          </form>
          <div className="">
            <a href="#" className="text-white hover:text-white">
              Report something wrong with this page
            </a>
          </div>
        </div>
      </div>
    </div>

    <footer className="bg-black text-white py-60"></footer>
  </div>
);

/* eslint-disable import-x/namespace */
import { render } from '@testing-library/react'
import * as symbols from '.'
import { EXPECTED_ICON_EXPORTS } from './icons/icons.spec'

describe('/react exports', () => {
  describe('components', () => {
    const expectedComponents: Array<keyof typeof symbols> = [
      'BodyText',
      'BrandedHeading',
      'Button',
      'Container',
      'DisplayLg',
      'DisplayXXXl',
      'Grid',
      'HeadingDivider',
      'HeadingLg',
      'HeadingLgListItem',
      'HeadingMd',
      'HeadingSm',
      'HeadingXl',
      'HeadingXlSans',
      'HeadingXs',
      'HeadingXXl',
      'ImageHeader',
      'Label',
      'LabelMd',
      'LabelSm',
      'LabelXs',
      'Link',
      'Monospace',
      'PageLabel',
      'PageHeader',
      'QuickLink',
      'QuickLinkSet',
      'StackedContainer',
      'StackedItem',
      'Text',
      'Tile',
      'TileSection',
      'TileSet'
    ]

    it.each(expectedComponents)('%s', (name) => {
      const Component = symbols[name]
      // @ts-expect-error derp
      render(<Component />)
    })
  })

  describe('utility functions', () => {
    const expectedFunctions: Array<keyof typeof symbols> = [
      'classed',
      'classes',
      'classify'
    ]

    it.each(expectedFunctions)('%s', (name) => {
      expect(typeof symbols[name]).toBe('function')
    })
  })

  describe('constants', () => {
    it('BUTTON_VARIANTS', () => {
      expect(symbols.BUTTON_VARIANTS).toEqual(
        expect.objectContaining({
          base: expect.any(String),
          variants: {
            variant: {
              large: expect.any(String),
              primary: expect.any(String),
              secondary: expect.any(String),
              tertiary: expect.any(String),
              link: expect.any(String)
            },
            block: {
              true: expect.any(String),
              false: expect.any(String)
            }
          }
        })
      )
    })

    it('TEXT_CLASSES', () => {
      expect(symbols.TEXT_CLASSES).toEqual(
        expect.objectContaining({
          body: expect.any(String),
          small: expect.any(String),
          headingXs: expect.any(String),
          headingSm: expect.any(String),
          headingMd: expect.any(String),
          headingXl: expect.any(String),
          headingXXl: expect.any(String)
          // etc.
        })
      )
    })
  })

  describe('icons', () => {
    it.each(EXPECTED_ICON_EXPORTS)('%s', (name) => {
      expect(typeof symbols[name]).toBe('function')
    })
  })
})

import { ComponentProps, ReactElement } from 'react'
import { InputType } from 'storybook/internal/csf'

export const HEADER_IMAGES = {
  ASR: 'https://media.api.sf.gov/original_images/headerimage-Neighborhoods-1.jpg',
  DPH: 'https://media.api.sf.gov/original_images/sf_skyline_small.jpg',
  D8: 'https://media-api-develop.dev.sf.gov/original_images/BOS-Header-District8.jpg',
  PoliceCommission:
    'https://media-api-develop.dev.sf.gov/original_images/Blue_2.jpg',
  SodaTax:
    'https://media-api-develop.dev.sf.gov/original_images/soda_tax_magnet_banner_G9XViP9.jpg'
} as const

export const DEPARTMENT_LOGOS = {
  DPH: 'https://media.api.staging.dev.sf.gov/original_images/sfdph_logo_blue-01.png',
  ASR: 'https://media.api.staging.dev.sf.gov/original_images/ASR_Seal__Logo_Edited_0e6uAcG.jpg',
  PoliceCommission:
    'https://media-api-develop.dev.sf.gov/original_images/Police_Commission_Logo_kbeq2QQ.jpg',
  ReadySF:
    'https://media-api-develop.dev.sf.gov/original_images/ReadySF_Logo.png',
  SodaTax:
    'https://media-api-develop.dev.sf.gov/original_images/SFSodaTax_Logo_Bevel_Cyan.png'
} as const

export function imageMapping(
  mapping: Record<string, string>
): Partial<InputType> {
  return {
    type: 'string',
    control: 'select',
    options: Object.keys(mapping),
    mapping
  }
}

export function renderImage<P = Omit<ComponentProps<'img'>, 'src'>>(
  value: string | ReactElement | null | undefined,
  props?: P
) {
  return typeof value === 'string' ? (
    <img src={value} alt="" {...props} />
  ) : (
    value
  )
}

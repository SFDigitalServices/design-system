import { create } from '@storybook/theming'
import website from '../../website/package.json'
import brandImage from '../../website/static/img/logo.svg'

const { NODE_ENV } = process.env

export default create({
  base: 'light',
  brandTitle: 'SF.gov design system',
  brandImage,
  brandUrl: NODE_ENV === 'production'
    ? '/'
    : `http://localhost:${website.config.port}`
})

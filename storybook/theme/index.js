import { create } from '@storybook/theming'
import website from '../../website/package.json'
import brandImage from '../../website/static/img/logo.svg'

export default create({
  base: 'light',
  brandTitle: 'SF.gov design system',
  brandImage,
  brandUrl: process.env.NODE_ENV === 'production'
    ? '/'
    : `http://localhost:${website.config.port}`
})

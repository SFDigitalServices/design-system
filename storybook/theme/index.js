import { create } from '@storybook/theming'
import website from '../../website/package.json'
import brandImage from '../../website/static/img/logo.svg'

const { HEROKU_APP_NAME } = process.env

export default create({
  base: 'light',
  brandTitle: 'SF.gov design system',
  brandImage,
  brandUrl: HEROKU_APP_NAME
    ? '/'
    : `http://localhost:${website.config.port}`
})

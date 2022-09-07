// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const { spawnSync } = require('node:child_process')
const { owner, repo, repoUrl, defaultBranch } = require('./constants')
const { config: storybookConfig } = require('../storybook/package.json')

/**
 * It's important that we throw on broken links in both development and
 * CI, but _not_ during deployment. So we set the reporting level to
 * 'warn' if and only if $NODE_ENV is 'production' _and_ $CI is falsy.
 */
const {
  CI,
  HEROKU_APP_NAME,
  HEROKU_BRANCH,
  NODE_ENV,
  ON_BROKEN_LINKS = (NODE_ENV === 'production' && !CI) ? 'warn' : 'throw'
} = process.env

const currentBranch = HEROKU_BRANCH || getCurrentBranch() || defaultBranch
const editUrl = `${repoUrl}/tree/${currentBranch}/website`
const storybookUrl = HEROKU_APP_NAME
  ? '/storybook/'
  : `http://localhost:${storybookConfig.port}/`

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'SF Design System',
  tagline: 'The design system for sf.gov',
  url: 'https://design-system.sf.gov/',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: ON_BROKEN_LINKS,
  onBrokenMarkdownLinks: ON_BROKEN_LINKS,
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: owner, // Usually your GitHub org/user name.
  projectName: repo, // Usually your repo name.

  clientModules: [
    require.resolve('./src/sfds')
  ],

  plugins: [
    '@docusaurus/theme-live-codeblock',
    async function myPlugin () {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss (postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        }
      }
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // don't build the debug views in CI
        debug: !CI,
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css')
          ]
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'San Francisco Design System',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark-mode.svg',
          width: 199,
          height: 56
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'designSidebar',
            label: 'Design'
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'componentsSidebar',
            label: 'Components'
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'devSidebar',
            label: 'Develop'
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'librariesSidebar',
            label: 'Libraries'
          },
          {
            href: storybookUrl,
            label: 'Storybook',
            position: 'right'
          },
          {
            href: `${repoUrl}/tree/${currentBranch}/`,
            label: ' ',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
          }
        ]
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Seal of the City &amp; County of San Francisco',
          src: 'https://sf.gov/themes/custom/sfgovpl/logo-white.svg',
          href: 'https://sf.gov',
          width: 90,
          height: 90
        },
        links: [
          {
            title: 'Design System Documentation',
            items: [
              {
                label: 'Design',
                to: '/design/color'
              },
              {
                label: 'Components',
                to: '/components/buttons'
              },
              {
                label: 'Develop',
                to: '/develop/css'
              },
              {
                label: 'Libraries',
                to: '/libraries/color/colorInterfaceLibrary'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: repoUrl
              }
            ]
          }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      liveCodeBlock: {
        playgroundPosition: 'top'
      }
    })
}

function getCurrentBranch () {
  try {
    return spawnSync('git', ['symbolic-ref', '--short', 'HEAD'], { encoding: 'utf8' }).stdout
  } catch (error) {
    return undefined
  }
}

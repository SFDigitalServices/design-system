// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const { spawnSync } = require('node:child_process')
const { owner, repo, repoUrl, defaultBranch } = require('./constants')
const currentBranch = getCurrentBranch() || defaultBranch
const editUrl = `${repoUrl}/tree/${currentBranch}/website`

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'SF Design System',
  tagline: 'The design system for sf.gov',
  url: 'https://design-system.sf.gov/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: owner, // Usually your GitHub org/user name.
  projectName: repo, // Usually your repo name.

  clientModules: [
    require.resolve('sfgov-design-system/dist/js/sfds.mjs')
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
    },
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
        createRedirects (existingPath) {
          console.log(existingPath)
          if (existingPath.includes('/design')) {
            if (existingPath === '/design/layout') return ['/foundations/spacing']

            return [existingPath.replace('/design', '/foundations')]
          } else if (existingPath.includes('/develop')) {
            return [existingPath.replace('/develop', '/usage')]
          }
          return [] // a falsy value = no redirect created
        },
        redirects: [
          {
            from: '/usage/icons',
            to: '/components/icons'
          },
          {
            from: '/resources/icon-library',
            to: '/libraries/iconsLibrary'
          },
          {
            from: '/components/fields-and-forms',
            to: '/components/forms'
          }
        ]
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true,
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
            href: `${repoUrl}/tree/main/`,
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

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const { owner, repo, repoUrl, defaultBranch } = require('./constants')
const editUrl = `${repoUrl}/tree/${defaultBranch}/docs`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SF Design System',
  tagline: 'The design system for sf.gov',
  url: 'https://design-system.sf.gov/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: owner, // Usually your GitHub org/user name.
  projectName: repo, // Usually your repo name.

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
        debug: true,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl
        },
        theme: {
          customCss: [
            require.resolve('sfgov-design-system/dist/css/sfds.css'),
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
        // title: 'San Francisco Design System',
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
          /* {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'formsSidebar',
            label: 'Forms',
          }, */
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
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Design System Documentation',
            items: [
              {
                label: 'Design',
                to: '/docs/design'
              },
              {
                label: 'Components',
                to: '/docs/components'
              },
              {
                label: 'Develop',
                to: '/docs/develop'
              },
              {
                label: 'Libraries',
                to: '/docs/libraries'
              }
            ]
          },
          /* {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          }, */
          {
            title: 'More',
            items: [
              /* {
                label: 'Blog',
                to: '/blog',
              }, */
              {
                label: 'GitHub',
                href: repoUrl
              }
            ]
          }
        ]
        // copyright: 'Built with Docusaurus.'
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

module.exports = config

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { repository } = require('sfgov-design-system/package.json')
const [owner, repo] = repository.split('/')
const repoUrl = `https://github.com/${repository}`
const editUrl = `${repoUrl}/tree/main/docs`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SF Design System',
  tagline: 'Helping anyone creating digital products for San Francisco.',
  url: 'https://design-system.sf.gov/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: owner, // Usually your GitHub org/user name.
  projectName: repo, // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'San Francisco Design System',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'designSidebar',
            label: 'Design',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'componentsSidebar',
            label: 'Components',
          },
          /* {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'formsSidebar',
            label: 'Forms',
          }, */
          /* {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'librariesSidebar',
            label: 'Libraries',
          }, */
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'devSidebar',
            label: 'Developer',
          },
          
          {
            href: 'https://github.com/SFDigitalServices/design-system/tree/main/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Design System Documentation',
            items: [
              {
                label: 'Design',
                to: '/docs/design',
              },
              {
                label: 'Components',
                to: '/docs/components',
              },
              /* {
                label: 'Content',
                to: '/docs/content',
              }, */
              /* {
                label: 'Forms',
                to: '/docs/forms',
              }, */
            ],
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
                href: repoUrl,
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

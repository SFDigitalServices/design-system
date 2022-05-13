import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'cf9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '988'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '138'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '094'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '974'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f67'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '958'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '057'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'edc'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '683'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'a94'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '8cd'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'aaf'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '34f'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '40b'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '2fa'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '351'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '1e1'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'ffc'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '91b'),
    routes: [
      {
        path: '/docs/components/',
        component: ComponentCreator('/docs/components/', '118'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/components/buttons',
        component: ComponentCreator('/docs/components/buttons', '5bb'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/components/details',
        component: ComponentCreator('/docs/components/details', '540'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/components/fields-and-forms',
        component: ComponentCreator('/docs/components/fields-and-forms', '2d0'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/components/intro',
        component: ComponentCreator('/docs/components/intro', 'c16'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/components/kbd',
        component: ComponentCreator('/docs/components/kbd', 'bdb'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/components/resources/',
        component: ComponentCreator('/docs/components/resources/', '234'),
        exact: true
      },
      {
        path: '/docs/components/usage/',
        component: ComponentCreator('/docs/components/usage/', 'd6a'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/components/usage/css',
        component: ComponentCreator('/docs/components/usage/css', 'ece'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/components/usage/develop',
        component: ComponentCreator('/docs/components/usage/develop', 'cc5'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/components/usage/docs',
        component: ComponentCreator('/docs/components/usage/docs', 'b0e'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/components/usage/icons',
        component: ComponentCreator('/docs/components/usage/icons', '508'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/components/usage/install',
        component: ComponentCreator('/docs/components/usage/install', '714'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/components/usage/javascript',
        component: ComponentCreator('/docs/components/usage/javascript', '173'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/components/usage/react',
        component: ComponentCreator('/docs/components/usage/react', '2df'),
        exact: true,
        sidebar: "componentsSidebar"
      },
      {
        path: '/docs/design/',
        component: ComponentCreator('/docs/design/', 'e79'),
        exact: true,
        sidebar: "designSidebar"
      },
      {
        path: '/docs/design/color',
        component: ComponentCreator('/docs/design/color', '14e'),
        exact: true,
        sidebar: "designSidebar"
      },
      {
        path: '/docs/design/icons',
        component: ComponentCreator('/docs/design/icons', 'a6c'),
        exact: true,
        sidebar: "designSidebar"
      },
      {
        path: '/docs/design/spacing',
        component: ComponentCreator('/docs/design/spacing', '6d1'),
        exact: true,
        sidebar: "designSidebar"
      },
      {
        path: '/docs/design/typography',
        component: ComponentCreator('/docs/design/typography', '70a'),
        exact: true,
        sidebar: "designSidebar"
      },
      {
        path: '/docs/developer/intro',
        component: ComponentCreator('/docs/developer/intro', '410'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/docs/forms/intro',
        component: ComponentCreator('/docs/forms/intro', 'ae5'),
        exact: true,
        sidebar: "formsSidebar"
      },
      {
        path: '/docs/libraries/intro',
        component: ComponentCreator('/docs/libraries/intro', 'b08'),
        exact: true,
        sidebar: "librariesSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '301'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

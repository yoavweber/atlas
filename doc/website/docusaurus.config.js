const footer = require('./src/constants/footer');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Atlas | Manage your database schema as code',
  tagline: 'Manage your database schema as code',
  url: 'https://atlasgo.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'ariga',
  projectName: 'atlas',
  themeConfig: {
    image: "https://og.atlasgo.io/image?title=Schema%20Migration%20Tool%20for%20any%20Language",
    prism: {
      additionalLanguages: ['hcl', 'java', 'properties', 'gradle', 'php', 'csharp', 'powershell', 'bash'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-message',
          line: 'highlight-next-line-error-message',
        },
        {
          className: 'code-block-info-line',
          line: 'highlight-next-line-info',
        },
        {
          className: 'code-block-underline',
          line: 'underline-next-line',
        },
      ],
    },
    algolia: {
      appId: 'D158RRDJO1',
      apiKey: "3585a7e658ef4ab7775a9099be3778d2",
      indexName: "atlasgo",
    },
    navbar: {
      title: 'Atlas',
      logo: {
        alt: 'Atlas',
        src: 'https://atlasgo.io/uploads/websiteicon.svg',
      },
      items: [
        {
          href: 'https://github.com/ariga/atlas',
          className: 'header-github-link',
          position: 'right',
        },
        {
          href: 'https://discord.gg/zZ6sWVg6NT',
          className: 'header-discord-link',
          position: 'right',
        },{
          href: 'https://twitter.com/atlasgo_io',
          className: 'header-twitter-link',
          position: 'right',
        },{
          href: 'https://atlasnewsletter.substack.com/',
          className: 'header-newsletter-link',
          position: 'right',
        },
        {
          to: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'guides',
          label: 'Guides',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Use Cases',
          position: 'left',
          items: [
            {
              type: 'custom-use-case-navbar',
              content: 'migrations'
            },
            {
              type: 'custom-use-case-navbar',
              content: 'monitoring'
            },   
            {
              type: 'custom-use-case-navbar',
              content: 'tenant'
            },
            {
              type: 'custom-use-case-navbar',
              content: 'governance'
            },
          ],
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'pricing',
          label: 'Pricing',
          position: 'left',
        },
      ],
    },
    footer,
    announcementBar: {
      id: 'announcementBar-18', // Increment on change
      content: `<strong>New!</strong> Announcing Atlas Schema Monitoring<a class="cta" href="/blog/2024/09/02/schema-monitoring-v027">Read it here</a>`,
      isCloseable: true,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/getting-started/',
            from: '/cli/getting-started/setting-up',
          },
          {
            to: '/integrations/terraform-provider',
            from: '/terraform-provider'
          },
          {
            to: '/integrations/go-sdk',
            from: ['/go-api/intro','/go-api/inspect'],
          },
          {
            to: '/cli-reference',
            from: '/cli/reference',
          },
          {
            to: '/concepts/url',
            from: '/cli/url',
          },
          {
            to: '/concepts/dev-database',
            from: '/dev-database',
          },
          {
            to: '/atlas-schema/hcl',
            from: ['/ddl/intro', '/concepts/ddl', '/guides/ddl'],
          },
          {
            to: '/atlas-schema/input-variables',
            from: '/ddl/input-variables',
          },
          {
            to: '/atlas-schema/projects',
            from: '/cli/projects',
          },
          {
            to: '/atlas-schema/hcl-types',
            from: '/ddl/sql-types',
          },
          {
            to: '/atlas-schema/hcl',
            from: '/ddl/sql',
          },
          {
            to: '/guides',
            from: '/knowledge',
          },
          {
            to: '/guides/mysql/generated-columns',
            from: '/knowledge/mysql/generated-columns',
          },
          {
            to: '/guides/postgres/partial-indexes',
            from: '/knowledge/postgres/partial-indexes',
          },
          {
            to: '/guides/postgres/serial-columns',
            from: '/knowledge/postgres/serial-columns',
          },
          {
            to: '/concepts/url',
            from: '/url',
          },
          {
            from: '/atlas-schema/sql-resources',
            to: '/atlas-schema/hcl',
          },
          {
            from: '/atlas-schema/sql-types',
            to: '/atlas-schema/hcl-types',
          },
          {
            from: '/integrations/go-api',
            to: '/integrations/go-sdk',
          },
          {
            from: '/deployment/intro',
            to: '/cloud/deployment',
          },
          {
            from: '/ui/intro',
            to: '/cloud/getting-started',
          },
          {
            to: "/declarative/inspect",
            from: "/cli/getting-started/inspection",
          },
          {
            to: "/declarative/apply",
            from: "/cli/getting-started/applying-schemas",
          },
          {
            to: "/guides/deploying/remote-directories",
            from: "/guides/deploying/from-cloud",
          },
          {
            from: '/registry',
            to: '/cloud/features/registry',
          },
        ],
      },
    ],
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-T9GX8BR', // GTM Container ID
      }
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    "./plugins/utm-plugin",
    "./plugins/intercom",
    "./plugins/page-view",
    "./plugins/tailwind",
    "./plugins/scroll-to-top"
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          path: "../md",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        gtag: {
          trackingID: 'G-Z88N4TF03R'
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All our posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevSecOps Playbook',
  tagline: 'You build it, you run it – and security is never someone else’s problem',
  url: 'https://devsecops-telia.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TeliaSoneraNorge', // Usually your GitHub org/user name.
  projectName: 'devsecops-playbook', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/TeliaSoneraNorge/devsecops-playbook/tree/master',

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TeliaSoneraNorge/devsecops-playbook',
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
        title: 'Telia DevSecOps',
        logo: {
          alt: 'Telia',
          src: 'img/telia.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'DevSecOps Playbook',
          },
          {
            href: '/docs/events/',
            label: 'Events',
            position: 'left',
          },
          {
            href: 'https://engineering.telia.no/blog', 
            label: 'Blog', 
            position: 'left'},
          {
            href: 'https://github.com/TeliaSoneraNorge/devsecops-playbook',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
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
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/TeliaSoneraNorge/devsecops-playbook',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DevSecops Playbook. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

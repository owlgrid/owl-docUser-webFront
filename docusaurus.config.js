// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'OwlGrid docs',
    tagline: 'OwlGrid documentation',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://docs.owlgrid.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    // i18n: {
    //     defaultLocale: 'en',
    //     locales: ['en'],
    // },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/owlgrid/owl-docUser-front/edit/main/',
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
            // Replace with your project's social card
            image: 'img/owlgrid-social-card.jpg',
            colorMode: {
                disableSwitch: false,
                respectPrefersColorScheme: true
            },
            navbar: {
                title: 'OwlGrid',
                logo: {
                    alt: 'OwlGrid Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'general/introduction/intro',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        label: 'Portal',
                        href: 'https://portal.owlgrid.com',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'OwlGrid',
                        items: [
                            {
                                label: 'Documentation',
                                to: '/docs/general/introduction/intro',
                            },
                            {
                                label: 'Portal',
                                href: 'https://owlgrid.app',
                            },
                            {
                                label: 'OwlGrid Home',
                                to: 'https://owlgrid.com',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/owlgrid',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/owlgrid',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/owlgrid',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/owlgrid/owl-docUser-front',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} OwlGrid.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;

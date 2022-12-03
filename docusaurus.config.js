/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'OwlGrid',
    tagline: 'Create cloud applications in a minute.',
    url: 'https://docs.owlgrid.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: '/img/favicon.ico',
    organizationName: 'owlgrid', // Usually your GitHub org/user name.
    projectName: 'doc-public-front', // Usually your repo name.
    themeConfig: {
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
                    href: 'https://github.com/owlgrid/doc-public-front',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
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
                            href: 'https://github.com/owlgrid/doc-public-front',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} OwlGrid`,
        },

    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/owlgrid/doc-public-front/',
                    docLayoutComponent: "@theme/DocPage",
                    docItemComponent: "@theme/ApiItem"
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: "apiDocs",
                docsPluginId: "classic",
                config: {
                    petstore: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
                        specPath: "openapi/petstore-0.1.0.yaml", // Path to designated spec file
                        outputDir: "docs/references/API/Petstore", // Output directory for generated .mdx docs
                        sidebarOptions: {
                            groupPathsBy: "tag",
                        },
                        // version: "0.1.0", // Current version
                        // label: "v0.1.0", // Current version label
                        // baseUrl: "/docs/references/API/swagger-Petstore-yaml", // Leading slash is important
                        // versions: {
                        //     "0.0.1": {
                        //         specPath: "openapi/petstore-0.0.1.yaml",
                        //         outputDir: "docs/references/API/Petstore/1.0.0", // No trailing slash
                        //         label: "v1.0.0",
                        //         baseUrl: "/references/API/Petstore/1.0.0/swagger-petstore-yaml", // Leading slash is important
                        //     },
                        // },
                    }
                }
            },
        ]
    ],
    themes: ["docusaurus-theme-openapi-docs"], // Allows use of @theme/ApiItem and other components
};

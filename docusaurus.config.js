/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "biosharp.net",
  tagline: "The tagline of my site",
  url: "https://biosharp.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "biosharp-dotnet", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      pt: {
        htmlLang: 'pt-BR',
      },
    },
  },

  themeConfig: {

    colorMode: {
      disableSwitch: true
    },

    navbar: {
      title: "Biosharp.net",
      logo: {
        alt: "BioSharp OÜ logo",
        src: "img/logo-sm.svg",
      },
      items: [

        {
          type: 'localeDropdown',
          position: 'right',
        },

        { to: "blog", label: "Blog", position: "left" },


      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Content",
          items: [
            {
              label: "Blog",
              to: "blog/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/biosharp",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/BioSharp.net/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/BioSharp_dotnet",
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/biosharp-dotnet",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. All rights reserved, BioSharp OÜ`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/biosharp-dotnet",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        pages: {
          path: 'src/pages',
          // routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
      },
    ],
  ],
};

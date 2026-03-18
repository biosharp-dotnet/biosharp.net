/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: "biosharp.net",
  tagline: "Making bioinformatics simple and easy.",
  url: "https://biosharp.net",
  baseUrl: "/",
  onBrokenLinks: "warn",
  favicon: "img/biosharp.ico",
  organizationName: "biosharp-dotnet", // Usually your GitHub org/user name.
  projectName: "biosharp.net", // Usually your repo name.

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      // Portuguese locale — kept for reference, re-enable by adding 'pt' back to
      // the locales array above and uncommenting the block below.
      // pt: {
      //   htmlLang: 'pt-BR',
      // },
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

        { to: "blog", label: "Blog", position: "left" },

        { to: "services", label: "Services", position: "left" },

        { to: "contact", label: "Contact", position: "left" },

        // Locale dropdown — re-enable when Portuguese locale is reactivated.
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },


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
            {
              label: "Services",
              to: "services/",
            },
            {
              label: "Contact",
              to: "contact/",
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
        {
          title: "Partners",
          items: [
            {
              label: "incsteps.com",
              href: "https://incsteps.com",
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
          // Shared authors map – allows multiple authors per post.
          // In frontmatter use: authors: [author1, author2]
          authorsMapPath: 'authors.yml',
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

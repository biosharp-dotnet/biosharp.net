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
  themeConfig: {
    navbar: {
      title: "Biosharp.net",
      logo: {
        alt: "BioSharp OÜ logo",
        src: "img/logo-sm.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/biosharp-dotnet/biosharp.net",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
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
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
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
          editUrl: "https://github.com/biosharp-dotnet",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

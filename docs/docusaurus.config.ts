import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Crypto Docs",
  tagline: "Comprehensive Guide for Crypto Price Tracker",
  favicon: "img/favicon.ico",

  // Set your actual deployed site URL
  url: "https://crypto-docs.vercel.app",
  baseUrl: "/",

  // GitHub repo details
  organizationName: "Sreechandh22",
  projectName: "crypto-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: "https://github.com/Sreechandh22/crypto-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/crypto-docs-social-card.jpg",
    navbar: {
      title: "Crypto Docs",
      logo: {
        alt: "Crypto Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/docs/intro", label: "Introduction", position: "left" },
        { to: "/docs/setup", label: "Setup", position: "left" },
        { to: "/docs/api", label: "API", position: "left" },
        { to: "/docs/state-management", label: "State Management", position: "left" },
        { to: "/docs/challenges", label: "Challenges", position: "left" },
        { href: "https://github.com/Sreechandh22/Crypto", label: "GitHub", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [{ label: "Setup", to: "/docs/setup" }],
        },
        {
          title: "Community",
          items: [
            { label: "GitHub", href: "https://github.com/Sreechandh22/Crypto" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Crypto Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

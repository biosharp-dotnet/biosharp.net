# BioSharp.net — Website

The official website for [BioSharp](https://biosharp.net), built with [Docusaurus](https://docusaurus.io/) v3 (`^3.9.2`).

BioSharp makes bioinformatics **simple and easy** — offering training, infrastructure consulting, and pipeline development for modern research labs.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 20 (see `engines` field in `package.json`)
- [Yarn](https://yarnpkg.com/) (recommended) or npm ≥ 10

> **Note:** Docusaurus v4 has not been released yet. This project tracks the latest stable v3 release (`^3.9.2`). Upgrade to v4 once it is officially published.

### Installation

```console
yarn install
```

### Local Development

```console
yarn start
```

Opens a browser window at `http://localhost:3000`. Most changes are reflected live without restarting the server.

### Build

```console
yarn build
```

Generates static content into the `build/` directory, ready to be served by any static hosting provider.

### Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

Builds the site and pushes it to the `gh-pages` branch (for GitHub Pages hosting).

---

## 📁 Project Structure

```
biosharp.net/
├── blog/               # Blog posts (MDX)
├── docs/               # Documentation pages
├── src/
│   ├── css/            # Global styles
│   ├── pages/          # Custom React pages (index, contact, services)
│   └── theme/          # Swizzled Docusaurus theme components
├── static/
│   └── img/            # Static images and logo assets
├── docusaurus.config.js
├── sidebars.js
└── package.json
```

---

## 🎨 Logo Assets

Logo files are located in `static/img/`:

| File | Usage |
|------|-------|
| `logo-sm.png` | Navbar logo (PNG, recommended for cross-browser compatibility) |
| `logo-sm.svg` | Navbar logo (SVG variant) |
| `logo.svg` | Full-size SVG logo |
| `logo_icon.svg` | Icon-only variant |
| `biosharp_logo.png` | Hero / landing page logo |
| `biosharp.ico` | Favicon |

### Suggested Logo Concepts

The following new logo variants are proposed under `static/img/`:

- **`logo-helix.svg`** — Wordmark + green double-helix icon, aligns with the DNA helix decoration on the homepage.
- **`logo-minimal.svg`** — Clean monogram `BS` mark with the teal (`#25c2a0`) brand colour, optimised for small sizes (navbar, favicon).
- **`logo-dark.svg`** — White wordmark on transparent background for dark-mode or dark-background contexts.

See the SVG source files committed in `static/img/` for the actual artwork.

---

## 🌐 Internationalization

Currently English-only. A Portuguese (`pt-BR`) locale is stubbed out in `docusaurus.config.js` and can be re-enabled by adding `'pt'` back to the `locales` array and un-commenting the related blocks.

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue first to discuss significant changes.

---

## 📜 License

Copyright © BioSharp. All rights reserved.

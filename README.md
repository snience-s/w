# ScienceF

This repository contains the SCIENCE event-management website and a .NET 10 F# class library.

## Projects

```text
├── App.jsx, pages/      # React application and page components
├── components/          # Shared UI components
├── data/                # Website content and event media
├── assets/              # Images, video, and other source media
├── ScienceF/            # F# class library
└── ScienceF.slnx        # .NET solution
```

## Run locally

```bash
npm install
npm run dev
```

Vite serves the site at `http://localhost:5173`.

## Build

```bash
npm run build
dotnet build ScienceF.slnx
```

Run `npm run lint` to check the website source.

## Website pages

Vite builds a separate HTML entry point for each top-level page:
`index.html`, `about.html`, `services.html`, `work.html`, `case-studies.html`,
`experience.html`, `team.html`, `contact.html`, and `social.html`. Navigation
uses these files directly. The Apache and static-host redirect rules preserve
existing clean URLs and map detail URLs to the entry point for their section.

To add a top-level page, add its HTML entry to `pageEntries` in `vite.config.js`,
add a route in `App.jsx`, and update `public/_redirects` if needed. Shared
components live in `components/`; page content lives in `pages/`.

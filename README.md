# ScienceF

This repository contains the ScienceF website and a .NET 10 F# class library.

## Projects

```text
science.F/
├── src/                # React + Vite website
├── ScienceF/           # F# class library
├── ScienceF.slnx       # .NET solution file
└── science-website/     # Static website
```

## Run the website

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
dotnet build ScienceF.slnx
```

## Website pages

The Vite build produces a separate HTML entry point for each top-level page:
`index.html`, `about.html`, `services.html`, `work.html`, `case-studies.html`,
`experience.html`, `team.html`, `contact.html`, and `social.html`. Navigation
uses these files directly. The Apache and static-host redirect rules preserve
existing clean URLs and map detail URLs to the entry point for their section.

To add a top-level page, add its HTML entry to `pageEntries` in `vite.config.js`,
add a route in `src/App.jsx`, and add its navigation/redirect rules if needed.
Shared shell styles and components remain in `src/`; page content stays in
`src/pages/`.

# GLORIA — AI Software Engineer — Portfolio

Professional static portfolio website for Gloria Ngwu, an AI Software Engineer focused on building production-ready machine learning systems. This repository contains the source for a one-page portfolio (HTML, CSS, JS) plus a resume page and assets.

Live demo

- https://career-guidance-assistance.github.io/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl/

Quick overview

- Purpose: Showcase Gloria's skills, projects, and contact info. The site is intentionally lightweight and suitable for static hosting (GitHub Pages, Netlify, Vercel).
- Tech: Plain HTML, CSS and vanilla JavaScript.

Repository structure

Root files and important folders:

- `index.html` — Main portfolio page (one-page layout: hero, about, services, skills, projects, contact).
- `resume.html` — Standalone resume page (print-friendly).
- `GLORIA CHIDIMA NGWU, AL SOFTWARE ENGINEER CV.pdf` — Resume PDF for download/viewing.
- `style.css` — Primary site stylesheet.
- `main.js` — Main JavaScript entry (site interactions: modal, smooth scroll, form behaviour).
- `animations.css`, `styles.css` — Additional CSS used by the project.
- `animations.js`, `theme.js` — Additional JavaScript.
- `images/` — Image assets used on the site (hero, profile, project screenshots).

How to preview locally

Because this is a static site you can preview it by opening `index.html` in your browser. For a more accurate local test and to avoid file:// limitations, run a small HTTP server.

## Gloria Ngwu — Portfolio (AI Software Engineer)

This repository contains the source for Gloria Ngwu’s personal portfolio: a lightweight, static, one-page site built with plain HTML, CSS, and vanilla JavaScript. The site highlights Gloria’s skills, selected projects, and contact information, and includes a standalone resume page and downloadable PDF.

Live demo

- https://career-guidance-assistance.github.io/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl/

What’s in this repository

- `index.html` — Main portfolio page (sections: hero, about, services, skills, projects, contact).
- `resume.html` — Standalone resume page (print-friendly).
- `GLORIA CHIDIMA NGWU, AL SOFTWARE ENGINEER CV.pdf` — Downloadable resume PDF.
- `style.css`, `styles.css`, `animations.css` — Styles used by the site.
- `main.js`, `animations.js`, `theme.js` — JavaScript for interactions and theming.
- `images/` — Image assets used on the site (hero image, profile photo, project thumbnails).

Quick local preview

Because this is a static site you can open `index.html` directly in a browser. For a more accurate local test (recommended), serve the folder over HTTP to avoid file:// limitations.

Using Python 3 (PowerShell):

```powershell
# Serve current folder at http://localhost:5500
python -m http.server 5500
```

Using Node (http-server):

```powershell
npm install -g http-server
http-server -p 5500
```

Then open http://localhost:5500 in your browser.

Deployment

The site is already deployed (GitHub Pages):

- https://career-guidance-assistance.github.io/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl/

Notes & recommendations

- Resume links: The About section and the footer include links to view or download the resume PDF and to open `resume.html`.
- Contact form: The contact form is static and does not submit by default. To enable submissions, connect it to Formspree, Netlify Forms, or another backend endpoint.
- Consolidation: If you want a single CSS and JS bundle, I can safely consolidate files and update `index.html` references (I’ll create backups first).
- Accessibility: The site uses semantic HTML; consider running Lighthouse to get actionable accessibility and performance tips.

Contributing

- Open an issue for bug reports or feature requests.
- For small fixes, fork the repo and open a pull request against `main`.

Contact

- GitHub: https://github.com/chibeauty
- Email: gloriangwu45@gmail.com



Requirements coverage:

- Images connected in `index.html`: check (updated previously).
- CV/Resume linked from About and footer: check.
- Deployment link included: check.

Architecture

- Type: Static single-page portfolio (HTML, CSS, vanilla JavaScript).
- Files: `index.html` (UI), `resume.html` (print-friendly resume), CSS files (`style.css`, `styles.css`, `animations.css`) and JS files (`main.js`, `animations.js`, `theme.js`). Images live under `images/` and the resume PDF is at the project root.
- Runtime: No server-side code required. The site can be hosted on GitHub Pages, Netlify, or any static-file host. JavaScript progressively enhances the site (smooth scrolling, modals, theme toggling). There are no runtime data sources or external APIs by default.
- Failure modes / error handling: the contact form is static and will not submit without a backend; image links must point to the correct `images/` filenames; large assets will affect load time (optimise images for production).

Tests

This project has no automated test suite by default (static site). Below are recommended manual checks and lightweight automated audits you can run locally:

Manual smoke tests

- Start a local HTTP server and open `index.html` in a browser.
- Verify hero, profile, and project images load correctly.
- Click the resume buttons (Open Resume, View CV, Download CV) to confirm they open or download the correct file.
- Submit the contact form to validate front-end validation behaviour (note: it will not send without a backend).

Automated audits (recommended)

- Lighthouse (performance, accessibility, SEO): install the Lighthouse CLI and run it against a local server:

```powershell
# install (one-time)
npm install -g lighthouse

# run against a running local server, e.g. http://localhost:5500
lighthouse http://localhost:5500 --output html --output-path ./lighthouse-report.html
```

- HTML validation: use the W3C validator (https://validator.w3.org/) or the Nu HTML Checker (vnu.jar) to check for markup issues.

- Accessibility: run Lighthouse accessibility audits or use axe DevTools in the browser for focused accessibility checks.


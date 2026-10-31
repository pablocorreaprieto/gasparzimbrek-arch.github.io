# Gaspar Zimbrek-Turkovic, personal website

A one-page profile in English, French and Croatian, built as a plain static site for GitHub Pages. No build step, no framework.

## Files

| File | What it is |
|---|---|
| `index.html` | English page (the home page) |
| `fr/index.html` | French page |
| `hr/index.html` | Croatian page |
| `assets/site.css` | Styles shared by all three pages, including dark mode and print |
| `assets/fonts.css`, `assets/fonts/` | Self-hosted fonts: Source Serif 4 and IBM Plex Sans, both SIL Open Font License 1.1 |
| `gaspar-zimbrek-turkovic.jpg` | Portrait |
| `favicon.*`, `apple-touch-icon.png` | Browser and phone icons |
| `404.html` | Page shown for any missing URL |
| `sitemap.xml`, `robots.txt` | For search engines |

## Editing

You can do everything in the browser: open a file on GitHub, click the pencil icon, edit, then **Commit changes**. Once the site is live, a commit to `main` is online about a minute later.

**Keep the three languages in sync.** Any change to `index.html` goes into `fr/index.html` and `hr/index.html` too.

## Contact block

No email or phone on the site, by choice (30–31.10.2026). The left-hand block (`<div class="blk">`) shows LinkedIn, languages with levels, and GitHub. If the LinkedIn address changes (for example after setting a custom URL), update the link in all three pages and in `sameAs` in the JSON-LD block at the top of each page.

The profile text comes from your CV (October 2026) and your public LinkedIn and EPFL pages. Check every date, name and number.

To add a research position, a job or a degree, copy one whole `<li class="row"> ... </li>` block and edit the copy.

## Address

The site lives at https://gasparzimbrek-arch.github.io/ (French: https://gasparzimbrek-arch.github.io/fr/, Croatian: https://gasparzimbrek-arch.github.io/hr/), published from the `main` branch, folder `/ (root)` (Settings → Pages). The repository has to stay public and keep the name `gasparzimbrek-arch.github.io`, otherwise the address changes.

## Later

- The portrait is 200 × 200 px, which looks soft on high-resolution screens. A square photo of at least 800 × 800 px will be sharper. Save it with the same file name and update the `width` and `height` attributes in all three pages (and in the JSON-LD block at the top of each).
- To help Google connect your profiles, add their URLs to the `sameAs` list in the JSON-LD block of all three pages.
- To see how the site shows up in Google, add it to [Google Search Console](https://search.google.com/search-console).

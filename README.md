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
| `gaspar-zimbrek-turkovic.jpg` | Portrait, 800 × 800 px |
| `cv/gaspar-zimbrek-turkovic-cv.pdf` | Four-page CV, English (October 2026, airy classic layout) |
| `assets/site.js` | Unfolds details for printing, sends the contact form |
| `og-card.jpg` | 1200 × 630 preview image shown when the link is shared |
| `assets/lab.jpg` | Lab photo in the Research section |
| `favicon.*`, `apple-touch-icon.png` | Browser and phone icons |
| `404.html` | Page shown for any missing URL |
| `sitemap.xml`, `robots.txt` | For search engines |

## Editing

You can do everything in the browser: open a file on GitHub, click the pencil icon, edit, then **Commit changes**. Once the site is live, a commit to `main` is online about a minute later.

**Keep the three languages in sync.** Any change to `index.html` goes into `fr/index.html` and `hr/index.html` too.

## Contact block

No phone on the site, by choice. The email has been shown since 31.10.2026. The left-hand block (`<div class="blk">`) shows email, LinkedIn, ORCID, Google Scholar, the EPFL people page, GitHub and languages with levels. **Remove the EPFL link when you graduate** (February 2027), since the page will likely disappear. If the LinkedIn address changes (for example after setting a custom URL), update the link in all three pages and in `sameAs` in the JSON-LD block at the top of each page.

The profile text comes from your CV (October 2026) and your public LinkedIn and EPFL pages. Check every date, name and number.

To add a research position, a job or a degree, copy one whole `<li class="row"> ... </li>` block and edit the copy.

## Contact form (to switch on once)

The site has a contact form at the bottom of each page, hidden until it is connected. Messages go through Formspree to your inbox, and your email address never appears on the site.

1. Sign up at https://formspree.io with the email address where you want to receive messages, then create a new form.
2. Copy its form ID (the part after `/f/` in the form's endpoint, for example `xyzabcde`) and send it to Pablo, or do the next step yourself.
3. In `index.html`, `fr/index.html` and `hr/index.html`: replace `FORMSPREE_ID` with the ID, and remove the word `hidden` from `<section id="contact" ...>` and from `<div class="contact-link" hidden>`.
4. Send yourself a test message from the live site.

## CV PDF

`cv/gaspar-zimbrek-turkovic-cv.pdf` is a separate four-page CV in English, linked from all three pages. It is not generated from the pages, so update it whenever you change dates, positions or publications on the site.

## Highlights and details

Each page opens with three highlights. The bullet points under each research position are folded behind a **Details** toggle. They unfold automatically when someone prints the page.

## Address

The site lives at https://gasparzimbrek.github.io/ (French: https://gasparzimbrek.github.io/fr/, Croatian: https://gasparzimbrek.github.io/hr/), published from the `main` branch, folder `/ (root)` (Settings → Pages). The repository has to stay public and keep the name `gasparzimbrek.github.io`, otherwise the address changes.

## Later

- To help Google connect your profiles, add their URLs to the `sameAs` list in the JSON-LD block of all three pages.
- To see how the site shows up in Google, add it to [Google Search Console](https://search.google.com/search-console).

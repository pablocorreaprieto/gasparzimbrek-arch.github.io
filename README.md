# Gaspar Zimbrek-Turkovic, personal website

A one-page profile in English and French, built as a plain static site for GitHub Pages. No build step, no framework.

## Files

| File | What it is |
|---|---|
| `index.html` | English page (the home page) |
| `fr/index.html` | French page |
| `assets/site.css` | Styles shared by both pages, including dark mode and print |
| `assets/fonts.css`, `assets/fonts/` | Self-hosted fonts: Source Serif 4 and IBM Plex Sans, both SIL Open Font License 1.1 |
| `gaspar-zimbrek-turkovic.jpg` | Portrait |
| `favicon.*`, `apple-touch-icon.png` | Browser and phone icons |
| `404.html` | Page shown for any missing URL |
| `sitemap.xml`, `robots.txt` | For search engines |

## Editing

You can do everything in the browser: open a file on GitHub, click the pencil icon, edit, then **Commit changes**. Once the site is live, a commit to `main` is online about a minute later.

**Keep the two languages in sync.** Any change to `index.html` goes into `fr/index.html` too.

## Adding email, LinkedIn and languages

These lines are not shown yet. Each page has a commented-out example at the top of the left-hand block (`<div class="blk">`). Paste it above the GitHub block, fill it in, and do the same in the other language. For LinkedIn, also add the profile URL to `sameAs` in the JSON-LD block at the top of both pages.

The profile text came from public summaries of your LinkedIn and EPFL pages. Check every date, name and number.

To add a research position, a job or a degree, copy one whole `<li class="row"> ... </li>` block and edit the copy.

## Going live (once)

The site is not public yet. GitHub Pages on a free account needs a public repository.

1. **Rename the repository** to `YOUR-USERNAME.github.io` (Settings → General → Repository name). That gives the site the address `https://YOUR-USERNAME.github.io/` with nothing after it.
2. **Replace the placeholder address.** Every file uses `gaspar-username` where your GitHub username goes (links, canonical URLs, sitemap). Replace all of them, in `index.html`, `fr/index.html`, `404.html`, `sitemap.xml` and `robots.txt`.
3. **Check both pages** once more for facts you want to correct.
4. **Make the repository public** (Settings → General → Danger Zone → Change visibility).
5. **Turn on Pages** (Settings → Pages → Build and deployment → Source: Deploy from a branch, Branch: `main`, folder `/ (root)` → Save).
6. After a minute or two, open `https://YOUR-USERNAME.github.io/` and `https://YOUR-USERNAME.github.io/fr/`.

## Later

- The portrait is 200 × 200 px, which looks soft on high-resolution screens. A square photo of at least 800 × 800 px will be sharper. Save it with the same file name and update the `width` and `height` attributes in both pages (and in the JSON-LD block at the top).
- To help Google connect your profiles, add their URLs to the `sameAs` list in the JSON-LD block of both pages.
- To see how the site shows up in Google, add it to [Google Search Console](https://search.google.com/search-console).

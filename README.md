# TIGG3S

Tigges family links hub. V2 (Family / Ventures). Original replica is tagged `original-template`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Change the site

All copy, links, cards, and socials live in `src/content.js`.

| What to change | Where |
| --- | --- |
| Tagline, logo | `site` |
| DJ URBANT hero + Mixcloud CTA | `hero` |
| Family / Ventures cards | `cardGroups` |
| Footer brand icons | `socials` |
| Footer copyright | `footer` |
| Layout, colors, type | `src/style.css` |
| Images / video | `public/assets/` |

Accent color is `--accent: #ff7919` in `src/style.css`.

See `BOOKMARKS.md` to restore the original template.

## Build / GitHub Pages

```bash
npm run build
npm run preview
```

Static output is written to `docs/`. GitHub Pages cannot run Vite source, so the live site needs this production build.

The root page redirects `*.github.io` to `./docs/`. For a URL without `/docs/` in the path, set **Settings → Pages** to deploy the `/docs` folder from `main`.

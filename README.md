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
| DJURBANT hero + YouTube CTA | `hero` |
| Family / Ventures cards | `cardGroups` |
| Mid-page brand icons | `socials` |
| Footer copyright + outline icons | `footer` |
| Layout, colors, type | `src/style.css` |
| Images / video | `public/assets/` |

Accent color is `--accent: #ff7919` in `src/style.css`.

See `BOOKMARKS.md` to restore the original template.

## Build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

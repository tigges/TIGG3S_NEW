# TIGG3S

Replica of [tigg3s.com](https://tigg3s.com/) — a family links hub.

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
| Tagline, logo | `site` in `src/content.js` |
| DJURBANT hero + Mixcloud CTA | `hero` |
| Music / Art / Architecture / CXP cards | `cards` |
| Mid-page brand icons | `socials` |
| Footer copyright + outline icons | `footer` |
| Layout, colors, type | `src/style.css` |
| Images / video | `public/assets/` |

Accent color is `--accent: #ff7919` in `src/style.css`.

## Build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

# Aficionados Wine & Spirits — Premium Website

A luxury landing page redesign for [Aficionados INC](https://aficionadosinc.com), built as a care-package deliverable for IslaIntel.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- **next-intl** — Spanish (default) + English
- **Framer Motion** — scroll reveals and hero animations

## Design System

| Token | Hex | Usage |
|-------|-----|--------|
| Charcoal | `#231F20` | Hero, values, footer |
| Bronze | `#A68966` | Accents, eyebrows |
| Bronze Light | `#C5A073` | Headlines, hover states |
| Cream | `#F2F2E8` | Portfolio section |
| Burgundy | `#6B443C` | Contact section |
| Ivory | `#FAF8F4` | Page background |

**Typography:** Cormorant Garamond (display) + Outfit (body)

## Assets

All images are pulled from the live WordPress site and stored locally:

```
public/assets/
├── brand/        # Aficionados logos
├── editorial/    # Mission, vision, values, tasting room
├── portfolio/    # 32 brand logos
├── video/        # Cinematic hero video (wine pour)
├── reference/    # Before screenshots
└── manifest.json # Source URLs + metadata
```

Re-pull assets:

```bash
npm run pull-assets
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/es](http://localhost:3000/es) or [http://localhost:3000/en](http://localhost:3000/en).

## Build

```bash
npm run build
npm start
```

## Deployment

Deploy to Vercel by connecting the GitHub repo. The site is fully static (SSG) and requires no backend for v1.

Contact form uses `mailto:` — wire to Formspree or Resend for production.

## Project Structure

```
src/
├── app/[locale]/     # Localized routes
├── components/       # UI sections
├── content/          # es.json, en.json copy
├── i18n/             # next-intl config
└── lib/              # design tokens, portfolio data
```

## License

Proprietary — created for Aficionados / IslaIntel care package.

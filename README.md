# Abdelrahman Mohamed — Portfolio

Personal portfolio of Abdelrahman Mohamed, Full Stack Software Engineer based in Dammam, Saudi Arabia. Bilingual (English / العربية), built with TanStack Start, TypeScript and Tailwind CSS.

🔗 Live: your-domain.com

## About

This site presents my work as a full stack engineer: case studies of production systems I've built, a design gallery, and a way to get in touch.

The main case study is Hafco Base, a bilingual 13-module ERP I built solo for a heavy-transport company, covering fleet, HR and payroll, accounting, procurement, trip invoicing, Saudi government integrations (ZATCA, Qiwa, Muqeem, Bayan) and an Android driver app on Google Play.

## Features

- 🌐 **Bilingual EN / AR**: full right-to-left layout for Arabic, not just translated text
- 📂 **Hafco case study**: challenge, role, system design, integrations and results
- 🎨 **Design gallery**: Unofficial company concept redesigns with real rotating website screenshots
- ✉️ **Contact form**: client-side validation with a pre-filled message via the visitor's email app, plus quick-copy contact cards
- ♿ **Accessible**: semantic HTML, ARIA labels, keyboard navigation, visible focus states, alt text
- ⚡ **Fast**: server-rendered pages, bundled screenshots and SVG/CSS imagery, optimized fonts

## Case Studies

| Project | What it is |
| --- | --- |
| Hafco Base | Bilingual 13-module ERP for a heavy-transport company: payroll, AI OCR, government integrations, RLS security audit |
| Driver Portal | Android app (Capacitor) on Google Play: trip checkpoints, GPS attendance, offline-safe upload queue |
| MergesPDF | Privacy-first PDF toolkit where core tools run fully in the browser, including Arabic/RTL Excel-to-PDF |

> Hafco dates: 2025–Present. The portfolio links to a case study; displayed Hafco screenshots show the company website, not the ERP. No public ERP demo is linked.

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | TanStack Start (React 19), TypeScript |
| Styling and motion | Tailwind CSS v4, CSS/SVG animation |
| i18n | Instant EN / AR toggle, RTL-aware layout |
| Contact | Validated mailto handoff (no automatic email delivery) |
| Testing | Vitest |
| Quality | ESLint, Prettier |
| Deployment | Lovable (Cloudflare), with automatic deploys from GitHub |

## Project Structure

```
├── src/
│   ├── routes/                # TanStack file-based routes
│   │   ├── __root.tsx         # App shell, fonts, error/404 pages
│   │   ├── hafco.tsx          # Bilingual Hafco case study
│   │   └── index.tsx          # Single-page portfolio (hero, about, work, services, contact)
│   ├── lib/
│   │   └── content.ts         # Bilingual content: projects, copy, translations
│   ├── components/            # UI components
│   ├── hooks/                 # Shared hooks
│   └── test/                  # Unit tests (Vitest)
└── public/                    # Favicon and static assets
```

## Getting Started

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/a-rahman-25/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:5173.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Run the production build locally |
| `npm run lint` | Lint the code |
| `npm run format` | Format the code with Prettier |
| `npm test` | Run unit and component tests (Vitest) |
| `npm run test:watch` | Run tests in watch mode |

## Testing

Unit and component tests (Vitest): routing, language switching, contact form validation and behavior.

## Deployment

Deployment depends on the hosting configuration; GitHub connection alone does not confirm automatic deployment. The site is server-rendered, with the bilingual content served from `src/lib/content.ts`.

## Contact

Phone & WhatsApp: +966 55 049 0988
Email: a.rahmanmohamed2002@gmail.com
LinkedIn: linkedin.com/in/abdelrahman-mohamed
GitHub: github.com/a-rahman-25

## License

The source code is available under the MIT License. Case study content, screenshots and design work © Abdelrahman Mohamed. All rights reserved.

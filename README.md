Abdelrahman Mohamed — Portfolio

Personal portfolio of Abdelrahman Mohamed, Full Stack Software Engineer based in Dammam, Saudi Arabia. Bilingual (English / العربية), built with Next.js, TypeScript and Tailwind CSS.

🔗 Live: https://arahman.pages.dev/

About

This site presents my work as a full stack engineer: case studies of production systems I've built, a design gallery, and a way to get in touch.

The main case study is Hafco Base, a bilingual 13-module ERP I built solo for a heavy-transport company, covering fleet, HR and payroll, accounting, procurement, invoicing, Saudi government integrations (ZATCA, Qiwa, Muqeem, Bayan) and an Android driver app on Google Play.

Features
🌐 Bilingual EN / AR: full right-to-left layout for Arabic, not just translated text
📂 Case studies: problem, role, architecture, key technical decisions and measured results for each project
🎨 Design gallery: UI concepts and motion work designed in Figma and built with Framer Motion
✉️ Contact form: handled by a Next.js API route (Node.js runtime) with server-side validation and rate limiting
♿ Accessible: semantic HTML, ARIA labels, keyboard navigation, visible focus states, alt text
⚡ Fast: static generation where possible, optimized images and fonts
🌙 Light and dark mode
Case Studies
Project	What it is
Hafco Base	Bilingual 13-module ERP for a heavy-transport company: payroll, AI OCR, government integrations, RLS security audit
Driver Portal	Android app (Capacitor) on Google Play: trip checkpoints, GPS attendance, offline-safe upload queue
Kashef	AI document-extraction engine: per-document-type extraction with a queued, fault-isolated pipeline
MergesPDF	Privacy-first PDF toolkit where core tools run fully in the browser, including Arabic/RTL Excel-to-PDF

Note on the Hafco Base demo: the live demo runs on a separate database with fake sample data only. No real employee, client or financial data is used anywhere in this portfolio.

Tech Stack
Area	Tools
Framework	Next.js (App Router), React, TypeScript
Styling and motion	Tailwind CSS, Framer Motion
i18n	Next.js internationalized routing, RTL-aware layout
Backend	Next.js API routes (Node.js runtime), Resend for email
Testing	Vitest, React Testing Library, Playwright (end-to-end)
Quality	ESLint, Prettier, Lighthouse
Deployment	Vercel, with automatic deploys from GitHub
Project Structure
├── app/
│   ├── [locale]/              # en / ar routes
│   │   ├── page.tsx           # Home
│   │   ├── about/
│   │   ├── work/              # Case study index
│   │   │   └── [slug]/        # Individual case studies
│   │   ├── design/            # Design gallery
│   │   └── contact/
│   └── api/
│       └── contact/route.ts   # Contact form handler (Node.js)
├── components/                # UI components
├── content/                   # Case studies (MDX) in en / ar
├── messages/                  # UI translations (en.json, ar.json)
├── public/                    # Images, CV, videos
└── tests/                     # Unit and end-to-end tests
Getting Started

Requirements: Node.js 20+ and npm.

bash
git clone https://github.com/a-rahman-25/portfolio.git
cd portfolio
npm install
cp .env.example .env.local   # then fill in the values
npm run dev

Open http://localhost:3000.

Environment Variables
Variable	Purpose
RESEND_API_KEY	Sends contact form emails
CONTACT_TO_EMAIL	Inbox that receives contact form messages

Never commit .env.local. It is listed in .gitignore.

Scripts
Command	What it does
npm run dev	Start the dev server
npm run build	Production build
npm run start	Run the production build locally
npm run lint	Lint the code
npm test	Run unit and component tests (Vitest)
npm run test:e2e	Run end-to-end tests (Playwright)
Testing
Unit and component tests (Vitest + React Testing Library): language switching, contact form validation, case study rendering
End-to-end tests (Playwright): navigation in both languages, RTL layout, contact form submission
Deployment

Every push to main deploys automatically to Vercel. Pull requests get their own preview URL.

Contact
Email: a.rahmanmohamed2002@gmail.com
LinkedIn: linkedin.com/in/abdelrahman-mohamed
GitHub: github.com/a-rahman-25
License

The source code is available under the MIT License. Case study content, screenshots and design work © Abdelrahman Mohamed. All rights reserved.

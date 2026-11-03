# Abdelrahman Mohamed — Portfolio

Personal portfolio of **Abdelrahman Mohamed**, Full Stack Software Engineer based in Dammam, Saudi Arabia.
Bilingual (English / العربية), with a full right-to-left layout for Arabic.

🔗 **Live:** [arahman.pages.dev](https://arahman.pages.dev)
📄 **CV:** [Download PDF](https://arahman.pages.dev/Abdelrahman_Mohamed_CV.pdf)
🧪 **ERP demo:** [remix-of-hafco-base.pages.dev](https://remix-of-hafco-base.pages.dev)

---

## About

This site presents my work as a full stack engineer: a flagship ERP case study with a live demo, a company website, concept redesigns, and my own product, MergesPDF.

The main project is **Hafco Base**, a bilingual 13-module ERP I built as the sole developer for HAFCO Big Movers, a heavy-transport company in Dammam. It covers fleet, HR and payroll, accounting, procurement and invoicing, with ZATCA e-invoicing, Saudi government integrations (Qiwa, Muqeem, Bayan) and an Android driver app on Google Play.

## Pages

| Route | Content |
|---|---|
| `/` | Hero, key numbers, about, services, selected work, contact |
| `/hafco` | Hafco Base case study: challenge, role, system design, integrations, key technical decisions, architecture, demo screens |

## Selected Work

| Project | Type | Link |
|---|---|---|
| **Hafco Base ERP** | Flagship system (live demo, sample data) | [Demo](https://remix-of-hafco-base.pages.dev) · [Case study](https://arahman.pages.dev/hafco) |
| **HAFCO Big Movers** | Company website | [hafcobigmovers.com](https://www.hafcobigmovers.com) |
| **MergesPDF** | Personal product: privacy-first PDF toolkit | [mergespdf.com](https://mergespdf.com) |
| **Elite Ticaret** | Concept redesign | [Live](https://elite-ticaret.pages.dev) |
| **Elite Saudi** | Concept redesign, Arabic-first | [Live](https://elite-saudi-redefined.pages.dev) |
| **Al-Shajarah** | Concept redesign | [Live](https://al-shajarah-reimagined.pages.dev) |
| **Prime Elite** | Concept redesign | [Live](https://prime-elite-web.pages.dev) |
| **Al-Khaldi** | Concept redesign | [Live](https://al-khaldi-legacy.pages.dev) |
| **KEO** | Concept redesign | [Live](https://keo-heritage-reimagined.pages.dev) |
| **Semi Sahara** | Concept redesign | [Live](https://semi-sahara-studio.pages.dev) |

> **Concept redesigns** are unofficial design studies. They are not affiliated with, endorsed by or commissioned by the companies named.
>
> **The Hafco Base demo** runs on a separate database with fake sample data only, and its government integrations return sample responses. No real employee, client or financial data is used anywhere on this site.

## Features

- 🌐 **Bilingual EN / AR**: one-click language switch, with `lang` and `dir` updated so Arabic renders fully right-to-left
- ⚡ **Server-side rendering**: pages arrive as complete HTML, so the title and link-preview tags are visible to LinkedIn, WhatsApp and search engines
- 📂 **Case study page** with measured results, key technical decisions and an architecture diagram
- 🎞️ **Scroll animations**: sections reveal as they enter the viewport (IntersectionObserver + CSS keyframes), and the key numbers count up
- 🖼️ **Project previews**: screen galleries for each project, with descriptive alt text
- 📄 **One-click CV download**
- 📱 **Responsive**: tested at phone, tablet and desktop widths with no horizontal scroll
- 📞 **Direct contact**: email, phone and WhatsApp links

## Tech Stack

| Area | Tools |
|---|---|
| Framework | React, TypeScript, TanStack Start (server-side rendering) |
| Routing | TanStack Router (file-based routes) |
| Styling | Tailwind CSS |
| Icons | Lucide |
| Fonts | Syne, Plus Jakarta Sans, IBM Plex Sans Arabic, Cairo |
| Animation | CSS keyframes, IntersectionObserver |
| Hosting | Cloudflare, auto-deploy from GitHub |

## Getting Started

**Requirements:** Node.js 20+ and npm.

```bash
git clone https://github.com/a-rahman-25/arahman-portfolio.git
cd arahman-portfolio
npm install
npm run dev
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the code |

## Deployment

Every push to `main` deploys automatically to Cloudflare.

Pages are rendered on the server, so titles and link-preview tags are in the HTML that LinkedIn, WhatsApp and search engines read.

To update the CV, replace `public/Abdelrahman_Mohamed_CV.pdf` and push. The download link stays the same.

## Contact

- **Email:** a.rahmanmohamed2002@gmail.com
- **LinkedIn:** [linkedin.com/in/arahman-dev](https://www.linkedin.com/in/arahman-dev)
- **GitHub:** [github.com/a-rahman-25](https://github.com/a-rahman-25)
- **Location:** Dammam, Saudi Arabia

## License

Source code is available under the MIT License.
Case study content, screenshots and design work © Abdelrahman Mohamed. All rights reserved. Company names belong to their respective owners.

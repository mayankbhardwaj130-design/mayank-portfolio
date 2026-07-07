# Mayank Bhardwaj — Digital Marketing Consultant Website

A premium, responsive marketing website for **Mayank Bhardwaj**, a Digital Marketing Consultant based in Delhi, India, serving clients across the **USA & Canada**. The site showcases services, portfolio, case studies, pricing, and a blog — with integrated **Calendly** booking, **WhatsApp** contact, and **Wise** payments.

---

## Overview

A high-end, agency-style single-page application with a backend-driven blog and a contact form that stores enquiries and emails the owner. Built with a focus on clean UX, smooth animations, dark/light mode, and conversion-oriented CTAs.

**Key features**
- Sticky glassmorphism navigation with dark/light theme toggle
- Animated hero with a live-style analytics dashboard visual
- Services grid (8 services), Case Studies, and a Portfolio section (SEO projects + live website screenshots)
- Testimonials slider, FAQ accordion, and a CTA banner
- Pricing (3 SEO plans) with **Wise payment links** on each "Get Started" button
- **Calendly** integration on all "Book a Strategy Call" buttons (opens in a new tab)
- **WhatsApp** contact button
- Blog (list + detail pages) served from the backend, seeded with sample articles
- Contact form → stored in MongoDB + email notification via Emergent-managed Resend
- Smooth scrolling, mobile responsive, Framer Motion animations

---

## Tech Stack

**Frontend**
- React 19 (Create React App + CRACO)
- Tailwind CSS 3 + shadcn/ui (Radix primitives)
- Framer Motion (animations)
- React Router 7
- Axios, lucide-react icons, sonner (toasts)

**Backend**
- FastAPI (Python)
- MongoDB (via Motor async driver)
- httpx (email delivery through Emergent-managed Resend)

**Fonts:** Outfit (headings), Plus Jakarta Sans (body)

---

## Prerequisites

- Node.js 18+ and **Yarn** (do not use npm)
- Python 3.11+
- MongoDB running locally or a MongoDB connection string

---

## Installation

Clone the repository and install dependencies for both apps.

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

**Frontend**
```bash
cd frontend
yarn install
```

**Backend**
```bash
cd backend
pip install -r requirements.txt
```

---

## Environment Variables

### `frontend/.env`
```env
REACT_APP_BACKEND_URL=http://localhost:8001
WDS_SOCKET_PORT=443
```
> All frontend API calls use `REACT_APP_BACKEND_URL` and are prefixed with `/api`.

### `backend/.env`
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=mayank_site
CORS_ORIGINS=*

# Email notifications (Emergent-managed Resend)
EMERGENT_EMAIL_KEY=your_email_key
EMAIL_FROM_NAME=Mayank Bhardwaj
OWNER_EMAIL=your@email.com
```
> `EMERGENT_EMAIL_KEY` is provisioned by the Emergent platform. If not present, contact-form submissions are still stored — the email notification is simply skipped.

---

## Running the App

### Backend (port 8001)
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```
API base: `http://localhost:8001/api`

### Frontend (port 3000)
```bash
cd frontend
yarn start
```
App: `http://localhost:3000`

> On the Emergent platform, both services are managed by **supervisor** and start automatically. Restart with:
> ```bash
> sudo supervisorctl restart backend
> sudo supervisorctl restart frontend
> ```

---

## API Endpoints

| Method | Endpoint            | Description                                  |
|--------|---------------------|----------------------------------------------|
| GET    | `/api/`             | Health check                                 |
| POST   | `/api/contact`      | Store a contact enquiry + email the owner    |
| GET    | `/api/contact`      | List enquiries                               |
| GET    | `/api/blog`         | List all blog posts                          |
| GET    | `/api/blog/{slug}`  | Get a single blog post by slug               |

Blog posts are seeded automatically on first backend startup.

---

## Third-Party Integrations

- **Calendly** — hosted scheduling link opened from all "Book a Strategy Call" CTAs.
- **WhatsApp** — `wa.me` deep link on the contact button.
- **Wise** — hosted payment links wired to each pricing plan's "Get Started" button. Payments are processed on Wise's hosted page (not recorded in this app's database).
- **Resend (Emergent-managed)** — transactional email notifications for contact submissions.

Update these links/numbers in `frontend/src/data/content.js` (`CALENDLY_URL`, `WHATSAPP_URL`, and the `wiseUrl` field on each pricing plan).

---

## Deployment

### Frontend
Build a static production bundle:
```bash
cd frontend
yarn build
```
Deploy the `frontend/build` folder to any static host (e.g., Netlify, Vercel static, Cloudflare Pages, S3 + CloudFront). Set `REACT_APP_BACKEND_URL` to your deployed backend URL at build time.

### Backend
Run FastAPI with a production server:
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001
```
Host on any Python-capable platform (Render, Railway, Fly.io, a VM, or the Emergent platform). Provide a managed MongoDB (e.g., MongoDB Atlas) via `MONGO_URL`, and set the email env vars.

**Deployment checklist**
- Set all backend env vars (`MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`, email keys).
- Point `CORS_ORIGINS` to your frontend domain.
- Set `REACT_APP_BACKEND_URL` to the public backend URL before building the frontend.
- Ensure all backend routes remain prefixed with `/api`.

---

## Folder Structure

```
.
├── backend/
│   ├── server.py            # FastAPI app: contact, blog endpoints, email
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── public/              # Static assets & index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── sections/    # Hero, Services, CaseStudies, Portfolio,
│   │   │   │                #   About, Testimonials, Pricing, FAQ,
│   │   │   │                #   BlogPreview, CTABanner, Contact
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── ThemeProvider.js
│   │   │   └── ThemeToggle.js
│   │   ├── pages/           # Home, BlogList, BlogDetail
│   │   ├── data/
│   │   │   └── content.js   # Services, projects, pricing, links, testimonials
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css        # Theme tokens, fonts, global styles
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env
└── README.md
```

---

## License

Released under the **MIT License**. See [`LICENSE`](./LICENSE) for details.

---

© 2026 Mayank Bhardwaj. All rights reserved.

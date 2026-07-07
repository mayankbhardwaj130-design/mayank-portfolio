# PRD — Mayank Bhardwaj | Digital Marketing Consultant Website

## Problem Statement
Premium, modern, responsive freelance marketing website for Mayank Bhardwaj (Digital Marketing Consultant, Delhi, India; serving USA & Canada). Agency-grade aesthetic (glassmorphism, large typography, subtle gradients, Framer Motion). Built on React + Tailwind + FastAPI + MongoDB (Next.js requested but delivered on supported React stack, approved by user).

## Brand & Design
- Colors: Primary #2563EB, Secondary #111827, Accent #14B8A6, white/light-gray sections
- Fonts: Outfit (headings), Plus Jakarta Sans (body)
- Light default + Dark mode toggle (custom ThemeProvider, class-based)

## Architecture
- Backend `/app/backend/server.py`: `/api/contact` (POST store + Resend email / GET list), `/api/blog`, `/api/blog/{slug}`. Seeds 3 blog posts on startup. Emergent-managed Resend email notification to OWNER_EMAIL.
- Frontend routes: `/` (Home), `/blog`, `/blog/:slug`. Sections in `/app/frontend/src/components/sections/`. Content data in `src/data/content.js`.

## Personas
- Primary: US/Canada SMB owners & marketing leads seeking SEO/AI-search/Google Ads/web dev.

## Implemented (2025-12)
- Sticky glass navbar + mobile Sheet, dark/light toggle
- Hero with portrait + dual CTAs, Services (8), Case Studies (3), About, Testimonials slider (6), Pricing (4 tiers), FAQ accordion, Blog preview + full blog pages (backend-driven), CTA banner, Contact form (stored + email), WhatsApp/LinkedIn/Calendly placeholders, Footer
- Tested: backend 100%, frontend 100% (iteration_1)

## Integrations
- Emergent-managed Resend email (contact notifications) — EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME, OWNER_EMAIL in backend/.env

## Backlog / Next
- P1: Blog CMS/admin (auth) to create/edit posts
- P1: Replace stock portrait, real WhatsApp number, real Calendly embed, real LinkedIn URL
- P2: SEO meta tags per route (react-helmet), sitemap, analytics
- P2: Contact submissions admin dashboard

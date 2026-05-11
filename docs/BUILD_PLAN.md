# SFS Build Plan

## Phase 1 — Homepage Comp ✓ DONE

Single static HTML, real content, locked design direction. Approved.

## Phase 2 — Scaffold & Migrate Comp to Next.js

**Goal**: working Next.js project with the homepage running on `sherwoodforestshores.meetmikeobrien.com`.

Tasks:
- [ ] `npx create-next-app@latest sfs --typescript --tailwind --app --no-src-dir`
- [ ] Port homepage from `comp/index.html` into `app/page.tsx` + components
- [ ] Extract design tokens to `tailwind.config.ts` (teal, navy, sand, cream)
- [ ] Set up Fraunces + Inter via `next/font/google`
- [ ] Move images to `public/images/`
- [ ] Component breakout:
  - `<Nav />`
  - `<Hero />`
  - `<WelcomeSection />`
  - `<AmenitiesGrid />`
  - `<CalendarSection />`
  - `<QuickAccessGrid />`
  - `<EmergencyStrip />`
  - `<Footer />`
- [ ] Vercel deploy → `sfs-mobrien.vercel.app`
- [ ] DNS: CNAME `sherwoodforestshores.meetmikeobrien.com` → Vercel

**Estimate**: one evening.

## Phase 3 — Build Out Inner Pages

**Goal**: all six pages live with real content from the old site + FB post.

Pages:
- [ ] `/community` — full amenity descriptions, photo placeholders, river/Bay history
- [ ] `/amenities/[slug]` — per-amenity detail (rules, hours, photos)
- [ ] `/calendar` — full 2026 schedule + `.ics` per event + meeting minutes archive
- [ ] `/documents` — categorized list, Drive-linked
- [ ] `/resources` — emergency contacts, local links (Reedville Fishermans Museum, NN Tourism, etc.), FAQ
- [ ] `/contact` — board roster, mailing address, contact form (Resend → board email)

Content created as YAML in `content/`:
- `content/events/*.md` (one per event)
- `content/board/*.md` (one per member)
- `content/amenities/*.md` (one per amenity)
- `content/documents/*.md` (one per document)

**Estimate**: one weekend.

## Phase 4 — Decap CMS Wiring

**Goal**: a non-technical board member can edit content without seeing code.

Tasks:
- [ ] Add Decap CMS at `/admin` (`public/admin/index.html` + `config.yml`)
- [ ] Configure GitHub backend with OAuth (use Netlify's identity service or Vercel's git integration)
- [ ] Define collections matching `content/` folders
- [ ] Test edit-flow end to end: edit event → commit to main → Vercel rebuilds → site updates
- [ ] Write `/docs/EDITOR_GUIDE.md` — 1-pager for board member training

**Estimate**: one evening.

## Phase 5 — Pitch to Steve Ott

**Goal**: send Steve a link with a 3-paragraph email pitch.

- [ ] Subject: "A preview website for Sherwood Forest Shores"
- [ ] Email body: who I am (resident in Reedville area), what I built (preview only — not asking for anything), the link, offer to migrate to sherwoodforestshores.org at no cost if the board wants it
- [ ] Send mid-week, mid-morning
- [ ] Let it sit. No follow-up.

## Phase 6 — Ask Sherwood (RAG Chatbot)

**Goal**: replace the public ChatGPT GPT with a private, source-grounded Gemini chatbot.

Architecture:
- **Doc ingestion**: script reads Google Drive folder → for each file: extract text (OCR for scans via Gemini multimodal), chunk, embed with `text-embedding-004`
- **Vector store**: SQLite via `sqlite-vec`, file checked into repo (~5MB for this size corpus)
- **Backend**: Next.js API route `/api/chat` — query embedding, top-k retrieval, Gemini 2.5 Flash with system prompt + retrieved chunks
- **Citations**: every answer cites source document + links to Drive file
- **Logging**: each Q&A appended to a Google Sheet for board review
- **Frontend**: floating chat widget on every page + full `/ask` route
- **Guardrails**: refuses to answer outside corpus; suggests "contact the board" with form prelink

The OCR pass is critical. Many old documents are scanned PDFs from the GoDaddy era. Gemini 2.5 Flash multimodal handles scans natively — no need for separate Tesseract step.

**Estimate**: one weekend.

## Phase 7 — Handoff (only if Steve accepts)

- [ ] Transfer repo to HOA-controlled GitHub org (or keep on Mike's account, give board collaborator access)
- [ ] Transfer DNS for sherwoodforestshores.org to point to Vercel
- [ ] 30-minute screen-share with the designated editor
- [ ] Mike stays on as DNS / Vercel / hosting contact

## Non-goals (do not build)

- Resident login / portal
- Online dues payment
- Architectural request submission form (link to PDF in Drive instead)
- Forum / discussion board
- Events RSVP system
- Photo upload by residents
- Anything that requires the board to moderate content

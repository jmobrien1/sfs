# Sherwood Forest Shores

Community website for the Sherwood Forest Shores Homeowners Association in Reedville, Virginia.

> Where paradise awaits you.

## What this is

A static-first Next.js site with a content-managed admin panel (Decap CMS) that lets board members publish events, announcements, board roster changes, and document links without writing code.

A pro-bono build by Mike O'Brien. Not affiliated with the SFS HOA Board until / unless they adopt it.

## Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind v4
- **CMS**: Decap CMS (formerly Netlify CMS) — git-backed, edits commit to `main`
- **Hosting**: Vercel
- **Domain (preview)**: `sherwoodforestshores.meetmikeobrien.com`
- **Domain (production, if adopted)**: `sherwoodforestshores.org`
- **Future**: Ask Sherwood — Gemini-powered RAG chatbot over HOA documents (Phase 2)

## Quick start

```bash
git clone https://github.com/jmobrien1/sfs.git
cd sfs
npm install
npm run dev
# → http://localhost:3000
```

Admin panel is served at `/admin` (Decap CMS).

## Repo layout

```
sfs/
├── app/                 # Next.js App Router pages
├── components/          # React components
├── content/             # Markdown/YAML content (edited via Decap)
│   ├── events/          # 2026 board meetings & events
│   ├── board/           # Board roster
│   ├── amenities/       # 7 amenities
│   ├── documents/       # Drive-linked documents
│   └── pages/           # Editable page copy
├── public/
│   ├── admin/           # Decap CMS config + entry point
│   └── images/          # Static images
├── lib/                 # Utility code (content loaders, etc.)
└── scripts/             # One-off scripts (Drive ingest, etc.)
```

## Phases

- **Phase 1** — Static site with 6 pages, real content from old site + 2026 schedule (this repo)
- **Phase 2** — Decap CMS wired up so a board member can self-edit
- **Phase 3** — Ask Sherwood RAG chatbot (Gemini + embedded HOA docs)
- **Phase 4** — Handoff: pitch to Steve Ott, transfer DNS + repo if accepted

## License

MIT. Content (events, photos, copy) belongs to Sherwood Forest Shores HOA.

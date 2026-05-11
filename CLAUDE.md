# SFS — Working Notes

Sherwood Forest Shores HOA community site. Pro-bono build, not affiliated with the board until/unless they adopt it (see `docs/BUILD_PLAN.md` Phase 5).

## ACTIVE WORK

**Phase:** mid Phase 2 (Next.js scaffold + homepage component migration from `comp/index.html`).

**Status (2026-05-11):**
- Live at https://sfs-liart.vercel.app — auto-deploys on push to `main`.
- Vercel project: `mike-obriens-projects-d4c5e6fe/sfs`. GitHub integration connected.
- `app/page.tsx` is a temporary stub. 3 of 8 homepage components are built; the other 5 are commented out in restoration order.

**Built:** `Nav`, `Hero`, `Footer`.

**Restoration queue (next to build, in this order):**
1. `WelcomeSection`
2. `AmenitiesGrid` (takes `amenities` prop — `getAmenities()` already wired in `page.tsx`)
3. `CalendarSection` (takes `events` prop — `getUpcomingEvents()` already wired)
4. `QuickAccess`
5. `EmergencyStrip`

For each: build the component, then un-comment its import + JSX in `app/page.tsx`, then push.

**Domain TODO:** wire `sherwoodforestshores.meetmikeobrien.com` as a custom domain in Vercel (Settings → Domains) + matching CNAME at the subdomain's registrar.

## Stack

- Next.js 15.5.18 (App Router) + TypeScript, React 19
- Tailwind v4 with custom design tokens (teal / navy / sand / cream)
- Fonts: Fraunces (serif) + Inter (sans) via `next/font/google`
- Content: markdown + YAML frontmatter under `content/` (events, board, amenities)
- CMS: Decap (Phase 4 — not yet wired)
- Hosting: Vercel, auto-deploy on `main`

## Repo layout

```
app/             # App Router pages — page.tsx is the stubbed homepage
components/      # Nav, Hero, Footer built; WelcomeSection..EmergencyStrip TBD
content/         # YAML/MD content — events/, board/, amenities/
lib/             # content.ts (loaders), site.ts (SITE constants)
comp/            # Locked design comp — index.html is the source of truth for components
public/images/   # Static images
docs/            # BUILD_PLAN.md, CONTENT_MODEL.md, EDITOR_GUIDE.md
```

## Conventions

**Components port from `comp/index.html`.** That HTML is the locked, approved design. Don't redesign — extract.

**Design tokens** live in `app/globals.css` (Tailwind v4 `@theme`) — `navy`, `navy-deep`, `teal`, `teal-light`, `sand`, `cream`, `paper`. Refer to those names rather than raw hex.

**Keyframes** for hero animations (`heroFadeUp`, `heroScrollPulse`) are in `globals.css`. Add new keyframes there, not inline.

**Content is the source of truth.** Don't hard-code event/amenity/board data in components — read from `lib/content.ts`. Components take typed data props.

**Stub pattern in `app/page.tsx`:** as components come online, un-comment in restoration order. Keep the explanatory comment block at the top until all 5 are restored, then delete it.

## Gotchas

**YAML auto-parses unquoted dates as JS `Date` objects** (`date: 2026-05-23` → `Date`, not `string`). `Event.date` is typed `string`, so gray-matter's parsing breaks the contract. `getEvents()` in `lib/content.ts` coerces to ISO `YYYY-MM-DD` at the boundary — don't trust frontmatter dates downstream without coercion. If you add new date-bearing frontmatter (e.g. `documents.updated`), apply the same coercion in its loader.

**Vercel deployment protection** returns 401 on the raw `sfs-<hash>-<scope>.vercel.app` URL. Use the alias (`sfs-liart.vercel.app`) for shareable links, or hit the inspector for build logs.

**Vercel CLI** is installed at `~/.npm-global/bin/vercel` (not `/usr/lib/...`). `~/.bashrc` has the PATH; new shells pick it up. In ad-hoc one-shots, use the absolute path.

## Commands

```
npm run dev         # local dev on :4100 (per package.json)
npm run type-check  # tsc --noEmit
npm run build       # next build (run before deploy if testing locally)
vercel --prod --yes # manual prod deploy (rarely needed; GitHub integration auto-deploys main)
```

## Non-goals (do not build)

Per `docs/BUILD_PLAN.md`: no resident login/portal, no online dues payment, no architectural request form (link to Drive PDF), no forum, no events RSVP, no resident photo upload, nothing that requires the board to moderate content.

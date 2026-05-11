# Components

These are stubs. The homepage comp (`comp/index.html`) has all the working markup and styles; the next step is to translate each section into a TypeScript component here.

## Components needed for the homepage

- [ ] `Nav.tsx` — sticky top nav with blur backdrop
- [ ] `Hero.tsx` — full-bleed aerial photo, tagline, CTAs
- [ ] `WelcomeSection.tsx` — community intro + stats grid
- [ ] `AmenitiesGrid.tsx` — 7 amenities with custom SVG icons (props: amenities[])
- [ ] `CalendarSection.tsx` — 2026 events list with Zoom card (props: events[])
- [ ] `QuickAccess.tsx` — 4 resource cards
- [ ] `EmergencyStrip.tsx` — Sheriff, VFD, 911
- [ ] `Footer.tsx` — address, links, copyright

## Translation approach

1. Open `comp/index.html` in editor
2. For each section (delimited by `<!-- ════════ NAME ════════ -->`):
   - Copy the JSX into the matching component
   - Convert HTML attributes → JSX (`class` → `className`, etc.)
   - Replace inline `<style>` rules with Tailwind utilities OR keep as `<style jsx>` for the heavy ones
   - Wire content from props instead of hardcoded values

## Design tokens

Already wired in `app/globals.css` via Tailwind v4 `@theme`. Use:

- `bg-cream`, `bg-paper`, `bg-navy`, `bg-navy-deep`, `bg-teal`, `bg-teal-deep`, `bg-sand`, `bg-sand-light`
- `text-ink`, `text-ink-soft`, `text-muted`, `text-navy`, `text-cream`
- `border-hairline`
- `font-serif` (Fraunces), `font-sans` (Inter)

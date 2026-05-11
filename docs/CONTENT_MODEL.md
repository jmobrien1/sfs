# Content Model

Single source of truth for the shape of every piece of editable content.

## Collections

### `events`
One markdown file per board meeting or community event.

```yaml
---
title: "Board Meeting"
date: 2026-06-13
time: "9:00 AM"
location: "Community Center"
zoom: true
zoom_url: "https://us02web.zoom.us/j/87032561742"
category: "board-meeting"  # board-meeting | community | pool
---
Optional body content / notes.
```

Categories: `board-meeting`, `community`, `pool`.

### `board`
One file per board member.

```yaml
---
name: "Steve Ott"
role: "President"
phone: "571-364-1315"
email: "president@sherwoodforestshores.org"  # placeholder
photo: "/images/board/ott.jpg"  # optional
order: 1
---
```

### `amenities`
One file per amenity (7 total).

```yaml
---
name: "Swimming Pool"
slug: "swimming-pool"
short: "30' × 70'"
detail: "Open Memorial Day through Labor Day"
icon: "pool"  # matches lucide-react or custom SVG slug
photo: "/images/amenities/pool.jpg"
order: 1
hours: |
  Memorial Day – Labor Day
  10:00 AM – 8:00 PM daily
rules_url: "https://drive.google.com/..."  # link to PDF in Drive
---
Long description in markdown.
```

### `documents`
One file per HOA document linked from Drive.

```yaml
---
title: "2025 Bylaws"
category: "governing"  # governing | forms | financial | minutes
description: "Current bylaws as amended 2025"
drive_url: "https://drive.google.com/..."
updated: 2025-06-15
---
```

Categories: `governing`, `forms`, `financial`, `minutes`.

### `announcements`
One file per news post (homepage card + `/news`).

```yaml
---
title: "Pool Opening Date Confirmed"
date: 2026-04-15
summary: "Mark your calendars — Saturday, May 23rd."
featured: true
---
Full announcement body in markdown.
```

### `pages` (singletons)
Editable copy for static page sections.

- `pages/home.md` — hero tagline override, welcome paragraph
- `pages/community.md` — about / history page body
- `pages/resources.md` — local links + FAQ
- `pages/contact.md` — contact page intro

## File naming

- Events: `YYYY-MM-DD-slug.md` (e.g. `2026-06-13-board-meeting.md`)
- Announcements: `YYYY-MM-DD-slug.md`
- Board: `lastname.md`
- Amenities: `slug.md`
- Documents: `slug.md`

## Data flow

```
Editor → /admin (Decap)
       → commits to GitHub main branch
       → Vercel rebuilds
       → site updates (~30s)
```

No database. Content is the git history.

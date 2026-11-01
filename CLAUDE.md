# demo-restaurant: Lemongrass & Lime (WebVybe portfolio demo)

**This is not a real business.** Lemongrass & Lime is a fictional
Vietnamese restaurant invented to showcase WebVybe's restaurant/cafe
client-site template for a second cuisine. Do not present anything here
as a real operating business (no fabricated review counts, no fake press
logos, no claim of a real physical presence beyond the demo copy).

## Why this vertical

Requested directly by the client intake (not picked from the "Leads: San
Diego Metro" Notion database this time) — Restaurant/Cafe already has a
verified design benchmark in
`webvybe/toolkit/new-client-site/references/design-benchmarks.md` (Levain
Bakery) and a proven build pattern from `webvybe/demo-bakery`: a menu +
order-ahead contact form, no real e-commerce/inventory/ordering system
needed. Set in Linda Vista, San Diego — a real San Diego neighborhood with
a sizable Vietnamese-American community — to keep it in the same metro
frame as the other demos (South Park for the bakery, North Park for the
salon, Golden Hill for plant care) without reusing a neighborhood.

## Stack

- Vite + React 19 + TypeScript + Tailwind v4 (matches `webvybe/agency-site`
  and the other `webvybe/demo-*` sites' conventions, using the same
  button/nav-link component classes, same `@theme` token pattern in
  `src/index.css`).
- `react-router-dom` v7 for routing.
- No backend. The contact form (`src/pages/Contact.tsx`) shows a success
  state client-side only; it does not send anywhere.
- Deployed to Cloudflare Pages as a static build (`npm run build` → `dist/`).

## Design tokens

Brand palette lives in `src/index.css` under `@theme` (`--color-jade`,
`--color-jade-deep`, `--color-turmeric`, `--color-turmeric-deep`,
`--color-rice`, `--color-paper`, `--color-chili`, `--color-herb`,
`--color-ink`): a fresh herb-jade / turmeric-gold / chili-red / rice-paper
palette. Deliberately distinct from WebVybe's own blue/green brand AND
from the toasted-brown/wheat/berry palette on the Wildflour Bakehouse demo
and the clay/pine/sand palette on the Salt & Stone Wellness demo, since
this is this client's own identity. No hardcoded hex values outside that
token block.

## Content

All restaurant-specific copy (menu, pricing, hours, address, FAQs) lives
in `src/content/restaurant.ts` as a single source of truth; edit there,
not inline in components.

## Known placeholders (flagged, not hidden)

- **No photography yet.** Every `DecorPanel` slot (hero, feature dish,
  menu highlights, group dining band, about, gallery) is currently
  rendering its CSS-gradient fallback, not a real or licensed photo —
  unlike `demo-bakery`/`demo-salon`, which were later upgraded to real
  Pexels stock photography. `src/components/DecorPanel.tsx` already
  supports a `src` prop for that upgrade; the natural next step is
  sourcing licensed Vietnamese-food/restaurant stock photography (Pexels/
  Unsplash, free-for-commercial-use) the same way those two demos did,
  and wiring it into the same slots.
- `robots.txt` disallows all crawling: this demo should not get indexed.

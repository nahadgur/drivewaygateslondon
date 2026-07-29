# UI/UX Audit — drivewaygateslondon

**Date:** 2026-07-29 · **Commit:** f98121c · **Stack:** Next.js 14 App Router, Tailwind 3.4, lucide-react
**Method:** UI/UX Pro Max rule set (priorities 1–10) applied to all 12 components and 18 page clients; contrast ratios computed against the actual `tailwind.config.js` palette.

Nothing in this report has been changed. Findings are ordered by severity.

---

## P0 — Breaks the page

### 1. Opening the quote modal from the mobile menu permanently freezes page scroll

`components/Header.tsx:42-45` and `components/LeadFormModal.tsx:47-52` both write `document.body.style.overflow`, with no shared owner.

Repro on any phone:
1. Tap hamburger → `Header` sets `body.overflow = 'hidden'`.
2. Tap **Get a Free Quote** → `onOpenModal()` and `setMobileOpen(false)` batch into one render.
3. `LeadFormModal` sits above `Header` in the tree (`app/HomePageClient.tsx:58-59`), so its effect runs **first** and captures `originalOverflow = 'hidden'` — the value the header put there.
4. `Header`'s effect then runs and resets `overflow = ''`. **The modal is now open over a scrollable background.**
5. Close the modal → its cleanup restores the captured `'hidden'`. `Header`'s effect does not re-run. **The page can no longer be scrolled until reload.**

This is the primary conversion path on mobile. Fix by giving scroll-lock a single owner (a counter-based `useScrollLock` hook, or `body.dataset` reference count) rather than two components writing the same style.

---

## P1 — Accessibility failures and broken links

### 2. `/terms/` returns 404 from every page

`components/Footer.tsx:167` links **Terms of Service** to `/terms/`. There is no `app/terms/` route. Every page in the site carries a dead legal link. Either build the page or drop the link.

### 3. Infinite ticker with no pause and no reduced-motion guard — WCAG 2.2.2 (Level A)

`app/globals.css:120` — `.animate-ticker { animation: ticker 28s linear infinite; }`. It auto-starts, never stops, and runs longer than 5s, with no pause control. There is **no `prefers-reduced-motion` block anywhere in the codebase**, so it also ignores the OS setting. `html { scroll-behavior: smooth }` (`app/globals.css:20`) is unguarded for the same reason.

Minimum fix: a `@media (prefers-reduced-motion: reduce)` block that sets `animation: none` on `.animate-ticker`, `scroll-behavior: auto` on `html`, and neutralises the four modal keyframes.

### 4. Text contrast below 4.5:1

Computed against `tailwind.config.js` values. Everything listed here is body-size text, so 4.5:1 applies (not the 3:1 large-text allowance).

| Location | Pair | Ratio | Note |
|---|---|---|---|
| `HomePageClient.tsx:152` | `brand-200` numeral on `brand-100` | **1.20** | The big 01–06 numerals are effectively invisible |
| `HomePageClient.tsx:325,329` | `brand-300` on `brand-100` | **1.62** | "Manual (Non-Automated) Gates" heading + every bullet marker |
| `Footer.tsx:163-168` | `brand-700` on `brand-950` | **2.12** | Copyright, Contact, Privacy, Terms, Sitemap |
| `HomePageClient.tsx:385,399` | `brand-600` on `brand-900` | **2.40** | Final-CTA trust row and "60 seconds · No obligation" |
| `HomePageClient.tsx:328` | `brand-400` on `brand-100` | **2.43** | All 8 manual-gate comparison bullets |
| `Footer.tsx:55,68,89,104,118,137` | `brand-500` on `brand-950` | **4.05** | Footer body copy and ~40 nav links |
| `.craft-label`, price figures | `brand-500` on `brand-50` | **4.12** | Section labels sitewide, all £ ranges |
| `.btn-gold` | white on `brand-500` | **4.49** | Misses by 0.01 |

The whole right-hand column of the Electric-vs-Manual comparison (`HomePageClient.tsx:324-334`) is unreadable — it appears the low contrast was used deliberately to visually de-emphasise the "worse" option, but the result is that customers cannot read the eight reasons to buy the more expensive product.

Cheapest systematic fix: darken `brand-500` to `#7A6438` (→ 5.20 on `brand-50`, 5.23 for white-on-gold) and lift the dark-background greys one step (`brand-700`→`brand-400`, `brand-600`→`brand-400`, `brand-300`→`brand-600` on light).

### 5. Two different brand palettes are live at the same time

`app/globals.css:5-17` defines a `:root` scale that **diverges from `tailwind.config.js` at every step** — `--brand-500: #9A7D56` vs Tailwind's `#8B7445`, `--brand-100: #EDE8DC` vs `#EDE9DF`, and so on.

This is not dead code. Ten pages override the Tailwind class with the CSS variable:

```
app/HomePageClient.tsx:377, app/local-regulations/page.tsx:109, app/commercial/page.tsx:101,
app/blog/[slug]/BlogArticlePageClient.tsx:262, app/location/[city]/CityPageClient.tsx:155,
app/services/page.tsx:61, app/guides/[slug]/GuidePageClient.tsx:161,
app/commercial/[slug]/CommercialPageClient.tsx:121, app/blog/page.tsx:164, app/guides/page.tsx:104
```

each as `className="craft-label" style={{ color: 'var(--brand-500)' }}` — `.craft-label` already sets `text-brand-500`, so the inline style swaps in a *lighter, lower-contrast* gold (3.54:1 on `brand-50`) for no reason. `components/FAQ.tsx:41-42` hardcodes the same `#9A7D56` into the SVG. Two golds render side by side on the homepage.

Fix: delete the `:root` block, delete the ten inline overrides, replace the FAQ hex with `currentColor`.

### 6. No skip link; `<main>` has no `id`

18 page clients render `<main>` (`app/HomePageClient.tsx:61` et al.), none with an `id`, and no skip link exists. Every keyboard user tabs through the ticker plus ~15 header links before reaching content, on every page.

### 7. Keyboard focus is invisible or destroyed in several places

- `app/blog/page.tsx:73` — the guides search input sets `focus:outline-none` with **no replacement ring**. Keyboard users cannot see where they are.
- `Header.tsx:58-63` — Escape closes a desktop dropdown, but if focus is on a link inside it, the panel becomes `invisible` and focus is lost to `<body>`. Escape should return focus to the trigger button.
- No global `:focus-visible` style exists. Buttons on `brand-900` sections rely on the UA default ring, which is low-contrast against the dark brown.

### 8. Success states are silent to screen readers

`LeadFormModal.tsx:155` and `HeroLeadForm.tsx:69` swap the entire form for a confirmation panel with no `aria-live` region and no focus move. A screen-reader user submits the form and hears nothing. The modal also uses `aria-label` rather than `aria-labelledby` pointing at its `<h2>`.

---

## P2 — Mobile and touch

### 9. Touch targets below 44×44px

| Element | Computed size | File |
|---|---|---|
| Modal error dismiss (`p-0.5` + 16px icon) | **20×20** | `LeadFormModal.tsx:186` |
| Breadcrumb links (10px text) | ~13px tall | `Breadcrumbs.tsx:25` |
| Footer links (13px text, `space-y-2`) | ~17px tall × ~40 links | `Footer.tsx:64-157` |
| Nearby-area chips (`py-2.5`, 11px) | ~33px tall | `NearbyAreasGrid.tsx:46` |
| `.loc-chip` (`py-3`, 11px) | ~37px tall | `globals.css:102` |
| Modal close (`p-2` + 20px icon) | **36×36** | `LeadFormModal.tsx:146` |
| Hamburger (`p-2`, `w-6` bars) | **40×40** | `Header.tsx:224` |
| Mobile menu close (`p-2` + 24px icon) | **40×40** | `Header.tsx:245` |

The footer is the worst case: forty 17px-tall links at 8px pitch is a mis-tap generator on the page section people reach when they're already trying to navigate.

### 10. Three search inputs still trigger iOS auto-zoom

Commit `ab8b8fc` fixed this for the lead forms but missed the search fields. Anything under 16px makes Safari zoom the viewport on focus and it does not zoom back out:

- `app/blog/page.tsx:73` — `text-xs` (12px)
- `app/location/page.tsx:51` — `text-sm` (14px)
- `app/services/[serviceSlug]/ServicePageClient.tsx:167` — `text-sm` (14px)

### 11. Mobile overlay ignores safe areas

`Header.tsx:239` is `fixed inset-0` with plain `px-6 py-5` / `py-6` padding. On notched iPhones in landscape the close button sits under the sensor housing, and the bottom CTA sits under the home indicator. Needs `env(safe-area-inset-*)` padding.

### 12. No `touch-action: manipulation`

Not set anywhere. Tap-to-CTA carries the legacy delay on some Android browsers.

---

## P3 — Navigation and polish

### 13. Two nav items highlight as active simultaneously

`Header.tsx:78` — `isActive(href)` uses a prefix match, so on `/services/access-control/video-intercoms/` both **Gate Types** (`/services/`) and **Access** (`/services/access-control/`) render in the active state. The dropdown trigger buttons also never receive `aria-current`, only the plain links do.

### 14. Each service card is three tab stops to one destination

`HomePageClient.tsx:242-262` — image link, `<h3>` link and "Learn more" link all point at the same URL. Across 13 services that is 39 tab stops for 13 destinations. Collapse to one link with the heading as its accessible name.

### 15. Glyphs used as icons

`✓` (`HomePageClient.tsx:116,318`, `PricingSection.tsx:87`, `Hero.tsx:48`), `◻` (`HomePageClient.tsx:325`) and `—` (`HomePageClient.tsx:329`). `Hero.tsx:48` correctly marks it `aria-hidden`; the others do not, so screen readers announce "check mark" before every list item. `lucide-react` is already a dependency and `CheckCircle` is used correctly at `HomePageClient.tsx:213` — the codebase just isn't consistent about it.

### 16. Consent banner is last in the tab order

`app/layout.tsx:137` renders `<ConsentBanner />` after `{children}`, so a keyboard user must tab the entire page before they can accept or reject cookies. It also shares `z-40` with the sticky header.

### 17. Raw `<img>` on 10 pages

`HomePageClient.tsx:244`, `blog/page.tsx:37,96,132`, `guides/page.tsx:73`, and others use `<img>` rather than `next/image`. Most sit in fixed-height containers so CLS is contained, but they miss AVIF/WebP negotiation, `srcset`, and automatic sizing. `components/Hero.tsx:86` does it correctly — worth matching.

---

## What is already right

Worth stating, because a findings list reads more alarming than the codebase deserves:

- The modal has a real focus trap, Escape handling, focus restore, `role="dialog"`, `aria-modal`, and `role="alert"` on its error state — better than most sites this size.
- Every form input has a visible `<label>` with `htmlFor`, correct `autoComplete`, and semantic `type` (`tel`, `email`) for the right mobile keyboard.
- The FAQ accordion animates via `grid-template-rows` (no height jank) and wires `aria-expanded`/`aria-controls` correctly.
- Fonts use `display: 'swap'` via `next/font`, self-hosted, no FOIT.
- Breadcrumbs and organisation schema are properly structured.
- The pricing table has a genuine mobile card variant rather than a horizontal scroll.
- The consent banner correctly gates GA4 behind opt-in for PECR.

On style direction: the UI/UX Pro Max database matches this product to the **Trust & Authority** pattern (certifications, fixed quotes, insurance badges, case metrics) — which is exactly what the site already does. Its generated palette and font suggestions (blue/orange, Cormorant/Montserrat) should be ignored; the existing Syne/DM Sans/Fraunces craftsman-editorial identity is coherent and differentiated, and the real problem is contrast and consistency within that palette, not the palette's direction.

---

## Suggested order of work

1. Scroll-lock ownership (#1) — one hook, unblocks the mobile quote flow.
2. Delete the duplicate `:root` palette and the ten inline overrides (#5) — mechanical, removes a whole class of drift.
3. Contrast pass (#4) — mostly a palette-token change plus ~15 class swaps.
4. `prefers-reduced-motion` block + skip link + `id="main"` (#3, #6) — under 30 lines total.
5. `/terms/` page or link removal (#2).
6. Touch targets and the three 16px inputs (#9, #10).
7. The rest as polish.

Items 1–5 are roughly a session's work and clear every Level A and AA failure found.

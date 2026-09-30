# Approved showcase integration

The reviewed design is rendered by `components/showcase/ShowcasePage.tsx` as server-side HTML. The 211 templates in `data/showcase/pages.json` contain repository-owned, reviewed content only. They must never contain user-supplied HTML. No template JSON is imported by a client component.

Existing route modules retain metadata, canonicals, structured data, not-found checks, redirects and static parameters. The existing service-by-location routes and privacy page keep their body content and use the new shared header/footer. No new service-by-location pages were added.

The production contact page renders `EnquiryForm.tsx`, using the established endpoint and payload from `data/leadForm.ts`. It is not the preview review form. Analytics remains behind the existing consent component. The business email removed at the owner's request is also omitted from structured data and the privacy contact channel.

`interactions.js` enhances navigation, filters, disclosures and the entrance after hydration. It disposes listeners, observers and timers on route changes. Ordinary links remain usable without JavaScript. All production links use canonical directory URLs, not preview `index.html` URLs.

## Editing

- Shared structure: `data/showcase/shared.json`, `components/Header.tsx`, `components/Footer.tsx`.
- Page body copy and markup: the matching route in `data/showcase/pages.json`.
- Search metadata and structured data: existing route modules and `data/*.ts`.
- Visual system: the CSS files in `components/showcase/`, in import order from `app/layout.tsx`.
- Artwork: `public/showcase/assets/`. Generated imagery is illustrative; it is not evidence of completed projects.

The approved page-body snapshots are versioned content. When changing source `data/*.ts`, update the corresponding snapshot and metadata together. `python scripts/import-showcase.py /path/to/showcase` reimports a reviewed static design's templates, styles and assets. It does not replace the production form or route modules.

## Checks

Run `npm ci`, `npx tsc --noEmit`, and `npm run build`. Verify mobile and desktop navigation, filters, the entrance and the contact form. Intercept the Google Apps Script request when testing submission; do not send test leads to the live endpoint. Confirm error/retry handling as well as success. Keep `noindex,nofollow` and preview-only notices out of production pages.

With the production server running, run `node scripts/verify-showcase.mjs http://localhost:3000` to verify template destinations and local assets against the build. Existing on-demand routes are checked over HTTP.

Validated on 30 September 2026: production build and TypeScript passed; all 211 reviewed URLs returned HTTP 200; 5,469 internal links/assets passed validation. Browser checks covered 320, 390, 768 and 1440 pixel widths across eight representative routes, mobile menu focus, search/filtering, entrance completion/replay/skip, and mocked form success, failure and retry. No test enquiry was sent to the live endpoint.

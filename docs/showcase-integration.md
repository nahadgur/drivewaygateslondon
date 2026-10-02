# Approved showcase integration

The reviewed design is rendered by `components/showcase/ShowcasePage.tsx` as server-side HTML. The 210 templates in `data/showcase/pages.json` contain repository-owned, reviewed content only. They must never contain user-supplied HTML. No template JSON is imported by a client component.

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

The three prepared repair articles use `data/repair-articles.json` for article data and
`data/showcase/repair-articles.json` for reviewed page snapshots. `ShowcasePage`
renders their snapshots and adds their blog cards only when the article is in
`publishedArticles`. A `draft: true` article has no public route, blog card or sitemap
entry. Leave its publication date empty until the release date is agreed.
Their `publicationLinks` become anchors only when the destination is published;
earlier releases retain plain text. The header date comes from `publishDate`.
`useMetaTitle` opts these articles into their chosen SEO titles without rewriting
the HTML titles of existing articles. Hero and social metadata share one WebP asset.
The shared navigation and enquiry controls are unchanged; each new article snapshot
contains one hero and one end quote CTA, with no sidebar quote or related-reading block.

## Checks

Run `npm ci`, `npx tsc --noEmit`, and `npm run build`. Verify mobile and desktop navigation, filters, the entrance and the contact form. Intercept the Google Apps Script request when testing submission; do not send test leads to the live endpoint. Confirm error/retry handling as well as success. Keep `noindex,nofollow` and preview-only notices out of production pages.

With the production server running, run `node scripts/verify-showcase.mjs http://localhost:3000` to verify template destinations and local assets against the build. Existing on-demand routes are checked over HTTP.

Validated on 30 September 2026: production build and TypeScript passed; all 211 reviewed URLs returned HTTP 200; 5,469 internal links/assets passed validation. Browser checks covered 320, 390, 768 and 1440 pixel widths across eight representative routes, mobile menu focus, search/filtering, entrance completion/replay/skip, and mocked form success, failure and retry. No test enquiry was sent to the live endpoint.

## Service and cost review, 2 October 2026

Six main service pages and four commercial pages now use reviewed copy. `data/service-content.json` and `data/commercial-content.json` preserve that editorial copy; they are not imported into the client bundle. When editing, keep those records, the corresponding `data/*.ts` descriptions and FAQs, and `data/showcase/pages.json` snapshots in sync. The cost guide body and FAQs live in `data/guides.ts` and its reviewed snapshot. The source-review records explain removed claims and the two cost-blog merges.

The retired cost-blog URLs and their legacy aliases redirect directly to the cost guide through `next.config.js`. Do not reintroduce them into cards, internal links or the sitemap. The enquiry event contract, consent handling and remaining account-side setup are documented in `docs/enquiry-measurement.md`. A real submission/delivery test remains deferred by the owner.

Validated on 2 October 2026: production build and type checks passed; 210 templates and 5,357 internal links/assets passed the route-manifest check. Browser checks covered all 11 revised content pages at 320, 390, 768 and 1440 pixels, FAQ/schema agreement, canonicals, four direct 308 redirects, sitemap/listing cleanup, and consent-gated form/phone analytics. Mocked HTTP and application failures produced no lead events; successful retries produced one. No real form submission or Analytics event was sent.

## Urgent content correction, 2 October 2026

Eight older articles now have reviewed bodies and FAQs recorded in `data/urgent-content-review.json`. Keep that record, `data/blog.ts` / `data/guides.ts`, and the corresponding page snapshots consistent when editing. The original URLs and publication dates remain. Shared business promises were corrected in `data/site.ts`, snapshots, forms and the service/location template. `data/pricing.ts` now supplies a quotation checklist, not an unverified price or finance schedule. The annual winter checklist stays at its URL until the winter guide is ready for the proposed merge. The source-review ledger records the scope and work still pending.

Validation: production build and type checks passed. All eight articles passed browser checks at 320, 390, 768 and 1440 pixels for loaded hero images, one heading, canonical URLs, update dates, FAQ interaction and horizontal overflow. Guide and home FAQ text matched structured data. Six shared-content routes passed mobile and removed-promise checks; the compiled nested service pages also passed the targeted finance, warranty and response-time scan. The About snapshot is unchanged. The template verifier checked 210 templates and 5,322 internal links/assets. Previous service/cost and mocked enquiry-consent regressions passed; no real enquiry or Analytics event was sent.

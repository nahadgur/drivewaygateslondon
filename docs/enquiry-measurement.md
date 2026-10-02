# Enquiry measurement

Implemented 2 October 2026. Uses the site's existing GA4 tag `G-F4ZHZBYKEL`. No new paid service, subscription or HYPD dependency was added.

## Events

| Event | Trigger | Parameters | Meaning |
| --- | --- | --- | --- |
| `generate_lead` | Existing lead endpoint returns a successful HTTP response with no explicit application rejection | `form_id`: `contact_enquiry`, `hero_enquiry` or `modal_enquiry`; `lead_source`: `website_enquiry` | The website completed its enquiry submission flow. It does not prove inbox delivery or a qualified lead. |
| `phone_click` | Activation of a `tel:` link | `click_placement`: header, footer, mobile_menu, mobile_bar or content | Intent to call. It does not prove a connected call. |

Both events include the page path and a URL without query parameters or fragments. Neither event includes submitted names, email addresses, phone numbers, postcodes, gate choices or free text. No monetary lead value is invented. New events are discarded before analytics opt-in and after rejection. Analytics errors do not block the lead form or phone link. Listeners clean up on unmount, and form guards prevent simultaneous duplicate submissions.

The existing Google Apps Script payload and destination remain unchanged. Its legacy response contract accepts text responses as well as JSON; HTTP failures and explicit `{ok:false}` responses cannot count as leads. A future endpoint review should agree a strict positive acknowledgement and receipt identifier. Do not infer delivery from an Analytics event.

## Account setup and verification still needed

The connected Analytics account did not expose this property's admin or reports. HYPD was used only for read-only discovery, then stopped at the user's request. No paid credits or plan upgrade were purchased by this task.

In the GA4 property associated with the existing measurement ID:

1. Check Realtime/DebugView for a consented, authorised test. Confirm one `generate_lead` after success, none after failure, and one `phone_click` per activation.
2. Mark `generate_lead` as a key event if it is not already one. Keep `phone_click` separate from confirmed enquiries.
3. Register event-scoped custom dimensions for `form_id` and `click_placement` if you need them in standard reports. `page_path` can also be registered if needed; page location is already included.
4. Review Enhanced Measurement. Do not count its automatic `form_submit` as a completed enquiry: an attempted form submission can fail. Check automatic form measurement and history-based page-view settings for duplicate events and query-string collection. The custom events deliberately exclude query strings.
5. Confirm an actual form submission appears in the existing Google Sheet and reaches the people handling enquiries. The owner explicitly deferred this real delivery test; browser checks use intercepted requests only.

## Qualified enquiries and booked surveys

Keep business outcomes in the existing private lead sheet or CRM. Use these columns: enquiry reference, received date, source page, contact method, service requested, qualification status, survey status/date, quote sent date, won/lost status and optional confirmed job value. Keep personal contact details in the operational lead system, not in GA4 event parameters.

Use consistent qualification statuses: unreviewed, qualified, outside area, unsupported service, duplicate or spam. Survey statuses: not discussed, offered, booked, completed or cancelled. Ben or Jack must confirm these outcomes; the website cannot infer them from a button click. Count distinct enquiries, and reconcile the same person's form submission and call instead of adding both as separate customers.

Review weekly: accepted website submissions, call clicks, actual enquiries received, qualified enquiries, booked surveys and won jobs. Report qualified/enquiry and booked-survey/qualified rates with the underlying counts. GA4 will omit people who reject analytics or block the tag, so it is not the total enquiry ledger. Establish a baseline before setting targets.

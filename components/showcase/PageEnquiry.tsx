import { EnquiryForm } from './EnquiryForm';

// The enquiry section at the end of every page: the call-to-action copy and
// the form together on the brand green, replacing a separate banner above it.
const DEFAULT_POINTS = ['Free site survey', 'Written fixed quote', 'No obligation'];
// Repairs carry a diagnostic charge, so they get their own points.
const REPAIR_POINTS = ['Most faults fixed on the first visit', 'Itemised price before any extra work', 'All main gate brands, including gates we didn’t install'];

export function PageEnquiry({ id = 'enquiry', heading, text, initialService }: {
  id?: string; heading: string; text: string; initialService?: string;
}) {
  const points = initialService === 'gate-repair-and-maintenance' ? REPAIR_POINTS : DEFAULT_POINTS;
  return (
    <section id={id} className="page-enquiry" aria-labelledby={`${id}-title`}>
      <div className="page-enquiry-inner">
        <div className="page-enquiry-copy">
          <h2 id={`${id}-title`}>{heading}</h2>
          <p>{text}</p>
          <ul className="page-enquiry-points">{points.map(point => <li key={point}>{point}</li>)}</ul>
          <p className="page-enquiry-call">Prefer to talk? Call <a href="tel:+442037731310">020 3773 1310</a></p>
        </div>
        <EnquiryForm initialService={initialService} formId="page_enquiry" />
      </div>
    </section>
  );
}

const DEFAULT_HEADING = 'Discuss your driveway gates';
const DEFAULT_TEXT = 'Tell us about your entrance and the work you have in mind.';
const decode = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();

// Pull the page's closing banner out of the template HTML so its reviewed
// copy heads the enquiry section instead of sitting in a bar above the form.
export function takeClosingBanner(html: string): { html: string; heading: string; text: string } {
  let heading = DEFAULT_HEADING;
  let text = DEFAULT_TEXT;
  const out = html.replace(/<section class="[^"]*\b(?:quote-band|closing)\b[^"]*"[^>]*>([\s\S]*?)<\/section>/, (_, inner: string) => {
    const h = inner.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/)?.[1];
    const p = inner.match(/<p\b(?![^>]*class="eyebrow")[^>]*>([\s\S]*?)<\/p>/)?.[1];
    if (h) heading = decode(h.replace(/<br\s*\/?>/g, ' '));
    if (p) text = decode(p);
    return '';
  });
  return { html: out, heading, text };
}

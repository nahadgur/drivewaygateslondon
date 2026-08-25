import { siteConfig, addressOneLine } from '@/data/site';

// Google map of the office, used on the contact page and in the footer.
//
// The iframe loads with the page, so Google sets its own cookies on any visit
// that reaches it whatever was chosen in the consent banner. The privacy page
// says so plainly rather than leaving it unmentioned.
//
// loading="lazy" is doing real work: the footer map sits below the fold on
// every page, so the frame is only fetched once someone scrolls near it.
//
// Server component, so the map costs nothing in bundle size. Keyless embed, so
// there is no API key to manage. For styled maps or controlled markers, swap
// embedSrc for the Maps Embed API and move the key into an env var.

const embedSrc =
  `https://www.google.com/maps?q=${encodeURIComponent(addressOneLine)}` +
  `&z=${siteConfig.map.zoom}&iwloc=&output=embed`;

type Variant = 'contact' | 'footer';

const heights: Record<Variant, string> = {
  contact: 'h-[340px]',
  footer: 'h-[180px]',
};

export function MapEmbed({
  variant = 'contact',
  className = '',
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border-2 border-brand-200 bg-brand-100 ${heights[variant]} ${className}`}
    >
      <iframe
        src={embedSrc}
        title={`Map showing the ${siteConfig.name} office at ${addressOneLine}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
      />
    </div>
  );
}

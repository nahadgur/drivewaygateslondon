import shared from '@/data/showcase/shared.json';

// quoteHref points the header's "Get a Free Quote" buttons at the page's own
// enquiry form; the contact page keeps the default.
export function Header({ quoteHref = '/contact/' }: { quoteHref?: string; onOpenModal?: () => void } = {}) {
  const html = shared.header.replaceAll('<a href="/contact/" class="button">', `<a href="${quoteHref}" class="button">`);
  return <div className="header-host" dangerouslySetInnerHTML={{ __html: html }} />;
}

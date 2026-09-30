import { notFound } from 'next/navigation';
import templates from '@/data/showcase/pages.json';
import shared from '@/data/showcase/shared.json';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EnquiryForm } from './EnquiryForm';

type PageTemplate = { className: string; main?: string; hero?: string; methods?: string; after?: string };
// These are reviewed, repository-owned templates, never request or user input.
// Keeping rendering on the server preserves crawlable content and working links.
export function ShowcasePage({ route }: { route: string }) {
  const page = (templates as Record<string, PageTemplate>)[route];
  if (!page) notFound();
  const home = route === '/';
  return <>
    {home && <div dangerouslySetInnerHTML={{ __html: shared.entrance }} />}
    <div id={home ? 'site-shell' : 'top'} className={`showcase-page ${page.className}`}>
      <Header />
      {route === '/contact/' ? <main id="main"><div className="page-wrap">
        <div dangerouslySetInnerHTML={{ __html: page.hero! }} />
        <div className="contact-layout">
          <section className="contact-intro" dangerouslySetInnerHTML={{ __html: page.methods! }} />
          <EnquiryForm />
        </div>
        <div dangerouslySetInnerHTML={{ __html: page.after! }} />
      </div></main> : <main id="main" dangerouslySetInnerHTML={{ __html: page.main! }} />}
      <Footer home={home} />
    </div>
    {route !== '/contact/' && <div dangerouslySetInnerHTML={{ __html: shared.enquiry }} />}
  </>;
}

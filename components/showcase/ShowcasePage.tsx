import { notFound } from 'next/navigation';
import templates from '@/data/showcase/pages.json';
import shared from '@/data/showcase/shared.json';
import preparedTemplates from '@/data/showcase/repair-articles.json';
import { publishedArticles } from '@/data/blog';
import { applyPublicationLinks, preparedArticleCard, type PublicationLink } from '@/lib/prepared-article-links';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EnquiryForm } from './EnquiryForm';

type PageTemplate = { className: string; main?: string; hero?: string; methods?: string; after?: string };
type PreparedTemplate = PageTemplate & { publicationLinks: PublicationLink[] };
// These are reviewed, repository-owned templates, never request or user input.
// Keeping rendering on the server preserves crawlable content and working links.
export function ShowcasePage({ route }: { route: string }) {
  const prepared = (preparedTemplates as Record<string, PreparedTemplate>)[route];
  const published = publishedArticles.find(article => `/blog/${article.slug}/` === route);
  const page = (templates as Record<string, PageTemplate>)[route] ?? (published ? prepared : undefined);
  if (!page) notFound();
  let main = page.main;
  if (prepared && published) {
    main = applyPublicationLinks(main!, prepared.publicationLinks, publishedArticles);
    const dateLabel = new Intl.DateTimeFormat('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London',
    }).format(new Date(`${published.publishDate}T12:00:00Z`));
    main = main.replace('<!-- article-publish-date -->', `<time datetime="${published.publishDate}">${dateLabel}</time>`);
  }
  if (route === '/blog/') {
    const cards = publishedArticles
      .filter(article => `/blog/${article.slug}/` in preparedTemplates)
      .map(preparedArticleCard).join('');
    main = main!.replace('<div class="page-grid">', `<div class="page-grid">${cards}`);
  }
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
      </div></main> : <main id="main" dangerouslySetInnerHTML={{ __html: main! }} />}
      <Footer home={home} />
    </div>
    {route !== '/contact/' && <div dangerouslySetInnerHTML={{ __html: shared.enquiry }} />}
  </>;
}

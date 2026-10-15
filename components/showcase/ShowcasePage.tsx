import { notFound } from 'next/navigation';
import templates from '@/data/showcase/pages.json';
import shared from '@/data/showcase/shared.json';
import preparedTemplates from '@/data/showcase/repair-articles.json';
import securityHub from '@/data/security-hub.json';
import { publishedArticles } from '@/data/blog';
import { applyPublicationLinks, preparedArticleCard, type PublicationLink } from '@/lib/prepared-article-links';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EnquiryForm } from './EnquiryForm';
import { editorialLayout } from '@/lib/editorial-layout';
import { businessHoursHtml, renderBusinessServices } from '@/lib/business-profile';
import { siteConfig } from '@/data/site';
import { ensureQuoteBanner, placeArticleQuoteBanner } from '@/lib/quote-banner';

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
  if (route === '/services/') {
    main = main!.replace('<div class="compact-links">', `${renderBusinessServices()}<div class="compact-links">`);
  }
  if (route === `/guides/${securityHub.slug}/`) {
    main = applyPublicationLinks(main!, securityHub.publicationLinks, publishedArticles);
  }
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
  const editorial = /^\/(guides|blog)\//.test(route);
  if (editorial) main = editorialLayout(main!, route);
  if (route !== '/contact/') main = ensureQuoteBanner(main!);
  const individualArticle = /^\/(guides|blog)\/[^/]+\/$/.test(route);
  if (individualArticle) main = placeArticleQuoteBanner(main!);
  const home = route === '/';
  return <>
    {home && <div dangerouslySetInnerHTML={{ __html: shared.entrance }} />}
    <div id={home ? 'site-shell' : 'top'} className={`showcase-page ${page.className}${editorial ? ' editorial-page' : ''}`}>
      <Header />
      {route === '/contact/' ? <main id="main"><div className="page-wrap">
        <div dangerouslySetInnerHTML={{ __html: page.hero! }} />
        <div className="contact-layout">
          <section className="contact-intro" dangerouslySetInnerHTML={{ __html: page.methods!
            .replace('<p>Lines are open during working hours. Outside them, the form reaches us fastest.</p>', `${businessHoursHtml}<p>You can send an enquiry through the form outside these hours.</p><p>${siteConfig.businessDescription}</p>`)
          }} />
          <EnquiryForm />
        </div>
        <div dangerouslySetInnerHTML={{ __html: page.after! }} />
      </div></main> : individualArticle ? <main id="main">
        <div dangerouslySetInnerHTML={{ __html: main! }} />
        <section id="article-enquiry" className="article-enquiry" aria-label="Request a driveway gate quote">
          <EnquiryForm />
        </section>
      </main> : <main id="main" dangerouslySetInnerHTML={{ __html: main! }} />}
      <Footer home={home} />
    </div>
    {route !== '/contact/' && <div dangerouslySetInnerHTML={{ __html: shared.enquiry }} />}
  </>;
}

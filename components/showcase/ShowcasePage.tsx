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
import { PageEnquiry, takeClosingBanner } from './PageEnquiry';
import { editorialLayout } from '@/lib/editorial-layout';
import { businessHoursHtml, renderBusinessServices } from '@/lib/business-profile';
import { siteConfig } from '@/data/site';
import { ensureQuoteBanner, placeArticleQuoteBanner } from '@/lib/quote-banner';
import { addProjectPhotos, ourWorkContent } from '@/lib/project-photos';
import { PRICE_BANDS_MARKER, renderPriceBandTable } from '@/lib/price-table';
import { openFaqs } from '@/lib/faq-open';
import { applyServiceImages } from '@/lib/service-images';
import { pointQuoteLinks, serviceForRoute } from '@/lib/quote-links';

type PageTemplate = { className: string; main?: string; hero?: string; methods?: string; after?: string };
type PreparedTemplate = PageTemplate & { publicationLinks: PublicationLink[] };
// These are reviewed, repository-owned templates, never request or user input.
// Keeping rendering on the server preserves crawlable content and working links.
export function ShowcasePage({ route }: { route: string }) {
  const prepared = (preparedTemplates as Record<string, PreparedTemplate>)[route];
  const published = publishedArticles.find(article => `/blog/${article.slug}/` === route);
  const page: PageTemplate | undefined = route === '/our-work/'
    ? { className: 'subpage tone-sage work-showcase-page', main: ourWorkContent() }
    : (templates as Record<string, PageTemplate>)[route] ?? (published ? prepared : undefined);
  if (!page) notFound();
  let main = page.main ? applyServiceImages(page.main, route) : page.main;
  if (main?.includes(PRICE_BANDS_MARKER)) main = main.replace(PRICE_BANDS_MARKER, renderPriceBandTable());
  if (route === '/services/') {
    main = main!.replace('<!-- business-services -->', renderBusinessServices());
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
  main = addProjectPhotos(main!, route);
  if (editorial) main = editorialLayout(main!, route);
  if (route !== '/contact/') main = ensureQuoteBanner(main!);
  const individualArticle = /^\/(guides|blog)\/[^/]+\/$/.test(route);
  if (individualArticle) main = placeArticleQuoteBanner(main!, route);
  if (main) main = openFaqs(main);
  const contact = route === '/contact/';
  const formAnchor = individualArticle ? 'article-enquiry' : 'enquiry';
  if (main && !contact) main = pointQuoteLinks(main, formAnchor);
  const quoteHref = contact ? '#quote-form' : `#${formAnchor}`;
  // Ordinary pages: the closing banner's copy heads the green enquiry section.
  const closing = !contact && !individualArticle ? takeClosingBanner(main!) : null;
  if (closing) main = closing.html;
  const home = route === '/';
  return <>
    <div id={home ? 'site-shell' : 'top'} className={`showcase-page ${page.className}${editorial ? ' editorial-page' : ''}`}>
      <Header quoteHref={quoteHref} />
      {route === '/contact/' ? <main id="main"><div className="page-wrap">
        <div dangerouslySetInnerHTML={{ __html: page.hero! }} />
        <div className="contact-layout">
          <section className="contact-intro" dangerouslySetInnerHTML={{ __html: page.methods!
            .replace('<p>Lines are open during working hours. Outside them, the form reaches us fastest.</p>', `${businessHoursHtml.replace('<h3>', '<h2>').replace('</h3>', '</h2>')}<p>You can send an enquiry through the form outside these hours.</p><p>${siteConfig.businessDescription}</p>`)
          }} />
          <EnquiryForm />
        </div>
        <div dangerouslySetInnerHTML={{ __html: page.after! }} />
      </div></main> : <main id="main">
        <div dangerouslySetInnerHTML={{ __html: main! }} />
        {closing
          ? <PageEnquiry heading={closing.heading} text={closing.text} initialService={serviceForRoute(route)} />
          : <PageEnquiry id={formAnchor} heading="Discuss your driveway gates" text="Tell us about your entrance and the work you have in mind." />}
      </main>}
      <Footer home={home} />
    </div>
    {!contact && <div dangerouslySetInnerHTML={{ __html: pointQuoteLinks(shared.enquiry, formAnchor) }} />}
  </>;
}

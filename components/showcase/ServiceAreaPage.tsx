import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EnquiryForm } from './EnquiryForm';
import { services } from '@/data/services';
import { LOCATIONS, getCityBySlug, getRegionForCity, toSlug } from '@/data/locations';
import { getNearbyAreas } from '@/data/nearby-areas';
import { quotationChecklist } from '@/data/pricing';
import pages from '@/data/showcase/pages.json';
import shared from '@/data/showcase/shared.json';

// Use the parent service's approved image and colour treatment. This component
// stays on the server; only the enquiry form needs client-side state.
export function ServiceAreaPage({ service, cityName, locationSlug }: {
  service: (typeof services)[number]; cityName: string; locationSlug: string;
}) {
  const parent = (pages as Record<string, { className: string; main?: string }>)[`/services/${service.slug}/`];
  const image = parent?.main?.match(/<img class="hero-backdrop"[^>]*src="([^"]+)"/)?.[1] || service.image;
  const tone = parent?.className.match(/tone-\w+/)?.[0] || 'tone-sage';
  const nearby = getNearbyAreas(cityName);
  const region = getRegionForCity(cityName);
  const coverageAreas = nearby.length ? nearby : (region ? LOCATIONS[region] : []).filter(area => area !== cityName).slice(0, 8);
  const coverageTitle = nearby.length ? `Areas around ${cityName}` : `More areas in ${region || 'London'}`;
  const steps = [
    ['Arrange a survey', `Fill in the short form and we call you back to book a free site survey in ${cityName}.`],
    ['Discuss your entrance', 'We visit, measure up, discuss design and material options, and check ground conditions.'],
    ['Receive your quote', 'You receive a detailed written fixed quote with a clear cost breakdown and timeline.'],
    ['Prepare your gate', 'Once approved, the gate is designed, fabricated, and delivered to site.'],
    ['Plan the installation', 'Agree a programme for the quoted groundworks, gate fitting, automation and finishing.'],
    ['Complete the handover', 'Full commissioning, safety testing, and handover with remotes and manual release training where automation is included.'],
  ];
  return <>
    <div id="top" className={`showcase-page subpage ${tone} service-area-page`}>
      <Header />
      <main id="main">
        <div className="page-wrap">
          <section className="sub-hero service-hero">
            <img className="hero-backdrop" src={image} alt="" aria-hidden="true" width={1200} height={800} fetchPriority="high" decoding="async" />
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a><span>/</span><a href="/services/">Gate Types</a><span>/</span>
              <a href={`/services/${service.slug}/`}>{service.title}</a><span>/</span><span aria-current="page">{cityName}</span>
            </nav>
            <div className="service-heading"><p className="eyebrow">Design, Supply &amp; Install</p><h1>{service.title} in {cityName}</h1></div>
            <div className="service-summary">
              <p className="lead">We design, supply and install {service.title.toLowerCase()} in {cityName}. Fill in the short form, we call you back to arrange a free site survey, then you get a written fixed quote.</p>
              <div className="hero-actions"><a className="button" href="#enquiry">Get a Free Quote <span aria-hidden="true">→</span></a><a className="button phone-button" href="tel:+442037731310">020 3773 1310</a></div>
              <div className="hero-footnote"><span>Free Site Surveys</span><span>Written Fixed Quotes</span><span>Written Installation Scope</span></div>
            </div>
          </section>
        </div>
        <div className="page-jumps-wrap"><nav className="page-jumps" aria-label="On this page"><a href="#overview">Your entrance</a><a href="#installation">Installation</a><a href="#quotation">Your quote</a><a href="#questions">Questions</a><a href="#coverage">Nearby areas</a></nav></div>
        <div className="page-wrap area-content">
          <div className="area-intro-grid">
            <section id="overview" className="area-overview">
              <p className="eyebrow">Your property in {cityName}</p>
              <h2>What to expect from {service.title.toLowerCase()}</h2>
              <p>{service.title} need a layout suited to your {cityName} property. The survey should check movement space, supports, ground conditions, parking and pedestrian access.</p>
              <p>Check planning and highway requirements for the actual property with the relevant authority before ordering. Ask the quotation to identify any specialist work, permissions or appointments required.</p>
              <a className="area-text-link" href={`/services/${service.slug}/`}>About {service.title} <span aria-hidden="true">→</span></a>
              <ul className="area-checklist"><li>Discuss design, supply and installation in one written scope</li><li>A free site survey and detailed written fixed quote before any commitment</li><li>Agree appointment and installation arrangements before booking</li><li>Confirm aftercare, maintenance charges and applicable warranty terms in writing</li></ul>
            </section>
            <section id="enquiry" aria-label={`Enquire about ${service.title.toLowerCase()} in ${cityName}`}><EnquiryForm initialArea={cityName} initialService={service.slug} formId="hero_enquiry" /></section>
          </div>
          <section id="installation" className="area-section">
            <h2>How installation works in {cityName}</h2>
            <ol className="area-process">{steps.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
          </section>
          <section id="quotation" className="area-section area-quote-scope"><div><p className="eyebrow">A clear written scope</p><h2>Compare your quotation</h2><p>Check the complete scope, exclusions and payment terms before accepting.</p><a className="area-text-link" href="/guides/electric-driveway-gates-cost-london/">Driveway gate cost guide <span aria-hidden="true">→</span></a></div><ul className="area-checklist">{quotationChecklist.map(item => <li key={item}>{item}</li>)}</ul></section>
          <section id="questions" className="area-section sub-faq"><h2>{service.title} in {cityName}: common questions</h2><div className="faq-list">{service.faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>
          <section id="coverage" className="area-section"><h2>{coverageTitle}</h2><p>Send your postcode and project details to confirm coverage and appointment arrangements around {cityName}.</p><ul className="area-links">{coverageAreas.map(area => <li key={area}>{getCityBySlug(toSlug(area)) ? <a href={service.slug === 'commercial-gates' ? '/commercial/' : `/services/${service.slug}/${toSlug(area)}/`}>{area}<span aria-hidden="true">↗</span></a> : <span>{area}</span>}</li>)}</ul></section>
          <section className="area-section"><h2>Other gate types in {cityName}</h2><ul className="area-links">{services.filter(item => item.id !== service.id).map(item => <li key={item.id}><a href={item.slug === 'commercial-gates' ? '/commercial/' : `/services/${item.slug}/${locationSlug}/`}>{item.slug === 'commercial-gates' ? 'Commercial gate services' : item.title}<span aria-hidden="true">↗</span></a></li>)}</ul></section>
        </div>
      </main>
      <Footer />
    </div>
    <div dangerouslySetInnerHTML={{ __html: shared.enquiry.replace('href="/contact/"', 'href="#enquiry"') }} />
  </>;
}

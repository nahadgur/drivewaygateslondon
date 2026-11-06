import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EnquiryForm } from './EnquiryForm';
import { services } from '@/data/services';
import { LOCATIONS, getCityBySlug, getRegionForCity, toSlug } from '@/data/locations';
import { getNearbyAreas } from '@/data/nearby-areas';
import { quotationChecklist, getPriceBandsForService } from '@/data/pricing';
import pages from '@/data/showcase/pages.json';
import shared from '@/data/showcase/shared.json';
import { serviceImage } from '@/lib/service-images';
import { serviceIntent } from '@/lib/service-intent';

// Use the parent service's approved image and colour treatment. This component
// stays on the server; only the enquiry form needs client-side state.
export function ServiceAreaPage({ service, cityName, locationSlug }: {
  service: (typeof services)[number]; cityName: string; locationSlug: string;
}) {
  const parent = (pages as Record<string, { className: string; main?: string }>)[`/services/${service.slug}/`];
  const image = serviceImage(`/services/${service.slug}/`);
  const intent = serviceIntent(service.slug, cityName);
  const tone = parent?.className.match(/tone-\w+/)?.[0] || 'tone-sage';
  const districts = getNearbyAreas(cityName).slice(0, 6);
  const region = getRegionForCity(cityName);
  const coverageAreas = (region ? LOCATIONS[region] : []).filter(area => area !== cityName).slice(0, 8);
  const coverageTitle = districts.length ? `Areas around ${cityName}` : `More areas in ${region || 'London'}`;
  const priceBands = getPriceBandsForService(service.id);
  const priceNote = service.slug === 'gate-repair-and-maintenance'
    ? 'Your price depends on the fault, the parts needed and access to the gates, and is confirmed once the gates have been inspected.'
    : service.slug === 'gate-automation-kits'
      ? 'Your price depends on the condition and weight of your existing gates, the motors and controls you choose and the electrical work, and is confirmed after the gates have been assessed.'
      : 'Your price depends on the width of your entrance, the ground, the design and any automation, and is confirmed in a written fixed quote after a free site survey.';
  const steps = intent?.steps ?? [
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
            <img className="hero-backdrop" src={image.src} alt={image.alt} width={image.width} height={image.height} style={image.position ? { objectPosition: image.position } : undefined} fetchPriority="high" decoding="async" />
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a><span>/</span><a href="/services/">Gate Types</a><span>/</span>
              <a href={`/services/${service.slug}/`}>{service.title}</a><span>/</span><span aria-current="page">{cityName}</span>
            </nav>
            <div className="service-heading"><p className="eyebrow">{intent?.eyebrow ?? "Design, Supply & Install"}</p><h1>{service.title} in {cityName}</h1></div>
            <div className="service-summary">
              <p className="lead">{intent?.lead ?? `We design, supply and install ${service.title.toLowerCase()} in ${cityName}. Fill in the short form, we call you back to arrange a free site survey, then you get a written fixed quote.`}</p>
              <div className="hero-actions"><a className="button" href="#enquiry">Get a Free Quote <span aria-hidden="true">→</span></a><a className="button phone-button" href="tel:+442037731310">020 3773 1310</a></div>
              <div className="hero-footnote">{(intent?.footnotes ?? ["Free Site Surveys", "Written Fixed Quotes", "Written Installation Scope"]).map(text => <span key={text}>{text}</span>)}</div>
            </div>
          </section>
          <p className="service-image-credit">{image.caption}</p>
        </div>
        <div className="page-jumps-wrap"><nav className="page-jumps" aria-label="On this page"><a href="#overview">Your entrance</a><a href="#installation">{intent?.processLabel ?? "Installation"}</a>{priceBands.length > 0 && <a href="#prices">Prices</a>}<a href="#quotation">Your quote</a><a href="#questions">Questions</a><a href="#coverage">Nearby areas</a></nav></div>
        <div className="page-wrap area-content">
          <div className="area-intro-grid">
            <section id="overview" className="area-overview">
              <p className="eyebrow">Your property in {cityName}</p>
              <h2>What to expect from {service.title.toLowerCase()}</h2>
              <p>{intent?.overview ?? `${service.title} need a layout suited to your ${cityName} property. The survey should check movement space, supports, ground conditions, parking and pedestrian access.`}</p>
              <p>{intent?.guidance ?? "Check planning and highway requirements for the actual property with the relevant authority before ordering. Ask the quotation to identify any specialist work, permissions or appointments required."}</p>
              <a className="area-text-link" href={`/services/${service.slug}/`}>About {service.title} <span aria-hidden="true">→</span></a>
              <ul className="area-checklist">{(intent?.checklist ?? ["Discuss design, supply and installation in one written scope", "A free site survey and detailed written fixed quote before any commitment", "Agree appointment and installation arrangements before booking", "Confirm aftercare, maintenance charges and applicable warranty terms in writing"]).map(text => <li key={text}>{text}</li>)}</ul>
            </section>
            <section id="enquiry" aria-label={`Enquire about ${service.title.toLowerCase()} in ${cityName}`}><EnquiryForm initialArea={cityName} initialService={service.slug} formId="hero_enquiry" /></section>
          </div>
          <section id="installation" className="area-section">
            <h2>{intent?.processTitle ?? `How installation works in ${cityName}`}</h2>
            <ol className="area-process">{steps.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
          </section>
          {priceBands.length > 0 && <section id="prices" className="area-section area-prices">
            <h2>How Much {['gate-repair', 'gate-automation-kits'].includes(service.id) ? 'Does' : 'Do'} {service.title} Cost in {cityName}?</h2>
            <p>Typical price ranges for {service.title.toLowerCase()} in {cityName}, in GBP. They are a guide only. {priceNote}</p>
            <div className="area-price-scroll"><table className="area-price-table">
              <thead><tr><th scope="col">{['gate-repair', 'gate-automation-kits'].includes(service.id) ? 'Service' : 'Gate type'}</th><th scope="col">Price range</th><th scope="col">Typical time</th><th scope="col">Includes</th></tr></thead>
              <tbody>{priceBands.map(band => <tr key={band.slug}><th scope="row">{band.label}</th><td className="area-price">£{band.priceFrom.toLocaleString('en-GB')} to £{band.priceTo.toLocaleString('en-GB')}</td><td>{band.typicalDuration}</td><td>{band.includes}</td></tr>)}</tbody>
            </table></div>
          </section>}
          <section id="quotation" className="area-section area-quote-scope"><div><p className="eyebrow">A clear written scope</p><h2>Compare your quotation</h2><p>Check the complete scope, exclusions and payment terms before accepting.</p><a className="area-text-link" href={intent?.quoteLink ?? "/guides/electric-driveway-gates-cost-london/"}>{intent?.quoteLinkText ?? "Driveway gate cost guide"} <span aria-hidden="true">→</span></a></div><ul className="area-checklist">{(intent?.quoteChecklist ?? quotationChecklist).map(item => <li key={item}>{item}</li>)}</ul></section>
          <section id="questions" className="area-section sub-faq"><h2>{service.title} in {cityName}: common questions</h2><div className="faq-list">{service.faqs.map(faq => <details key={faq.question} open><summary tabIndex={-1}>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>
          <section id="coverage" className="area-section"><h2>{coverageTitle}</h2>{districts.length > 0 && <p>We cover {cityName} and nearby areas, including {districts.slice(0, -1).join(', ')} and {districts[districts.length - 1]}.</p>}<p>Send your postcode and project details to confirm coverage and appointment arrangements around {cityName}.</p><ul className="area-links">{coverageAreas.map(area => <li key={area}>{getCityBySlug(toSlug(area)) ? <a href={service.slug === 'commercial-gates' ? '/commercial/' : `/services/${service.slug}/${toSlug(area)}/`}>{area}<span aria-hidden="true">↗</span></a> : <span>{area}</span>}</li>)}</ul></section>
          <section className="area-section"><h2>Other gate services in {cityName}</h2><ul className="area-links">{services.filter(item => item.id !== service.id).map(item => <li key={item.id}><a href={item.slug === 'commercial-gates' ? '/commercial/' : `/services/${item.slug}/${locationSlug}/`}>{item.slug === 'commercial-gates' ? 'Commercial gate services' : item.title}<span aria-hidden="true">↗</span></a></li>)}</ul></section>
        </div>
        <section className="quote-band lead-quote" aria-label="Request a driveway gate quote">
          <div><h2>{intent?.ctaHeading ?? `Discuss your driveway gates in ${cityName}`}</h2><p>{intent?.ctaText ?? "Tell us about your entrance and the work you need. Use the enquiry form to request a quote."}</p></div>
          <a className="button light" href="#enquiry">Get a Free Quote</a>
        </section>
      </main>
      <Footer />
    </div>
    <div dangerouslySetInnerHTML={{ __html: shared.enquiry.replace('href="/contact/"', 'href="#enquiry"') }} />
  </>;
}

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EnquiryForm } from './EnquiryForm';
import { services } from '@/data/services';
import { LOCATIONS, getRegionForCity, toSlug } from '@/data/locations';
import { getNearbyAreas } from '@/data/nearby-areas';
import { priceBands, quotationChecklist } from '@/data/pricing';
import { getBoroughGuide } from '@/data/location-boroughs';
import shared from '@/data/showcase/shared.json';
import { serviceImage } from '@/lib/service-images';
import { serviceIntent } from '@/lib/service-intent';
import { locationGateGroups, cardPriceBand, gbp, locationFaqs } from '@/lib/location-content';

// One page per area. Each gate type has its own section here, so the area page
// answers "<gate type> in <area>" searches without a separate thin page per
// service. Server component; only the enquiry form needs client-side state.
export function LocationPage({ cityName }: { cityName: string }) {
  const region = getRegionForCity(cityName);
  const districts = getNearbyAreas(cityName).slice(0, 8);
  const regionAreas = (region ? LOCATIONS[region] : []).filter(area => area !== cityName);
  const borough = getBoroughGuide(cityName);
  const repair = services.find(s => s.slug === 'gate-repair-and-maintenance')!;
  const repairIntent = serviceIntent(repair.slug, cityName)!;
  const retrofitIntent = serviceIntent('gate-automation-kits', cityName)!;
  const repairBand = cardPriceBand(repair);
  const faqs = locationFaqs(cityName);
  const steps = [
    ['Arrange a survey', `Fill in the short form and we call you back to book a free site survey in ${cityName}.`],
    ['Discuss your entrance', 'We visit, measure up, discuss design and material options, and check ground conditions, supports and the power route.'],
    ['Receive your quote', 'You receive a written fixed quote with a clear cost breakdown and the proposed programme.'],
    ['Prepare your gate', 'Once approved, the gate is designed, fabricated and delivered to site.'],
    ['Install the entrance', 'We carry out the quoted groundworks, gate fitting, automation and finishing.'],
    ['Complete the handover', 'Commissioning, safety checks and handover, with remotes and manual release instructions where automation is included.'],
  ];

  return <>
    <div id="top" className="showcase-page subpage tone-sage service-area-page location-page">
      <Header quoteHref="#enquiry" />
      <main id="main">
        <div className="page-wrap">
          <section className="sub-hero service-hero">
            <img className="hero-backdrop" src="/showcase/assets/london-entrance.webp" alt="" aria-hidden="true" width={1200} height={800} fetchPriority="high" decoding="async" />
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a><span aria-hidden="true">/</span><a href="/location/">Locations</a><span aria-hidden="true">/</span><span aria-current="page">{cityName}</span>
            </nav>
            <div className="service-heading"><h1>Driveway Gates in {cityName}</h1></div>
            <div className="service-summary">
              <p className="lead">We design, supply and install driveway gates in {cityName}{region ? `, ${region},` : ''} automate existing gates and repair them when they go wrong. Fill in the short form, we call you back to arrange a free site survey, then you get a written fixed quote.</p>
              <div className="hero-actions"><a className="button" href="#enquiry">Get a Free Quote <span aria-hidden="true">→</span></a><a className="button phone-button" href="tel:+442037731310">Call 020 3773 1310</a></div>
              <div className="hero-footnote"><span>Free Site Surveys</span><span>Written Fixed Quotes</span><span>Design, Supply &amp; Install</span></div>
            </div>
          </section>
        </div>
        <div className="page-jumps-wrap"><nav className="page-jumps" aria-label="On this page">
          <a href="#gate-types">Gate types</a><a href="#prices">Prices</a><a href="#repairs">Repairs</a><a href="#automation">Automation</a><a href="#installation">Installation</a><a href="#planning">Planning</a><a href="#questions">Questions</a><a href="#coverage">Nearby areas</a>
        </nav></div>
        <div className="page-wrap area-content">
          <div className="area-intro-grid">
            <section id="overview" className="area-overview">
              <h2>Driveway gate installation in {cityName}</h2>
              <p>From electric sliding and swing gates to timber, metal and composite designs, we handle the survey, groundwork, gates and automation as one job, with the full scope set out in a written quotation.</p>
              <p>Every project starts with a free site survey in {cityName}. We measure the entrance, check the ground, supports, gradient and power route, talk through designs and then send a written fixed quote. There is no obligation to proceed.</p>
              <ul className="area-checklist">
                <li>Design, supply and installation in one written scope</li>
                <li>A free site survey and written fixed quote before any commitment</li>
                <li>New gates, automation for existing gates, and repairs</li>
                <li>Aftercare, servicing and warranty terms confirmed in writing</li>
              </ul>
            </section>
            <section id="enquiry" aria-label={`Enquire about driveway gates in ${cityName}`}><EnquiryForm initialArea={cityName} formId="hero_enquiry" /></section>
          </div>

          <div id="gate-types">
            {locationGateGroups.map(group => (
              <section key={group.id} id={group.id} className="area-section location-gates">
                <h2>{group.title(cityName)}</h2>
                <p>{group.intro}</p>
                <div className="page-grid">
                  {group.services.map(service => {
                    const image = serviceImage(`/services/${service.slug}/`);
                    const band = cardPriceBand(service);
                    return (
                      <a key={service.slug} id={service.slug} className="page-card location-gate-card" href={`/services/${service.slug}/`}>
                        <div className="card-image"><img loading="lazy" decoding="async" src={image.src} alt={image.alt} width={image.width} height={image.height} /></div>
                        <div className="card-copy">
                          <h3>{service.title} in {cityName}</h3>
                          <p>{service.description}</p>
                          {band && <p className="location-gate-price">Typically {gbp(band.priceFrom)} to {gbp(band.priceTo)} · {band.typicalDuration} on site</p>}
                          <span className="card-action">About {service.title.toLowerCase()} <span aria-hidden="true">→</span></span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>
            ))}
            <p className="location-commercial-note">Need gates for a business, school or car park in {cityName}? See our <a href="/commercial/">commercial gate systems</a>.</p>
          </div>

          <section id="prices" className="area-section area-prices">
            <h2>How much do driveway gates cost in {cityName}?</h2>
            <p>Typical price ranges in GBP. They are a guide only: your price depends on the width of your entrance, the ground, the design and any automation, and is confirmed in a written fixed quote after a free site survey. Our <a href="/guides/electric-driveway-gates-cost-london/">driveway gate cost guide</a> explains what a complete quote should cover.</p>
            <div className="area-price-scroll"><table className="area-price-table">
              <thead><tr><th scope="col">Gate or service</th><th scope="col">Price range</th><th scope="col">Typical time</th><th scope="col">Includes</th></tr></thead>
              <tbody>{priceBands.map(band => <tr key={band.slug}><th scope="row">{band.label}</th><td className="area-price">{gbp(band.priceFrom)} to {gbp(band.priceTo)}</td><td>{band.typicalDuration}</td><td>{band.includes}</td></tr>)}</tbody>
            </table></div>
          </section>

          <section id="repairs" className="area-section">
            <h2>Gate repairs and servicing in {cityName}</h2>
            <p>{repairIntent.lead}</p>
            <p>{repairIntent.overview}</p>
            {repairBand && <p className="location-gate-price">Repairs and servicing typically cost {gbp(repairBand.priceFrom)} to {gbp(repairBand.priceTo)}, {repairBand.typicalDuration.toLowerCase()}.</p>}
            <ul className="area-checklist">{repairIntent.checklist.map(item => <li key={item}>{item}</li>)}</ul>
            <a className="area-text-link" href="/services/gate-repair-and-maintenance/">Gate repair and maintenance <span aria-hidden="true">→</span></a>
          </section>

          <section id="automation" className="area-section">
            <h2>Automating existing gates in {cityName}</h2>
            <p>{retrofitIntent.lead}</p>
            <p>{retrofitIntent.guidance}</p>
            <a className="area-text-link" href="/services/gate-automation-kits/">Automation for existing gates <span aria-hidden="true">→</span></a>
          </section>

          <section id="installation" className="area-section">
            <h2>How installation works in {cityName}</h2>
            <ol className="area-process">{steps.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
          </section>

          <section id="quotation" className="area-section area-quote-scope"><div><h2>Compare your quotation</h2><p>Check the complete scope, exclusions and payment terms before accepting.</p><a className="area-text-link" href="/guides/electric-driveway-gates-cost-london/">Driveway gate cost guide <span aria-hidden="true">→</span></a></div><ul className="area-checklist">{quotationChecklist.map(item => <li key={item}>{item}</li>)}</ul></section>

          <section id="planning" className="area-section">
            <h2>Planning and permissions in {cityName}</h2>
            <p>Gate height, a position beside a road, listed status, conservation areas and Article 4 directions can all affect whether driveway gates need permission. Check the actual property with the planning authority before ordering, and ask the quotation to identify any permissions it relies on. A new vehicle access may also need a <a href="/blog/do-i-need-a-dropped-kerb-for-a-driveway-gate-london/">dropped kerb</a> from the council.</p>
            {borough
              ? <a className="area-text-link" href={borough.href}>Driveway gate planning in {borough.name} <span aria-hidden="true">→</span></a>
              : <a className="area-text-link" href="/local-regulations/">Driveway gate planning guides by borough <span aria-hidden="true">→</span></a>}
          </section>

          <section id="questions" className="area-section sub-faq"><h2>Driveway gates in {cityName}: common questions</h2><div className="faq-list">{faqs.map(faq => <details key={faq.question} open><summary tabIndex={-1}>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>

          <section id="coverage" className="area-section">
            <h2>Areas around {cityName}</h2>
            {districts.length > 0 && <p>We cover {cityName} and nearby areas, including {districts.slice(0, -1).join(', ')} and {districts[districts.length - 1]}.</p>}
            <p>Send your postcode and project details to confirm coverage and appointment arrangements around {cityName}.</p>
            {regionAreas.length > 0 && <>
              <h3 className="location-region-title">More areas in {region}</h3>
              <ul className="area-links">{regionAreas.map(area => <li key={area}><a href={`/location/${toSlug(area)}/`}>{area}<span aria-hidden="true">↗</span></a></li>)}</ul>
            </>}
          </section>
        </div>
        <section className="quote-band lead-quote" aria-label="Request a driveway gate quote">
          <div><h2>Discuss your driveway gates in {cityName}</h2><p>Tell us about your entrance and the work you need. Use the enquiry form to request a quote.</p></div>
          <a className="button light" href="#enquiry">Get a Free Quote</a>
        </section>
      </main>
      <Footer />
    </div>
    <div dangerouslySetInnerHTML={{ __html: shared.enquiry.replace('href="/contact/"', 'href="#enquiry"') }} />
  </>;
}

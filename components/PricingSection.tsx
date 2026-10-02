import Link from 'next/link';
import { quotationChecklist } from '@/data/pricing';

interface PricingSectionProps { cityName?: string; serviceId?: string; serviceName?: string; }

export function PricingSection({ cityName, serviceName }: PricingSectionProps) {
  return <section className="mb-16">
    <div className="craft-label">Your written quotation</div>
    <h2 className="craft-h2 mb-4">{serviceName ? serviceName + ': quotation scope' : 'Compare the complete installation scope'}</h2>
    <p className="text-brand-700 mb-6 leading-relaxed text-sm">The cost{cityName ? ' in ' + cityName : ''} depends on the measured entrance, products and work required. Request an itemised quotation with the following details before comparing totals.</p>
    <ul className="space-y-3 border border-brand-200 bg-brand-50 p-6">
      {quotationChecklist.map(item => <li key={item} className="flex gap-3 text-sm text-brand-700"><span aria-hidden="true">✓</span><span>{item}</span></li>)}
    </ul>
    <p className="mt-5 text-sm text-brand-700">Read our <Link className="underline" href="/guides/electric-driveway-gates-cost-london/">installed gate cost guide</Link> or <Link className="underline" href="/contact/">discuss your project</Link>. Agree the products, work and terms in writing.</p>
  </section>;
}

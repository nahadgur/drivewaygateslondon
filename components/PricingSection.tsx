'use client';

import { CheckCircle, CreditCard } from 'lucide-react';
import { pricingTiers, treatmentIncludes, financeInfo, getPricingForService } from '@/data/pricing';

interface PricingSectionProps { cityName?: string; serviceId?: string; serviceName?: string; }

export function PricingSection({ cityName, serviceId, serviceName }: PricingSectionProps) {
  const tiers = serviceId ? getPricingForService(serviceId) : pricingTiers;

  const heading = cityName && serviceName
    ? `How Much Do ${serviceName} Cost in ${cityName}?`
    : cityName ? `How Much Do Driveway Gates Cost in ${cityName}?`
    : serviceName ? `${serviceName} Pricing Guide`
    : 'Driveway Gate Pricing Guide';

  const intro = cityName
    ? `Driveway gate prices in ${cityName} vary depending on the gate type, material, and level of automation. Below are typical costs from vetted installers in the ${cityName} area. All prices are in GBP and include full installation.`
    : 'Driveway gate prices across London vary depending on the gate type, material, automation requirements, and design complexity. Below are typical costs from installers in our network. All prices are in GBP and include installation.';

  return (
    <section className="mb-16">
      <div className="craft-label">Pricing Guide 2026</div>
      <h2 className="craft-h2 mb-4">{heading}</h2>
      <p className="text-brand-700 mb-6 leading-relaxed text-sm">{intro}</p>

      {/* Table — desktop */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-[3px] border-brand-900">
              <th className="py-3 pr-5 text-left font-syne font-bold text-[9px] tracking-[.16em] uppercase text-brand-600">Gate Type</th>
              <th className="py-3 pr-5 text-left font-syne font-bold text-[9px] tracking-[.16em] uppercase text-brand-600">Price Range</th>
              <th className="py-3 pr-5 text-left font-syne font-bold text-[9px] tracking-[.16em] uppercase text-brand-600">Install Time</th>
              <th className="py-3 text-left font-syne font-bold text-[9px] tracking-[.16em] uppercase text-brand-600 hidden lg:table-cell">Includes</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map(tier => (
              <tr key={tier.slug} className="border-b border-brand-200 hover:bg-brand-100 transition-colors">
                <td className="py-4 pr-5 font-syne font-bold text-[13px] text-brand-900">{tier.treatment}</td>
                <td className="py-4 pr-5">
                  <span className="font-display text-[18px] text-brand-500 font-semibold">
                    £{tier.priceFrom.toLocaleString()} – £{tier.priceTo.toLocaleString()}
                  </span>
                </td>
                <td className="py-4 pr-5 text-brand-700 text-sm">{tier.typicalDuration}</td>
                <td className="py-4 text-brand-600 text-xs hidden lg:table-cell">{tier.alignerSets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards — mobile */}
      <div className="md:hidden space-y-0 border-2 border-brand-900 bg-brand-900">
        {tiers.map(tier => (
          <div key={tier.slug} className="bg-brand-50 border-b-2 border-brand-200 p-4 last:border-b-0">
            <div className="flex justify-between items-start mb-1">
              <span className="font-syne font-bold text-[12px] uppercase tracking-tight text-brand-900">{tier.treatment}</span>
              <span className="font-display text-[16px] text-brand-500 font-semibold ml-3 flex-shrink-0">
                £{tier.priceFrom.toLocaleString()} – £{tier.priceTo.toLocaleString()}
              </span>
            </div>
            <div className="text-[11px] text-brand-500 font-syne">{tier.typicalDuration}</div>
          </div>
        ))}
      </div>

      {/* Finance strip */}
      <div className="bg-brand-900 px-6 py-5 mt-0.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="font-syne font-bold text-[9px] tracking-[.18em] uppercase text-brand-500 mb-1">0% Finance Available</div>
          <div className="font-display text-3xl text-white leading-none">From £{financeInfo.monthlyFrom}/month</div>
          <div className="text-xs text-brand-400 mt-1">Over {financeInfo.spreadOver} at 0% APR</div>
        </div>
        <div className="font-syne font-bold text-xs tracking-[.1em] uppercase text-brand-300 flex-shrink-0">Subject to status</div>
      </div>

      {/* Includes + Finance */}
      <div className="grid md:grid-cols-2 gap-0 mt-6 border-2 border-brand-900 bg-brand-900">
        <div className="bg-brand-50 p-6 border-b-2 md:border-b-0 md:border-r-2 border-brand-200">
          <div className="font-syne font-bold text-[9px] tracking-[.18em] uppercase text-brand-600 mb-4">Every Quote Includes</div>
          <ul className="space-y-2">
            {treatmentIncludes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-brand-700">
                <span className="text-brand-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-brand-100 p-6">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard className="w-4 h-4 text-brand-600" />
            <div className="font-syne font-bold text-[9px] tracking-[.18em] uppercase text-brand-600">Spread the Cost at 0%</div>
          </div>
          <p className="text-sm text-brand-600 leading-relaxed mb-3">{financeInfo.description}</p>
          <div className="bg-brand-50 border-2 border-brand-200 p-4">
            <div className="font-display text-3xl text-brand-500 font-semibold">From £{financeInfo.monthlyFrom}/month</div>
            <div className="text-xs text-brand-500 mt-1">Over {financeInfo.spreadOver} at 0% APR</div>
          </div>
        </div>
      </div>

      {cityName && (
        <p className="mt-6 text-sm text-brand-600 leading-relaxed max-w-3xl">
          The cost of driveway gates in {cityName} depends on several factors: the material, whether you want automation, the width of your entrance, and any bespoke design requirements. London prices tend to sit at the higher end nationally, but the installers in our {cityName} network are competitively priced. Every installer offers a free site survey so you can get an accurate, itemised quote before any commitment.
        </p>
      )}
    </section>
  );
}

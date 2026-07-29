'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { getNearbyAreas } from '@/data/nearby-areas';
import { toSlug, getCityBySlug } from '@/data/locations';

interface NearbyAreasGridProps {
  cityName: string; serviceSlug?: string; serviceName?: string; initialVisible?: number;
}

export function NearbyAreasGrid({ cityName, serviceSlug, serviceName, initialVisible = 10 }: NearbyAreasGridProps) {
  const areas = getNearbyAreas(cityName);
  const [showAll, setShowAll] = useState(false);
  if (areas.length === 0) return null;

  const visibleAreas = showAll ? areas : areas.slice(0, initialVisible);
  const hiddenCount  = areas.length - initialVisible;

  const heading = serviceName
    ? `${serviceName}: Areas Around ${cityName}`
    : `Areas We Cover Around ${cityName}`;

  const description = serviceName
    ? `Looking for ${serviceName.toLowerCase()} near ${cityName}? We serve homeowners across ${cityName} and the surrounding areas listed below.`
    : `We install driveway gates for homeowners across ${cityName} and the wider London area. If you live in any of the neighbourhoods or nearby areas listed below, you are within reach of expert gate installation.`;

  return (
    <section className="mb-16">
      <div className="craft-label">Coverage</div>
      <h2 className="craft-h2 mb-3">{heading}</h2>
      <p className="text-brand-600 text-sm mb-6 leading-relaxed">{description}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-2 border-brand-900 bg-brand-200 gap-[1px]">
        {visibleAreas.map(area => {
          const hasPage = !!getCityBySlug(toSlug(area));
          const label = serviceName ? area : `Gates ${area}`;

          if (hasPage) {
            const href = serviceSlug
              ? `/services/${serviceSlug}/${toSlug(area)}/`
              : `/location/${toSlug(area)}/`;
            return (
              <Link key={area} href={href}
                className="bg-brand-50 flex items-center min-h-[44px] px-3 py-2.5 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-800 hover:bg-brand-900 hover:text-brand-50 transition-colors">
                {label}
              </Link>
            );
          }

          return (
            <div key={area}
              className="bg-brand-50 flex items-center min-h-[44px] px-3 py-2.5 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-600">
              {label}
            </div>
          );
        })}
      </div>

      {hiddenCount > 0 && !showAll && (
        <button onClick={() => setShowAll(true)}
          className="mt-4 flex items-center gap-2 font-syne font-bold text-[11px] tracking-[.1em] uppercase text-brand-600 hover:text-brand-900 transition-colors">
          Show all {areas.length} areas <ChevronDown className="w-3.5 h-3.5" />
        </button>
      )}
      {showAll && hiddenCount > 0 && (
        <button onClick={() => setShowAll(false)}
          className="mt-4 flex items-center gap-2 font-syne font-bold text-[11px] tracking-[.1em] uppercase text-brand-600 hover:text-brand-900 transition-colors">
          Show fewer <ChevronDown className="w-3.5 h-3.5 rotate-180" />
        </button>
      )}

      <p className="mt-5 text-xs text-brand-600 leading-relaxed max-w-2xl">
        Homeowners from {areas.slice(0, 5).join(', ')}, and surrounding areas around {cityName} use our service regularly.{' '}
        {serviceName
          ? `If you need ${serviceName.toLowerCase()} near ${cityName}, we can arrange a free site survey, including evenings and weekends.`
          : `Our team is experienced, fully insured, and offers flexible appointment times.`}
      </p>
    </section>
  );
}

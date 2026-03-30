import { ShieldCheck, UserCheck, Award, PoundSterling } from 'lucide-react';
import { trustBadges } from '@/data/site';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck:   <ShieldCheck   className="w-5 h-5 text-brand-400" />,
  UserCheck:     <UserCheck     className="w-5 h-5 text-brand-400" />,
  Award:         <Award         className="w-5 h-5 text-brand-400" />,
  PoundSterling: <PoundSterling className="w-5 h-5 text-brand-400" />,
};

export function TrustBadges() {
  return (
    <section className="bg-brand-900 border-b-2 border-brand-700">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-700/40">
        {trustBadges.map((badge, i) => (
          <div
            key={badge.title}
            className={`flex items-center gap-4 px-6 py-5 ${i >= 2 ? 'border-t border-brand-700/40 lg:border-t-0' : ''}`}
          >
            <div className="trust-icon-box shrink-0">
              {iconMap[badge.icon]}
            </div>
            <div>
              <div className="font-syne font-bold text-[12px] tracking-[.04em] uppercase text-white leading-tight">
                {badge.title}
              </div>
              <div className="text-[11.5px] text-brand-400 mt-0.5 leading-snug">
                {badge.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

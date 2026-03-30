import { testimonials } from '@/data/site';
import { cn } from '@/lib/utils';

export function Testimonials({ limit = 3, className }: { limit?: number; className?: string }) {
  const items = testimonials.slice(0, limit);
  return (
    <div className={cn(
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-brand-900 bg-brand-900 gap-[2px]',
      className
    )}>
      {items.map(t => (
        <div key={t.id} className="testi-card">
          <div className="text-brand-500 text-sm tracking-[1.5px] mb-3">
            {'★'.repeat(t.rating)}
          </div>
          <p className="text-brand-700 text-sm leading-relaxed italic mb-5">
            &ldquo;{t.text}&rdquo;
          </p>
          <div className="border-t-2 border-brand-200 pt-3">
            <div className="font-syne font-bold text-[10.5px] tracking-[.1em] uppercase text-brand-500">
              {t.name}
            </div>
            <div className="font-syne font-bold text-[10px] tracking-[.06em] uppercase text-brand-300 mt-0.5">
              {t.location} · {t.service}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

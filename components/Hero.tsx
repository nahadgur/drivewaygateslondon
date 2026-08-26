import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { siteConfig, phoneHref } from '@/data/site';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  /** Scannable "what we do" checklist rendered between the subtitle and
      the CTAs, so the offer lands in one look on every screen size. */
  highlights?: string[];
  showCta?: boolean;
  showTrust?: boolean;
  onOpenModal?: () => void;
}

export function Hero({ title, subtitle, image, highlights, showCta = true, showTrust = true, onOpenModal }: HeroProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_480px] border-b-[3px] border-brand-900 min-h-[60vh] lg:min-h-[88vh]">

      {/* Text side */}
      <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-14 lg:py-16 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-brand-900">


        <h1
          className="font-syne font-extrabold uppercase tracking-tight text-brand-900 mb-5"
          style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.02, letterSpacing: '-.025em' }}
        >
          {title.split(',')[0]}
          {title.includes(',') && (
            <>
              ,<br />
              <em className="font-display font-normal not-italic text-brand-500 block"
                style={{ fontSize: '.72em', fontStyle: 'italic', textTransform: 'none', letterSpacing: '-.01em' }}>
                {title.split(',').slice(1).join(',').trim()}
              </em>
            </>
          )}
        </h1>

        <p className="text-brand-700 leading-relaxed mb-8 max-w-lg" style={{ fontSize: 'clamp(15px, 1.6vw, 17px)' }}>
          {subtitle}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-9 max-w-lg border-l-2 border-brand-500 pl-4">
            {highlights.map(item => (
              <li key={item} className="flex items-start gap-2 text-[13.5px] text-brand-800 leading-snug">
                <span aria-hidden className="text-brand-500 font-bold flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        {showCta && (
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            {onOpenModal ? (
              <button onClick={onOpenModal} className="btn-primary !text-[12px] !py-3.5 !px-7">
                Get a Free Quote
              </button>
            ) : (
              <Link href="/services/" className="btn-primary !text-[12px] !py-3.5 !px-7">
                Get a Free Quote
              </Link>
            )}
            {/* The pair a visitor sees first: send the form, or call. The
                gate-type index is one scroll down and in the nav, so it does
                not need the second slot here. */}
            {siteConfig.phone ? (
              <a href={phoneHref} className="btn-secondary !text-[12px] !py-3.5 !px-7 inline-flex items-center gap-2.5">
                <Phone className="w-4 h-4 flex-shrink-0" /> {siteConfig.phone}
              </a>
            ) : (
              <Link href="/services/" className="btn-secondary !text-[12px] !py-3.5 !px-7">
                View Gate Types
              </Link>
            )}
          </div>
        )}

        {showTrust && (
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {['Free Site Surveys', 'Written Fixed Quotes', 'Fully Insured'].map(item => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                <span className="font-syne font-bold text-[11px] tracking-[.08em] uppercase text-brand-600">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image side */}
      <div className="relative overflow-hidden bg-brand-200 min-h-[280px] lg:min-h-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          style={{ filter: 'saturate(.85)' }}
          priority
          sizes="(max-width: 1024px) 100vw, 480px"
        />
        {/* Label */}
        <div className="absolute top-0 left-0 bg-brand-900 px-4 py-2 font-syne font-bold text-[9.5px] tracking-[.2em] uppercase text-brand-400">
          Featured Install
        </div>
        {/* Badge strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-brand-900 px-5 py-4 flex flex-wrap gap-4">
          {[['32', 'Boroughs Covered'], ['Free', 'Site Survey'], ['0%', 'Finance'], ['2-4', 'Day Installs']].map(([n, l]) => (
            <div key={l} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-brand-500" />
              <span className="text-brand-300 text-[11.5px] font-body">
                <strong className="text-brand-200">{n}</strong> {l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  showCta?: boolean;
  showTrust?: boolean;
  onOpenModal?: () => void;
}

export function Hero({ title, subtitle, image, showCta = true, showTrust = true, onOpenModal }: HeroProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_480px] border-b-[3px] border-brand-900 min-h-[60vh] lg:min-h-[88vh]">

      {/* Text side */}
      <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-14 lg:py-16 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-brand-900">
        {/* Oversized decorative number */}
        <div
          aria-hidden
          className="font-display font-black leading-none text-brand-200 mb-[-12px] select-none"
          style={{ fontSize: 'clamp(80px, 16vw, 180px)' }}
        >
          01
        </div>

        <h1
          className="font-syne font-extrabold uppercase tracking-tight text-brand-900 mb-5"
          style={{ fontSize: 'clamp(30px, 4.5vw, 60px)', lineHeight: 1.02, letterSpacing: '-.025em' }}
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

        <p className="text-brand-700 leading-relaxed mb-10 max-w-lg" style={{ fontSize: 'clamp(15px, 1.6vw, 17px)' }}>
          {subtitle}
        </p>

        {showCta && (
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            {onOpenModal ? (
              <button onClick={onOpenModal} className="btn-primary !text-[12px] !py-3.5 !px-7">
                Get Free Quotes
              </button>
            ) : (
              <Link href="/services/" className="btn-primary !text-[12px] !py-3.5 !px-7">
                Get Free Quotes
              </Link>
            )}
            <Link href="/services/" className="btn-secondary !text-[12px] !py-3.5 !px-7">
              View Gate Types
            </Link>
          </div>
        )}

        {showTrust && (
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {['500+ Installations', 'Free Site Surveys', '4.9★ Rated'].map(item => (
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(.85)' }}
          loading="eager"
        />
        {/* Label */}
        <div className="absolute top-0 left-0 bg-brand-900 px-4 py-2 font-syne font-bold text-[9.5px] tracking-[.2em] uppercase text-brand-400">
          Featured Install
        </div>
        {/* Badge strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-brand-900 px-5 py-4 flex flex-wrap gap-4">
          {[['500+', 'Installations'], ['4.9★', 'Rated'], ['32', 'Boroughs'], ['Free', 'Survey']].map(([n, l]) => (
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
